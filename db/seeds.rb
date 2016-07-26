# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

5.times do
  User.create(
    username: Faker::Internet.user_name,
    email: Faker::Internet.email,
    password: Faker::Internet.password(8)
    )
end

 User.all.each do |user|
  post_submission_date = Faker::Time.between(DateTime.now, DateTime.now + 7)
  Post.create(
  title: Faker::Company.catch_phrase,
  content: Faker::Hipster.paragraph(2, false, 2),
  author: user
  )
end

User.create(username: 'admin', email: 'admin@example.com', password: 'Pa$$w0rd')
