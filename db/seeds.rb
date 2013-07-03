# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


users = User.create([
  {name: 'frank', password: 'password'},
  {name: 'pete', password: 'password'},
  {name: 'wigz', password: 'password'},
  {name: 'neo', password: 'password'}
  ])

