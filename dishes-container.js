import Dishes from './dishes';
import DISHES from './data';
import React from 'react';

const list = Object.keys(DISHES).map(k => DISHES[k]);

export default props => (
  <Dishes dishes={list} width={props.width} />
)
