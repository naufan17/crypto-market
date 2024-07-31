import axiosInstance from "../config/Api";
import { TickerData } from "../interfaces/Ticker";

export const getTicker = async (id: string | undefined): Promise<TickerData> => {
  try {
    const result = await axiosInstance.get(`/ticker/${id}`);
    return result.data;
  } catch (err) {
    throw new Error('Failed to fetch the ticker');
  }
}