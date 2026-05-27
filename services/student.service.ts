
import axiosInstance from "@/lib/axios";
import { Student } from "@/types/student";

export const getStudents = async (): Promise<Student[]> => {
  const response = await axiosInstance.get("/api/student/list");

  return response.data.students || response.data;
};