import React, { useEffect, useState } from 'react';
import './Cards.css';
import CardItem from './CardItem';
import axios from 'axios';

function Cards() {
  const [adventures, setAdventures] = useState([]);

  useEffect(() => {
    const fetchAdventures = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/adventures/get-all-adventures');
        setAdventures(response.data);
      } catch (error) {
        console.error('Error fetching adventures:', error);
      }
    };

    fetchAdventures();
  }, []);

  // Function to split the adventures into chunks of 3
  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const adventureChunks = chunkArray(adventures, 3);

  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          {adventureChunks.map((chunk, index) => (
            <ul key={index} className='cards__items'>
              {chunk.map((adventure) => (
                <CardItem 
                  key={adventure.id}
                  src={adventure.image}
                  text={adventure.description}
                  label={adventure.title}
                  path={`/adventures/${adventure.id}`}
                />
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cards;
