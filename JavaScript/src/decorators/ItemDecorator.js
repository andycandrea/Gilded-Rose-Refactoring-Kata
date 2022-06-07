export default class ItemDecorator {
  constructor(item) {
    this.item = item;
  }

  get name() {
    return this.item.name;
  }

  set name(name) {
    this.item.name = name;
  }

  get daysRemaining() {
    return this.item.daysRemaining;
  }

  set daysRemaining(daysRemaining) {
    this.item.daysRemaining = daysRemaining;
  }

  get quality() {
    return this.item.quality;
  }

  set quality(quality) {
    this.item.quality = quality;
  }
}
