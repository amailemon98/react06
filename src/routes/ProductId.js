import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'

const ProductId = () => {
  const {id} = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h2>ProductId params id : {id}</h2>
      {/* localhost:3000/products/:id */}
      {/* path를 상대주소로 바꿔주세요 라는 의미이다. */}
      {/* <Link to=".." relative='path'>뒤로가기</Link> */}
      {/* <Link to=".." >뒤로가기</Link> */}

      {/* 컴포넌트 내에서 route를 처리하고자 할때 */}
      <button onClick={()=>{navigate('..')}}>뒤로가기</button>
      {/* <button onClick={()=>{navigate('../products/reviews')}}>Reviews</button> */}
      <button onClick={()=>{navigate('../reviews')}}>Reviews</button>
      <button onClick={()=>{navigate('/about')}}>about</button>
    </div>
  )
}

export default ProductId