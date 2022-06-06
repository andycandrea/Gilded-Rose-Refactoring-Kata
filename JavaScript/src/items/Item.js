// Represents a single unit of inventory
export default class Item {
  constructor(gildedRose) {
    this.gildedRose = gildedRose;
  }

  tick() {
    throw new Error('Must be implemented by subclass');
  }

  ensureBoundedQuality() {
    if (this.gildedRose.quality < 0) {
      this.gildedRose.quality = 0;
    }

    if (this.gildedRose.quality > 50) {
      this.gildedRose.quality = 50;
    }
  }
}
