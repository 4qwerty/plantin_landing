import React from 'react';

function Advert() {
  return (
    <div className="block">
      <div className="block-elem">
        <img src="/img/logo-img.png" alt="logo"/>
        <p className="elem-header">Get unlimited access to exclusive articles</p>
        <p className="elem-text">Get rid of limits and read everything you wish</p>
        <button>Try For Free</button>
      </div>

      <div className="block-img">
        <img src="/img/block-img.png" alt="block image"/>
      </div>
    </div>
  );
}

export default Advert;