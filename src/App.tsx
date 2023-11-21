import React from "react";
import MainNavigationContainer from "./navigation";
import { QueryClient, QueryClientProvider } from "react-query";
import Toast from "react-native-toast-message";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MainNavigationContainer />
      <Toast />
    </QueryClientProvider>
  );
};

export default App;
