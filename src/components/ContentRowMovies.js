import React from 'react'; 
import RowMovies from './RowMovies';

const row = [{ 
	titulo: "Movies in database",
	cifra: 21,
	color: "primary",
	icono: "fas fa-film"
},{
	titulo: "Total awards",
	cifra: 79,
	color: "success",
	icono: "fas fa-award"	
},{
	titulo: "Actors Quantity",
	cifra: 49,
	color: "warning",
	icono: "fas fa-user"
}
]

function ContentRowMovies(){
    return (
		<div className="row">
			{row.map((item, i) => (<RowMovies key={item + i} {...item} />))}
		</div>
	)
    
}
export default ContentRowMovies;