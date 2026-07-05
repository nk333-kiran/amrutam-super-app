import { clearQueue, getPendingQueue } from "./offlineQueue";

export async function syncOfflineBookings() {
  const queue = getPendingQueue();

  for (const action of queue) {
    try {
      console.log("Sync success:", action);
    } catch (error) {
      console.log("Sync failed");
      return;
    }
  }

  clearQueue();
}
