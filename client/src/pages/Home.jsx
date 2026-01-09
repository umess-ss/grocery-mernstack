import React from 'react'
import Mainbanner from '../components/Mainbanner'
import Categories from '../components/Categories'
import Bestseller from '../components/Bestseller'
import BottomBanner from '../components/BottomBanner'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'

const Home = () => {
  return (
    <div className='mt-10'>
        <Mainbanner/>
        <Categories/>
        <Bestseller/>
        <BottomBanner/>
        <NewsLetter/>
    </div>
  )
}

export default Home