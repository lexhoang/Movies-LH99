import Header from '../components/Header';
import Footer from '../components/Footer';
import MediaDetail from '../components/MediaDetail/MediaDetail';
import Cast from '../components/MediaDetail/Cast';
import RelatedMovies from '../components/MediaDetail/RelatedMovies';


function MediaDetailPage() {
    return (
        <div>
            <Header id="" />
            <MediaDetail />
            <Cast />
            <RelatedMovies />
            <Footer />
        </div>
    );
}

export default MediaDetailPage;