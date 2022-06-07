import ItemDecorator from './ItemDecorator';

// A null object providing a dummy implementation for an aging decorator
export default class Null extends ItemDecorator {
  tick() {
  }
}
