import Clock from './Clock';

type Props = {
  currentTime: any;
  cities: any;
  showModal?: boolean;
  handleRemove?: any;
};

export default function ListClock({ currentTime, cities, showModal,  handleRemove }: Props) {
  return (
    <>
      <div className="h-full flex flex-row justify-evenly">
        {cities.map((c: any) => {
          return (
            <Clock
              key={c.name}
              city={c.name}
              currentCity={currentTime.timezone}
              currentTime={currentTime}
              label={c.label}
              showModal={showModal}
              handleRemove={handleRemove}
            />
          );
        })}
      </div>
    </>
  );
}
