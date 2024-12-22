import React from 'react';
import PropTypes from 'prop-types';

const SkillCircles = ({ isLight }) => (
  <div className="flex space-x-1 mt-2">
    {Array.from({ length: 6 }).map((_, index) => (
      <div
        key={index}
        className={`w-2.5 h-2.5 rounded-full ${index === 5 && isLight ? 'bg-blue-300' : 'bg-blue-700'}`}
      ></div>
    ))}
  </div>
);

SkillCircles.propTypes = {
  isLight: PropTypes.bool.isRequired,
};

export default SkillCircles;