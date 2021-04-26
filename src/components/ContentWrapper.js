import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import Footer from './Footer';

function ContentWrapper () {
  
    return (
        // <!-- Content Wrapper -->
		<div id="content-wrapper" class="d-flex flex-column">

			{/* <!-- Main Content --> */}
			<div id="content">
                <TopBar />
                <ContentRowTop />
            </div>
			{/* <!-- End of MainContent --> */}
            <Footer />
        </div>
		/* <!-- End of Content Wrapper --> */
    );
}

export default ContentWrapper;