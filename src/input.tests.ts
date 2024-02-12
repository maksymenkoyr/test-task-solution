import { fireEvent } from '@testing-library/dom'
import inputHandler from './inputHandler'
import { expect, test, vi } from 'vitest';

test('inputHandler calls the callback with the correct value', () => {
  const callback = vi.fn();
  const input = document.createElement('input');
  input.value = '5';

  inputHandler(new Event('change'), callback);

  expect(callback).toHaveBeenCalledWith(5);
});

test('inputHandler sets ariaInvalid to true when the input is invalid', () => {
  const callback = vi.fn();
  const input = document.createElement('input');
  input.value = 'invalid';

  inputHandler(new Event('change'), callback);

  expect(input.getAttribute('aria-invalid')).toBe('true');
});

test('inputHandler sets ariaInvalid to false when the input is valid', () => {
  const callback = vi.fn();
  const input = document.createElement('input');
  input.value = '5';

  inputHandler(new Event('change'), callback);

  expect(input.getAttribute('aria-invalid')).toBe('false');
});