type OfflineAction = {
  type: "BOOK_SLOT";
  payload: any;
};

let queue: OfflineAction[] = [];

export function addBookingToQueue(action: OfflineAction) {
  queue.push(action);
}

export function getPendingQueue() {
  return queue;
}

export function clearQueue() {
  queue = [];
}
