import AboutSection from '../../components/AboutSection/AboutSection';
import Banner from '../../components/Banner/Banner';
import PortfolioSection from '../../components/PortfolioSection/PortfolioSection';
import Vadim from '../../components/Vadim/Vadim';
import './index.css'


const HomePage = () => {
    return ( 
        <main>
            <Banner />
            <AboutSection />
            <PortfolioSection />
            <Vadim />
        </main>
     );
}
 
export default HomePage;