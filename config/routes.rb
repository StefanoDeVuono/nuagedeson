Nuagedeson::Application.routes.draw do
  devise_for :users do
    resources :clips
  end

  root to: "root#index"
  
end