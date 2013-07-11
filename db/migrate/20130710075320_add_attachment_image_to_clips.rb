class AddAttachmentImageToClips < ActiveRecord::Migration
  def self.up
    change_table :clips do |t|
      t.attachment :image
    end
  end

  def self.down
    drop_attached_file :clips, :image
  end
end
