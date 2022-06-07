# frozen_string_literal: true

# Handles inventory updates over time
class GildedRose
  attr_reader :name, :days_remaining, :quality

  def initialize(name:, days_remaining:, quality:)
    @name = name
    @days_remaining = days_remaining
    @quality = quality
  end

  # rubocop:disable Metrics/PerceivedComplexity,Metrics/MethodLength
  # rubocop:disable Metrics/CyclomaticComplexity,Metrics/AbcSize
  def tick
    if @name != 'Aged Brie' && @name != 'Backstage passes to a TAFKAL80ETC concert'
      if @quality > 0 && @name != 'Sulfuras, Hand of Ragnaros'
        @quality -= 1
      end
    elsif @quality < 50
      @quality += 1

      if @name == 'Backstage passes to a TAFKAL80ETC concert'
        if @days_remaining < 11 && @quality < 50
          @quality += 1
        end

        if @days_remaining < 6 && @quality < 50
          @quality += 1
        end
      end
    end

    if @name != 'Sulfuras, Hand of Ragnaros'
      @days_remaining -= 1
    end

    if @days_remaining < 0
      if @name != 'Aged Brie'
        if @name == 'Backstage passes to a TAFKAL80ETC concert'
          @quality = 0
        elsif @quality > 0 && @name != 'Sulfuras, Hand of Ragnaros'
          @quality -= 1
        end
      elsif @quality < 50
        @quality += 1
      end
    end
  end
  # rubocop:enable Metrics/PerceivedComplexity,Metrics/MethodLength
  # rubocop:enable Metrics/CyclomaticComplexity,Metrics/AbcSize
end
