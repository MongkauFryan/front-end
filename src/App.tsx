import React from 'react';
import './App.css';
import './w3.css';
import PropsComponent from './course/cardcomponent';

function App() {
  return (
    <div className="w3-container w3-center">
      {/* Tambahkan judul showroom di sini */}
      <h1 className="w3-padding w3-xlarge">Showroom Fryxman</h1>
      <hr />
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', padding: '20px', flexWrap: 'wrap' }}>
        <PropsComponent
          carName="Tesla Model S"
          imageSrc="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          year={2023}
          isElectric={true}
        />
        <PropsComponent
          carName="Ford Mustang"
          imageSrc="https://images.unsplash.com/photo-1602200059552-39ed78989991?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          year={2022}
          isElectric={false}
        />
        <PropsComponent 
          carName="Honda Civic Type R"
          imageSrc="https://c4.wallpaperflare.com/wallpaper/677/198/368/honda-civic-type-r-honda-civic-fk-honda-civic-fk8-honda-mugen-jdm-hd-wallpaper-thumb.jpg"
          year={2024}
          isElectric={false}
        />
        <PropsComponent
          carName="Nissan Leaf"
          imageSrc="https://www.blackhawkjapan.com/cdn/shop/products/KWAM002186_01_800x.jpg?v=1558090156"
          year={2023}
          isElectric={true}
        />
        <PropsComponent
          carName="Chevrolet Corvette"
          imageSrc="https://images.unsplash.com/photo-1612071078206-bc912b559e3a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          year={2024}
          isElectric={false}
        />
      </div>
    </div>
  );
}

export default App;