import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <main className='w-full h-screen flex bg-darkSlateGray justify-center sm:items-center'>
        
        <section className=' px-6 py-6 w-[70%] flex rounded-3xl bg-whiteColor'>
          {/* form */}
          <div className='w-[60%]'>
            <div className='w-full h-full gap-8 flex flex-col justify-center '>
              <h1 className='text-6xl font-bold'>Stay updated!</h1>
              <p>Join 60,000+ product managers receiving monthly updates on:</p>
              <ul>
                <li className='flex gap-2'>
                  <img src="/public/icon-list.svg" alt="List icons" />
                  Product discovery and building what matters
                </li>
                <li className='flex gap-2 my-3'>
                  <img src="/public/icon-list.svg" alt="List icons" />
                  Measuring to ensure updates are a success
                </li>
                <li className='flex gap-2'>
                  <img src="/public/icon-list.svg" alt="List icons" />
                  And much more!
                </li>
              </ul>

              <div className='flex flex-col gap-2'>
                <label htmlFor="Email">Email addresse</label>
                <input className='border flex rounded-md py-2 px-4' type="email" placeholder='email@company.com' />
              </div>
            </div>  
          </div>
          {/* Image */}
          <div className='w-[40%]'>
            <img className='w-full' src="/public/illustration-sign-up-desktop.svg" alt="Images" />
          </div>
        </section>

      </main>
    </>
  )
}

export default App
