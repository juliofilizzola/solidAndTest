import { Persistency } from "../persistency";

describe('Persistency', () => {
  afterEach(() => jest.clearAllMocks()); // limpando os mocks a cada test. 

  it('should return undefined', () => {
    const sut = new Persistency(); // sut = system under test;
    expect(sut.saveOrder()).toBeUndefined();
  });

  it('should call console.log once', () => {
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log'); // fica espiando o console se ele é chamado o log.
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('should call console.log with "Pedido salvo com sucesso!"', () => {
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledWith('Pedido salvo com sucesso!');
  });

})
