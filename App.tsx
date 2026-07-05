import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { ErrorBoundary } from "react-error-boundary";
import Toast from "react-native-toast-message";

import { store } from "./src/app/store/store";
import AppNavigator from "./src/app/navigation/AppNavigator";
import { syncOfflineBookings } from "./src/modules/consultation/syncOfflineBookings";
import ErrorFallback from "./src/shared/components/ErrorFallback";
import { ThemeProvider } from "./src/core/theme/ThemeProvider";

export default function App() {
  useEffect(() => {
    syncOfflineBookings();
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <AppNavigator />
          <Toast />
        </ErrorBoundary>
      </ThemeProvider>
    </Provider>
  );
}
