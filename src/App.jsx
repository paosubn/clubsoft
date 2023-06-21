import { useState } from 'react'
import { Container} from '@mui/material';
import Grid from '@mui/material/Grid';
import {Router, Routes, Route} from 'react-router-dom';
import NavBar from "./components/navbar/NavBarComponent";
import NuevoClub from "./components/clubs/NuevoClubComponent";
import TablaClubs from "./components/clubs/TablaClubs";
import NuevaPersona from './components/Persona/NuevaPersona';

export default function App() {
  const [count, setCount] = useState(0)
 
  return (
    <div className="App">
    <NavBar/>
    <Container fixed sx={{mt:5}}>
      <Grid container>
      <Routes>
        <Route path='/nuevoclub' element={<NuevoClub/>}/>
        <Route path='/clubs' element={<TablaClubs/>}/>
        <Route path='/nuevapersona' element={<NuevaPersona/>}/>
      </Routes>
      </Grid>
    </Container>
    </div>
  );
}
