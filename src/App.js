import ClientsReview from './components/ClientsReview';
import FAQ from './components/FAQ';
import FluentEnInfo from './components/FluentEnInfo';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './components/HomePage'; 
import Navbar from './components/Navbar';
import OurApproach from './components/OurApproach';
import StudyPackages from './components/StudyPackages';
import TeamSection from './components/TeamSection';
import WhyChooseUs from './components/WhyChooseUs';
import './styles/styles.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar/>
      <HomePage />
      <OurApproach/>
      <ClientsReview/>
      <WhyChooseUs/>
      <StudyPackages/>
      <TeamSection/>
      <FluentEnInfo/>
      <FAQ/>
      <Footer/>
    </div>
  );
}

export default App;