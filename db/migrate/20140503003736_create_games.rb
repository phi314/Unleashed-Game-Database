class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.string :title
      t.string :genre
      t.string :publisher
      t.decimal :size
      t.integer :total_disc

      t.timestamps
    end
  end
end
