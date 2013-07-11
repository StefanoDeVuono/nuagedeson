class ChangeCommentTimeToPercent < ActiveRecord::Migration
  def up
    change_column :comments, :time, :decimal
  end

  def down
    change_column :comments, :time, :integer
  end
end
