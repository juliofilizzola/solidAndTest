import { Messaging } from '../messaging';

const createSut = () => {
  return new Messaging();
}

describe('Messaging', () => {
  afterEach(() => jest.clearAllMocks());

  it('should return undefined', () => {
    const sut = createSut();
    expect(sut.sendMessage('')).toBeUndefined();
  });

  it('should call console.log once', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('hello');
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('should call console.log with messag', () =>{
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('test executado');

    expect(consoleSpy).toHaveBeenLastCalledWith('Mensagem enviada: test executado');
  });
  
});
