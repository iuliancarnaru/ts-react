import React from 'react';
import { useState } from 'react';

const GuestList: React.FC = () => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState<string[]>([]);

  const onButtonClick = () => {
    setName('');
    setGuests([...guests, name]);
  };

  return (
    <div>
      <h3>Guest list</h3>
      <ul>
        {guests.map((guest) => (
          <li key={guest}>{guest}</li>
        ))}
      </ul>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button type="button" onClick={onButtonClick}>
        Add Guest
      </button>
    </div>
  );
};

export default GuestList;
