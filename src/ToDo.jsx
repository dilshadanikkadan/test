import axios from 'axios'
import { useQuery } from "react-query"

const fetchData = async () => {
    try {
        const res = await axios.get("https://dummyjson.com/products")
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
    
    if (isLoading) return <div>loading....</div>
    if (isError) return <div>Error</div>
    console.log(data.products);

    return (
        <>
         
            
                    <div>
                        <h4>{data.title}</h4>
                        <h4>{data.description}</h4>
                        <h6>dilshad</h6>

                    </div>

          

        </>
    )
}

export default ToDo
