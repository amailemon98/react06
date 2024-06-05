import { useEffect, useState } from 'react';
import './App.css';
import {Header, Footer} from './components/index.js';
import {About, Home, NotFound, ProductDetail, ProductId, Products, Profile, Reviews} from './routes/index.js'
import AppLayout from './layouts/AppLayout.js';
import { DarkThemeContextProvider } from './context/DarkThemeContext.js';
import StarRatingLayer from './components/StarRating/StarRatingLayer.js';
import SidebarLayer from './components/Sidebar/SidebarLayer.js';
import { NavLink, Outlet, Route, Routes } from 'react-router-dom';
import ProductsLayout from './layouts/ProductsLayout.js';

// 3. 
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // 맨 처음 react가 뜰 때, 화면이 갱신 되었을 때, 특정 변수가 바뀌었을 때 실행된다.
  useEffect(() => {
    console.log('화면이 바뀔때 마다 실행');
    // 무한루프 돌 수 있다.
  })

  // 맨 처음과 count 변수 값이 바뀔때만 실행 
  useEffect(() => {
    console.log('count가 바뀔 때 마다 실행');
  }, [count])

  // 맨 처음 뜰 때만 실행 : 초기화
  useEffect(() => {
    console.log('맨 처음 한 번 실행');
  }, [])
  
  return (
    <div>
      {text}
      <input type='text' onInput={(ev) => setText(ev.target.value)} />
      <button onClick={() => {setCount(count + 1)}}>count 증가</button>
    </div>
  );
}

export default App;
