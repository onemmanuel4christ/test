// import './App.css';
import styled from 'styled-components'
import Banner from './components/Banner';
import Navbar from './components/Navbar';

const Container = styled.div`
  width: 100%;
  height: 100vh;
`
function App() {
  return (
    <Container>
      <Navbar />
      <Banner />
    </Container>
  );
}

export default App;
