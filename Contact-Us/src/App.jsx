import { useState } from 'react'
import ContactForm from './components/ContactForm'
import './App.css'

function App() {


  return (
    <>
      <div className='flex items-center justify-center p-6'>
        <div className='w-full gap-8'>
          <ContactForm />
        </div>
      </div>
    </>
  )
}

export default App
