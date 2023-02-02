// import './App.css';
import Navbar from './navbar/Navbar';
import WelcomeBox from './introMessage/WelcomeBox';
import Carousel from 'react-elastic-carousel';

function App() {
  return (
    <>
      <div className='introContainer'>
        <Navbar />
        <WelcomeBox />
      </div>
      <Carousel>
        <div className='housesContainer'>
          <div class='housesHeader'>Top Current Houses For Sale</div>
        </div>
      </Carousel>
    </>
  );
}

export default App;
