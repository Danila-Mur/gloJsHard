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

const formatDate = (elem) => {
  return elem < 10 ? '0' + elem : elem;
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

    fullBlock.textContent =
      'Сегодня ' +
      dayOfWeek +
      ', ' +
      formatDate(day) +
      ' ' +
      month +
      ' ' +
      year +
      ' года , ' +
      formatDate(hour) +
      ' ' +
      numWord(hour, ['час', 'часа', 'часов']) +
      ' ' +
      formatDate(minutes) +
      ' ' +
      numWord(minutes, ['минута', 'минуты', 'минут']) +
      ' ' +
      formatDate(seconds) +
      ' ' +
      numWord(seconds, ['секунда', 'секунды', 'секунд']);
    shortBlock.textContent =
      formatDate(day) +
      '.' +
      formatDate(shortMonth) +
      '.' +
      year +
      ' - ' +
      formatDate(hour) +
      ':' +
      formatDate(minutes) +
      ':' +
      formatDate(seconds);
  };
  updateTimer();
  interval = setInterval(updateTimer, 500);
};

timer();
