Rails.application.routes.draw do
  devise_for :users

  root 'home#index'

  namespace :api do
    resources :watched_movies
    resources :queue_movies
  end



# REACT ROUTER - NO ROUTES BELOW THIS!!
  get '*unmatched_route', to: 'home#index'
end
