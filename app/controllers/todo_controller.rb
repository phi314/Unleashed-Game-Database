class TodoController < ApplicationController
	def index
		@games = Game.where('available' => false).order(created_at: :desc)
	end

	def available
		@game = Game.find(params[:id])

		@game.available = true
		@game.save

		redirect_to todo_path
	end
end
