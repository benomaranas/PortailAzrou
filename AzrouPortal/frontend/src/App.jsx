import React from 'react'
import Navbar from './components/Navbar'
import QuickActions from './components/QuickActions'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import Doctors from './pages/Doctors'
import ReportProblem from './pages/ReportProblem'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import ServiceAppointment from './pages/ServiceAppointment'
import Appointment from './pages/Appointment'
import MyAppointments from './pages/MyAppointments'
import MyProfile from './pages/MyProfile'
import OnlinePayments from './pages/OnlinePayments'
import News from './pages/News'
import CityInfo from './pages/CityInfo'
import Dashboard from './pages/Dashboard'
import BookAppointment from './pages/BookAppointment'
import TrackRequest from './pages/TrackRequest'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './pages/Verify'
import { ApiContextProvider } from './context/ApiContext'
import AppContextProvider from './context/AppContext'

const App = () => {
  return (
    <AppContextProvider>
      <ApiContextProvider>
        <div className='mx-4 sm:mx-[10%]'>
          <ToastContainer />
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/doctors' element={<Doctors />} />
            <Route path='/doctors/:speciality' element={<Doctors />} />
            <Route path='/services' element={<Services />} />
            <Route path='/services/civil-registry' element={<Services />} />
            <Route path='/services/urban-planning' element={<Services />} />
            <Route path='/services/economic-development' element={<Services />} />
            <Route path='/services/finance' element={<Services />} />
            <Route path='/services/public-works' element={<Services />} />
            <Route path='/services/health' element={<Services />} />
            <Route path='/services/:department' element={<Services />} />
            <Route path='/book-appointment' element={<BookAppointment />} />
            <Route path='/track-request' element={<TrackRequest />} />
            <Route path='/report-problem' element={<ReportProblem />} />
            <Route path='/online-payments' element={<OnlinePayments />} />
            <Route path='/news' element={<News />} />
            <Route path='/city-info' element={<CityInfo />} />
            <Route path='/login' element={<Login />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/appointment/:docId' element={<Appointment />} />
            <Route path='/appointment/service/:serviceId' element={<ServiceAppointment />} />
            <Route path='/my-appointments' element={<MyAppointments />} />
            <Route path='/my-profile' element={<MyProfile />} />
            <Route path='/verify' element={<Verify />} />
          </Routes>
          <QuickActions />
          <Footer />
        </div>
      </ApiContextProvider>
    </AppContextProvider>
  )
}

export default App