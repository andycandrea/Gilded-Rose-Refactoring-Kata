# frozen_string_literal: true

module AgingStrategies
  # Increases quality of an item over time
  class Aged
    def self.tick(item)
      item.days_remaining -= 1

      item.quality += 1
      item.quality += 1 if item.days_remaining <= 0

      item.quality = [item.quality, maximum_quality].min
    end

    private_class_method def self.maximum_quality
      50
    end
  end
end
