import { useRouter } from "next/router";

const ShopPage = () => {
    const { query } = useRouter();
    const slug = query.slug;

    return (
        <div>
            <h1>Shop Page</h1>
            <p>Product : {slug && slug[0]}</p>
        </div>
    )
}

export default ShopPage;