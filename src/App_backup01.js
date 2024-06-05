// import { useState } from 'react';
import './App.css';
import {Header, Footer} from './components/index.js';
import {About, Home, NotFound, ProductDetail, ProductId, Products, Profile, Reviews, Login, Register} from './routes/index.js'
import AppLayout from './layouts/AppLayout.js';
// import DarkThemeContext from './context/DarkThemeContext.js';
import { DarkThemeContextProvider } from './context/DarkThemeContext.js';
import StarRatingLayer from './components/StarRating/StarRatingLayer.js';
import SidebarLayer from './components/Sidebar/SidebarLayer.js';
import { NavLink, Outlet, Route, Routes } from 'react-router-dom';
import ProductsLayout from './layouts/ProductsLayout.js';

// 3. 
function App_backup01() {
  return (
  <DarkThemeContextProvider>
    <AppLayout>
      <Header />
      <Routes>
        {/* 
          localhost:3000/
          localhost:3000/home
          localhost:3000/about
          localhost:3000/products
          localhost:3000/products/:id
          localhost:3000/products/:id/productDetail/:name
          localhost:3000/products/productDetail/:name
          localhost:3000/products/reviews
          localhost:3000/profile
        */}
        <Route path='/' element={<Home />}/>

        <Route path='/home' element={<Home />}/>

        {/* 중첩 라우트 */}
        <Route path='/products' element={<ProductsLayout />}>
          <Route index element={<Products />}/>
          <Route path=':id' element={<ProductId />}/>
          <Route path='product-detail' element={<ProductDetail />}/>
          <Route path='reviews' element={<Reviews />}/>
        </Route>

        {/* ? 뒤는 쿼리 */}
        {/* localhost:3000/product/reviews?name=kim&age=30 */}

        
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/profile' element={<Profile />}/>

        <Route path='*' element={<NotFound />}/>
      </Routes>

      <Footer />
    </AppLayout>
  </DarkThemeContextProvider>
  );
}



// 이전작업 백업(props 방법 사용)
// props.children
// 저 쌍으로 이루어진 태그 사이의 내용(사과)가 children이다.
// home에 보냈으면 home에서 받아서 쓴다.

// function App() {

//   const [isDark, setIsDark] = useState(false);

//   return (
//     <DarkThemeContext.Provider value={{isDark, setIsDark}}>
//       <AppLayout>
//         <Header isDark={isDark} setIsDark={setIsDark} />
//         <Home isDark={isDark}>
//           <h1> 사과는 </h1>
//           <p> 새빨간 </p>
//           <div> 색입니다. </div>
//         </Home>
//         <Footer isDark={isDark} />
//       </AppLayout>
//     </DarkThemeContext.Provider>
//   );
// }


// 2. context 방법 사용
// function App() {

//   // const [isDark, setIsDark] = useState(false);

//   return (
//     <DarkThemeContext.Provider value={{isDark, setIsDark}}>
//       <AppLayout>
//         <Header />
//         <Home>
//           <h1> 사과는 </h1>
//           <p> 새빨간 </p>
//           <div> 색입니다. </div>
//         </Home>
//         <Footer />
//       </AppLayout>
//     </DarkThemeContext.Provider>
//   );
// }



export default App_backup01;
