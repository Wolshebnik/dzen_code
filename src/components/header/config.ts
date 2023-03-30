export const optionsWeekday: Intl.DateTimeFormatOptions = {
  weekday: 'long',
};

export const optionsDate: Intl.DateTimeFormatOptions = {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
};

export const optionsTime: Intl.DateTimeFormatOptions = {
  hour: 'numeric',
  minute: 'numeric',
};

export function formatDate(dateString: string, format: string): string {
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
    'dd/M/yyyy': `${day}/${month}/${year}`,
    'dd M yyyy': `${day} ${month} ${year}`,
    'dd/M/YYYY': `${day}/${month}/${year}`,
    'M/dd/yyyy': `${month}/${day}/${year}`,
    'M/dd/YYYY': `${month}/${day}/${year}`,
    'yyyy/M/dd': `${year}/${date.getMonth() + 1}/${day}`,
    'YYYY/M/dd': `${year}/${date.getMonth() + 1}/${day}`,
    'dd-M-yyyy': `${day}-${month}-${year}`,
    'dd-M-YYYY': `${day}-${month}-${year}`,
    'M-dd-yyyy': `${month}-${day}-${year}`,
    'M-dd-YYYY': `${month}-${day}-${year}`,
    'yyyy-M-dd': `${year}-${date.getMonth() + 1}-${day}`,
    'YYYY-M-dd': `${year}-${date.getMonth() + 1}-${day}`,
  };

  return formats[format] || dateString;
}
