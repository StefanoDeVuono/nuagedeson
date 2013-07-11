class ClipsController < ApplicationController

  def index
    @clip = Clip.new
    @clips = Clip.top_five
    
    @clips.each {|clip| clip.current_user = current_user}
    respond_to do |f|
      f.html { render html: @clip }
      f.json { render json: @clips.to_json(methods:
        [:link_url, :comments, :favourites, :current_user_likes?, :image_url]
      )}
    end 
  end

  def create
    waveform = Clip.make_waveform(params[:clip][:link].tempfile)
    @clip = current_user.clips.build(params[:clip])
    name = @clip.link_file_name.sub('mp3','png')
    @image = File.new(name, 'w')
    IO.binwrite(@image, waveform)
    @clip.image = @image

    if @clip.save
      render json: @clip
    else
      render json: @clips.errors.full_messages
    end
  end

  def update
    @clip = Clip.find params[:id]
    @clip.update_attributes(params[:clip])
    respond_to do |f|
      f.html { render html: @clip }
      f.json { render json: @clips.to_json(methods: [:link_url, :comments, :favourites]) }
    end 
  end

end