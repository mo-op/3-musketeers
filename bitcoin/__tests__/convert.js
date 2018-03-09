'use strict';

const convert = require('..');
const Big = require('big.js');

test('should default to returning then default ifself', () => {
  var result = convert(2, 'BTC', 'BTC');
  expect(result).toBe(2);
});

test('should return a number', () => {
  var result = convert(2, 'BTC', 'BTC', 'Number');
    expect(typeof result).toBe('number');
});

test('should return a Big number', () => {
  var result =convert(2, 'BTC', 'BTC', 'Big');
   expect(result).toBeInstanceOf(Big);
});

test('should return a string', () => {
  var result =convert(2100, 'mBTC', 'BTC', 'String');
  expect(typeof result).toBe('string');
});

test('should convert a number from interger', () => {
  var result =convert(123456789012345, 'Satoshi', 'BTC', 'Number');
  expect(typeof result).toBe('number');
});

test('should convert a number from float', () => {
  var result =convert(1234567.89012345, 'BTC', 'Satoshi', 'Number');
 expect(typeof result).toBe('number');
});

test('should convert a string', () => {
  var result =convert('2', 'BTC', 'BTC', 'Number');
  expect(typeof result).toBe('number');
});

test('should convert a Big number', () => {
  var result =convert(new Big(2), 'BTC', 'BTC', 'Number');
  expect(typeof result).toBe('number');
});

test('should convert a NaN to a number', () => {
  var result =convert(NaN, 'BTC', 'BTC', 'Number');
    expect(typeof result).toBe('number');
});

test('should convert a NaN to a string', () => {
  var result =convert(NaN, 'BTC', 'BTC', 'String');
    expect(typeof result).toBe('string');
     result =convert(NaN, 'BTC', 'mBTC', 'String');
        expect(typeof result).toBe('string');

});

test('should not convert a NaN to a Big', () => {
 expect(() => {convert(NaN, 'BTC', 'BTC', 'Big')}).toThrow();
});

test('should handle rounding errors', () => {
  var result =convert(4.6, 'Satoshi', 'BTC', 'Number');
        expect(typeof result).toBe('number');

  result= convert(0.000000046, 'BTC', 'Satoshi', 'Number');
        expect(typeof result).toBe('number');

});

test('should throw when untest is undefined', () => {
  expect(() => {convert(new Big(2), 'x', 'BTC', 'Number')}).toThrow();
    expect(() => {convert(new Big(2), 'BTC', 'x', 'Number')}).toThrow();
  expect(() => {convert(NaN, 'x', 'BTC', 'Number')}).toThrow();
    expect(() => {convert(NaN, 'BTC', 'x', 'Number')}).toThrow();
});

test('should throw when representaion is undefined', () => {
    expect(() => {convert(2, 'BTC', 'mBTC', 'x')}).toThrow();
    expect(() => {convert(NaN, 'BTC', 'mBTC', 'x')}).toThrow();
});

test('should allow untest aliases', () => {
  var result =convert(4.6, 'Satoshi', 'sat');
    expect(result).toBe(4.6);
  result =convert(4.6, 'μBTC', 'bit');
    expect(result).toBe(4.6);
});

test('should add a unit', () => {
    convert.addUnit('test', 2);
    expect(convert.units().includes('test')).toBeTruthy();
});
