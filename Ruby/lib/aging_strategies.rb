# frozen_string_literal: true

require 'aging_strategies/aged'
require 'aging_strategies/normal'
require 'aging_strategies/null'
require 'aging_strategies/time_sensitive'

module AgingStrategies
  module_function def strategy_for(item_name)
    {
      'Aged Brie' => Aged,
      'Sulfuras, Hand of Ragnaros' => Null,
      'Backstage passes to a TAFKAL80ETC concert' => TimeSensitive
    }[item_name] || Normal
  end
end
