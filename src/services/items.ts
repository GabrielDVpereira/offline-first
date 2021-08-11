import { AxiosResponse } from 'axios';
import { http } from '../config/http';
import { Item } from '../interfaces/item'

const URL = '/items';

export const getItems = (): Promise<AxiosResponse<Item[]>> => http.get(URL);
export const crateItem = (item: Item): Promise<void> => http.post(URL, item);
export const syncItemsDatabase = (items: Item[]): Promise<void> => http.put(URL, items);