// Increases quality of an item over time
export default class Aged {
  static tick(item) {
    item.daysRemaining -= 1;

    item.quality += 1;
    if (item.daysRemaining <= 0) {
      item.quality += 1;
    }

    item.quality = Math.min(item.quality, this.#maximumQuality());
  }

  static #maximumQuality() {
    return 50;
  }
}
