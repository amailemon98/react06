import React from 'react'
import { Outlet } from 'react-router-dom'

const Products = () => {
  return (
    <section>Products

      {/* Outlet은 children의 역할을 한다. */}
      <Outlet />
    </section>
  )
}

export default Products