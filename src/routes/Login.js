import { useState } from "react";


function Login() {
    const [user_email, setUserEmail] = useState('');
    const [user_pwd, setUserPwd] = useState('');

    const createUser = () => {
        const user = {
            user_email,
            user_pwd
        }
        console.log(user);

        // document.querySelector('#user_email').value = ''
        // document.querySelector('#user_pwd').value = ''
        setUserEmail('')
        setUserPwd('')
        return user;
    }
    return (
      <form onSubmit={(ev) => {ev.preventDefault()}}>
        <div>
            <label htmlFor="user_email">user email : </label>
            <input type='text' onInput={(ev) => setUserEmail(ev.target.value)} id="user_email" value={user_email} placeholder="아이디"/>
        </div>
        <div>
            <label htmlFor="user_pwd">user password : </label>
            <input type='password' onInput={(ev) => setUserPwd(ev.target.value)} id="user_pwd" value={user_pwd} placeholder="비밀번호"/>
        </div>
        <button onClick={createUser}>로그인</button>
      </form>
    );
}

export default Login;


// front
// fetch('api주소')
// .then(res => res.json)
// .then(res => res)


// node
// express
// api, json

// app.get('주소'){
//     const data = Filled('product.json')
//     data.filter(item => item.brand === 'coverItem').filter(item => item.product_type === 'theItem')
//     res.json(filter)
// }