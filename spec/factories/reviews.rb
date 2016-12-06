FactoryGirl.define do
  factory :review do
    rating "4"
    association :user, factory: :user
    association :post, factory: :post
  end
end
