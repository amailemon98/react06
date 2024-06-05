import { useState } from "react";


function Register() {
    const [user_name, setUserName] = useState('');
    const [user_id, setUserId] = useState('');
    const [user_email, setUserEmail] = useState('');
    const [user_pwd, setUserPwd] = useState('');

    const createUser = () => {
        const user = {
            user_name,
            user_id,
            user_email,
            user_pwd
        }
        console.log(user);

        setUserName('')
        setUserId('')
        setUserEmail('')
        setUserPwd('')
        return user;
    }
    return (
      <form onSubmit={(ev) => {ev.preventDefault()}}>
        회원가입
        <div>
            <label htmlFor="user_name">user name : </label>
            <input type='text' onInput={(ev) => setUserName(ev.target.value)} id="user_name" value={user_name} placeholder="아이디"/>
        </div>
        <div>
            <label htmlFor="user_id">user id : </label>
            <input type='text' onInput={(ev) => setUserId(ev.target.value)} id="user_id" value={user_id} placeholder="아이디"/>
        </div>
        <div>
            <label htmlFor="user_pwd">user password : </label>
            <input type='text' onInput={(ev) => setUserPwd(ev.target.value)} id="user_pwd" value={user_pwd} placeholder="비밀번호"/>
        </div>
        <div>
            <label htmlFor="user_pwd">user password : </label>
            <input type='password' onInput={(ev) => setUserPwd(ev.target.value)} id="user_pwd" value={user_pwd} placeholder="비밀번호"/>
        </div>
        <button onClick={createUser}>회원가입</button>
      </form>
    );
}

export default Register;


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