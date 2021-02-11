/* eslint-disable react/prop-types */
import { useRouter } from 'next/router';
import React from 'react';
import SingleProduct from '../../components/SingleProduct';

export default function SingleProductPage() {
  const { query } = useRouter();
  return <SingleProduct id={query.id} />;
}
