Rails.application.routes.draw do
  devise_for :users

  root 'home#index'



# REACT ROUTER - NO ROUTES BELOW THIS!!
  get '*unmatched_route', to: 'home#index'
end
