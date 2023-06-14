import { useState } from 'react'
import { Container } from '@mui/material';
import NavBar from "./components/navbar/NavBarComponent";
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <Container sx={{mt:5}}>
    <NavBar/>
    </Container>
  );
}
