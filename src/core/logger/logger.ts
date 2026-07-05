import { ENV } from "../../config/env";

class Logger {
  info(message: string, payload?: unknown) {
    if (ENV.ENABLE_LOGS) {
      console.log("[INFO]", message, payload);
    }
  }

  warn(message: string, payload?: unknown) {
    if (ENV.ENABLE_LOGS) {
      console.warn("[WARN]", message, payload);
    }
  }

  error(message: string, payload?: unknown) {
    console.error("[ERROR]", message, payload);
  }
}

export default new Logger();
