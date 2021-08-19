import React, { Component } from 'react';
import { getAllAnimals } from '../fetch-utils';
import { Link } from 'react-router-dom';
class AnimalsList extends Component {
    state = { animals: [] };
    componentDidMount = async () => {
        const data = await getAllAnimals();
        this.setState({animals: data});
    }
    render() { 
        const { animals } = this.state
        return ( 
            <section className="animals-list">
                {animals.map((furBaby) => (
                    <div className="animals-holder">
                        <h2>
                            <Link to={`/animals/${furBaby.id}`}>{furBaby.name}</Link>
                        </h2>
                    </div>
                ))}
            </section>
         );
    }
}
 
export default AnimalsList;