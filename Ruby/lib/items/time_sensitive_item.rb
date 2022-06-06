# frozen_string_literal: true

require 'items/item'

module Items
  # Represents items whose quality goes up increasingly rapidly until they are
  # deemed worthless
  class TimeSensitiveItem < Item
    def tick
      @gilded_rose.days_remaining -= 1

      return @gilded_rose.quality = 0 if @gilded_rose.days_remaining < 0

      @gilded_rose.quality += 1
      @gilded_rose.quality += 1 if @gilded_rose.days_remaining < 10
      @gilded_rose.quality += 1 if @gilded_rose.days_remaining < 5

      ensure_bounded_quality
    end
  end
end
