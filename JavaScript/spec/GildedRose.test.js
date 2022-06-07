import defaultExport from '../src/GildedRose';

const DescribedClass = defaultExport;

describe('GildedRose', () => {
  describe('with Normal Item', () => {
    describe('when earlier than the sell date', () => {
      it('decrements the days remaining', () => {
        const subject = DescribedClass.build({
          name: 'Normal Item',
          daysRemaining: 5,
          quality: 10
        });

        subject.tick();
        expect(subject.daysRemaining).toBe(4);
      });
      it('decrements the quality', () => {
        const subject = DescribedClass.build({
          name: 'Normal Item',
          daysRemaining: 5,
          quality: 10
        });

        subject.tick();
        expect(subject.quality).toBe(9);
      });
    });

    describe('when on the sell date', () => {
      it('decrements the days remaining', () => {
        const subject = DescribedClass.build({
          name: 'Normal Item',
          daysRemaining: 0,
          quality: 10
        });

        subject.tick();
        expect(subject.daysRemaining).toBe(-1);
      });
      it('decreases the quality by 2', () => {
        const subject = DescribedClass.build({
          name: 'Normal Item',
          daysRemaining: 0,
          quality: 10
        });

        subject.tick();
        expect(subject.quality).toBe(8);
      });
    });

    describe('when later than the sell date', () => {
      it('decrements the days remaining', () => {
        const subject = DescribedClass.build({
          name: 'Normal Item',
          daysRemaining: -10,
          quality: 10
        });

        subject.tick();
        expect(subject.daysRemaining).toBe(-11);
      });
      it('decreases the quality by 2', () => {
        const subject = DescribedClass.build({
          name: 'Normal Item',
          daysRemaining: -10,
          quality: 10
        });

        subject.tick();
        expect(subject.quality).toBe(8);
      });
    });

    describe('when quality is 0', () => {
      it('decrements the days remaining', () => {
        const subject = DescribedClass.build({
          name: 'Normal Item',
          daysRemaining: 5,
          quality: 0
        });

        subject.tick();
        expect(subject.daysRemaining).toBe(4);
      });
      it('does not update the quality', () => {
        const subject = DescribedClass.build({
          name: 'Normal Item',
          daysRemaining: 5,
          quality: 0
        });

        subject.tick();
        expect(subject.quality).toBe(0);
      });
    });
  });

  describe('with Aged Brie', () => {
    describe('when earlier than the sell date', () => {
      it('decrements the days remaining', () => {
        const subject = DescribedClass.build({
          name: 'Aged Brie',
          daysRemaining: 5,
          quality: 10
        });

        subject.tick();
        expect(subject.daysRemaining).toBe(4);
      });
      it('increments the quality', () => {
        const subject = DescribedClass.build({
          name: 'Aged Brie',
          daysRemaining: 5,
          quality: 10
        });

        subject.tick();
        expect(subject.quality).toBe(11);
      });
    });

    describe('when the quality is at the maximum', () => {
      it('decrements the days remaining', () => {
        const subject = DescribedClass.build({
          name: 'Aged Brie',
          daysRemaining: 5,
          quality: 50
        });

        subject.tick();
        expect(subject.daysRemaining).toBe(4);
      });
      it('does not update the quality', () => {
        const subject = DescribedClass.build({
          name: 'Aged Brie',
          daysRemaining: 5,
          quality: 50
        });

        subject.tick();
        expect(subject.quality).toBe(50);
      });
    });

    describe('when on the sell date', () => {
      it('decrements the days remaining', () => {
        const subject = DescribedClass.build({
          name: 'Aged Brie',
          daysRemaining: 0,
          quality: 10
        });

        subject.tick();
        expect(subject.daysRemaining).toBe(-1);
      });
      it('increases the quality by 2', () => {
        const subject = DescribedClass.build({
          name: 'Aged Brie',
          daysRemaining: 0,
          quality: 10
        });

        subject.tick();
        expect(subject.quality).toBe(12);
      });
    });

    describe('when on the sell date near max quality', () => {
      it('decrements the days remaining', () => {
        const subject = DescribedClass.build({
          name: 'Aged Brie',
          daysRemaining: 0,
          quality: 49
        });

        subject.tick();
        expect(subject.daysRemaining).toBe(-1);
      });
      it('increments the quality', () => {
        const subject = DescribedClass.build({
          name: 'Aged Brie',
          daysRemaining: 0,
          quality: 49
        });

        subject.tick();
        expect(subject.quality).toBe(50);
      });
    });

    describe('when on the sell date with maximum quality', () => {
      it('decrements the days remaining', () => {
        const subject = DescribedClass.build({
          name: 'Aged Brie',
          daysRemaining: 0,
          quality: 50
        });

        subject.tick();
        expect(subject.daysRemaining).toBe(-1);
      });
      it('does not update the quality', () => {
        const subject = DescribedClass.build({
          name: 'Aged Brie',
          daysRemaining: 0,
          quality: 50
        });

        subject.tick();
        expect(subject.quality).toBe(50);
      });
    });

    describe('when later than the sell date', () => {
      it('decrements the days remaining', () => {
        const subject = DescribedClass.build({
          name: 'Aged Brie',
          daysRemaining: -10,
          quality: 10
        });

        subject.tick();
        expect(subject.daysRemaining).toBe(-11);
      });
      it('increases the quality by 2', () => {
        const subject = DescribedClass.build({
          name: 'Aged Brie',
          daysRemaining: -10,
          quality: 10
        });

        subject.tick();
        expect(subject.quality).toBe(12);
      });
    });

    describe('when later than the sell date with maximum quality', () => {
      it('decrements the days remaining', () => {
        const subject = DescribedClass.build({
          name: 'Aged Brie',
          daysRemaining: -10,
          quality: 50
        });

        subject.tick();
        expect(subject.daysRemaining).toBe(-11);
      });
      it('does not update the quality', () => {
        const subject = DescribedClass.build({
          name: 'Aged Brie',
          daysRemaining: -10,
          quality: 50
        });

        subject.tick();
        expect(subject.quality).toBe(50);
      });
    });
  });

  describe('with Sulfuras', () => {
    describe('when earlier than the sell date', () => {
      it('does not change the days remaining', () => {
        const subject = DescribedClass.build({
          name: 'Sulfuras, Hand of Ragnaros',
          daysRemaining: 5,
          quality: 80
        });

        subject.tick();
        expect(subject.daysRemaining).toBe(5);
      });
      it('does not change the quality', () => {
        const subject = DescribedClass.build({
          name: 'Sulfuras, Hand of Ragnaros',
          daysRemaining: 5,
          quality: 80
        });

        subject.tick();
        expect(subject.quality).toBe(80);
      });
    });

    describe('when on the sell date', () => {
      it('does not change the days remaining', () => {
        const subject = DescribedClass.build({
          name: 'Sulfuras, Hand of Ragnaros',
          daysRemaining: 0,
          quality: 80
        });

        subject.tick();
        expect(subject.daysRemaining).toBe(0);
      });
      it('does not change the quality', () => {
        const subject = DescribedClass.build({
          name: 'Sulfuras, Hand of Ragnaros',
          daysRemaining: 0,
          quality: 80
        });

        subject.tick();
        expect(subject.quality).toBe(80);
      });
    });

    describe('when later than the sell date', () => {
      it('does not change the days remaining', () => {
        const subject = DescribedClass.build({
          name: 'Sulfuras, Hand of Ragnaros',
          daysRemaining: -10,
          quality: 80
        });

        subject.tick();
        expect(subject.daysRemaining).toBe(-10);
      });
      it('does not change the quality', () => {
        const subject = DescribedClass.build({
          name: 'Sulfuras, Hand of Ragnaros',
          daysRemaining: -10,
          quality: 80
        });

        subject.tick();
        expect(subject.quality).toBe(80);
      });
    });
  });

  describe('with Backstage Pass', () => {
    describe('when much earlier than the sell date', () => {
      it('decrements the days remaining', () => {
        const subject = DescribedClass.build({
          name: 'Backstage passes to a TAFKAL80ETC concert',
          daysRemaining: 11,
          quality: 10
        });

        subject.tick();
        expect(subject.daysRemaining).toBe(10);
      });
      it('increments the quality', () => {
        const subject = DescribedClass.build({
          name: 'Backstage passes to a TAFKAL80ETC concert',
          daysRemaining: 11,
          quality: 10
        });

        subject.tick();
        expect(subject.quality).toBe(11);
      });
    });

    describe('when much earlier than the sell date at max quality', () => {
      it('decrements the days remaining', () => {
        const subject = DescribedClass.build({
          name: 'Backstage passes to a TAFKAL80ETC concert',
          daysRemaining: 11,
          quality: 50
        });

        subject.tick();
        expect(subject.daysRemaining).toBe(10);
      });
      it('does not update the quality', () => {
        const subject = DescribedClass.build({
          name: 'Backstage passes to a TAFKAL80ETC concert',
          daysRemaining: 11,
          quality: 50
        });

        subject.tick();
        expect(subject.quality).toBe(50);
      });
    });

    describe('when somewhat close to the sell date upper bound', () => {
      it('decrements the days remaining', () => {
        const subject = DescribedClass.build({
          name: 'Backstage passes to a TAFKAL80ETC concert',
          daysRemaining: 10,
          quality: 10
        });

        subject.tick();
        expect(subject.daysRemaining).toBe(9);
      });
      it('increases the quality by 2', () => {
        const subject = DescribedClass.build({
          name: 'Backstage passes to a TAFKAL80ETC concert',
          daysRemaining: 10,
          quality: 10
        });

        subject.tick();
        expect(subject.quality).toBe(12);
      });
    });

    describe('when somewhat close to the sell date upper bound at max quality', () => {
      it('decrements the days remaining', () => {
        const subject = DescribedClass.build({
          name: 'Backstage passes to a TAFKAL80ETC concert',
          daysRemaining: 10,
          quality: 50
        });

        subject.tick();
        expect(subject.daysRemaining).toBe(9);
      });
      it('does not update the quality', () => {
        const subject = DescribedClass.build({
          name: 'Backstage passes to a TAFKAL80ETC concert',
          daysRemaining: 10,
          quality: 50
        });

        subject.tick();
        expect(subject.quality).toBe(50);
      });
    });

    describe('when somewhat close to the sell date lower bound', () => {
      it('decrements the days remaining', () => {
        const subject = DescribedClass.build({
          name: 'Backstage passes to a TAFKAL80ETC concert',
          daysRemaining: 6,
          quality: 10
        });

        subject.tick();
        expect(subject.daysRemaining).toBe(5);
      });
      it('increases the quality by 2', () => {
        const subject = DescribedClass.build({
          name: 'Backstage passes to a TAFKAL80ETC concert',
          daysRemaining: 6,
          quality: 10
        });

        subject.tick();
        expect(subject.quality).toBe(12);
      });
    });

    describe('when somewhat close to the sell date lower bound at max quality', () => {
      it('decrements the days remaining', () => {
        const subject = DescribedClass.build({
          name: 'Backstage passes to a TAFKAL80ETC concert',
          daysRemaining: 6,
          quality: 50
        });

        subject.tick();
        expect(subject.daysRemaining).toBe(5);
      });
      it('does not update the quality', () => {
        const subject = DescribedClass.build({
          name: 'Backstage passes to a TAFKAL80ETC concert',
          daysRemaining: 6,
          quality: 50
        });

        subject.tick();
        expect(subject.quality).toBe(50);
      });
    });

    describe('when very close to the sell date upper bound', () => {
      it('decrements the days remaining', () => {
        const subject = DescribedClass.build({
          name: 'Backstage passes to a TAFKAL80ETC concert',
          daysRemaining: 5,
          quality: 10
        });

        subject.tick();
        expect(subject.daysRemaining).toBe(4);
      });
      it('increases the quality by 3', () => {
        const subject = DescribedClass.build({
          name: 'Backstage passes to a TAFKAL80ETC concert',
          daysRemaining: 5,
          quality: 10
        });

        subject.tick();
        expect(subject.quality).toBe(13);
      });
    });

    describe('when very close to the sell date upper bound at max quality', () => {
      it('decrements the days remaining', () => {
        const subject = DescribedClass.build({
          name: 'Backstage passes to a TAFKAL80ETC concert',
          daysRemaining: 5,
          quality: 50
        });

        subject.tick();
        expect(subject.daysRemaining).toBe(4);
      });
      it('does not update the quality', () => {
        const subject = DescribedClass.build({
          name: 'Backstage passes to a TAFKAL80ETC concert',
          daysRemaining: 5,
          quality: 50
        });

        subject.tick();
        expect(subject.quality).toBe(50);
      });
    });

    describe('when very close to the sell date lower bound', () => {
      it('decrements the days remaining', () => {
        const subject = DescribedClass.build({
          name: 'Backstage passes to a TAFKAL80ETC concert',
          daysRemaining: 1,
          quality: 10
        });

        subject.tick();
        expect(subject.daysRemaining).toBe(0);
      });
      it('increases the quality by 3', () => {
        const subject = DescribedClass.build({
          name: 'Backstage passes to a TAFKAL80ETC concert',
          daysRemaining: 1,
          quality: 10
        });

        subject.tick();
        expect(subject.quality).toBe(13);
      });
    });

    describe('when very close to the sell date lower bound at max quality', () => {
      it('decrements the days remaining', () => {
        const subject = DescribedClass.build({
          name: 'Backstage passes to a TAFKAL80ETC concert',
          daysRemaining: 1,
          quality: 50
        });

        subject.tick();
        expect(subject.daysRemaining).toBe(0);
      });
      it('does not update the quality', () => {
        const subject = DescribedClass.build({
          name: 'Backstage passes to a TAFKAL80ETC concert',
          daysRemaining: 1,
          quality: 50
        });

        subject.tick();
        expect(subject.quality).toBe(50);
      });
    });

    describe('when on the sell date', () => {
      it('decrements the days remaining', () => {
        const subject = DescribedClass.build({
          name: 'Backstage passes to a TAFKAL80ETC concert',
          daysRemaining: 0,
          quality: 10
        });

        subject.tick();
        expect(subject.daysRemaining).toBe(-1);
      });
      it('sets the quality to 0', () => {
        const subject = DescribedClass.build({
          name: 'Backstage passes to a TAFKAL80ETC concert',
          daysRemaining: 0,
          quality: 10
        });

        subject.tick();
        expect(subject.quality).toBe(0);
      });
    });

    describe('when later than the sell date', () => {
      it('decrements the days remaining', () => {
        const subject = DescribedClass.build({
          name: 'Backstage passes to a TAFKAL80ETC concert',
          daysRemaining: -10,
          quality: 10
        });

        subject.tick();
        expect(subject.daysRemaining).toBe(-11);
      });
      it('sets the quality to 0', () => {
        const subject = DescribedClass.build({
          name: 'Backstage passes to a TAFKAL80ETC concert',
          daysRemaining: -10,
          quality: 10
        });

        subject.tick();
        expect(subject.quality).toBe(0);
      });
    });
  });

  describe('with Conjured Mana', () => {
    describe('when earlier than the sell date', () => {
      const subject = DescribedClass.build({
        name: 'Conjured Mana Cake',
        daysRemaining: 5,
        quality: 10
      });

      it.skip('decrements the days remaining', () => {
        subject.tick();
        expect(subject.daysRemaining).toBe(4);
      });
      it.skip('decreases the quality by 2', () => {
        subject.tick();
        expect(subject.quality).toBe(8);
      });
    });

    describe('when earlier than the sell date at 0 quality', () => {
      const subject = DescribedClass.build({
        name: 'Conjured Mana Cake',
        daysRemaining: 5,
        quality: 0
      });

      it.skip('decrements the days remaining', () => {
        subject.tick();
        expect(subject.daysRemaining).toBe(4);
      });
      it.skip('does not change the quality', () => {
        subject.tick();
        expect(subject.quality).toBe(0);
      });
    });

    describe('when on the sell date', () => {
      const subject = DescribedClass.build({
        name: 'Conjured Mana Cake',
        daysRemaining: 0,
        quality: 10
      });

      it.skip('decrements the days remaining', () => {
        subject.tick();
        expect(subject.daysRemaining).toBe(-1);
      });
      it.skip('decreases the quality by 4', () => {
        subject.tick();
        expect(subject.quality).toBe(6);
      });
    });

    describe('when on the sell date at 0 quality', () => {
      const subject = DescribedClass.build({
        name: 'Conjured Mana Cake',
        daysRemaining: 0,
        quality: 0
      });

      it.skip('decrements the days remaining', () => {
        subject.tick();
        expect(subject.daysRemaining).toBe(-1);
      });
      it.skip('does not change the quality', () => {
        subject.tick();
        expect(subject.quality).toBe(0);
      });
    });

    describe('when later than the sell date', () => {
      const subject = DescribedClass.build({
        name: 'Conjured Mana Cake',
        daysRemaining: -10,
        quality: 10
      });

      it.skip('decrements the days remaining', () => {
        subject.tick();
        expect(subject.daysRemaining).toBe(-11);
      });
      it.skip('decreases the quality by 4', () => {
        subject.tick();
        expect(subject.quality).toBe(6);
      });
    });

    describe('when later than the sell date at 0 quality', () => {
      const subject = DescribedClass.build({
        name: 'Conjured Mana Cake',
        daysRemaining: -10,
        quality: 0
      });

      it.skip('decrements the days remaining', () => {
        subject.tick();
        expect(subject.daysRemaining).toBe(-11);
      });
      it.skip('does not change the quality', () => {
        subject.tick();
        expect(subject.quality).toBe(0);
      });
    });
  });
});
