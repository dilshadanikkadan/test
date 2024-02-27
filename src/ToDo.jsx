import axios from 'axios'
import { useQuery } from "react-query"

const fetchData = async () => {
    try {
        const res = await axios.get("https://dummyjson.com/products/1")
        if (res.status === 200) {
            return res.data
        } else {
            throw new Error("something went wrong")
        }
    } catch (error) {
        throw new Error("something went wrong")
    }
}

function ToDo() {
    const { data, isLoading, isError } = useQuery('data', fetchData)
    console.log(data);
    if (isLoading) return <div>loading....</div>
    if (isError) return <div>Error</div>

    return (
        <>
        <h4>this is  dilshad</h4>           
        <h4>this is the neymat</h4>           
            
           
        </>
    )
}

export default ToDo
