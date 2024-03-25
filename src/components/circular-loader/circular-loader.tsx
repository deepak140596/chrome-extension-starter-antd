import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './circular-loader.scss';

function CircularLoader(props) {
  const [degree, setDegree] = useState(0);

  useEffect(() => {
    if (props.success) {
      setDegree(0);
      return;
    }
    if (props.start) {
      const interval = setInterval(increaseCount, 20);
      return () => {
        clearInterval(interval);
      };
    } else {
      setDegree(0);
    }
  }, [degree, props.start, props.success]);

  const increaseCount = () => {
    setDegree(prevCount => (prevCount % 360) + 2);
  };
  return (
    <>
      <div className="circular-progress">
        {!props.success && (
          <>
            {' '}
            <div
              className="base-0"
              style={{ background: `conic-gradient(#0056D6 0deg ${degree}deg, #C7C7C7 ${degree + 1}deg)` }}
            ></div>
            <div className="base-1"></div>
          </>
        )}
        {props.success && (
          <>
            <div className="base-2">
              <img src={'../assets/images/check-circle-filled.svg'} alt="Upload Icon" />
            </div>
          </>
        )}
      </div>
    </>
  );
}

CircularLoader.propTypes = {
  start: PropTypes.bool,
  success: PropTypes.bool,
};

export default CircularLoader;
