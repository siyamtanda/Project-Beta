import React, { useState, useEffect } from 'react';
import "../styles/Section4.css";
import axios from 'axios';

import Section4IconBBC from '../assets/bbc-black.png';
import Section4IconDistell from '../assets/distell-black.png';
import Section4IconEngen from '../assets/engen-black.png';
import Section4IconLiquid from '../assets/liquid.png';
import Section4IconMicrosoft from '../assets/microsoft-black.png';
import Section4IconMultichoice from '../assets/multichoice-black.png';
import Section4IconNike from '../assets/nike-black.png';
import Section4IconPNP from '../assets/pnp-black.png';
import Section4IconSanlam from '../assets/sanlam-black.png';
import Section4IconSantam from '../assets/santam-black.png';
import Section4IconSpotify from '../assets/spotify-black.png';
import Section4IconTFG from '../assets/tfg-black.png';
import Section4IconTymeBank from '../assets/tyme-bank-black.png';
import Section4IconVisa from '../assets/visa-black.png';
import Section4IconWesgro from '../assets/wesgrow-black.png';

const brandsData = [
  'VISA', 'TymeBank', 'Spotify', 'Microsoft', 'ENgen',
  'Nike', 'Wesgro', 'Multichoice', 'PicknPay', 'Liquid',
  'Sanlam', 'Santam', 'BBC'
];

// Create a mapping of brand names to their corresponding icons
const brandIcons = {
  'BBC': Section4IconBBC,
  'Distell': Section4IconDistell,
  'Engen': Section4IconEngen,
  'Liquid': Section4IconLiquid,
  'Microsoft': Section4IconMicrosoft,
  'Multichoice': Section4IconMultichoice,
  'Nike': Section4IconNike,
  'PicknPay': Section4IconPNP,
  'Sanlam': Section4IconSanlam,
  'Santam': Section4IconSantam,
  'Spotify': Section4IconSpotify,
  'TFG': Section4IconTFG,
  'TymeBank': Section4IconTymeBank,
  'VISA': Section4IconVisa,
  'Wesgro': Section4IconWesgro,
};

const Section4 = () => {
  const [brands, setBrands] = useState(brandsData);

  const sortBrands = () => {
    const sortedBrands = [...brands].sort();
    setBrands(sortedBrands);
  };

  const filterBrands = (filterText) => {
    const filteredBrands = brandsData.filter(brand => brand.toLowerCase().includes(filterText.toLowerCase()));
    setBrands(filteredBrands);
  };
  
  // Fetching data with axios from the sever 
  
  /* 
  const fetchBrands = async () => {
    try {
      const response = await axios.get('/api/brands'); 
      setBrands(response.data);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };
  
  */


  useEffect(() => {
    // Initially, load brands or data from the API here
    /* fetchBrands();*/
  }, []);

  return (
    <div className="section4">
      <h2>Trusted by leading brands</h2>
      <div className="brand-list">
        {brands.map((brand, index) => (
          <div key={index} className="brand-item">
            {/* Display brand icons here */}
            <img src={brandIcons[brand]} alt={`${brand} Icon`} className="brand-icon" />
            <div className="brand-name">{brand}</div>
          </div>
        ))}
      </div>
      <div className="controls">
        <button onClick={sortBrands}>Sort Alphabetically</button>
        <input
          type="text"
          placeholder="Filter Brands"
          onChange={(e) => filterBrands(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Section4;
