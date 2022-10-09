import Header from '../components/Header';
import TvSeriesList from '../components/TvSeries/TvSeries'
import Footer from '../components/Footer';

function TvSeriesPage() {
    return (
        <div style={{ backgroundColor: "#190144" }}>
            <Header />
            <TvSeriesList />
            <Footer />
        </div>
    );
}

export default TvSeriesPage;