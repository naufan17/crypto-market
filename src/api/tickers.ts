import axiosInstance from "../config/api";
import { TickerData } from "../types/Ticker";

export const getTicker = async (id: string | undefined): Promise<TickerData> => {
  try {
    const result = await axiosInstance.get(`/ticker/${id}`);
    return result.data;
  } catch (err) {
    throw new Error('Failed to fetch the ticker');
  }
}