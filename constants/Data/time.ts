export enum TimeOfDay {
  ALL = -1,
  DAWN,
  DAY,
  DUSK,
  NIGHT
}


export function getTimeOfDay(date: Date = new Date()): TimeOfDay {
  const hour = date.getHours();

  if (hour >= 5 && hour < 8) {
    return TimeOfDay.DAWN;
  }
  if (hour >= 8 && hour < 18) {
    return TimeOfDay.DAY;
  }
  if (hour >= 18 && hour < 21) {
    return TimeOfDay.DUSK;
  }
  return TimeOfDay.NIGHT;
}