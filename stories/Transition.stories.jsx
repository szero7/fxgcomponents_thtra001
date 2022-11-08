"Use strict";
import React from 'react';
import './style.css';

import  Transition  from '../components/Collection/Transition';

export default {
    title: 'Components-TP1/Transition',
    component: Transition
};


// Trois scénarios possibles pour le compte à rebours
const Template = (args) => <Transition {...args} />;
export const fastTransition = Template.bind({});
fastTransition.args = {
  speed: 500
};

export const normalTransition = Template.bind({});
normalTransition.args = {
  speed: 1500
};

export const slowTransition = Template.bind({});
slowTransition.args = {
  speed: 3000
};

