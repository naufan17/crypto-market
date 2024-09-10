import axiosInstance from "../config/api";
import { Summary } from "../types/Summaries";

export const getSummary = async (): Promise<Summary> => {
  try {
    const result = await axiosInstance.get('/summaries');
    return result.data;
  } catch (err) {
    throw new Error('Failed to fetch the summaries');
  }
}