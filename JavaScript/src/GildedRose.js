// Handles inventory updates over time
export default class GildedRose {
  constructor({ name, daysRemaining, quality }) {
    this.name = name;
    this.daysRemaining = daysRemaining;
    this.quality = quality;
  }

  tick() {
    switch (this.name) {
      case 'Sulfuras, Hand of Ragnaros':
        this.#tickSulfuras();
        break;
      case 'Aged Brie':
        this.#tickBrie();
        break;
      case 'Backstage passes to a TAFKAL80ETC concert':
        this.#tickBackstagePasses();
        break;
      default:
        this.#tickNormal();
    }
  }

  #tickSulfuras() {
  }

  #tickBrie() {
    this.daysRemaining -= 1;

    if (this.quality >= 50) {
      return;
    }

    this.quality += 1;
    if (this.daysRemaining <= 0) {
      this.quality += 1;
    }

    this.#ensureBoundedQuality();
  }

  #tickBackstagePasses() {
    this.daysRemaining -= 1;

    if (this.daysRemaining < 0) {
      this.quality = 0;
      return;
    }

    this.quality += 1;
    if (this.daysRemaining < 10) {
      this.quality += 1;
    }
    if (this.daysRemaining < 5) {
      this.quality += 1;
    }

    this.#ensureBoundedQuality();
  }

  #tickNormal() {
    this.daysRemaining -= 1;

    if (this.quality <= 0) {
      return;
    }

    this.quality -= 1;
    if (this.daysRemaining <= 0) {
      this.quality -= 1;
    }
    this.#ensureBoundedQuality();
  }

  #ensureBoundedQuality() {
    if (this.quality < 0) {
      this.quality = 0;
    }
    if (this.quality > 50) {
      this.quality = 50;
    }
  }
}
