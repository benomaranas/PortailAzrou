import React from 'react'
import Header from '../components/Header'
import ServicesMenu from '../components/ServicesMenu'
import QuickServices from '../components/QuickServices'
import Banner from '../components/Banner'
import NewsAnnouncements from '../components/NewsAnnouncements'
import CityStats from '../components/CityStats'
import CitizenTestimonials from '../components/CitizenTestimonials'
import EmergencyServices from '../components/EmergencyServices'
import TourismHighlights from '../components/TourismHighlights'
import FeaturedProjects from '../components/FeaturedProjects'

const Home = () => {
  return (
    <div>
      <Header />
      <ServicesMenu />
      <QuickServices />
      <CityStats />
      <NewsAnnouncements />
      <FeaturedProjects />
      <TourismHighlights />
      <CitizenTestimonials />
      <EmergencyServices />
      <Banner />
    </div>
  )
}

export default Home