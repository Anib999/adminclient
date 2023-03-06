import { AppBar, useTheme } from "@mui/material"
import { useDispatch } from "react-redux"


const Navbar = () => {
    const dispatch = useDispatch()
    const theme = useTheme()
  return (
    <AppBar></AppBar>
  )
}

export default Navbar