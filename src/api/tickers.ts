import axiosInstance from "../config/Api";

export const getTicker = async (id: string | undefined) => {
  try {
    const result = await axiosInstance.get(`/ticker/${id}`);
    return result.data;
  } catch (err) {
    throw new Error('Failed to fetch the ticker');
  }
}