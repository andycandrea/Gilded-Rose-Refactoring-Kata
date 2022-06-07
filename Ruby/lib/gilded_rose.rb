# frozen_string_literal: true

require 'item'
require 'decorators/aged'
require 'decorators/normal'
require 'decorators/null'
require 'decorators/time_sensitive'

# Factory for items decorated with aging behavior
class GildedRose
  def self.build(name:, days_remaining:, quality:)
    item = Item.new(
      name: name,
      days_remaining: days_remaining,
      quality: quality
    )
    decorator_klass = decorator_for(name)
    decorator_klass.new(item)
  end

  private_class_method def self.decorator_for(item_name)
    {
      'Aged Brie' => Decorators::Aged,
      'Sulfuras, Hand of Ragnaros' => Decorators::Null,
      'Backstage passes to a TAFKAL80ETC concert' => Decorators::TimeSensitive
    }[item_name] || Decorators::Normal
  end
end
