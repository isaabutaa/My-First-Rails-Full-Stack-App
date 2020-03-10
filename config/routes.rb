Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'users/index' => 'users#index'
      post 'users/create' => 'users#create'
      get 'users/show/:id' => 'users#show'
      get 'users/edit/:id' => 'users#edit'
      put 'users/update/:id' => 'users#update'
      delete 'users/destroy/:id' => 'users#destroy'
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
