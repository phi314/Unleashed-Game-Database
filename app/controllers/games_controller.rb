class GamesController < ApplicationController

	def index
		@games = Game.all
	end

	def new
		@game = Game.new
	end

	def create
		@game = Game.new(game_params)

		if @game.save
		   	uploaded_io = params[:game][:image]
		   	if(!uploaded_io.nil?)
				name = "#{@game.id}.jpg"
				File.open(Rails.root.join('public', 'uploads', name), 'wb') do |file|
					file.write(uploaded_io.read)
				end
			end

			if (@game.todo == false)
				redirect_to games_path
			else
				redirect_to todo_path
			end
		else
			render 'new'
		end
	end

	def show
		@game = Game.find(params[:id])
	end

	def edit
		@game = Game.find(params[:id])
	end

	def update
		@game = Game.find(params[:id])

		if @game.update(game_params)
			uploaded_io = params[:game][:image]
			if(!uploaded_io.nil?)
				name = "#{params[:id]}.jpg"
				File.open(Rails.root.join('public', 'uploads', name), 'wb') do |file|
					file.write(uploaded_io.read)
				end
			end
			redirect_to @game
		else
			render 'new'
		end
	end

	def destroy
		@game = Game.find(params[:id])

		filename = "#{Rails.root}/public/uploads/#{params[:id]}.jpg"

		if @game.destroy
			if(File.exist?(filename))
				File.delete(filename);
			end
		else
			render 'index'
		end

		redirect_to games_path
	end

	private
		def game_params
			params.require(:game).permit(:title, :genre, :publisher, :size, :total_disc, :year, :media, :available)
		end

end
