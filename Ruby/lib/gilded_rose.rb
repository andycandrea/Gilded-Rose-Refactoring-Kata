# frozen_string_literal: true

# Handles inventory updates over time
class GildedRose
  attr_reader :name, :days_remaining, :quality

  def initialize(name:, days_remaining:, quality:)
    @name = name
    @days_remaining = days_remaining
    @quality = quality
  end

  def tick
    case @name
      when 'Sulfuras, Hand of Ragnaros'
        tick_sulfuras
      when 'Aged Brie'
        tick_brie
      when 'Backstage passes to a TAFKAL80ETC concert'
        tick_backstage_passes
      else
        tick_normal
    end
  end

  private def tick_sulfuras
  end

  private def tick_brie
    @days_remaining -= 1

    return if @quality >= 50

    @quality += 1
    @quality += 1 if @days_remaining <= 0

    ensure_bounded_quality
  end

  private def tick_backstage_passes
    @days_remaining -= 1

    return @quality = 0 if @days_remaining < 0

    @quality += 1
    @quality += 1 if @days_remaining < 10
    @quality += 1 if @days_remaining < 5

    ensure_bounded_quality
  end

  private def tick_normal
    @days_remaining -= 1

    return if @quality <= 0

    @quality -= 1
    @quality -= 1 if @days_remaining <= 0
    ensure_bounded_quality
  end

  private def ensure_bounded_quality
    @quality = 0 if @quality < 0
    @quality = 50 if @quality > 50
  end
end
