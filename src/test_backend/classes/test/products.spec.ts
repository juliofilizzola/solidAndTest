import { Product } from '../products';

const createSUT = (name: string, price: number): Product => {
  return new Product(name, price);
}

describe('Products test', () => {
  afterEach(() => jest.clearAllMocks());

  it('should have properties', () => { 
    const sut = createSUT('camisa', 40);
    expect(sut).toHaveProperty('name', 'camisa');
    expect(sut).toHaveProperty('price', 40);
    expect(sut).not.toHaveProperty('name', 40);
  });
});
