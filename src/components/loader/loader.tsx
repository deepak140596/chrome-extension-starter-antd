// LoaderComponent.js

import React from 'react';
import './loader.scss'; // You can customize the styles in a separate CSS file

const LoaderComponent = ({ isLoading }) => {
    return (
      <>
        {isLoading && (
          <div className="loader-container">
            <div className="loader-card">
              <div className="dot-container">
                <div className="lds-ripple"><div></div><div></div></div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  };

export default LoaderComponent;
