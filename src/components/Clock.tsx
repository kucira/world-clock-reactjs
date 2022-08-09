import useGetTimezone from '../hooks/useGetTimezone';
import { getAheadBehind, getCurrentTime, getDiffTime, getTimeFormat } from '../utils/util';
import Button from './Button';
import { useEffect, useRef, useState } from 'react';

let count;

type Props = {
  currentCity?: string;
  currentTime?: any;
  city?: any;
  label?: string;
  abbreviation?: string;
  showModal?: boolean;
  millis?: number;
  handleRemove?: any;
};

export default function Clock({
  city = '',
  currentCity = '',
  currentTime = new Date(),
  label = 'Hometown',
  handleRemove,
}: Props) {
  const { timezone }: any = useGetTimezone({ city });
  const cityTimezone = timezone.timezone;
  const abbreviation = timezone.abbreviation;

  const [localTime, setLocalTime] = useState(new Date(getCurrentTime(timezone.datetime)));

  const aheadBehind = getAheadBehind(timezone.datetime);
  const diffHour = getDiffTime(
    new Date(getCurrentTime(timezone.datetime)),
    new Date(getCurrentTime(currentTime.datetime))
  );

  const diffHourCurrentTime = getDiffTime(new Date(), new Date(getCurrentTime(currentTime.datetime)));

  const interval: any = useRef(null);

  useEffect(() => {
    interval.current = setInterval(() => {
      const time = new Date();
      const hour = time.getHours() === 0 ? 24 : time.getHours();
      time.setHours(
        aheadBehind.includes('ahead')
          ? time.getHours() + diffHour.diff - diffHourCurrentTime.diff
          : hour - diffHourCurrentTime.diff - Math.abs(diffHour.diff)
      );
      setLocalTime(time);
    }, 1000);

    return () => {
      clearInterval(interval.current);
    };
  }, [timezone]);

  return (
    <div className="hover:cursor-pointer hover:drop-shadow-2xl  my-4 min-h-[25vh] min-w-[25vh] max-h-[25vh] drop-shadow-lg">
      <div className="bg-white rounded-md h-full w-full flex flex-col justify-center items-center">
        <div className="h-full text-2xl text-center">
          <p className="capitalize">{cityTimezone?.split('/')[1].replace('_', ' ')}</p>
          <p className="text-lg">{label}</p>
        </div>

        <div className="h-full text-5xl">{getTimeFormat(localTime).label}</div>

        <div className="h-full">
          <p className="uppercase text-center">{abbreviation}</p>
          <p>{`${diffHour.diff === 0 ? '' : `${diffHour.label} ${currentCity?.split('/')[1]}`}`}</p>
        </div>

        <Button styleContainer="pb-12" label="Remove" onClick={handleRemove(city)} />
      </div>
    </div>
  );
}
