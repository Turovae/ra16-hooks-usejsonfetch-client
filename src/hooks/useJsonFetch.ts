import { useEffect, useState } from "react";

function useJsonFetch(url: string, opts?: {}): [data: {status?: string}, loading: Boolean, error: {message: string} | null] {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState<Boolean>(false);
  const [error, setError] = useState<{message: string} | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
  
        const response = await fetch(url, opts)
  
        if (!response.ok) {
          throw new Error('Network error');
        }
  
        const data = await response.json();
  
        setData(data);
        setError(null);
      } catch(err) {
        let message;
        if (err instanceof Error) {
          message = err.message;
        } else {
          message = String(err);
        } 
        setError({message});
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url, opts])

  return [data, loading, error];
}

export default useJsonFetch;
