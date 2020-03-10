class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name, null: false
      t.string :title, null: false, unless: :position
      t.string :position, null: false, unless: :title
      t.text :direct_reports, null: false, array: true
      t.string :image, default: 'https://images.unsplash.com/photo-1442458370899-ae20e367c5d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
      t.timestamps
    end
  end
end
