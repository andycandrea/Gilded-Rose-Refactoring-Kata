import ItemDecorator from './ItemDecorator';

// Increases quality of an item over time
export default class Aged extends ItemDecorator {
  static MAXIMUM_QUALITY = 50;

  tick() {
    this.daysRemaining -= 1;

    this.quality += this.#calculateIncrease();
    this.quality = Math.min(
      this.quality,
      this.constructor.MAXIMUM_QUALITY
    );
  }

  #calculateIncrease() {
    let increase = 1;
    if (this.daysRemaining <= 0) {
      increase += 1;
    }

    return increase;
  }
}
