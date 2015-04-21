require 'bundler'
Bundler.require()

# ActiveRecord::Base.establish_connection(
#   :adapter => 'postgresql',
#   :database => ''
# )

require './models/card'

get '/' do
  erb :index
end

#get all
get '/api/cards' do
  content_type :json
  cards = Cards.all
  cards.to_json
end

#get specific
get '/api/cards/:id' do
  content_type :json
  card = Card.find(params[:id].to_i)
  card.to_json
end

#post specific
post '/api/cards/:id' do
  content_type :json
  card = Card.create(params[:user].to_i)
  card.to_json
end
#update specific
put '/api/cards/:id' do
  content_type :json
  card = Card.find(params[:id].to_i).update(params[:user])
  card.to_json
end

#update specific
patch '/api/cards/:id' do
  content_type :json
  card = Card.find(params[:id].to_i).update(params[:user])
  card.to_json
end
#delete
delete '/api/cards/:id' do
  content_type :json
  card = Card.delete(params[:id].to_i)
  {message: 'Entry successfully deleted.'}.to_json
end
