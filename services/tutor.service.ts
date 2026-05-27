import axiosInstance from "@/lib/axios";
import { Tutor } from "@/types/tutor";

export const getTutors = async (): Promise<Tutor[]> => {
  const response = await axiosInstance.get("/api/tutor/list");

  return response.data.tutors || response.data;
};