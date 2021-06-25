import {useEffect, useState} from "react";

export const useFetch = (url) => {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])

    const getProducts = async  () => {
        if(url !== 'local') {
            await fetch(url, {
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
                .then(response => response.json())
                .then(data => {
                    setProducts(data)
                    setLoading(false)
                })
                .catch(e => {
                    console.log(e)})
        } else {
            await fetch('/mock/mock-data.json').then(response => response.clone().json())
                .then(data => {
                    setProducts(data)
                    setLoading(false)
                })
                .catch(e => {
                    console.log(e)})
        }

    }

    useEffect( () => {
        getProducts()
    }, [url])

    return {
        loading,
        products
    }
}
