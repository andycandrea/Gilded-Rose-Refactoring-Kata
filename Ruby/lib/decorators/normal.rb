# frozen_string_literal: true

require 'delegate'

module Decorators
  # Decreases an item's quality to 0 over time
  class Normal < SimpleDelegator
    MINIMUM_QUALITY = 0

    alias item __getobj__

    def tick
      item.days_remaining -= 1

      item.quality -= calculate_decrease
      item.quality = [quality, MINIMUM_QUALITY].max
    end

    private def calculate_decrease
      decrease = 1
      decrease += 1 if days_remaining <= 0
      decrease
    end
  end
end
