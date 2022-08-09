import Card from './Card';
import Container from './Container';
import ListClock from './ListClock';
import MainClock from './MainClock';
import useGetCurrentTimebyIp from '../hooks/useGetCurrentTimebyIp';
import { getAheadBehind, getCurrentTime, getDiffTime } from '../utils/util';
import useAddCity from '../hooks/useAddCity';
import Button from './Button';
import Modal from './Modal';
import { useEffect, useRef, useState } from 'react';

export default function WorldClock() {
  const { showModal, setShowModal, onSelectCity, handleAddCity, handleInputChange, cities, handleRemove } = useAddCity();
  const { timezone: currentTimezone }: any = useGetCurrentTimebyIp();
 
  const [localTime , setLocalTime] = useState(new Date(getCurrentTime(currentTimezone.datetime)));

  const aheadBehind = getAheadBehind(currentTimezone.datetime)
  const diffHour = getDiffTime(
    new Date(),
    new Date(getCurrentTime(currentTimezone.datetime))
  );

  const interval: any = useRef(null);

  useEffect(() => {
    interval.current = setInterval(() => {
      const time = new Date();
      const hour = time.getHours() === 0 ? 24 : time.getHours();
      time.setHours(aheadBehind.includes('ahead') ? time.getHours() + Math.abs(diffHour.diff) : hour - diffHour.diff);
      setLocalTime(time);
    }, 1000);

    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <Container>
      <Card>
        <div className="w-full h-full flex flex-col">
          <MainClock
            city={currentTimezone?.timezone?.split('/')[1]}
            time={localTime}
          />
          <ListClock
            handleRemove={handleRemove}
            currentTime={currentTimezone}
            cities={cities}
            showModal={showModal}
          />
          <Button
            styleContainer="pb-12"
            label="Add City"
            onClick={() => {
              setShowModal(true);
            }}
          />
        </div>
      </Card>

      {showModal && (
        <Modal
          title="Add City"
          subtitle="Please Select City to Add"
          onCancel={() => {
            setShowModal(false);
          }}
          onOk={handleAddCity}
        >
          <select onChange={onSelectCity}>
            <option value="">Select</option>
            <option value="Asia/Singapore">Singapore (Asia/Singapore)</option>
            <option value="Asia/Tokyo">Tokyo (Asia/Tokyo)</option>
            <option value="Asia/Seoul">Seoul (Asia/Seoul)</option>
            <option value="Australia/Melbourne">Melbourne (Australia/Melbourne)</option>
            <option value="Australia/Sydney">Sydney (Australia/Sydney)</option>
            <option value="Europe/London">London (Europe/London)</option>
            <option value="Europe/Paris">Paris (Europe/Paris)</option>
            <option value="Europe/Berlin">Berlin (Europe/Berlin)</option>
            <option value="America/New_York">New York (America/New_York)</option>
            <option value="America/Los_Angeles">Los Angeles (America/Los_Angeles)</option>
          </select>

          <div>
            <label htmlFor="label">Short Label</label>
            <br />
            <input
              onChange={handleInputChange}
              name="label"
              type="text"
              placeholder="Input Short Label"
              maxLength={20}
            />
          </div>
        </Modal>
      )}
    </Container>
  );
}
