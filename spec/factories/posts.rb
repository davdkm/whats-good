FactoryGirl.define do
  factory :post do
    title "MyString"
    content "MyText"
    association :author, factory: :user, username: "writely"
  end
end
