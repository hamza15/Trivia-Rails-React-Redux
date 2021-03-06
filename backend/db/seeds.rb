# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Category.destroy_all
Question.destroy_all

#! User Database
main_user = User.create(username: "hamzanaqi")

#! Category Database
animals = Category.create(name: "Animals")
celebrities = Category.create(name: "Celebrities")
sports = Category.create(name: "Sports")

#! Question Database
# Instantiate Animals Trivia from JSON Data
animals.questions.create(Api.animals)
celebrities.questions.create(Api.celebrities)
sports.questions.create(Api.sports)

puts "Seeding Database Success!"