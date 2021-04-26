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
			<hr className="sidebar-divider my-0" />

			{/* <!-- Nav Item - Dashboard --> */}
			{/* <li className="nav-item active">
				<a className="nav-link" href="/">
					<i className="fas fa-fw fa-tachometer-alt"></i>
					<span>Dashboard - Club del Vino</span>
				</a>
			</li> */}

			{/* <!-- Divider --> */}
			<hr className="sidebar-divider" />

			{/* <!-- Heading --> */}
			<div className="sidebar-heading"></div>

			{/* <!-- Nav Item - Panel --> */}
			<li className="nav-item">
				<a className="nav-link collapsed" href="/">
					<i className="fas fa-fw fa-folder"></i>
					<span>Panel de Control</span>
				</a>
			</li>

			{/* <!-- Nav Item - Pedidos --> */}
			<li className="nav-item">
				<a className="nav-link" href="/">
					<i className="fas fa-fw fa-folder"></i>
					<span>Pedidos</span></a>
			</li>

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

			{/* <!-- Nav Item - Publicdad --> */}
			<li className="nav-item">
				<a className="nav-link" href="/">
					<i className="fas fa-fw fa-folder"></i>
					<span>Publicidad</span></a>
			</li>

			{/* <!-- Divider --> */}
			<hr className="sidebar-divider d-none d-md-block" />
		</ul>
		// <!-- End of Sidebar -->

    );

}

export default SideBar;