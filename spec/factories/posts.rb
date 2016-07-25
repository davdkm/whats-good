FactoryGirl.define do
  factory :post do
    title "MyString"
    content "MyText"
    post_date "2016-07-24 13:38:12"
    association :author, factory: :user, username: "writely"
  end
end
