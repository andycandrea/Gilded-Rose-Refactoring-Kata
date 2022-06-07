import AgingStrategies from './AgingStrategies';
import Item from './Item';

// Handles inventory updates over time
export default class GildedRose {
  constructor({ name, daysRemaining, quality }) {
    this.item = new Item({ name, daysRemaining, quality });
  }

  get name() {
    return this.item.name;
  }

  get daysRemaining() {
    return this.item.daysRemaining;
  }

  get quality() {
    return this.item.quality;
  }

  tick() {
    const strategyKlass = AgingStrategies.strategyFor(this.item.name);
    this.item.tick(strategyKlass);
  }
}
