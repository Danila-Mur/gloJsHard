const week = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ],
  weekList = document.querySelector('.week__list');

for (let key of week) {
  weekList.innerHTML += `<li>${key}</li>`;

  const weekItem = weekList.querySelectorAll('li');
  const dayOfWeekName = new Date().toLocaleString('en-US', {
    weekday: 'long',
  });
  weekItem.forEach((item) => {
    switch (true) {
      case item.textContent === 'Saturday' || item.textContent === 'Sunday':
        item.style.fontStyle = 'italic';
        return;
      case dayOfWeekName === item.textContent:
        item.style.fontWeight = 'bold';
        return;
      case (item.textContent === 'Saturday' || item.textContent === 'Sunday') &&
        dayOfWeekName === item.textContent:
        item.style.fontStyle = 'italic';
        item.style.fontWeight = 'bold';
        return;
    }
  });
}