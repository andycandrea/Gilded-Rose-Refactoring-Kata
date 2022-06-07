# frozen_string_literal: true

module AgingStrategies
  # A null object providing a dummy implementation for an aging strategy
  class Null
    def self.tick(_item)
    end
  end
end
