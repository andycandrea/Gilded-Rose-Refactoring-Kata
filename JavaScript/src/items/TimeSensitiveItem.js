import Item from './Item';

/* Represents items whose quality goes up increasingly rapidly until they are
 * deemed worthless */
export default class TimeSensitiveItem extends Item {
  tick() {
    this.gildedRose.daysRemaining -= 1;

    if (this.gildedRose.daysRemaining < 0) {
      this.gildedRose.quality = 0;
      return;
    }

    this.gildedRose.quality += 1;
    if (this.gildedRose.daysRemaining < 10) {
      this.gildedRose.quality += 1;
    }
    if (this.gildedRose.daysRemaining < 5) {
      this.gildedRose.quality += 1;
    }

    this.ensureBoundedQuality();
  }
}
