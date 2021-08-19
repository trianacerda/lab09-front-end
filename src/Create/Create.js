import React, { Component } from 'react';
import { getAnimalById } from '../fetch-utils.js';
// , updatePackAnimal

class Create extends Component {
    state ={
        id: 0,
        name: '',
        type_name: '',
        snuggly: true,
    };

    componentDidMount = async () => {
        const animalsId = this.props.match.params.id;
        const animalsData = await getAnimalById(animalsId);
        this.setState( animalsData );
    };

    render() { 
        return ( 
            <>
                <h1>create another animal</h1>
                {/* <input></input>
               <button></button> */}
            </>
         );
    }
}
 
export default Create;