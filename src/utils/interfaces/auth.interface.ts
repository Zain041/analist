export interface loginCredentials {
 email: string
 password: string
}
export interface signUpCredentials {
 fullName: string
 username: string
 email: string
 password: string
 avatar: File | null
 gender: string
}

export interface loginResponse {
 success: boolean
 user: {
  fullName: string
  username: string
  email: string
  avatar: {
   public_id: string
   url: string
  }
  role: string
  _id: string
  createdAt: Date
  __v: number
 }
 token: string
}

export interface user {
 fullName: string
 username: string
 email: string
 password: string
 avatar: File | null
 gender: string
 [key: string]: string | File | null
}
export interface FormDataObject {
 [key: string]: string | Blob | File
}
export interface avatarFormData {
 avatar: File
}
