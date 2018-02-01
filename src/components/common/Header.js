import React from 'react';
import giphy from "../../utils/giphy";


const Header = () => {
  return (
    <div className="d-flex flex-column justify-content-end header">
      <h1 className="text-center">Acme</h1>
      <h2 className="text-center">Search a Gif</h2>
    </div>
  );
};

export default Header;
