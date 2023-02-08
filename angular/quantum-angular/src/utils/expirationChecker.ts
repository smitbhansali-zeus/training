export function CheckExp(enddate: string) {
  var months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  var month = enddate.substring(3, 6);
  var monthnum = months.findIndex((element) => {
    return element === month;
  });
  monthnum += 1;
  var year = Number(enddate.substring(7));
  var day = Number(enddate.substring(0, 2));
  //console.log(day, monthnum, year);
  const newenddate = new Date(year, monthnum, day);
  const today = new Date();
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  const diff = newenddate.getTime() - today.getTime();
  console.log(Math.floor(diff / millisecondsPerDay));
  return Math.floor(diff / millisecondsPerDay);
}
