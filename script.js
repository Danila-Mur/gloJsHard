const getDayWeek = (date) => {
  const days = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
  ];

  return days[date.getDay()];
};

const getMonth = (date) => {
  const days = [
    'Января',
    'Февраля',
    'Марта',
    'Апреля',
    'Мая',
    'Июня',
    'Июля',
    'Августа',
    'Сентября',
    'Октября',
    'Ноября',
    'Декабря',
  ];

  return days[date.getMonth()];
};

const timer = () => {
  const fullBlock = document.querySelector('.full-display__timer');
  const shortBlock = document.querySelector('.short-display__timer');

  const numWord = (value, words) => {
    value = Math.abs(value) % 100;

    const lastNum = value % 10;

    if (value > 10 && value < 20) return words[2];
    if (lastNum > 1 && lastNum < 5) return words[1];
    if (lastNum === 1) return words[0];

    return words[2];
  };

  const updateTimer = () => {
    const date = new Date();

    const dayOfWeek = getDayWeek(date);
    const day = date.getDate();
    const month = getMonth(date);
    const shortMonth = date.getMonth();
    const year = date.getFullYear();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const formatDay = day < 10 ? '0' + day : day;
    const formatMonth = shortMonth < 10 ? '0' + shortMonth : shortMonth;
    const formatHours = hour < 10 ? '0' + hour : hour;
    const formatMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formatSeconds = seconds < 10 ? '0' + seconds : seconds;

    fullBlock.textContent =
      'Сегодня ' +
      dayOfWeek +
      ', ' +
      formatDay +
      ' ' +
      month +
      ' ' +
      year +
      ' года , ' +
      formatHours +
      ' ' +
      numWord(hour, ['час', 'часа', 'часов']) +
      ' ' +
      formatMinutes +
      ' ' +
      numWord(minutes, ['минута', 'минуты', 'минут']) +
      ' ' +
      formatSeconds +
      ' ' +
      numWord(seconds, ['секунда', 'секунды', 'секунд']);
    shortBlock.textContent =
      formatDay +
      '.' +
      formatMonth +
      '.' +
      year +
      ' - ' +
      formatHours +
      ':' +
      formatMinutes +
      ':' +
      formatSeconds;
  };
  updateTimer();
  interval = setInterval(updateTimer, 500);
};

timer();
