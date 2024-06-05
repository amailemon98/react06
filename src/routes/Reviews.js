import React, { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

/* ? 뒤는 쿼리 */
/* localhost:3000/product/reviews?name=kim&age=30 */


const Reviews = () => {
  const [ searchParams, setSearchParams ] = useSearchParams();

  const mySearchParams1 = (event) => {
    event.preventDefault();

    setSearchParams({name:"kim", age:30})

    
  }

  useEffect(() => {
    console.log(searchParams.get('name'));
    console.log(searchParams.get('age'));
  }, [searchParams]) // searchParams값이 바뀌면 일을 한다.

  return (
    <>
      <div>Reviews</div>

      <Link to=".." relative='path' >뒤로가기</Link><br />
      {/* <Link to="/products/product-detail" >productDetail</Link> */}
      {/* <Link to="../product-detail" relative='path' >productDetail</Link> */}
      <Link to="../product-detail" >productDetail</Link>
      <br />
      <Link onClick={(event)=>{mySearchParams1(event)}} > setSearchParams1</Link>
      <br />
      {/* <button onClick={mySearchParams1}>setSearchParams2</button> */}
      <button onClick={()=>{setSearchParams({amount:30, pager:2})}}>setSearchParams2</button>
    </>
  )
}

export default Reviews