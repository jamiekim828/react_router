import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

export default function CountryDetail() {
  // get country name
  const params = useParams();
  const name = params.name;

  // props from Parent Component Link
  const location = useLocation();
  const country = location.state;

  // language variable to use
  const language = Object.values(country.languages);

  return (
    <div>
      <h1>This country is {name}</h1>
      <p>
        {name} is located in {country.region}.
      </p>
      <p>
        In {name}, people speak in {language}
      </p>
      <a href={`${country.maps.googleMaps}`} target='_blank' rel='noreferrer'>
        Visit to see the map
      </a>
    </div>
  );
}
