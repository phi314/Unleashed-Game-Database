class ChangeSizeToFloat < ActiveRecord::Migration
  def change
  	change_column :games, :size, :float
  end
end
