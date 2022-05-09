const Zone = require('../zone.js');

describe('Zone', () => {
  const zone = Zone.from({x: 10, y: 10, width: 10, height: 10});

  describe('zone.toRel(relPoints)', () => {
    it('converts zone to the provided relative points (percentage)', () => {
      const relPoints = {x: .5, y: .5, width: .5, height: .5};
      expect(zone.toRel(relPoints)).toMatchObject({
        x: 5,
        y: 5,
        width: 5,
        height: 5
      })
    })
  })
});
