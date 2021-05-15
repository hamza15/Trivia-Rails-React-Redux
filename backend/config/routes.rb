Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users, only: [:index, :create, :show]

  resources :categories, only: [:index] do 
    resources :questions, only: [:index]
  end
end
