class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :username

      t.integer "animals_score", default: 0
      t.integer "celebrities_score", default: 0
      t.integer "sports_score", default: 0

      t.timestamps
    end
  end
end
