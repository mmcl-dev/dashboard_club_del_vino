import logo from '../assets/images/logoClubDelVino.png';

function SideBar () {
    return (
        // <!-- Sidebar -->
		<ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

			{/* <!-- Sidebar - Brand --> */}
			<a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
				<div className="sidebar-brand-icon">
					<img className="w-100" src={logo} alt="Club del Vino logo" />
				</div>
			</a>
			{/* <!-- Divider --> */}
			<hr className="sidebar-divider" />

			{/* <!-- Nav Item - Productos --> */}
			<li className="nav-item">
				<a className="nav-link" href="/">
					<i className="fas fa-fw fa-folder"></i>
					<span>Productos</span></a>
			</li>

			{/* <!-- Nav Item - Usuarios --> */}
			<li className="nav-item">
				<a className="nav-link" href="/">
					<i className="fas fa-fw fa-folder"></i>
					<span>Users</span></a>
			</li>

			{/* <!-- Divider --> */}
			<hr className="sidebar-divider d-none d-md-block" />

			{/* <!-- Nav Item - Usuarios --> */}
			<li className="nav-item">
				<a className="nav-link" href="http://localhost:3030/">
					<i className="fas fa-link"></i>
					<span>Home</span></a>
			</li>
			{/* <!-- Divider --> */}
			<hr className="sidebar-divider d-none d-md-block" />
		</ul>
		// <!-- End of Sidebar -->

    );

}

export default SideBar;