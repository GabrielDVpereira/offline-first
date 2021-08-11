import { useContext } from "react";
import { ConectionContext } from '../contexts';

export const useConnectionInfo = () => useContext(ConectionContext);