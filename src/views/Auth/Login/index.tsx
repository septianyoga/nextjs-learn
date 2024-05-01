import { useRouter } from "next/router";
import style from './Login.module.scss'
import Link from "next/link";

const LoginViews = () => {
    const { push } = useRouter();

    const handleLogin = () => {
        push('/product');
    }
    return (
        <div className={style.login}>
            <h1 className="text-3xl">Login Page</h1>
            <button onClick={handleLogin}>Login</button>
            <p style={{ color: "red", border: "1px solid blue", borderRadius: "10px" }}>
                Belum punya akun? registasi <Link href={"register"}>Disini</Link>
            </p>
        </div >
    )
}

export default LoginViews;