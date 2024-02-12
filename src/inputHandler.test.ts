import inputHandler from './inputHandler'
import { Mock, beforeAll, expect, test, vi } from 'vitest';
import { fireEvent } from '@testing-library/dom';

let input: HTMLInputElement;
let callback: Mock<any, any>;
beforeAll(async () => {
  callback = vi.fn();
  input = document.createElement('input');
  input.type = 'number';
  input.min = '1'
  input.addEventListener('input', (event) => inputHandler(event, callback));
})

test('inputHandler calls the callback with the correct value', () => {
  fireEvent.input(input, { target: { value: '5' } });
  expect(callback).toHaveBeenCalledWith(5);
});

test('inputHandler sets ariaInvalid to true when the input is invalid', () => {
  fireEvent.input(input, { target: { value: '0' } });
  expect(input.getAttribute('aria-invalid')).toBe('true');
});

test('inputHandler sets ariaInvalid to false when the input is valid', () => {
  fireEvent.input(input, { target: { value: '5' } });
  console.log(input.value)
  expect(input.getAttribute('aria-invalid')).toBe('false');
});