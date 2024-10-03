import React from 'react'
import Hero from "./components/Hero"
import Feauter from './components/Featuer'
import NewArrivels from './components/NewArrivels'
import Category from './components/category'
import BlogSection from './components/BlogSection'
import ActivitiesToys from './components/Activites'
import ContactUs from './Contact/page'

const page = () => {
  return (
    <div>
      <Hero/>
      <Feauter/>
      <NewArrivels/>
      <Category/>
      <ActivitiesToys/>
      <BlogSection/>
      <ContactUs/>
      
      
    </div>
  )
}

export default page
