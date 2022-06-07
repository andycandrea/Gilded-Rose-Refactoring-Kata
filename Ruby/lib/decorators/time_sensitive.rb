# frozen_string_literal: true

require 'delegate'

module Decorators
  # Increases an item's quality increasingly rapidly until quality becomes zero
  class TimeSensitive < SimpleDelegator
    MAXIMUM_QUALITY = 50

    alias item __getobj__

    def tick
      item.days_remaining -= 1

      return item.quality = 0 if days_remaining < 0

      item.quality += calculate_increase
      item.quality = [quality, MAXIMUM_QUALITY].min
    end

    private def calculate_increase
      increase = 1
      increase += 1 if days_remaining < 10
      increase += 1 if days_remaining < 5

      increase
    end
  end
end
