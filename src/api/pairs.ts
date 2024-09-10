import axiosInstance from "../config/api";
import { Pair } from '../types/Pairs';

export const getPair = async (): Promise<Pair[]> => {
  try {
    const result = await axiosInstance.get('/pairs');
    return result.data;
  } catch (err) {
    throw new Error('Failed to fetch the pairs');
  }
}