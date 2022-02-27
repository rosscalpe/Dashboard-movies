import React from 'react';
import propTypes from 'prop-types';

function RowMovies(props){
    return (
			<div className="col-md-4 mb-4">
				<div className= {`card border-left-${props.color} shadow h-100 py-2`}>
					<div className="card-body">
						<div className="row no-gutters align-items-center">
							<div className="col mr-2">
								<div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{props.titulo}</div>
								<div className="h5 mb-0 font-weight-bold text-gray-800">{props.cifra}</div>
							</div>
							<div className="col-auto">
								<i className={`${props.icono} fa-2x text-gray-300`}></i>
							</div>
						</div>
					</div>
				</div>
			</div>
    )
}
export default RowMovies;

RowMovies.propTypes = {
	titulo: propTypes.string.isRequired,
	cifra: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
	color: propTypes.string.isRequired,
	icono: propTypes.string.isRequired,
}
RowMovies.defaultProps = {
	titulo: "",
	cifra: "",
	color: "",
	icono: "",
}