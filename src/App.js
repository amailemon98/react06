// import { useState } from 'react';
import './App.css';
import {Header, Footer} from './components/index.js';
import {About, Home} from './routes/index.js'
import AppLayout from './layouts/AppLayout.js';
// import DarkThemeContext from './context/DarkThemeContext.js';
import { DarkThemeContextProvider } from './context/DarkThemeContext.js';

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


// 3. 
function App() {
  return (
    <DarkThemeContextProvider>
      <AppLayout>
        <Header />
        <About />
        <Home>
          <h1> 사과는 </h1>
          <p> 새빨간 </p>
          <div> 색입니다. </div>
        </Home>
        <Footer />
      </AppLayout>
    </DarkThemeContextProvider>
  );
}

export default App;
