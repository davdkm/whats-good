FactoryGirl.define do
  factory :user, aliases: [:author, :commenter] do
    password "password"
    username "testUser"
    email { "#{username}@example.com".downcase }
  end
end
