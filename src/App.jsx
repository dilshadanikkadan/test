import axios from 'axios'
import ToDo from './ToDo'
import { QueryClient, QueryClientProvider } from "react-query"
const queryClient =new QueryClient()
function App() {

  return (

    <>
      <QueryClientProvider client={queryClient}>

        <ToDo />
      </QueryClientProvider>

    </>
  )
}

export default App
