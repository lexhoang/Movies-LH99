import Header from '../components/Header';
import MoivesList from '../components/Movies/MoviesList'
import Footer from '../components/Footer';

function MoviesPage() {
    return (
        <div style={{ backgroundColor: "#190144" }}>
            <MoivesList />
        </div>
    );
}

export default MoviesPage;