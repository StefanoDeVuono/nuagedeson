Nuagedeson::Application.routes.draw do
  devise_for :users,
              controllers: {
                omniauth_callbacks: "users/omniauth_callbacks"
              }
  devise_scope :users do
    resources :users, only: :index
    resources :clips, only: [:create, :index, :update] do
      resources :comments, only: :create
    end
    resources :test, only: :create
    resources :likes, only: :create
    delete '/likes' => 'likes#destroy'
  end

  root to: "root#index"
  
end