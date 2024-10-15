'use client'

import axios from "axios"
import { useQuery, useQueryClient } from "react-query"

type DetailProductPageProps = {
    params: { slug: string[] }
}

type asdasd = {
    id: string
    name: string
    price: number
}

const fetchProduct = async () => {
    const response = await axios.get('http://localhost:3000/api/product')
    const { data }: { data: asdasd } = response
    return data
}


const DetailProductPage = (props: DetailProductPageProps) => {
    const { params } = props
    const { isLoading, data } = useQuery("products", fetchProduct)
    console.log(data)

    return (
        <>
            {isLoading ? <p className="text-5xl text-red-500">LOADING</p> :
                <>
                    <h1>halaman detail product page</h1>
                    <p>{params?.slug[0]}</p>
                    <p>{params?.slug[1]}</p>
                    <p>{params?.slug[2]}</p>
                </>
            }
        </>
    )
}

export default DetailProductPage