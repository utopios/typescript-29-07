import { sum, division } from './calculation';
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
test('adds 5 + 5 to equal 10', () => {
  expect(sum(5, 5)).toBe(10);
});


describe('division function', () => {
    test('divides 10 by 2 to get 5', () => {
      expect(division(10, 2)).toBe(5);
    });
  
    test('divides -6 by 3 to get -2', () => {
      expect(division(-6, 3)).toBe(-2);
    });
  
    test('divides 7 by 0.5 to get 14', () => {
      expect(division(7, 0.5)).toBe(14);
    });
  
    test('throws error when dividing by zero', () => {
      expect(() => division(10, 0)).toThrow("Impossible");
    });
  
    test('divides 0 by any number to get 0', () => {
      expect(division(0, 5)).toBe(0);
    });
  });