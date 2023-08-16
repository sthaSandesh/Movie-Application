import { React, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const { user, logIn } = UserAuth()
  const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('');


    try {
      await logIn(email, password)
      navigate('/')

    } catch (error) {
      console.log(error)
      setError(error.message)

    }
  }

  return (
    <>
      <div className='w-full h-screen'>
        <img className='hidden sm:block absolute w-full h-full object-cover'
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b85863b0-0609-4dba-8fe8-d0370b25b9ee/a1857a45-23a4-4af2-9e40-8f3de918e048/NP-en-20230731-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="/" />

        <div className='bg-black/60 fixed top-0 left-0 w-full h-full'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
          <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white  '>
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-3xl font-bold'>Sign In</h1>
              {error ? <p className='p-3 bg-red-400 my-2'>{error}</p> : null}
              <form onSubmit={handleSubmit} className='w-full flex flex-col py-4 '>
                <input onChange={(e) => { setEmail(e.target.value) }} className='p-3 my-2 bg-gray-700 rounded-none' type="email" placeholder='Email' autoComplete='email' />
                <input onChange={(e) => setPassword(e.target.value)} className='p-3 my-2 bg-gray-700 rounded-none' type="password"
                  placeholder='Password'
                  autoComplete='current-password' />

                <button className='w-full py-2 my-4 bg-red-500 text-white font-bold'>Sign In</button>

                <div className='flex justify-between items-center text-sm text-gray-500'>
                  <p><input className='mr-2' type="checkbox" />Remember me</p>
                  <p>Need Help?</p>

                </div>
                <p className='py-8 '>


                  New to Nepflex? <Link to="/signup" className='text-red-500'>Sign Up</Link>


                </p>

              </form>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login