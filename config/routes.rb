Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  
    namespace :api do 
      resources :users, only: [:index, :show, :update] do
        resources :friends
      end
    end
end
