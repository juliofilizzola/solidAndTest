import { IndividualCustomer } from '../costumer';

const createSUT = (firstName: string, lastName: string, cpf: string): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

describe('IndividualCustomer test', () => {
  afterEach(() => jest.clearAllMocks());

  it('verivy Individual costumer test', () => {
    const sut = createSUT('Julio', 'Filizzola', "5548748724878");
    console.log(sut);

    expect(sut.cpf).toBe("5548748724878");
    expect(sut.firstName).toBe('Julio');
    expect(sut.lastName).toBe('Filizzola');
  });

  it('test method Invidual customer', () => {
    // const sut 
  });
});