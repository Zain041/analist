import { toast, ToastOptions, ToastPosition } from 'react-toastify'

export const alert = (
 message: string,
 type: 'success' | 'error' | 'warning' | 'info'
) => {
 toast(message, { type, position: 'top-right' })
}
