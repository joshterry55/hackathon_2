Rails.application.routes.draw do
  devise_for :users

  root 'home#index'

  namespace :api do
    get 'watched_movies', to: 'watched_movies#index'
    get 'queue_movies', to: 'queue_movies#index'
  end



# REACT ROUTER - NO ROUTES BELOW THIS!!
  get '*unmatched_route', to: 'home#index'
end
