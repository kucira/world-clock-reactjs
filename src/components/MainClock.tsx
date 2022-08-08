import { getTimeFormat } from '../utils/util';

type Props = {
  city?: string;
  time?: any;
};

export default function MainClock({ city = '', time }: Props) {

  return (
    <div className="w-full h-full flex justify-center">
      <div className="flex justify-center flex-col">
        <h1 className="text-4xl text-center py-2">{city || ''}</h1>
        <h2 className="text-7xl text-center">{getTimeFormat(new Date(time?.getTime())).label || ''}</h2>
      </div>
    </div>
  );
}
