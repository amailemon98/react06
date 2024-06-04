import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
// Link는 a태그 대용으로 사용 가능
// import style from './Nav.module.css'
import './Nav.css'

/* 
  localhost:3000/home
  localhost:3000/about
  localhost:3000/products
  localhost:3000/products/:id
  localhost:3000/products/productDetail
  localhost:3000/products/reviews
  localhost:3000/profile
*/

// Link 사용
// const Nav = () => {
//   const [menuNum, setMenuNum] = useState(0);

//   const menu = ["home", "about", "products", "profile"];
//   return (
//     <nav className={style.lnb}>
//       <ul>
//         {
//           menu.map((item, index) => (
//               <li>
//                   <Link to={`${item}`} onClick={ () => {setMenuNum(index)}}
//                         className={menuNum === index ? style.active : null}
//                   >{item}</Link>
//               </li>
//           ))
//         }
//       </ul>
//     </nav>
//   )
// }

// NavLink 사용
const Nav = () => {
  const [menuNum, setMenuNum] = useState(0);

  const menu = ["home", "about", "products", "profile"];
  return (
    <nav className='lnb'>
      <ul>
        {
          menu.map((item, index) => (
              <li>
                  <NavLink to={`${item}`} onClick={ () => {setMenuNum(index)}}
                        // className={menuNum === index ? style.active : null}
                        // 자동으로 active 되려면 클래스명이 무조건 active이어야 함

                        // className={ ({isActive}) => isActive ? "bgcolor" : null }
                        // style = { ( {isActive} ) => isActive ? {background : "red"} : {background :"white"} }
                  >{item}</NavLink>
              </li>
          ))
        }
      </ul>

      <ul>
        <li>
          {/* end로 상위 메뉴의 디자인과 겹칠때 끊어주기 위해 사용한다. relative는 상대 주소를 바꿔준다.*/}
          <NavLink to="product-detail" relative={true} >product-detail</NavLink>
        </li>
        <li>
          <NavLink to="reviews">reviews</NavLink>
        </li>
        
      </ul>
    </nav>
  )
}

export default Nav