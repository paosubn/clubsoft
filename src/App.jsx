import { useState } from 'react'
import { Container} from '@mui/material';
import NavBar from "./components/navbar/NavBarComponent";
import NuevoClub from "./components/clubs/NuevoClubComponent";

export default function App() {
  const [count, setCount] = useState(0)
 
  return (
    <>
    <NavBar/>
    <Container sx={{mt:5}}>
    
      <NuevoClub/>
    </Container>
    </>
  );
}
