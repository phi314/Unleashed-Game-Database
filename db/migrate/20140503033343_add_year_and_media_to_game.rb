class AddYearAndMediaToGame < ActiveRecord::Migration
  def change
    add_column :games, :year, :integer
    add_column :games, :media, :string
  end
end
