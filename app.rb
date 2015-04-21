require 'bundler'
Bundler.require()

ActiveRecord::Base.establish_connection(
  :adapter => 'postgresql',
  :database => 'card_database'
)

require './models/card'

#Helper
def card_parameters
  request_body = JSON.parse(request.body.read.to_s)
  { title: request_body["title"], message: request_body["message"]}
end

get '/' do
  erb :index
end

get '/variables' do
  erb :variables
end

#get all
get '/api/cards' do
  content_type :json
  cards = Card.all
  cards.to_json
end

#get specific
get '/api/cards/:id' do
  content_type :json
  card = Card.find(params[:id].to_i)
  card.to_json
end

#post specific
post '/api/cards' do
  card = Card.create(card_parameters)
  content_type :json
  card.to_json
end
#update specific
put '/api/cards/:id' do
  content_type :json
  card = Card.find(params[:id].to_i).update(card_parameters)
  card.to_json
end

#update specific
patch '/api/cards/:id' do
  content_type :json
  card = Card.find(params[:id].to_i).update(card_parameters)
  card.to_json
end
#delete
delete '/api/cards/:id' do
  content_type :json
  card = Card.delete(params[:id].to_i)
  {message: 'Entry successfully deleted.'}.to_json
end
