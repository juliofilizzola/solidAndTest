import { Persistency } from "../persistency";

describe('Persistency', () => {
  it('should return undefined', () => {
    const swt = new Persistency(); // swt = system under test;
    expect(swt.saveOrder()).toBeUndefined();
  });

  it('should call console.log once', () => {
    const swt = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');
    swt.saveOrder();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  })
})
