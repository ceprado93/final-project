import React from 'react';
import PropTypes from 'prop-types';

function Spy(props) {
  const styles = {
    transform: `scale(${props.scale})`,
  };

  return (
    <svg
      width="31"
      height="39"
      xmlns="http://www.w3.org/2000/svg"
      style={styles}
    >
      <g fill="currentColor">
      </g>
    </svg>
  );
}

Spy.propTypes = {
  scale: PropTypes.string,
};

export default Spy;