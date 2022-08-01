let lang = 'ru';
const rusDayOfWeek = [
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятницу',
  'Суббота',
  'Воскресенье',
];
const enDayOfWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];
const allDayOfWeek = [rusDayOfWeek, enDayOfWeek];
console.log('allDayOfWeek: ', allDayOfWeek);

// if
if (lang === 'ru') {
  console.log(rusDayOfWeek);
} else if (lang === 'en') {
  console.log(enDayOfWeek);
}
// switch
switch (lang) {
  case 'ru':
    console.log(rusDayOfWeek);
    break;
  case 'en':
    console.log(enDayOfWeek);
    break;
}
//
lang === 'ru'
  ? console.log(allDayOfWeek[0])
  : console.log(allDayOfWeek[1]);

let namePerson = 'Александр';

namePerson === 'Артём' ? console.log('директор') : console.log('студент');
namePerson === 'Александр'
  ? console.log('преподаватель')
  : console.log('студент');
