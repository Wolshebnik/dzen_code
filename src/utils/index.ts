import { IProducts } from 'types';

type Format = 'dd/M/YYYY' | 'M/dd';

export function addEnding(number: number, word: string) {
  if (isNaN(number) || typeof word !== 'string') {
    return '';
  }

  let ending = '';
  if (number % 10 === 1 && number % 100 !== 11) {
    ending = '';
  } else if (
    number % 10 >= 2 &&
    number % 10 <= 4 &&
    (number % 100 < 10 || number % 100 >= 20)
  ) {
    ending = 'а';
  } else {
    ending = 'ов';
  }

  if (number % 100 >= 11 && number % 100 <= 14) {
    ending = 'ов';
  }

  return `${word}${ending}`;
}

export function formatDate(
  dateString: string,
  format: Format = 'dd/M/YYYY'
): string {
  const months: string[] = [
    'Янв',
    'Фев',
    'Мар',
    'Апр',
    'Май',
    'Июн',
    'Июл',
    'Авг',
    'Сен',
    'Окт',
    'Ноя',
    'Дек',
  ];

  const date: Date = new Date(dateString);
  const day: string = date.getDate().toString().padStart(2, '0');
  const month: string = months[date.getMonth()];
  const year: string = date.getFullYear().toString();

  const formats: { [key: string]: string } = {
    'dd/M/YYYY': `${day} / ${month} / ${year}`,
    'M/dd': `${date.getMonth() - 1}/${day}`,
  };

  return formats[format] || dateString;
}

export const getMoney = (products: IProducts[]) => {
  const { usd, uah } = products.reduce(
    (acc, curr) => ({
      usd: acc.usd + (curr.price.find((p) => p.symbol === 'USD')?.value || 0),
      uah: acc.uah + (curr.price.find((p) => p.symbol === 'UAH')?.value || 0),
    }),
    { usd: 0, uah: 0 }
  );

  return { usd: usd.toLocaleString(), uah: uah.toLocaleString() };
};
