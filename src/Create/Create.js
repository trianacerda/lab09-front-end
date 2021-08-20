import React, { Component } from 'react';
import { createNewAnimal, getAnimalById, getTypes } from '../fetch-utils.js';
// , updatePackAnimal

class Create extends Component {
    state = {
        id: 1,
        name: '',
        type_id: 1,
        snuggly: true,
        animalTypes: [],
    };

    componentDidMount = async () => {
        const animalsId = this.props.match.params.id;
        const animalsData = await getAnimalById(animalsId);
        const animalTypes = await getTypes();
        this.setState( 
            {id:animalsData.id,
            name:animalsData.name, 
            type_id: animalsData.type_id,
            snuggly: animalsData.snuggly,
            animalTypes } );
    };

    handleClick = async (e) => {
        e.preventDefault();
        const createNewAnimalData = {
            id: this.state.id,
            name: this.state.name,
            type_id: this.state.type_id,
            snuggly: this.state.snuggly,
        };
        const data = await createNewAnimal(createNewAnimalData);
        console.log('state', this.state);
        return data;
    };

    
    render() { 
        return ( 
            <>
            <h2>{ this.state.name }</h2>
                <form id='create-a-animal'>
                    <div className='form-group'>
                        <label>Name: </label>
                        <input
                        onChange={(e) => {
                            this.setState({ name: e.target.value})
                        }}
                        type='text'
                        value={ this.state.name }
                        ></input>
                    </div>
                    <div className='form-group'>
                        <label>this furbaby is snuggly?</label> 
                            <select 
                                value={this.state.snuggly} 
                                onChange={ async (e) => {
                                await this.setState({ snuggly: e.target.value });
                                // console.log(this.state.snuggly)
                                }} 
                                >
                                    <option value={true}>true</option>
                                    <option value={false}>false</option>
                            </select>
                        <br/>
                    </div>    
                    <div className='form-group'>
                        <label>what type of animal is this??</label> 
                            <select 
                                value={this.state.type_id} 
                                onChange={ async (e) => {
                                await this.setState({ type_id: e.target.value });
                                // console.log (typeof (this.state.type_name))
                                }} 
                                > { this.state.animalTypes.map((item) => <option key={item.type} value={item.id}>{item.type}</option>
                                )}
                            </select>
                    </div>
                    <button onClick={this.handleClick}>Create New Furbaby</button>
                </form>
            </>
         );
    }
}
 
export default Create;