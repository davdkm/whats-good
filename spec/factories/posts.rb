FactoryGirl.define do
  factory :post do
    title "MyString"
    content "MyText"
    association :author, factory: :user, username: "writely"
    association :category, factory: :category
  end
end
