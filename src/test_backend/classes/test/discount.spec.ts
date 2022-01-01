import { Discount, FiftyPercentDiscount, NoDiscount, TenPercentDiscount } from '../discount';

const createSUT = (className: new () => Discount): Discount => {
  return new className();
}

describe('Discount test', () => {
  afterEach(() => jest.clearAllMocks());

  it('should have no discount', () => {
    const sut = createSUT(NoDiscount);
    expect(sut.calculate(10.99)).toBeCloseTo(10.99);
  });
});