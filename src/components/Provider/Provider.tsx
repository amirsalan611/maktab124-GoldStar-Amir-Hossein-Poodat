"use client";

import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/components/redux/store";
import { Provider } from "react-redux";

const ProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default ProviderWrapper;
