# frozen_string_literal: true

require 'items/item'

module Items
  # Represents items whose quality increases over time
  class AgedItem < Item
    def tick
      @gilded_rose.days_remaining -= 1

      return if @gilded_rose.quality >= 50

      @gilded_rose.quality += 1
      @gilded_rose.quality += 1 if @gilded_rose.days_remaining <= 0

      ensure_bounded_quality
    end
  end
end
