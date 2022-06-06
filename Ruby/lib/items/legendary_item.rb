# frozen_string_literal: true

require 'items/item'

module Items
  # Represents items with unbounded maximum quality that does not deteriorate
  # over time.
  class LegendaryItem < Item
    def tick
    end
  end
end
