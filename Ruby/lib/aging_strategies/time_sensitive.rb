# frozen_string_literal: true

module AgingStrategies
  # Increases an item's quality increasingly rapidly until quality becomes zero
  class TimeSensitive
    def self.tick(item)
      item.days_remaining -= 1

      return item.quality = 0 if item.days_remaining < 0

      item.quality += 1
      item.quality += 1 if item.days_remaining < 10
      item.quality += 1 if item.days_remaining < 5

      item.quality = [item.quality, maximum_quality].min
    end

    private_class_method def self.maximum_quality
      50
    end
  end
end
