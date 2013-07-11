Nuagedeson::Application.routes.draw do
  devise_for :users do
    resources :clips do 
      resources :comments, only: :create
    end
    resources :likes, only: :create
    delete '/likes' => 'likes#destroy'
  end

  root to: "root#index"
  
end