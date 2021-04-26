import ContentRowProducts from './ContentRowProducts';
import CategoriesInDB from './CategoriesInDb';
import InfoProduct from './InfoProduct';



function ContentRowTop () {
    return (

        // <!-- Content Row Top -->
				<div className="container-fluid">
					<div className="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
					</div>
				
					<ContentRowProducts />
					
	
					{/* <!-- Content Row Last Movie in Data Base --> */}
					<div className="row">
						<InfoProduct />
                        <CategoriesInDB />
					</div>
				</div>
				
    )
}

export default ContentRowTop;