# frozen_string_literal: true

require 'spec_helper'

require_relative '../lib/gilded_rose'

RSpec.describe GildedRose do
  context 'with Normal Item' do
    context 'when earlier than the sell date' do
      subject do
        described_class.new(name: 'Normal Item', days_remaining: 5, quality: 10)
      end

      it 'decrements the days remaining' do
        expect { subject.tick }.to change { subject.days_remaining }.by(-1)
      end
      it 'decrements the quality' do
        expect { subject.tick }.to change { subject.quality }.by(-1)
      end
    end

    context 'when on the sell date' do
      subject do
        described_class.new(name: 'Normal Item', days_remaining: 0, quality: 10)
      end

      it 'decrements the days remaining' do
        expect { subject.tick }.to change { subject.days_remaining }.by(-1)
      end
      it 'decreases the quality by 2' do
        expect { subject.tick }.to change { subject.quality }.by(-2)
      end
    end

    context 'when later than the sell date' do
      subject do
        described_class.new(name: 'Normal Item', days_remaining: -10, quality: 10)
      end

      it 'decrements the days remaining' do
        expect { subject.tick }.to change { subject.days_remaining }.by(-1)
      end
      it 'decreases the quality by 2' do
        expect { subject.tick }.to change { subject.quality }.by(-2)
      end
    end

    context 'when quality is 0' do
      subject do
        described_class.new(name: 'Normal Item', days_remaining: 5, quality: 0)
      end

      it 'decrements the days remaining' do
        expect { subject.tick }.to change { subject.days_remaining }.by(-1)
      end
      it 'does not update the quality' do
        expect { subject.tick }.not_to change { subject.quality }
      end
    end
  end

  context 'with Aged Brie' do
    context 'when earlier than the sell date' do
      subject do
        described_class.new(name: 'Aged Brie', days_remaining: 5, quality: 10)
      end

      it 'decrements the days remaining' do
        expect { subject.tick }.to change { subject.days_remaining }.by(-1)
      end
      it 'increments the quality' do
        expect { subject.tick }.to change { subject.quality }.by(1)
      end
    end

    context 'when the quality is at the maximum' do
      subject do
        described_class.new(name: 'Aged Brie', days_remaining: 5, quality: 50)
      end

      it 'decrements the days remaining' do
        expect { subject.tick }.to change { subject.days_remaining }.by(-1)
      end
      it 'does not update the quality' do
        expect { subject.tick }.not_to change { subject.quality }
      end
    end

    context 'when on the sell date' do
      subject do
        described_class.new(name: 'Aged Brie', days_remaining: 0, quality: 10)
      end

      it 'decrements the days remaining' do
        expect { subject.tick }.to change { subject.days_remaining }.by(-1)
      end
      it 'increases the quality by 2' do
        expect { subject.tick }.to change { subject.quality }.by(2)
      end
    end

    context 'when on the sell date near max quality' do
      subject do
        described_class.new(name: 'Aged Brie', days_remaining: 0, quality: 49)
      end

      it 'decrements the days remaining' do
        expect { subject.tick }.to change { subject.days_remaining }.by(-1)
      end
      it 'increments the quality' do
        expect { subject.tick }.to change { subject.quality }.by(1)
      end
    end

    context 'when on the sell date with maximum quality' do
      subject do
        described_class.new(name: 'Aged Brie', days_remaining: 0, quality: 50)
      end

      it 'decrements the days remaining' do
        expect { subject.tick }.to change { subject.days_remaining }.by(-1)
      end
      it 'does not update the quality' do
        expect { subject.tick }.not_to change { subject.quality }
      end
    end

    context 'when later than the sell date' do
      subject do
        described_class.new(name: 'Aged Brie', days_remaining: -10, quality: 10)
      end

      it 'decrements the days remaining' do
        expect { subject.tick }.to change { subject.days_remaining }.by(-1)
      end
      it 'increases the quality by 2' do
        expect { subject.tick }.to change { subject.quality }.by(2)
      end
    end

    context 'when later than the sell date with maximum quality' do
      subject do
        described_class.new(name: 'Aged Brie', days_remaining: -10, quality: 50)
      end

      it 'decrements the days remaining' do
        expect { subject.tick }.to change { subject.days_remaining }.by(-1)
      end
      it 'does not update the quality' do
        expect { subject.tick }.not_to change { subject.quality }
      end
    end
  end

  context 'with Sulfuras' do
    context 'when earlier than the sell date' do
      subject do
        described_class.new(name: 'Sulfuras, Hand of Ragnaros', days_remaining: 5, quality: 80)
      end

      it 'does not change the days_remaining' do
        expect { subject.tick }.not_to change { subject.days_remaining }
      end
      it 'does not change the quality' do
        expect { subject.tick }.not_to change { subject.quality }
      end
    end

    context 'when on the sell date' do
      subject do
        described_class.new(name: 'Sulfuras, Hand of Ragnaros', days_remaining: 0, quality: 80)
      end

      it 'does not change the days_remaining' do
        expect { subject.tick }.not_to change { subject.days_remaining }
      end
      it 'does not change the quality' do
        expect { subject.tick }.not_to change { subject.quality }
      end
    end

    context 'when later than the sell date' do
      subject do
        described_class.new(name: 'Sulfuras, Hand of Ragnaros', days_remaining: -10, quality: 80)
      end

      it 'does not change the days_remaining' do
        expect { subject.tick }.not_to change { subject.days_remaining }
      end
      it 'does not change the quality' do
        expect { subject.tick }.not_to change { subject.quality }
      end
    end
  end

  context 'with Backstage Pass' do
    context 'when much earlier than the sell date' do
      subject do
        described_class.new(name: 'Backstage passes to a TAFKAL80ETC concert', days_remaining: 11, quality: 10)
      end

      it 'decrements the days remaining' do
        expect { subject.tick }.to change { subject.days_remaining }.by(-1)
      end
      it 'increments the quality' do
        expect { subject.tick }.to change { subject.quality }.by(1)
      end
    end

    context 'when much earlier than the sell date at max quality' do
      subject do
        described_class.new(name: 'Backstage passes to a TAFKAL80ETC concert', days_remaining: 11, quality: 50)
      end

      it 'decrements the days remaining' do
        expect { subject.tick }.to change { subject.days_remaining }.by(-1)
      end
      it 'does not update the quality' do
        expect { subject.tick }.not_to change { subject.quality }
      end
    end

    context 'when somewhat close to the sell date upper bound' do
      subject do
        described_class.new(name: 'Backstage passes to a TAFKAL80ETC concert', days_remaining: 10, quality: 10)
      end

      it 'decrements the days remaining' do
        expect { subject.tick }.to change { subject.days_remaining }.by(-1)
      end
      it 'increases the quality by 2' do
        expect { subject.tick }.to change { subject.quality }.by(2)
      end
    end

    context 'when somewhat close to the sell date upper bound at max quality' do
      subject do
        described_class.new(name: 'Backstage passes to a TAFKAL80ETC concert', days_remaining: 10, quality: 50)
      end

      it 'decrements the days remaining' do
        expect { subject.tick }.to change { subject.days_remaining }.by(-1)
      end
      it 'does not update the quality' do
        expect { subject.tick }.not_to change { subject.quality }
      end
    end

    context 'when somewhat close to the sell date lower bound' do
      subject do
        described_class.new(name: 'Backstage passes to a TAFKAL80ETC concert', days_remaining: 6, quality: 10)
      end

      it 'decrements the days remaining' do
        expect { subject.tick }.to change { subject.days_remaining }.by(-1)
      end
      it 'increases the quality by 2' do
        expect { subject.tick }.to change { subject.quality }.by(2)
      end
    end

    context 'when somewhat close to the sell date lower bound at max quality' do
      subject do
        described_class.new(name: 'Backstage passes to a TAFKAL80ETC concert', days_remaining: 6, quality: 50)
      end

      it 'decrements the days remaining' do
        expect { subject.tick }.to change { subject.days_remaining }.by(-1)
      end
      it 'does not update the quality' do
        expect { subject.tick }.not_to change { subject.quality }
      end
    end

    context 'when very close to the sell date upper bound' do
      subject do
        described_class.new(name: 'Backstage passes to a TAFKAL80ETC concert', days_remaining: 5, quality: 10)
      end

      it 'decrements the days remaining' do
        expect { subject.tick }.to change { subject.days_remaining }.by(-1)
      end
      it 'increases the quality by 3' do
        expect { subject.tick }.to change { subject.quality }.by(3)
      end
    end

    context 'when very close to the sell date upper bound at max quality' do
      subject do
        described_class.new(name: 'Backstage passes to a TAFKAL80ETC concert', days_remaining: 5, quality: 50)
      end

      it 'decrements the days remaining' do
        expect { subject.tick }.to change { subject.days_remaining }.by(-1)
      end
      it 'does not update the quality' do
        expect { subject.tick }.not_to change { subject.quality }
      end
    end

    context 'when very close to the sell date lower bound' do
      subject do
        described_class.new(name: 'Backstage passes to a TAFKAL80ETC concert', days_remaining: 1, quality: 10)
      end

      it 'decrements the days remaining' do
        expect { subject.tick }.to change { subject.days_remaining }.by(-1)
      end
      it 'increases the quality by 3' do
        expect { subject.tick }.to change { subject.quality }.by(3)
      end
    end

    context 'when very close to the sell date lower bound at max quality' do
      subject do
        described_class.new(name: 'Backstage passes to a TAFKAL80ETC concert', days_remaining: 1, quality: 50)
      end

      it 'decrements the days remaining' do
        expect { subject.tick }.to change { subject.days_remaining }.by(-1)
      end
      it 'does not update the quality' do
        expect { subject.tick }.not_to change { subject.quality }
      end
    end

    context 'when on the sell date' do
      subject do
        described_class.new(name: 'Backstage passes to a TAFKAL80ETC concert', days_remaining: 0, quality: 10)
      end

      it 'decrements the days remaining' do
        expect { subject.tick }.to change { subject.days_remaining }.by(-1)
      end
      it 'sets the quality to 0' do
        expect { subject.tick }.to change { subject.quality }.to(0)
      end
    end

    context 'when later than the sell date' do
      subject do
        described_class.new(name: 'Backstage passes to a TAFKAL80ETC concert', days_remaining: -10, quality: 10)
      end

      it 'decrements the days remaining' do
        expect { subject.tick }.to change { subject.days_remaining }.by(-1)
      end
      it 'sets the quality to 0' do
        expect { subject.tick }.to change { subject.quality }.to(0)
      end
    end
  end

  context 'with Conjured Mana' do
    context 'when earlier than the sell date' do
      subject do
        described_class.new(name: 'Conjured Mana Cake', days_remaining: 5, quality: 10)
      end

      xit 'decrements the days remaining' do
        expect { subject.tick }.to change { subject.days_remaining }.by(-1)
      end
      xit 'decreases the quality by 2' do
        expect { subject.tick }.to change { subject.quality }.by(-2)
      end
    end

    context 'when earlier than the sell date at 0 quality' do
      subject do
        described_class.new(name: 'Conjured Mana Cake', days_remaining: 5, quality: 0)
      end

      xit 'decrements the days remaining' do
        expect { subject.tick }.to change { subject.days_remaining }.by(-1)
      end
      xit 'does not change the quality' do
        expect { subject.tick }.not_to change { subject.quality }
      end
    end

    context 'when on the sell date' do
      subject do
        described_class.new(name: 'Conjured Mana Cake', days_remaining: 0, quality: 10)
      end

      xit 'decrements the days remaining' do
        expect { subject.tick }.to change { subject.days_remaining }.by(-1)
      end
      xit 'decreases the quality by 4' do
        expect { subject.tick }.to change { subject.quality }.by(-4)
      end
    end

    context 'when on the sell date at 0 quality' do
      subject do
        described_class.new(name: 'Conjured Mana Cake', days_remaining: 0, quality: 0)
      end

      xit 'decrements the days remaining' do
        expect { subject.tick }.to change { subject.days_remaining }.by(-1)
      end
      xit 'does not change the quality' do
        expect { subject.tick }.not_to change { subject.quality }
      end
    end

    context 'when later than the sell date' do
      subject do
        described_class.new(name: 'Conjured Mana Cake', days_remaining: -10, quality: 10)
      end

      xit 'decrements the days remaining' do
        expect { subject.tick }.to change { subject.days_remaining }.by(-1)
      end
      xit 'decreases the quality by 4' do
        expect { subject.tick }.to change { subject.quality }.by(-4)
      end
    end

    context 'when later than the sell date at 0 quality' do
      subject do
        described_class.new(name: 'Conjured Mana Cake', days_remaining: -10, quality: 0)
      end

      xit 'decrements the days remaining' do
        expect { subject.tick }.to change { subject.days_remaining }.by(-1)
      end
      xit 'does not change the quality' do
        expect { subject.tick }.not_to change { subject.quality }
      end
    end
  end
end
