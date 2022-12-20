import React from 'react';

import {Product, FooterBanner, HeroBanner} 
from '../components';
import {client} from '../Lib/client'

const Home = ({products, bannerData, fbannerData}) => {
  return (
    <>
     <HeroBanner heroBanner={bannerData.length &&
    bannerData[0]}/>
      
     <div className='products-heading'>
      <h2>My Small Town Store</h2>
      <p>A indentity of a small scale bu siness</p>
     </div>

     <div className='products-container'>
      {products?.map(
        (product) => <Product key={product._id} product={product} />
      )}
     </div>
    <FooterBanner footerbanner={fbannerData && 
     fbannerData[0]}/>
    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type  == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type  == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const fbannerQuery = '*[_type  == "fbanner"]';
  const fbannerData = await client.fetch(fbannerQuery);
  return {
    props: {products, bannerData, fbannerData}
  }

 

 
}

export default Home