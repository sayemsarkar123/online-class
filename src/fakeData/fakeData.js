import courses from './courses';

const fakeData = courses.unit.items;

fakeData.forEach(course => {
  const price = { amount: 9.99, currency: "USD", list_price: 199.99, currency_symbol: "$" };
  course.price = price;
})

const shuffleData = data => {
  for (let i = data.length; i; i--) {
    const r = Math.floor(Math.random() * data.length);
    [data[i - 1], data[r]] = [data[r], data[i - 1]];
  }
}

shuffleData(fakeData);

export default fakeData;