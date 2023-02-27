import { DateTime } from 'luxon';

const time = () => {
  const now = DateTime.now();
  const options = {
    weekday: now.day, year: now.year, month: now.month,
  };
  const date = now.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS, options);

  document.getElementById('datetime').textContent = `${date} `;
};

export default time;