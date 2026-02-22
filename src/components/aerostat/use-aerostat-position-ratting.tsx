import { useContext } from "react";
import Provider from "./aerostat-provider";

export const useAerostatPositionRatting = () => useContext(Provider.Context);
