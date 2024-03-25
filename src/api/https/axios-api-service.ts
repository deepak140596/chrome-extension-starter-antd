// ApiService.ts
import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';

export const fetchData = async (url: string): Promise<any> => {
  try {
    const response: AxiosResponse = await axios.get(url);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error; // Handle the error appropriately in the calling code
  }
};

export class ApiService {
  private static async makeApiCall(options: AxiosRequestConfig): Promise<any> {
    try {
      const response = await axios(options);
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError;
      console.error('API call failed:', axiosError.response?.status);
      throw error;
    }
  }

  static async get<T>(url: string, headers?: Record<string, string>): Promise<T> {
    const options: AxiosRequestConfig = {
      method: 'GET',
      url,
      headers,
    };

    return this.makeApiCall(options);
  }

  static async post<T>(url: string, data?: Record<string, any>, headers?: Record<string, string>): Promise<T> {
    const options: AxiosRequestConfig = {
      method: 'POST',
      url,
      headers,
      data,
    };

    return this.makeApiCall(options);
  }
}
