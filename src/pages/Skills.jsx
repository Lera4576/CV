import React from 'react';
import SkillCircles from './SkillCircles';

const Skills = () => (
  <div id="skills" className="p-6">
    <h2 className="text-2xl font-semibold mb-2 bg-blue-100 p-2">Skills</h2>
    <ul className="list-disc pl-6">
      <li>HTML5, CSS3 <SkillCircles isLight={true} /></li>
      <li>Figma <SkillCircles isLight={false} /></li>
      <li>JavaScript <SkillCircles isLight={true} /></li>
      <li>React <SkillCircles isLight={true} /></li>
      <li>Git, GitHub <SkillCircles isLight={false} /></li>
      <li>C++ <SkillCircles isLight={true} /></li>
    </ul>
  </div>
);

export default Skills;