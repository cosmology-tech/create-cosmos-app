import { useState } from 'react';

export const useRequest = <T>(requestFunc: (...args: any) => Promise<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const request = async (...args: any) => {
    setLoading(true);
    try {
      const result = await requestFunc(...args);
      setData(result);
      if (error) setError('');
    } catch (err) {
      // setData(null);
      setError(err?.message || 'Unexpected Error!');
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    error,
    loading,
    request,
  };
};
