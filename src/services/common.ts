import axios, { AxiosInstance } from 'axios'
const token: string | null = localStorage.getItem('token')
export const axiosInstance: AxiosInstance = axios.create({
 baseURL: 'http://localhost:4000/api/v1/',
 withCredentials: true,
 headers: {
  'Content-Type': 'application/json',
  authorization: `bearer ${token}`,
 },
})
