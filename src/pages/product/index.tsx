import { useRouter } from "next/router";
import { useEffect, useState } from "react"


export default function ProductPage() {
    const [isLogin, setLogin] = useState(true);
    const { push } = useRouter();

    useEffect(() => {
        if (!isLogin) {
            push('auth/login');
        }
    })

    return (
        <div>
            <h1>Product Page</h1>
        </div>
    )
}