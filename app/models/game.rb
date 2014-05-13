class Game < ActiveRecord::Base
	validates :title, :genre, presence: true
	validates :title, uniqueness: { scope: :genre }

	before_save :count_disc, :check_available

	after_save :todo

	def count_disc
		if self.total_disc.blank? && !self.size.blank?
			size = self.size/4.5
			self.total_disc = size.ceil
		end
	end

	def check_available
		if self.available.blank?
			self.available = 0
		else
			self.available = 1
		end
	end

	def todo
		if(self.available == false)
			return true;
		else
			return false;
		end
	end
end
