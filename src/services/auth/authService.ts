import { axiosInstance } from '../common'
import {
 loginCredentials,
 signUpCredentials,
} from '../../utils/interfaces/auth.interface'

export const Register = (credentials: signUpCredentials) => {
 return axiosInstance.post('/register', credentials, {
  headers: {
   'Content-Type': 'multipart/form-data',
  },
 })
}
export const Login = (credentials: loginCredentials) => {
 return axiosInstance.post('/login', credentials)
}
export const User = () => {
 return axiosInstance.get('/me')
}
