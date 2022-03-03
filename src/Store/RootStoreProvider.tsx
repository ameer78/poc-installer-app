//TODO  move this to new dir call it "Providers"
import React, { createContext, ReactNode, useContext } from "react";
import RootStore  from "./RootStore";

let store: RootStore;
const StoreContext = createContext<RootStore | undefined>(undefined);
StoreContext.displayName = "StoreContext";

export const useRootStore = () => {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error("useRootStore must be used within RootStoreProvider");
  }

  return context;
}


export const RootStoreProvider = ({ children }: { children: ReactNode }) => {
  // only create root store once (store is a singleton)
  const root = store ?? new RootStore();
  
  return <StoreContext.Provider value={root}>{children}</StoreContext.Provider>;
}