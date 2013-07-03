Nuagedeson::Application.routes.draw do
  devise_for :users do
    resources :sounds
  end

  root to: "root#index"
  
end