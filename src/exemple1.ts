type Driver = {
  lateDeliveries: number;
};

export function rating(aDriver: Driver): number {
  return moreThanFiveLateDeliveries(aDriver) ? 2 : 1;
}

function moreThanFiveLateDeliveries(aDriver: Driver): boolean {
  return aDriver.lateDeliveries > 5;
}

let driver: Driver = {
  lateDeliveries: 12,
};
