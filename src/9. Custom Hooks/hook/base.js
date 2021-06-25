import {useState, useEffect} from 'react'

export const useFetch = (url) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    useEffect(async () => {
        let users = await fetch(url)
            .then((posts) => posts.json())
            .then((data) => {
                setData(data || [])
                setLoading(false)
            })
        // users = await users.json()
        // console.log(users)
        // setData(users)
        // setLoading(false)
    }, [url]);

    return {
        loading, data
    }
}

