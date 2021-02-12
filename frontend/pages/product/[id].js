/* eslint-disable react/prop-types */
import React from 'react';
import SingleProduct from '../../components/SingleProduct';

export default function SingleProductPage({ query: { id } }) {
  return <SingleProduct id={id} />;
}
