import { useState } from "react";
import axios from "axios";

function UserLogin() {
    const [ email, setEmail] = useState('');
    const [ password, setPassword] = useState('');

    const submitData = async (e) => {
        e.preventDefault();
        await axios
            .post("/user/login", {
                "email" : email,
                "password" : password
            })
            .then((response) => {
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <div>
            <h2>로그인</h2>
            <form onSubmit={submitData}>
                <table>
                    <tr>
                        <td>이메일:</td>
                        <td><input type="email" placeholder="email" required onChange={(e) => setEmail(e.target.value)}/></td>
                    </tr>
                    <tr>
                        <td>비밀번호:</td>
                        <td><input type="password" placeholder="password" required onChange={(e) => setPassword(e.target.value)}/></td>
                    </tr>
                    <tr>
                        <td><button type=submit>로그인</button></td>
                    </tr>
                </table>
            </form>
        </div>
    )
}
export default UserLogin;