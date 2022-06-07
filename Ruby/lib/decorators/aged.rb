# frozen_string_literal: true

require 'delegate'

module Decorators
  # Increases quality of an item over time
  class Aged < SimpleDelegator
    MAXIMUM_QUALITY = 50

    alias item __getobj__

    def tick
      item.days_remaining -= 1

      item.quality += calculate_increase
      item.quality = [quality, MAXIMUM_QUALITY].min
    end

    private def calculate_increase
      increase = 1
      increase += 1 if days_remaining <= 0

      increase
    end
  end
end
