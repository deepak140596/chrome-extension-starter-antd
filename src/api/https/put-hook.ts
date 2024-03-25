import { useState, useEffect } from 'react';

interface ApiResponse<T> {
  data: T;
}

const usePutApi = <T>(url: string, headers: HeadersInit, body: Record<string, unknown>) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const putData = async () => {
      try {
        setLoading(true);
        const options: RequestInit = {
          method: 'PUT',
          headers: JSON.parse(JSON.stringify(headers)),
          body: JSON.stringify(body),
        };

        const response = await fetch(url, options);
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

    putData();
  }, []);

  return { data, loading, error };
};

export default usePutApi;
