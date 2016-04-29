import Dish from './dish-container';
import Dishes from './dishes-container';
import React from 'react';

export const panels = {
  '/': {
    type: 'Dishes',
    width: 360
  },
  '/:name': {
    type: 'Dish',
    props: {
      'name': ':name'
    },
    width: 360
  }
}

export const lookup = [
  '/:name'
]

export const types = {
  Dish,
  Dishes
}
