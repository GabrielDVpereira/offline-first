import { AxiosResponse } from 'axios';
import { http } from '../config/http';
import { Item } from '../interfaces/item'

const URL = '/items';
const DELETE_URL = (id: number) => `${URL}/${id}`;

export const getItems = (): Promise<AxiosResponse<Item[]>> => http.get(URL);
export const createItem = (item: Item): Promise<void> => http.post(URL, item);
export const deleteItem = (id: number): Promise<void> => http.delete(DELETE_URL(id));
export const syncItemsDatabase = async (items: Item[]): Promise<void> => {
    await Promise.all(items.map(item => createItem(item)))
};