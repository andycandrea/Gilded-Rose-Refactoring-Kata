// Handles inventory updates over time
export default class GildedRose {
  constructor({ name, daysRemaining, quality }) {
    this.name = name;
    this.daysRemaining = daysRemaining;
    this.quality = quality;
  }

  tick() {
    if (this.name !== 'Aged Brie' && this.name !== 'Backstage passes to a TAFKAL80ETC concert') {
      if (this.quality > 0 && this.name !== 'Sulfuras, Hand of Ragnaros') {
        this.quality -= 1;
      }
    } else if (this.quality < 50) {
      this.quality += 1;

      if (this.name === 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.daysRemaining < 11 && this.quality < 50) {
          this.quality += 1;
        }

        if (this.daysRemaining < 6 && this.quality < 50) {
          this.quality += 1;
        }
      }
    }

    if (this.name !== 'Sulfuras, Hand of Ragnaros') {
      this.daysRemaining -= 1;
    }

    if (this.daysRemaining < 0) {
      if (this.name !== 'Aged Brie') {
        if (this.name === 'Backstage passes to a TAFKAL80ETC concert') {
          this.quality = 0;
        } else if (this.quality > 0 && this.name !== 'Sulfuras, Hand of Ragnaros') {
          this.quality -= 1;
        }
      } else if (this.quality < 50) {
        this.quality += 1;
      }
    }
  }
}
