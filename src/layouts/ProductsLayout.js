import React from 'react'
import { Outlet } from 'react-router-dom'

const ProductsLayout = () => {
  return (
    <div>
        <h2>ProductsLayout : Outlet</h2>

        <Outlet />
        {/* children 대신 사용함 */}
    </div>
  )
}

export default ProductsLayout