import { useEffect, useState } from 'react';
import { TIMEZONE_IP_ENDPOINT } from '../constants/constant';

export default function useGetCurrentTimebyIp() {
  const [timezone, setTimezone] = useState('');
  
  useEffect(() => {
    fetch(`${TIMEZONE_IP_ENDPOINT}`)
      .then(async (res: any) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }

        const json = await res.json();
        setTimezone(json);
      })
      .catch(err => console.error(err));
     
  }, []);

  return {
    timezone,
    setTimezone,
  };
}
