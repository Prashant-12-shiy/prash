import React from 'react'
import { useMutation, useQuery } from '@tanstack/react-query';
import axios from "axios"
import { useParams } from 'react-router-dom';


export const Product = () => {

  const params = useParams();

  const mutation = useMutation({
    mutationFn: (newProduct) => {
      return axios.put(`https://dummyjson.com/products/${params.productId}`, newProduct)
    },
  })



 const fetchProducts = async () => {
  const response = await fetch(`https://dummyjson.com/products/${params.productId}`);

  const data = await response.json();

  return data;
};


  const { isLoading, error, data:product, } = useQuery({
    queryKey: ["product", params.productId],
    queryFn: fetchProducts,
    // staleTime: 10000
  });

if (isLoading) {
  return <h3>Laoding....</h3>
}

if (error) {
  return <h3>Error: {error.message}</h3>
}

if (mutation.isPending) {
  return <h3>Updating....</h3>
}

if (mutation.isError) {
  return <h3>Error: {mutation.error.message}</h3>
}

  return (
    <>
    <div>Product: {product.title}</div>
    

    <button
      onClick={() => {
       mutation.mutate({ title: 'Updated Peoduct' })
       }}
    >
    Create Product
    </button>
    </>
    
      
  )
}
