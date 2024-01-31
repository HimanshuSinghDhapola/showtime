import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import ShowDetails from './components/Show_details/ShowDetails.jsx'
import ShowSection from './components/Show_section/ShowSection.jsx'
import Form from './components/Form/Form.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<ShowSection/>}/>
      <Route path='/:id' element={<ShowDetails/>}/>
      <Route path='/:id/form' element={<Form/>}/>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
