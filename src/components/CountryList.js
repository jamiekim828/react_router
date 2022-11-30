import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const url = 'https://restcountries.com/v3.1/';

export default function CountryList() {
  // set state
  const [country, setCountry] = useState([]);

  // get data
  const getData = async () => {
    const results = await (await fetch(`${url}/all`)).json();
    setCountry(results);
  };

  // useEffect getting the data only once
  useEffect(() => {
    getData();
  }, []);

  // to show only the first 10 countries
  const slicedArray = country.slice(0, 10);

  // render country flags as link to detail page
  return (
    <div>
      <h1>Click the flag to see the information of this country!</h1>
      {slicedArray.map((c, i) => {
        return (
          <div key={i}>
            <Link to={`/country/${c.name.common}`} state={c}>
              <img src={c.flags.png} alt={c.name.common} />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
