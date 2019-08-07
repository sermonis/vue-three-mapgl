import MapGL from '../../src/mapgl';

describe('MapGL', () => {
  describe('Version', () => {
    it('should exist', () => {
      expect(MapGL.version).to.exist;
    });
  });
});
