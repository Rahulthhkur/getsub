import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import toast from 'react-hot-toast'

const Login = () => {
  const [currentState, setcurrentState] = useState('Login')
  const { token, settoken, navigate, backendUrl } = useContext(ShopContext)

  const [name, setname] = useState('')
  const [password, setpassword] = useState('')
  const [email, setemail] = useState('')

  const onSubmitHandler = async (e) => {
    e.preventDefault()

    try {
      if (currentState === 'Sign Up') {
        const response = await axios.post(`${backendUrl}/api/user/register`, { name, email, password })
        if (response.data.success) {
          settoken(response.data.token)
          localStorage.setItem('token', response.data.token)
          toast.success('Account created successfully!')
          navigate('/') // Redirect to the home page
        } else {
          toast.error(response.data.message)
        }
      } else {
        const response = await axios.post(`${backendUrl}/api/user/login`, { email, password })
        if (response.data.success) {
          settoken(response.data.token)
          localStorage.setItem('token', response.data.token)
          toast.success('Login successful!')
          navigate('/') // Redirect to the home page
        } else {
          toast.error(response.data.message)
        }
      }
    } catch (error) {
      console.error('Error during login/signup:', error)
      toast.error('Something went wrong. Please try again later.')
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      {currentState === 'Login' ? null : (
        <input
          onChange={(e) => setname(e.target.value)}
          value={name}
          type="text"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Name"
          required
        />
      )}
      <input
        onChange={(e) => setemail(e.target.value)}
        value={email}
        type="email"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Email"
        required
      />
      <input
        onChange={(e) => setpassword(e.target.value)}
        value={password}
        type="password"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Password"
        required
      />

      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forgot your Password?</p>
        {currentState === 'Login' ? (
          <p onClick={() => setcurrentState('Sign Up')} className="cursor-pointer">
            Create Account
          </p>
        ) : (
          <p onClick={() => setcurrentState('Login')} className="cursor-pointer">
            Login Here
          </p>
        )}
      </div>

      <button className="bg-black text-white font-light px-8 py-2 mt-4">
        {currentState === 'Login' ? 'Log In' : 'Sign Up'}
      </button>
    </form>
  )
}

export default Login
