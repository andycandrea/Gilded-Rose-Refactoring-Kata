import Item from './Item';
import Aged from './decorators/Aged';
import Normal from './decorators/Normal';
import Null from './decorators/Null';
import TimeSensitive from './decorators/TimeSensitive';

// Handles inventory updates over time
export default class GildedRose {
  static build({ name, daysRemaining, quality }) {
    const item = new Item({ name, daysRemaining, quality });
    const DecoratorKlass = this.#decoratorFor(name);
    return new DecoratorKlass(item);
  }

  static #decoratorFor(itemName) {
    return {
      'Aged Brie': Aged,
      'Sulfuras, Hand of Ragnaros': Null,
      'Backstage passes to a TAFKAL80ETC concert': TimeSensitive
    }[itemName] || Normal;
  }
}
