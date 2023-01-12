type Driver = {
  lateDeliveries: number;
};

export function rating(aDriver: Driver): number {
  return aDriver.lateDeliveries > 5 ? 2 : 1;
}

function moreThanFiveLateDeliveries(aDriver: Driver): boolean {
  return aDriver.lateDeliveries > 5;
}
