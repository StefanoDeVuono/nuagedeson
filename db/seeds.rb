# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


users = User.create([
  {email: "io@stefanodevuono.com", password: "password", name: "stefano"},
  {email: "fon@jackfresno.ca", password: "password", name: "fon"},
  {email: "fon.jackfresno@gmail.com", password: "password", name: "jackfresno"},
  ])


clips = Clip.create([
  {owner_id: 1, link_file_name: "10_New_Love_Reprise.mp3"},
  {owner_id: 1, link_file_name: "01_The_Opening.mp3"},
  {owner_id: 1, link_file_name: "2-11_The_Plan.mp3"}
  ])



