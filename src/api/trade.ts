import axiosInstance from "../config/Api";
import { TradeData } from "../interfaces/Trade";

export const getTrade = async (id: string | undefined): Promise<TradeData[]> => {
  try {
    const result = await axiosInstance.get(`/trades/${id}`);
    return result.data;
  } catch (error) {
    throw new Error('Failed to fetch the trade');
  }
}