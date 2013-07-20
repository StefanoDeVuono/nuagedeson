Nuagedeson::Application.routes.draw do
  devise_for :users,
              controllers: {
                omniauth_callbacks: "users/omniauth_callbacks"
              } do
    resources :clips do 
      resources :comments, only: :create
    end
    resources :users, only: :index
    resources :likes, only: :create
    delete '/likes' => 'likes#destroy'
  end

  root to: "root#index"
  
end