import React from 'react'
import { Outlet } from 'react-router-dom'

function BoardWrapper() {
  return (
    <>
    <Outlet />
    </>
  )
}

export default BoardWrapper