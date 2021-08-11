import { AxiosResponse } from 'axios';
import { http } from '../config/http';
import { Item } from '../interfaces/item'

const URL = '/items';

export const getItems = (): Promise<AxiosResponse<Item[]>> => http.get(URL);
export const createItem = (item: Item): Promise<void> => http.post(URL, item);
export const syncItemsDatabase = async (items: Item[]): Promise<void> => {
    await Promise.all(items.map(item => createItem(item)))
};