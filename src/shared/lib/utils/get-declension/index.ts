/**
 * Функция для получения корректного склонения числительных
 * @param value - number
 * @param words - [] Массив с текстовым склонением
 */

export const getDeclension = (value: number, words: string[]) => {
  let currentValue = Math.abs(value) % 100;
  const num = value % 10;
  const textFinally = (text: string) => `${value} ${text}`;

  if (currentValue > 10 && currentValue < 20) return textFinally(words[2]);
  if (num > 1 && num < 5) return textFinally(words[1]);
  if (num === 1) return textFinally(words[0]);
  return textFinally(words[2]);
}
