import { useState } from "react";


function Register() {
    const [user, setUser] = useState({});

    const createUser = (ev) => {
        console.log(ev.target.id, ev.target.value)
        
        setUser({...user, [`${ev.target.id}`] : ev.target.value})
        console.log(user);

        // 전송 후 공백
        // setUser({});

    }

    const submitHandle = (ev) => {
        ev.preventDefault();
        
        console.log('전송 전', user);
        setUser({});
        console.log('전송 후', user);

        return user;
    }

    return (
      <form  onSubmit={(ev) => submitHandle(ev)}>
        <div>
            <label htmlFor="user_id">user id : </label>
            <input type='text' onInput={(ev) => createUser(ev)} id="user_id" value={user?.user_id || ""}/>
        </div>
        <div>
            <label htmlFor="user_name">user name : </label>
            <input type='text' onInput={(ev) => createUser(ev)} id="user_name" value={user?.user_name ? user.user_name : ""}/>
        </div>
        <div>
            <label htmlFor="user_email">user email : </label>
            <input type='text' onInput={(ev) => createUser(ev)} id="user_email" value={user?.user_email ? user.user_email : ""}/>
        </div>
        <div>
            <label htmlFor="user_pwd">user password : </label>
            <input type='password' onInput={(ev) => createUser(ev)} id="user_pwd" value={user?.user_pwd ? user.user_pwd : ""}/>
        </div>
        <button>회원가입</button>
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