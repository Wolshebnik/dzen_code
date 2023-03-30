import { useState, useEffect } from 'react';

import * as Styles from './styles';
import { optionsWeekday, optionsTime, optionsDate } from './config';

const localeFormat = 'ua-Ua';

export const Time = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeString = date.toLocaleTimeString(localeFormat, optionsTime);
  const weekdayString = date.toLocaleDateString(localeFormat, optionsWeekday);
  const dateString = date
    .toLocaleDateString(localeFormat, optionsDate)
    .slice(0, -3);

  return (
    <Styles.TimeBlock>
      <Styles.Week>{weekdayString}</Styles.Week>
      <Styles.DateBlock>
        <Styles.Date>{dateString}</Styles.Date>
        <div>{timeString}</div>
      </Styles.DateBlock>
    </Styles.TimeBlock>
  );
};
