// Represents a single unit of inventory
export default class Item {
  constructor({ name, daysRemaining, quality }) {
    this.name = name;
    this.daysRemaining = daysRemaining;
    this.quality = quality;
  }

  tick(strategy) {
    strategy.tick(this);
  }
}
