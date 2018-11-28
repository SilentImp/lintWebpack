import Cities from './Cities';

(function () {
  const citys = new Cities();

  citys.add('Kyiv');
  citys.add('Minsk');
  citys.add('Kazan');
  citys.add('Istanbul');
  citys.add('Kyiv');

  console.log(citys.get());
}());
