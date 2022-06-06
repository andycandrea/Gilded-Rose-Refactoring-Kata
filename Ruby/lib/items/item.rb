# frozen_string_literal: true

module Items
  # Represents a single unit of inventory
  class Item
    def initialize(gilded_rose)
      @gilded_rose = gilded_rose
    end

    def tick
      raise('Must be implemented by subclass')
    end

    private def ensure_bounded_quality
      @gilded_rose.quality = 0 if @gilded_rose.quality < 0
      @gilded_rose.quality = 50 if @gilded_rose.quality > 50
    end
  end
end
