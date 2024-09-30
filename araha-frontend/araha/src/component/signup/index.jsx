import React, {useState} from 'react'

function SignUp(){
    const [userName, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = {
            userName,
            email,
            password,
            phoneNumber,
        };

        try{
            const response = await fetch('http://localhost:8080/register', {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify(userData),
            });

            if(!response.ok){
                const errorMessage = await response.text();
                alert(errorMessage);
                throw new Error(`Response was not ok ${errorMessage}`);
            }

            const result = await response.json();
            console.log('Success', result);
        }catch(error){
            console.error('Error', error);
        }
    };
    return (
        <>
            <div className='signUpForm'>
                <form onSubmit={handleSubmit} id='form'>
                    <h1>Sign Up</h1>
                    <input type='text' placeholder='Enter a username 'value={userName} onChange={(e) => setUsername(e.target.value)}></input>
                    <input type='email' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    <input type='password' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    <input type='text' placeholder='Enter your phone number' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}></input>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </>
    )
}

export default SignUp