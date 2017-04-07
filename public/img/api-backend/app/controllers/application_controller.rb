class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception


	def index

		yelp_url = 'https://api.yelp.com/v3/businesses/search'
		
		
		
		term = params[:term]

		location = params[:location][0..4]
		final_url = yelp_url + "?term=" + term + "&location=" + location
		
		@api_data = JSON.parse(RestClient.get(final_url, headers={'Authorization': "Bearer nEiwOdSrYOjDZMs4GCyu84kffABwGtciSCqFpd7sbIHY69fK1Hdt_FZa1--8Up6wWALWzR_Z3hLSBJS0uWyzZT6ThWyefqU4EEWHY_mqbGpd7nsEPkeFqX-tXqLaWHYx"}).body)	
		@api_data_json = @api_data.to_json
		render 'api/data'
		
	end
end
