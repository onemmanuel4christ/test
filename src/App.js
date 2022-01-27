// import './App.css';
import styled from 'styled-components'
import Banner from './components/Banner';
import MeetComponent from './components/MeetComponent';
import Navbar from './components/Navbar';

const Container = styled.div`
  width: 100%;
  height: 100vh;
`
function App() {
  return (
    <>
      <Navbar />
    <Container>
      <Banner />
      <MeetComponent />
    </Container>
    </>
  );
}

export default App;
