import Item from './Item';

// Represents items whose quality gradually decreases to 0 over time
export default class NormalItem extends Item {
  tick() {
    this.gildedRose.daysRemaining -= 1;

    if (this.gildedRose.quality <= 0) {
      return;
    }

    this.gildedRose.quality -= 1;
    if (this.gildedRose.daysRemaining <= 0) {
      this.gildedRose.quality -= 1;
    }

    this.ensureBoundedQuality();
  }
}
