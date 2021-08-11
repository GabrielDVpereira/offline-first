import { AxiosResponse } from 'axios';
import { http } from '../config/http';
import { Item } from '../interfaces/item'

const URL = '/items';

export const getItem = (): Promise<AxiosResponse<Item[]>> => http.get(URL);