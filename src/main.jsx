import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Root from './Root/Root.jsx'
import AboutUs from './pages/AboutUs/AboutUs.jsx'
import TourPackage from './pages/TourPackage/TourPackage.jsx'
import ContactUs from './pages/ContactUs/ContactUs.jsx'
import Login from './pages/Login/Login.jsx'
import Signup from './pages/Signup/Signup.jsx'
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx'
import { HelmetProvider } from 'react-helmet-async'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/aboutus",
        element: <AboutUs />
      },
      {
        path: "/tourpackages",
        element: <TourPackage />
      },
      {
        path: "/contactus",
        element: <ContactUs />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <Signup />
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>,
)
