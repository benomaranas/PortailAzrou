import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {

  const navigate = useNavigate()

  const [showMenu, setShowMenu] = useState(false)
  const [showServicesDropdown, setShowServicesDropdown] = useState(false)
  const [showCitizenDropdown, setShowCitizenDropdown] = useState(false)
  const { token, setToken, userData } = useContext(AppContext)

  const logout = () => {
    localStorage.removeItem('token')
    setToken(false)
    navigate('/login')
  }

  return (
    <div className='navbar-container flex items-center justify-between text-sm py-4 mb-5 border-b border-b-[#ADADAD]'>
      <img onClick={() => navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt="" />
      
      {/* Desktop Navigation */}
      <ul className='navbar-desktop-items md:flex items-start gap-5 font-medium hidden'>
        <NavLink to='/' >
          <li className='py-1'>HOME</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        
        {/* Services Dropdown */}
        <div className='relative group' 
             onMouseEnter={() => setShowServicesDropdown(true)}
             onMouseLeave={() => setShowServicesDropdown(false)}>
          <li className='py-1 cursor-pointer flex items-center gap-1'>
            SERVICES
            <img className='w-2.5' src={assets.dropdown_icon} alt="" />
          </li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
          {showServicesDropdown && (
            <div className='absolute top-full left-0 pt-2 z-20'>
              <div className='bg-white border border-gray-200 rounded-lg shadow-lg min-w-48 p-2'>
                <p onClick={() => navigate('/services')} className='px-3 py-2 hover:bg-gray-100 cursor-pointer rounded'>All Services</p>
                <p onClick={() => navigate('/services/civil-registry')} className='px-3 py-2 hover:bg-gray-100 cursor-pointer rounded'>Civil Registry</p>
                <p onClick={() => navigate('/services/urban-planning')} className='px-3 py-2 hover:bg-gray-100 cursor-pointer rounded'>Urban Planning</p>
                <p onClick={() => navigate('/services/finance')} className='px-3 py-2 hover:bg-gray-100 cursor-pointer rounded'>Finance Department</p>
                <p onClick={() => navigate('/services/public-works')} className='px-3 py-2 hover:bg-gray-100 cursor-pointer rounded'>Public Works</p>
                <p onClick={() => navigate('/services/health')} className='px-3 py-2 hover:bg-gray-100 cursor-pointer rounded'>Health Services</p>
              </div>
            </div>
          )}
        </div>

        {/* Appointment Booking */}
        <NavLink to='/book-appointment' >
          <li className='py-1'>BOOK APPOINTMENT</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>

        {/* Citizen Portal Dropdown */}
        <div className='relative group'
             onMouseEnter={() => setShowCitizenDropdown(true)}
             onMouseLeave={() => setShowCitizenDropdown(false)}>
          <li className='py-1 cursor-pointer flex items-center gap-1'>
            CITIZEN PORTAL
            <img className='w-2.5' src={assets.dropdown_icon} alt="" />
          </li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
          {showCitizenDropdown && (
            <div className='absolute top-full left-0 pt-2 z-20'>
              <div className='bg-white border border-gray-200 rounded-lg shadow-lg min-w-48 p-2'>
                <p onClick={() => navigate('/report-problem')} className='px-3 py-2 hover:bg-gray-100 cursor-pointer rounded'>Report Issues</p>
                <p onClick={() => navigate('/online-payments')} className='px-3 py-2 hover:bg-gray-100 cursor-pointer rounded'>Pay Bills</p>
                <p onClick={() => navigate('/track-request')} className='px-3 py-2 hover:bg-gray-100 cursor-pointer rounded'>Track Requests</p>
                <p onClick={() => navigate('/news')} className='px-3 py-2 hover:bg-gray-100 cursor-pointer rounded'>News & Updates</p>
                <p onClick={() => navigate('/city-info')} className='px-3 py-2 hover:bg-gray-100 cursor-pointer rounded'>City Information</p>
              </div>
            </div>
          )}
        </div>

        <NavLink to='/about' >
          <li className='py-1'>ABOUT AZROU</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/contact' >
          <li className='py-1'>CONTACT</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
      </ul>

      <div className='flex items-center gap-4 '>
        {
          token && userData
            ? <div className='flex items-center gap-2 cursor-pointer group relative'>
              <img className='w-8 rounded-full' src={userData.image} alt="" />
              <img className='w-2.5' src={assets.dropdown_icon} alt="" />
              <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                <div className='min-w-48 bg-gray-50 rounded flex flex-col gap-4 p-4'>
                  <p onClick={() => navigate('/dashboard')} className='hover:text-black cursor-pointer'>Dashboard</p>
                  <p onClick={() => navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                  <p onClick={() => navigate('/my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                  <p onClick={() => navigate('/online-payments')} className='hover:text-black cursor-pointer'>Pay Bills</p>
                  <p onClick={() => navigate('/news')} className='hover:text-black cursor-pointer'>News & Updates</p>
                  <p onClick={() => navigate('/city-info')} className='hover:text-black cursor-pointer'>About Azrou</p>
                  <p onClick={logout} className='hover:text-black cursor-pointer'>Logout</p>
                </div>
              </div>
            </div>
            : <button onClick={() => navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>Create account</button>
        }
        
        {/* Mobile Menu Button - CSS Hamburger */}
        <button onClick={() => setShowMenu(true)} className='mobile-menu-button w-8 h-8 md:hidden flex flex-col justify-center items-center'>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </button>

        {/* Mobile Menu Overlay */}
        {showMenu && <div className="mobile-menu-overlay visible" onClick={() => setShowMenu(false)}></div>}

        {/* Mobile Menu */}
        <div className={`mobile-menu-container ${showMenu ? 'open' : ''}`}>
          <div className='mobile-menu-header'>
            <img src={assets.logo} className='w-36' alt="" />
            <img onClick={() => setShowMenu(false)} src={assets.cross_icon} className='w-7 cursor-pointer' alt="" />
          </div>
          
          <div className='mobile-menu-items'>
            <NavLink onClick={() => setShowMenu(false)} to='/'>
              <div className='mobile-menu-item'>🏠 HOME</div>
            </NavLink>
            
            <div className='mobile-menu-section'>
              <div className='mobile-menu-section-title'>🏛️ SERVICES</div>
              <div className='mobile-menu-subsection'>
                <NavLink onClick={() => setShowMenu(false)} to='/services'>
                  <div className='mobile-menu-subitem'>📋 All Services</div>
                </NavLink>
                <NavLink onClick={() => setShowMenu(false)} to='/services/civil-registry'>
                  <div className='mobile-menu-subitem'>📄 Civil Registry</div>
                </NavLink>
                <NavLink onClick={() => setShowMenu(false)} to='/services/urban-planning'>
                  <div className='mobile-menu-subitem'>🏗️ Urban Planning</div>
                </NavLink>
                <NavLink onClick={() => setShowMenu(false)} to='/services/finance'>
                  <div className='mobile-menu-subitem'>💰 Finance</div>
                </NavLink>
                <NavLink onClick={() => setShowMenu(false)} to='/services/public-works'>
                  <div className='mobile-menu-subitem'>🔧 Public Works</div>
                </NavLink>
                <NavLink onClick={() => setShowMenu(false)} to='/services/health'>
                  <div className='mobile-menu-subitem'>🏥 Health Services</div>
                </NavLink>
              </div>
            </div>
            
            <NavLink onClick={() => setShowMenu(false)} to='/book-appointment'>
              <div className='mobile-menu-item bg-primary text-white rounded-lg'>📅 BOOK APPOINTMENT</div>
            </NavLink>
            
            <div className='mobile-menu-section'>
              <div className='mobile-menu-section-title'>👥 CITIZEN PORTAL</div>
              <div className='mobile-menu-subsection'>
                <NavLink onClick={() => setShowMenu(false)} to='/report-problem'>
                  <div className='mobile-menu-subitem'>🚨 Report Issues</div>
                </NavLink>
                <NavLink onClick={() => setShowMenu(false)} to='/online-payments'>
                  <div className='mobile-menu-subitem'>💳 Pay Bills</div>
                </NavLink>
                <NavLink onClick={() => setShowMenu(false)} to='/track-request'>
                  <div className='mobile-menu-subitem'>📍 Track Requests</div>
                </NavLink>
                <NavLink onClick={() => setShowMenu(false)} to='/news'>
                  <div className='mobile-menu-subitem'>📰 News & Updates</div>
                </NavLink>
                <NavLink onClick={() => setShowMenu(false)} to='/city-info'>
                  <div className='mobile-menu-subitem'>ℹ️ City Information</div>
                </NavLink>
              </div>
            </div>
            
            <NavLink onClick={() => setShowMenu(false)} to='/about'>
              <div className='mobile-menu-item'>🌟 ABOUT AZROU</div>
            </NavLink>
            
            <NavLink onClick={() => setShowMenu(false)} to='/contact'>
              <div className='mobile-menu-item'>📞 CONTACT</div>
            </NavLink>

            {token && userData ? (
              <div className='mobile-menu-section'>
                <div className='mobile-menu-section-title'>👤 MY ACCOUNT</div>
                <div className='mobile-menu-subsection'>
                  <NavLink onClick={() => setShowMenu(false)} to='/dashboard'>
                    <div className='mobile-menu-subitem'>🏠 Dashboard</div>
                  </NavLink>
                  <NavLink onClick={() => setShowMenu(false)} to='/my-profile'>
                    <div className='mobile-menu-subitem'>👤 My Profile</div>
                  </NavLink>
                  <NavLink onClick={() => setShowMenu(false)} to='/my-appointments'>
                    <div className='mobile-menu-subitem'>📅 My Appointments</div>
                  </NavLink>
                  <div onClick={() => { logout(); setShowMenu(false); }} className='mobile-menu-subitem cursor-pointer'>
                    🚪 Logout
                  </div>
                </div>
              </div>
            ) : (
              <button onClick={() => { navigate('/login'); setShowMenu(false); }} className='w-full bg-primary text-white py-3 rounded-lg font-medium mt-4'>
                🔑 Login / Sign Up
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar