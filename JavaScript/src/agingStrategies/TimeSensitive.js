// Increases an item's quality increasingly rapidly until quality becomes zero
export default class TimeSensitive {
  static tick(item) {
    item.daysRemaining -= 1;

    if (item.daysRemaining < 0) {
      item.quality = 0;
      return;
    }

    item.quality += 1;
    if (item.daysRemaining < 10) {
      item.quality += 1;
    }
    if (item.daysRemaining < 5) {
      item.quality += 1;
    }

    item.quality = Math.min(item.quality, this.#maximumQuality());
  }

  static #maximumQuality() {
    return 50;
  }
}
