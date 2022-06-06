import Item from './Item';

// Represents items whose quality increases over time
export default class AgedItem extends Item {
  tick() {
    this.gildedRose.daysRemaining -= 1;

    if (this.gildedRose.quality >= 50) {
      return;
    }

    this.gildedRose.quality += 1;
    if (this.gildedRose.daysRemaining <= 0) {
      this.gildedRose.quality += 1;
    }

    this.ensureBoundedQuality();
  }
}
