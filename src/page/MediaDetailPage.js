import Header from '../components/Header';
import Footer from '../components/Footer';
import MediaDetail from '../components/MediaDetail/MediaDetail';
import RelatedMovies from '../components/MediaDetail/RelatedMovies';


function MediaDetailPage() {
    return (
        <div>
            <Header id="" />
            <MediaDetail />
            <RelatedMovies />
            <Footer />
        </div>
    );
}

export default MediaDetailPage;