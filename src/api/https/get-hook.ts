import { useState, useEffect } from 'react';

interface ApiResponse<T> {
  data: T;
}

const useGetApi = <T>(url: string, initialData: T | null = null) => {
  const [data, setData] = useState<T | null>(initialData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const result: ApiResponse<T> = await response.json();
        setData(result.data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error);
        } else {
          setError(new Error('An unknown error occurred.'));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useGetApi;
