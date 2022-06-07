// Decreases an item's quality to 0 over time
export default class Normal {
  static tick(item) {
    item.daysRemaining -= 1;

    item.quality -= 1;
    if (item.daysRemaining <= 0) {
      item.quality -= 1;
    }

    item.quality = Math.max(item.quality, this.#minimumQuality());
  }

  static #minimumQuality() {
    return 0;
  }
}
