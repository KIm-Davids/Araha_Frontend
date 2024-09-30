import React, {useState} from 'react'
// import {useHistory} from 'react-router-dom'

function Login(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = {
            email,
            password,
        };

        try{
            const response = await fetch('http://localhost:8080/login',{
                method:'PATCH',
                headers:{'Content-Type': 'application/json',
                },
                body:JSON.stringify(userData),
        });
            if(!response.ok){
                alert(`An error occured `)
                throw new Error(`Response is not ok `)
            }
            const result = await response.json()
            console.log(result)

            // history.push('/dashboard')
        }catch(error){
             console.error(error)
        }
    }


    return (
        <>
            <div>
                <form onSubmit={handleSubmit} id='form'>
                    <h1>Login</h1>
                    <input type='email' placeholder='Enter your enail' value={email} onChange={(e) => setEmail(e.target.value)} ></input>
                    <input type='password' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    <button type='submit'>Submit</button>               
                </form>
            </div>
        </>
    )
}

export default Login