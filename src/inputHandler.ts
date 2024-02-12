export default function inputHandler(
  event: Event,
  callback: (value: number) => void,
) {
  const isValid = (event.target as HTMLInputElement).reportValidity();
  (event.target as HTMLInputElement).ariaInvalid = (!isValid).toString();
  const value = parseInt((event.target as HTMLInputElement).value);
  callback(value)
} 