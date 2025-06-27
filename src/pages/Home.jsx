import React from 'react'
import Hero from '../components/Hero'
import CategorySlider from '../components/CategorySlider'
import ProductTabs from '../components/ProductTabs'
import PromoCards from '../components/ProductCard'
import MiniProducts from '../components/MiniProducts'
import Banner from '../components/Banner'

export default function Home() {
  return (
    <div>
      <Hero />
      <CategorySlider />
      <ProductTabs />
      <PromoCards />
      <MiniProducts />
      <Banner />
    </div>
  )
}
