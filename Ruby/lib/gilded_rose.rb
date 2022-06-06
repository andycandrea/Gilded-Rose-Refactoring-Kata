# frozen_string_literal: true

require 'items/aged_item'
require 'items/legendary_item'
require 'items/normal_item'
require 'items/time_sensitive_item'

# Handles inventory updates over time
class GildedRose
  attr_reader :name, :days_remaining, :quality
  attr_writer :days_remaining, :quality

  def self.klass_for(item_name)
    {
      'Aged Brie' => Items::AgedItem,
      'Sulfuras, Hand of Ragnaros' => Items::LegendaryItem,
      'Backstage passes to a TAFKAL80ETC concert' => Items::TimeSensitiveItem
    }[item_name] || Items::NormalItem
  end

  def initialize(name:, days_remaining:, quality:)
    @name = name
    @days_remaining = days_remaining
    @quality = quality
  end

  def tick
    klass = self.class.klass_for(@name)
    klass.new(self).tick
  end
end
