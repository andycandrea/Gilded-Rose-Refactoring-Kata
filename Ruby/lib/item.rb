# frozen_string_literal: true

# Represents a single unit of inventory
class Item
  attr_reader :name, :days_remaining, :quality
  attr_writer :days_remaining, :quality

  def initialize(name:, days_remaining:, quality:)
    @name = name
    @days_remaining = days_remaining
    @quality = quality
  end
end
