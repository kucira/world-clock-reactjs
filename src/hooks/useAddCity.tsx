import { useState } from 'react';

export default function useAddCity() {
  const [cities, setCities]: any = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [shortLabel, setShortLabel] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleAddCity = () => {
    if (selectedCity === '') {
      alert('Please select a city');
      return;
    }

    const cityAlreadyAdded = cities.find((city: any) => city.name === selectedCity);

    if (!cityAlreadyAdded) {
      if (cities.length > 3) {
        alert('Max number of Clocks');
        return;
      }
      cities.push({
        name: selectedCity,
        label: shortLabel,
      });
      setCities(cities);

      setShortLabel('');
      setShowModal(false);
      setSelectedCity('');
      return;
    }

    alert(`${selectedCity} Already in the list`);
  };

  const onSelectCity = (e: any) => {
    setSelectedCity(e.target.value);
  };

  const handleInputChange = (e: any) => {
    setShortLabel(e.target.value);
  };

  const handleRemove = (selectedCity: any) => {
    return function (e: any) {
      const filteredCity = cities.filter((city: any) => selectedCity !== city.name);
      setCities(filteredCity);
    };
  };

  return {
    cities,
    setCities,
    handleAddCity,
    showModal,
    setShowModal,
    onSelectCity,
    handleInputChange,
    handleRemove,
  };
}
