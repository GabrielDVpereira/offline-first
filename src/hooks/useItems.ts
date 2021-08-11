import { useContext } from "react";
import { ItemContext } from '../contexts';

export const useItems = () => useContext(ItemContext);