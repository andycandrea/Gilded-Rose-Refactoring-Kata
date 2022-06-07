# frozen_string_literal: true

module AgingStrategies
  # Decreases an item's quality to 0 over time
  class Normal
    def self.tick(item)
      item.days_remaining -= 1

      item.quality -= 1
      item.quality -= 1 if item.days_remaining <= 0
      item.quality = [item.quality, minimum_quality].max
    end

    private_class_method def self.minimum_quality
      0
    end
  end
end
