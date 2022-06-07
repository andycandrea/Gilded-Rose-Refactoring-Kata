import ItemDecorator from './ItemDecorator';

// Increases an item's quality increasingly rapidly until quality becomes zero
export default class TimeSensitive extends ItemDecorator {
  static MAXIMUM_QUALITY = 50;

  tick() {
    this.daysRemaining -= 1;

    if (this.daysRemaining < 0) {
      this.quality = 0;
      return;
    }

    this.quality += this.#calculateIncrease();
    this.quality = Math.min(this.quality, this.constructor.MAXIMUM_QUALITY);
  }

  #calculateIncrease() {
    let increase = 1;

    if (this.daysRemaining < 10) {
      increase += 1;
    }
    if (this.daysRemaining < 5) {
      increase += 1;
    }

    return increase;
  }
}
