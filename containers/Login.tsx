import type {NextPage} from 'next';

export const Login : NextPage = () => {
    return (
        <div>
            <img src="logo.svg" alt="" />
            <div className="form">
                <div>
                    <img src="" alt="" />
                    <input type="text" placeholder='Login'/>
                </div>
                <div>
                    <img src="" alt="" />
                    <input type="password" placeholder='Senha'/>
                </div>
            </div>
            <button>Login</button>
        </div>
    );
}