import dayjs from "dayjs";

 export const data = [
  {
    name: 'Restaurant A',
    schedule: [
      {
        day: 'Monday',
        openFrom: '10:00',
        closeAt: '18:00',
      },
      {
        day: 'Tuesday',
        openFrom: '16:25',
        closeAt: '19:30',
      },
      {
        day: 'Wednesday',
        openFrom: '09:00',
        closeAt: '17:30',
      },
      {
        day: 'Thursday',
        openFrom: '12:00',
        closeAt: '20:00',
      },
      {
        day: 'Friday',
        openFrom: '10:30',
        closeAt: '18:30',
      },
      {
        day: 'Saturday',
        openFrom: '11:00',
        closeAt: '19:00',
      },
      {
        day: 'Sunday',
        openFrom: '13:00',
        closeAt: '21:00',
      },
    ],
  },
  {
    name: 'Restaurant B',
    schedule: [
      {
        day: 'Monday',
        openFrom: '11:00',
        closeAt: '19:00',
      },
      {
        day: 'Tuesday',
        openFrom: '10:30',
        closeAt: '18:30',
      },
      {
        day: 'Wednesday',
        openFrom: '09:30',
        closeAt: '17:30',
      },
      {
        day: 'Thursday',
        openFrom: '12:30',
        closeAt: '20:30',
      },
      {
        day: 'Friday',
        openFrom: '11:30',
        closeAt: '19:30',
      },
      {
        day: 'Saturday',
        openFrom: '12:00',
        closeAt: '20:00',
      },
      {
        day: 'Sunday',
        openFrom: '14:00',
        closeAt: '22:00',
      },
    ],
  },
];





export const isRestaurantOpen = (schedule: any[]): boolean => {
  // Get the current day of the week
  const currentDayOfWeek = dayjs().format("dddd"); // Get the full day name

  // Find the day-specific schedule for the current day of the week
  const currentSchedule = schedule.find((item) => item.day === currentDayOfWeek);

  // Check if the restaurant is closed for the current day
  if (!currentSchedule) {
    return false;
  }

  // Get the current time
  const currentTime = dayjs();

  // Split the opening and closing times into hours and minutes
  const openFromParts = currentSchedule.openFrom.split(":");
  const closeAtParts = currentSchedule.closeAt.split(":");

  if (openFromParts.length !== 2 || closeAtParts.length !== 2) {
    // Invalid time format
    return false;
  }

  const openFromHour = parseInt(openFromParts[0], 10);
  const openFromMinute = parseInt(openFromParts[1], 10);

  // Convert currentSchedule.closeAt to the current date
  const closeAtTime = currentTime
    .set("hour", parseInt(currentSchedule.closeAt, 10))
    .set("minute", 0); // Assume minutes are always 00

  // Construct dayjs objects with the parsed time
  const openFromTime = currentTime.set("hour", openFromHour).set("minute", openFromMinute);

  // Check if the current time is within the opening and closing hours for today
  return currentTime.isAfter(openFromTime) && currentTime.isBefore(closeAtTime);
};
