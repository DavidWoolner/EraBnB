json.extract! listing, :id, 
                        :title,
                        :description,
                        :era_theme,
                        :address,
                        :longitude,
                        :latitude,
                        :num_bedrms,
                        :num_baths,
                        :price,
                        :clean_fee,
                        :service_fee,
                        :host_id,
                        :photos

json.photoUrl listing.photos.map { |photo| url_for(photo) }
json.bookings listing.bookings


json.reviews listing.reviews, :body, :rating, :id, :created_at, :author_id 
json.review_authors listing.review_authors, :first_name, :last_name, :email, :id

