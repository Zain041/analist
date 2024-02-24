import React, { useState, ChangeEvent, FormEvent } from 'react'
import Input from '../../components/Input'
import Logo from '../../assets/images/Logo.png'
import Icons from '../../assets/images/icons.png'
import { user } from '../../utils/interfaces/auth.interface'
import { useAppDispatch } from '../../redux/hooks'
import { registerUser } from '../../redux/user/authSlice'
const Register = () => {
 const dispatch = useAppDispatch()
 const [previewUrl, setPreviewUrl] = useState<string>('')
 const [userDetails, setUserDetails] = useState<user>({
  fullName: '',
  username: '',
  password: '',
  email: '',
  avatar: null,
  gender: 'male',
 })
 const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target
  if (name === 'radio') {
   setUserDetails((prevState) => ({
    ...prevState,
    gender: value,
   }))
   return
  }
  if (name === 'avatar') {
   setUserDetails((prevState) => ({
    ...prevState,
    avatar: e.target.files ? e.target.files[0] : null,
   }))
   if (e.target.files?.[0]) {
    const blobUrl = URL.createObjectURL(e.target.files?.[0])
    setPreviewUrl(blobUrl)
   }
   return
  }
  setUserDetails((prevState) => ({
   ...prevState,
   [name]: value,
  }))
 }
 const onSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  dispatch(registerUser(userDetails))
 }
 const { fullName, username, email, gender, password } = userDetails
 return (
  <>
   <div className="grid grid-cols-5 gap-0 h-svh">
    <form
     className="bg-black p-4 md:col-span-2 col-span-5 "
     onSubmit={onSubmit}
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
        id="fullName"
        label="Full Name"
        name="fullName"
        type="text"
        value={fullName}
        placeholder="Full Name"
        required={true}
        onChange={handleChange}
       />
       <Input
        className="shadow appearance-none border rounded w-full py-2 px-3
                                  text-gray-700 leading-tight focus:outline-none
                                   focus:shadow-outline"
        id="username"
        label="Username"
        type="text"
        value={username}
        name="username"
        placeholder="Username"
        onChange={handleChange}
        required={true}
       />
       <Input
        className="shadow appearance-none border rounded w-full py-2 px-3
                                  text-gray-700 leading-tight focus:outline-none
                                   focus:shadow-outline"
        id="username"
        label="Email"
        type="email"
        name="email"
        value={email}
        placeholder="Email"
        onChange={handleChange}
        required={true}
       />
      </div>
      <div className="mb-4">
       <Input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        id="password"
        type="password"
        label="Password"
        name="password"
        value={password}
        placeholder="Password"
        onChange={handleChange}
        required={true}
       />
      </div>
      <div className="mx-auto max-w-sm mb-4">
       <div className="flex items-start mt-2">
        <p className="text-white mr-7 text-lg font-medium">Your Gender</p>
        <div className="flex items-center mr-4 mb-4">
         <input
          id="radio4"
          type="radio"
          name="radio"
          value="male"
          checked={gender === 'male'}
          onChange={handleChange}
          className="h-5 w-5 p-5 mr-5"
         />
         <label className="flex text-white items-center cursor-pointer text-xl transition duration-200">
          Male
         </label>
        </div>

        <div className="flex items-center mr-4">
         <input
          id="radio5"
          type="radio"
          name="radio"
          value="female"
          checked={gender === 'female'}
          onChange={handleChange}
          className=" h-5 w-5 p-5 mr-5"
         />
         <label className="flex text-white items-center cursor-pointer text-xl transition duration-200 ">
          Female
         </label>
        </div>
       </div>
      </div>
      <div className="flex items-center">
       <div className="mr-4">
        <label htmlFor="image" className="relative cursor-pointer">
         <div className="w-20 h-20 overflow-hidden rounded-full bg-white mb-5">
          <img
           id="imagePreview"
           src={previewUrl}
           alt="Preview"
           className="object-cover w-full h-full"
          />
         </div>
        </label>
       </div>
       <Input
        id="image"
        type="file"
        name="avatar"
        accept="image/*"
        onChange={handleChange}
        required={true}
        className="hidden"
       />
       <label
        htmlFor="image"
        className="bg-blue-500 text-center hover:bg-blue-600 px-4 ml-4 py-2 w-full text-white rounded-md cursor-pointer transition-colors"
       >
        Select Image
       </label>
      </div>
      <div className="flex items-center justify-between">
       <button
        className="bg-blue-500 hover:bg-blue-700 text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
       >
        Sign Up
       </button>
      </div>
      <div className="flex items-center justify-between py-2 text-white text-xs lg:text-sm md:text-[10px]">
       <a href="#">Login instead</a>
      </div>
     </div>
    </form>
    <div className="bg-gray-200 col-span-3 py-12  md:block hidden ">
     <h1 className="text-center font-bold text-4xl w-full">Welcome!</h1>
     <img className="p-4" src={Icons} />
    </div>
   </div>
  </>
 )
}

export default Register
