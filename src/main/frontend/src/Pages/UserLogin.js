

function UserLogin() {
    return (
        <div>
            <form>
                <table>
                    <tr>
                        <td>이메일:</td>
                        <td><input type="email" required/></td>
                    </tr>
                    <tr>
                        <td>비밀번호:</td>
                        <td><input type="password" required/></td>
                    </tr>
                    <tr>
                        <td><input type="submit" value="login"/></td>
                    </tr>
                </table>
            </form>
        </div>
    )
}
export default UserLogin;