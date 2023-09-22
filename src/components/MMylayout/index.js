import { Outlet } from 'react-router-dom'

export default function  MMylayout ({children}) {
  return children || <Outlet />
}