import ItemDecorator from './ItemDecorator';

// Decreases an item's quality to 0 over time
export default class Normal extends ItemDecorator {
  static MINIMUM_QUALITY = 0;

  tick() {
    this.daysRemaining -= 1;

    this.quality -= this.#calculateDecrease();
    this.quality = Math.max(this.quality, this.constructor.MINIMUM_QUALITY);
  }

  #calculateDecrease() {
    let decrease = 1;
    if (this.daysRemaining <= 0) {
      decrease += 1;
    }

    return decrease;
  }
}
