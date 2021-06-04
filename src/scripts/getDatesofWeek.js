let getDatesofWeek = (weekNum) => {
  const calculateDate = (dateNumber) => {
    const todayDateRef = new Date();

    //Get the first day (Sunday) of the week
    //Sunday is 0 and Satursday is 6, so by minus the today date by today's day
    const firstDayofTargetWeek =
      todayDateRef.getDate() - todayDateRef.getDay() + weekNum * 7;

    //Calculating the month of the day
    var requestedMonth =
      new Date(
        todayDateRef.setDate(firstDayofTargetWeek + dateNumber)
      ).getMonth() + 1;

    //Calculating the date of the day
    var requestedDate = new Date(
      todayDateRef.setDate(firstDayofTargetWeek + dateNumber)
    ).getDate();

    //Calculating the date of the day

    var requestedYear = new Date(
      todayDateRef.setDate(firstDayofTargetWeek + dateNumber)
    ).getFullYear();

    //return the date in dd/mm/yyyy format
    return `${requestedDate}/${requestedMonth}/${requestedYear}`;
  };

  ////

  return {
    Sunday: {
      date: calculateDate(0),
    },
    Monday: {
      date: calculateDate(1),
    },
    Tuesday: {
      date: calculateDate(2),
    },
    Wednesday: {
      date: calculateDate(3),
    },
    Thursday: {
      date: calculateDate(4),
    },
    Friday: {
      date: calculateDate(5),
    },
    Saturday: {
      date: calculateDate(6),
    },
  };
};

module.exports = getDatesofWeek;
