import React, { Component } from 'react';
import MoviesList from './MoviesList';

class Movie extends Component {
    constructor(props){
        super(props);
        this.state = {
            moviesList:[]
        }
    }
    componentDidMount() {
        fetch('/api/movies')
            .then(response => { console.log(response)
               return response.json() 
            })
            .then(({data}) => this.setState(() => ({moviesList: data})))
            .catch(err => console.log(err))
    } 
    render(){
        const {
            moviesList,
        } = this.state
        return(
            <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-respons">
                <h5 className="m-0 font-weight-bold text-gray-800">All the movies in the Database</h5>
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">   
                        <thead>
                            <tr>
                                <td>Id</td>
                                <td>Título</td>
                                <td>Calificación</td>
                                <td>Premios</td>
                                <td>Duración</td>
                            </tr>
                        </thead>   
                        <tbody>
                           {moviesList.map( (movie, i) => {
                              return <MoviesList {...movie} key={i} />
                              })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        )
    }
}
export default Movie