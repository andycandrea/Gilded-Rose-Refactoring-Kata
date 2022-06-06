import AgedItem from './items/AgedItem';
import NormalItem from './items/NormalItem';
import LegendaryItem from './items/LegendaryItem';
import TimeSensitiveItem from './items/TimeSensitiveItem';

// Handles inventory updates over time
export default class GildedRose {
  static klassFor(itemName) {
    return {
      'Aged Brie': AgedItem,
      'Sulfuras, Hand of Ragnaros': LegendaryItem,
      'Backstage passes to a TAFKAL80ETC concert': TimeSensitiveItem
    }[itemName] || NormalItem;
  }

  constructor({ name, daysRemaining, quality }) {
    this.name = name;
    this.daysRemaining = daysRemaining;
    this.quality = quality;
  }

  tick() {
    const Klass = this.constructor.klassFor(this.name);
    new Klass(this).tick();
  }
}
