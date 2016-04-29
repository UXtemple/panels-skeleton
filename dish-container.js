import Dish from './dish';
import DISHES from './data';
import React from 'react';

export default props => (
  <Dish {...DISHES[props.name]} width={props.width} />
)
