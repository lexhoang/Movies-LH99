import Header from '../components/Header';
import MoivesList from '../components/Movies/MoviesList'
import Footer from '../components/Footer';

function MoviesPage() {
    return (
        <div style={{ backgroundColor: "#190144" }}>
            <Header />
            <MoivesList />
            <Footer />
        </div>
    );
}

export default MoviesPage;