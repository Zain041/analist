import React, { ChangeEvent, FormEvent, useState } from 'react'
import Logo from '../../assets/images/Logo.png'
import Icons from '../../assets/images/icons.png'

import { useAppDispatch } from '../../redux/hooks'
import { login, registerUser } from '../../redux/user/authSlice'
import { loginCredentials } from '../../utils/interfaces/auth.interface'
import Input from '../../components/Input'

const Login = () => {
 const dispatch = useAppDispatch()
 const [userDetails, setUserDetails] = useState<loginCredentials>({
  email: '',
  password: '',
 })
 const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target

  setUserDetails((prevState) => ({
   ...prevState,
   [name]: value,
  }))
 }
 const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  const response = await dispatch(login(userDetails))
  console.log(response.payload.user.success)
 }
 const { email, password } = userDetails
 return (
  <>
   <div className="grid grid-cols-5 gap-0 h-svh">
    <form
     onSubmit={onSubmit}
     className="bg-black p-4 md:col-span-2 col-span-5 "
    >
     <div className="lg:px-24 px-8">
      <div className="mb-4">
       <div className="flex items-center w-full py-12 justify-center">
        <img className="align-middle" src={Logo} alt="logo" />
       </div>
       <Input
        className="shadow appearance-none border rounded w-full py-2 px-3
                                 text-gray-700 leading-tight focus:outline-none
                                  focus:shadow-outline"
        id="username"
        type="email"
        label="Email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={handleChange}
        required={true}
       />
      </div>
      <div className="mb-6">
       <Input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        id="password"
        type="password"
        name="password"
        label="Password"
        placeholder="Password"
        onChange={handleChange}
        value={password}
        required={true}
       />
      </div>
      <div className="flex items-center justify-between">
       <button
        className="bg-blue-500 hover:bg-blue-700 text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
       >
        Login
       </button>
      </div>
      <div className="flex items-center justify-between py-2 text-white text-xs lg:text-sm md:text-[10px]">
       <a href="#">Create an account</a>
       <a href="#">Forgot your password?</a>
      </div>
     </div>
    </form>
    <div className="bg-gray-200 col-span-3 py-12  md:block hidden ">
     <h1 className="text-center font-bold text-4xl w-full">Welcome Back!</h1>
     <img className="p-4" src={Icons} />
    </div>
   </div>
  </>
 )
}
export default Login
