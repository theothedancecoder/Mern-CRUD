import { Box } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"
import CreatePage from "./pages/CreatePage"
import Homepage from "./pages/Homepage"
import Navbar from "./ components/Navbar"
import { useColorModeValue } from "@chakra-ui/react"



function App() {
 

  return (

  
 <Box minh={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
  <Navbar/>


  <Routes>
    <Route path ="/" element ={<Homepage/>} />
    <Route path ="/create" element ={<CreatePage/>} />
  </Routes>
 </Box>



      )
}

export default App
