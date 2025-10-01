import React from 'react';

type CarProps = {
  carName: string;
  imageSrc: string;
  year: number;
  isElectric: boolean;
};


const PropsComponent = ({ carName, imageSrc, year, isElectric }: CarProps) => {
  return (
    <div className="w3-card-4 w3-dark-grey">
      <div className="w3-container w3-center">
        <h2>Informasi Mobil</h2>
        <img src={imageSrc} alt={`Gambar ${carName}`} style={{ width: '100%', maxWidth: '300px', height: 'auto' }} />

        <h4>{carName}</h4>
        
        <p>Tahun: {year}</p>
        <p>Status: {isElectric ? 'Mobil Listrik' : 'Bukan Mobil Listrik'}</p>

        <div style={{ padding: '10px 0' }}>
          <button className="w3-button w3-green w3-round-large" style={{ marginRight: '10px' }}>Detail</button>
          <button className="w3-button w3-red w3-round-large">Bandingkan</button>
        </div>
      </div>
    </div>
  );
};

export default PropsComponent;