import { useState } from 'react';

const splitIntoChunks = <T>(arr: T[], chunkSize: number): T[][] => {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    res.push(chunk);
  }
  return res;
};

export const useQueuedRequests = <T>({
  queueLength,
  queueGap,
}: {
  queueLength: number;
  queueGap?: number;
}) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState(false);

  const sendQueuedRequests = async (requests: Promise<T>[]) => {
    setLoading(true);
    let results: T[] = [];

    const requestQueues = splitIntoChunks<Promise<T>>(requests, queueLength);

    for (const [index, requestQueue] of Object.entries(requestQueues)) {
      let queueResult: T[] = [];

      try {
        queueResult = await Promise.all(requestQueue);
        results = [...results, ...queueResult];
      } catch (error) {
        console.error(error);
        setError(error || 'Unexpected Error!');
        break;
      }

      if (Number(index) !== requestQueues.length - 1 && queueGap) {
        await new Promise((resolve) => setTimeout(resolve, queueGap));
      }
    }

    setData(results);
    setLoading(false);
  };

  return {
    data,
    error,
    loading,
    sendQueuedRequests,
  };
};
