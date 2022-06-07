# frozen_string_literal: true

require 'aging_strategies'
require 'item'

# Handles inventory updates over time
class GildedRose
  def initialize(name:, days_remaining:, quality:)
    @item = Item.new(
      name: name,
      days_remaining: days_remaining,
      quality: quality
    )
  end

  def tick
    strategy_klass = AgingStrategies.strategy_for(@item.name)
    @item.tick(strategy_klass)
  end

  def name
    @item.name
  end

  def days_remaining
    @item.days_remaining
  end

  def quality
    @item.quality
  end
end
