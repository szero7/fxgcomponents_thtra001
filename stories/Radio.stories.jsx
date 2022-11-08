import React from 'react';
import './style.css';

import  Radio  from '../components/Collection/Radio';

export default {
    title: 'Components-TP1/Radio',
    component: Radio
};

// Trois scénarios possibles pour l'emplacement des valeurs du composant Radio
const Template = (args) => <Radio {...args} />;
export const Bottom = Template.bind({});
Bottom.args = {
    labelPlacement: 'bottom',
};

export const Right = Template.bind({});
Right.args = {
    labelPlacement: 'right'

};

export const Top = Template.bind({});
Top.args = {
    labelPlacement: 'top',
    Disabled: true

};