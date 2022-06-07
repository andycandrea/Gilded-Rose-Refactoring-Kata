import Aged from './agingStrategies/Aged';
import Normal from './agingStrategies/Normal';
import Null from './agingStrategies/Null';
import TimeSensitive from './agingStrategies/TimeSensitive';

export default class AgingStrategies {
  static strategyFor(itemName) {
    return {
      'Aged Brie': Aged,
      'Sulfuras, Hand of Ragnaros': Null,
      'Backstage passes to a TAFKAL80ETC concert': TimeSensitive
    }[itemName] || Normal;
  }
}
