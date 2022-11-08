"Use strict";
import React from 'react';
import './style.css';

import  Paper  from '../components/Collection/Paper';

export default {
    title: 'Components-TP1/Paper',
    component: Paper
};


// Trois scénarios possibles pour le paper
const Template = (args) => <Paper {...args} />;
export const group1 = Template.bind({});
group1.args = {
    lvl1: 0,
    lvl2: 5
};

export const group2 = Template.bind({});
group2.args = {
    lvl1: 5,
    lvl2: 10
};

export const group3 = Template.bind({});
group3.args = {
    lvl1: 10,
    lvl2: 24
};