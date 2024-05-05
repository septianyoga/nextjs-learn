import { fetcher } from "@/lib/swr/fethcer";
import ProductView from "@/views/Product";
import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import useSWR from "swr";


export default function ProductPage() {
    const [isLogin, setLogin] = useState(true);
    const [products, setProducts] = useState([]);
    const { push } = useRouter();

    useEffect(() => {
        if (!isLogin) {
            push('auth/login');
        }
    })

    const { data, error, isLoading } = useSWR(
        "/api/product",
        fetcher
    );

    // useEffect(() => {
    //     fetch("/api/product").then((res) => res.json()).then((response) => {
    //         setProducts(response.data);

    //     })
    // }, [])

    return (
        <div>
            <ProductView products={isLoading ? [] : data.data} />
        </div>
    );
}