import React from 'react';
import logo from '../assets/images/logo-DH.png'; 
import { Link, Route, Routes } from 'react-router-dom';
import ContentWrapper from './ContentWrapper'
import GenresInDb from './GenresInDb';
import LastMovieInDb from './LastMovieInDb';
import Chart from './Chart';
import Error404 from './Error404';
import SearchMovies from './SearchMovies';


function SideBar(){
    return (
       <React.Fragment>
		<ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

			<Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
				<div className="sidebar-brand-icon">
					<img className="w-100" src={ logo } alt="Digital House"></img>
				</div>
			</Link>

			<hr className="sidebar-divider my-0"></hr>
			
			<li className="nav-item active">
				<Link className="nav-link" to="/">
					<i className="fas fa-fw fa-tachometer-alt"></i>
					<span>Dashboard - DH movies</span>
				</Link>
			</li>

			<hr className="sidebar-divider"></hr>

			<div className="sidebar-heading">Actions</div>

			<li className="nav-item">
				<Link className="nav-link collapsed" to="/search">
					<i className="fas fa-fw fa-folder"></i>
					<span>Search movies</span>
				</Link>
			</li>
			
			<li className="nav-item">
				<Link className="nav-link collapsed" to="/genres">
					<i className="fas fa-fw fa-folder"></i>
					<span>Genres</span>
				</Link>
			</li>

			<li className="nav-item">
				<Link className="nav-link" to="/lastmovie">
					<i className="fas fa-fw fa-chart-area"></i>
					<span>LastMovie</span></Link>
			</li>
			
			<li className="nav-item">
				<Link className="nav-link" to="/rowmovies">
					<i className="fas fa-fw fa-table"></i>
					<span>Tables</span></Link>
			</li>

			<hr className="sidebar-divider d-none d-md-block"></hr>
		</ul>
        <Routes>
		    <Route path='/' element={ <ContentWrapper /> } />
			<Route path='/rowmovies' element={ <Chart/> } />
			<Route path='/genres' element={ <GenresInDb /> } />
			<Route path='/lastmovie' element={ <LastMovieInDb /> } />
			<Route path='/search' element={ <SearchMovies/> } />
			<Route path='*' element={ <Error404/> } />
		</Routes>
		</React.Fragment>
    )
}
export default SideBar;