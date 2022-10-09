import Header from '../components/Header';
import Treading from '../components/Treading/TreadingList'
import Footer from '../components/Footer';

function MoviesPage() {
    return (
        <div style={{ backgroundColor: "#190144" }}>
            <Header />
            <Treading />
            <Footer />
        </div>
    );
}

export default MoviesPage;