class AddAttachmentLinkToClips < ActiveRecord::Migration
  def self.up
    change_table :clips do |t|
      t.attachment :link
    end
  end

  def self.down
    drop_attached_file :clips, :link
  end
end
