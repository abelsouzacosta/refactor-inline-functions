type Driver = {
  lateDeliveries: number;
};

export function rating(aDriver: Driver): number {
  return aDriver.lateDeliveries > 5 ? 2 : 1;
}
