import { user } from './interfaces/auth.interface'
export const convertObjectToFormData = (
 data: Record<string, string>
): FormData => {
 const formData = new FormData()
 for (const key in data) {
  if (Object.prototype.hasOwnProperty.call(data, key)) {
   const value = data[key]
   formData.append(key, value)
  }
 }
 return formData
}
