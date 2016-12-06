FactoryGirl.define do
  factory :review do
    rating "4"
    association :user, factory: :user
  end
end
