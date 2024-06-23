import { useState } from 'react'

import './App.css'
import Navigation from './components/Navigation'
import ContactHeader from './components/ContactHeader'
import ContactForm from './components/ContactForm/ContactForm'


function App() {
 

  return (
    <>
      <Navigation/>
      <main className='main_container'>
      <ContactHeader/>
      <ContactForm/>
      </main>
      
    </>
  )
}

export default App
