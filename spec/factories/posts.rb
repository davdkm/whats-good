FactoryGirl.define do
  factory :post do
    title "MyString"
    content "MyText"
    association :author, factory: :user
    association :category, factory: :category
  end
end
