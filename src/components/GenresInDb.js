import React, { Component } from 'react';
import Genre from './Genre';

class GenresInDb extends Component {
    constructor(props){
        super(props);
        this.state = {
            genresList : [],
            changeBackground: false
        }
    }
    componentDidMount() {
        fetch('/api/genres')
            .then(response => { console.log(response)
               return response.json() 
            })
            .then(({data}) => this.setState(() => ({genresList: data})))
            .catch(err => console.log(err))
    }
    handleMouseOver = () => {
        this.setState((state) => ({changeBackground: !state.changeBackground}))
    }
    render() {
        const {
            genresList,
            changeBackground
        } = this.state
        return (
        <div className="col-lg-6 mb-4">						
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800" onMouseOver={ this.handleMouseOver }>Genres in Data Base</h5>
                </div>
                <div className={`card-body ${changeBackground ? 'bg-secondary' : ''}`}>
                    <div className="row">
                        {genresList.map((genre, i) => <Genre name={genre.name} key={i} />)}
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
export default GenresInDb;