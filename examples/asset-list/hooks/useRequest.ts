import { useState } from 'react';

export const useRequest = <T extends (...args: any) => any>(
  requestFunc: (...args: Parameters<T>) => ReturnType<T>
) => {
  const [data, setData] = useState<Awaited<ReturnType<T>>>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState(false);

  const request = async (...args: Parameters<T>) => {
    setLoading(true);
    try {
      const result = await requestFunc(...args);
      setData(result);
    } catch (err) {
      setError(err || 'Unexpected Error!');
    } finally {
      setLoading(false);
    }
  };

  const cleanUpData = () => {
    setData(undefined);
  };

  return {
    data,
    error,
    loading,
    request,
    cleanUpData,
  };
};
