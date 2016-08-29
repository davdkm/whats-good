FactoryGirl.define do
  factory :user, aliases: [:author, :commenter] do
    password "password"
    username "testUser"
    sequence(:email) { |n| "#{username}#{n}@example.com" }
  end
end
