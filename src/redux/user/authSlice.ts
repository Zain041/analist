import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { Login, Register, User } from '../../services/auth/authService'
import {
 loginCredentials,
 signUpCredentials,
 loginResponse,
 user,
} from '../../utils/interfaces/auth.interface'
import { alert } from '../../services/auth/alertService'
import { Navigate } from 'react-router-dom'

interface AuthState {
 isLoggedIn: boolean
 user: user | loginResponse | null
}

// Thunks
export const registerUser = createAsyncThunk(
 'auth/register',
 async (credentials: signUpCredentials, thunkAPI) => {
  try {
   const response = await Register(credentials)
   const userData = response.data as loginResponse
   alert('Login successfully', 'success')
   return userData
  } catch (error: any) {
   const duplicateEmail = error.message.status.includes('403')
    ? 'email Already exist'
    : false
   const duplicateUsername =
    !duplicateEmail && error.message.includes('407')
     ? 'username already exist'
     : 'something went wront please try again later'
   alert(duplicateUsername, 'error')
   return thunkAPI.rejectWithValue('Registration Failed')
  }
 }
)

export const login = createAsyncThunk(
 'auth/login',
 async (credentials: loginCredentials, thunkAPI) => {
  try {
   const response = await Login(credentials)
   const userData = response.data as loginResponse
   alert('Login successfully', 'success')
   return { user: userData }
  } catch (error: any) {
   alert('invalid email or password', 'error')
   return thunkAPI.rejectWithValue('Login Failed')
  }
 }
)

// Initial State Setup
const initialState: AuthState = {
 isLoggedIn: false, // By default, the user is not logged in
 user: null,
}

// Reducer
const authSlice = createSlice({
 name: 'auth',
 initialState,
 reducers: {},
 extraReducers: (builder) => {
  builder
   .addCase(registerUser.fulfilled, (state: AuthState) => {
    state.isLoggedIn = false
   })
   .addCase(registerUser.rejected, (state: AuthState) => {
    state.isLoggedIn = false
   })
   .addCase(
    login.fulfilled,
    (state: AuthState, action: PayloadAction<{ user: loginResponse }>) => {
     localStorage.setItem('token', action.payload.user.token)
     state.isLoggedIn = true
     state.user = action.payload.user
    }
   )
   .addCase(login.rejected, (state: AuthState) => {
    state.isLoggedIn = false
    state.user = null
   })
 },
})

export default authSlice.reducer
