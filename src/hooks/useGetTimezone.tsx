import { useEffect, useState } from 'react';
import { TIMEZONE_ENDPOINT } from '../constants/constant';

type Props = {
  city?: string;
};

export default function useGetTimezone({ city = '' }: Props) {
  const [timezone, setTimezone] = useState('');

  useEffect(() => {
    fetch(`${TIMEZONE_ENDPOINT}/${city}`)
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
