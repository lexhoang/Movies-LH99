import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from '../components/home/Carousel'
import Moives from '../components/home/Moives';
import TvSeries from '../components/home/TvSeries';
import TopRated from '../components/home/TopRated';
function HomePage() {
    return (
        <div>
            <Header id="" />
            <Carousel />
            <Moives />
            <TvSeries />
            <TopRated />
            <Footer />
        </div>
    );
}

export default HomePage;