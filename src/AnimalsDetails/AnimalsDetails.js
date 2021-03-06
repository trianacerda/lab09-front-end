import { Component } from 'react';
import { getAnimalById, updatePackAnimal, getTypes, deleteAnimal } from '../fetch-utils.js';

class AnimalsDetails extends Component {
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
        this.setState( {...animalsData, animalTypes } );
    };

    handleClick = async (e) => {
        e.preventDefault();
        const updatedAnimalData = {
            id: this.state.id,
            name: this.state.name,
            type_id: this.state.type_id,
            snuggly: this.state.snuggly,
        };
        const data = await updatePackAnimal(updatedAnimalData);
        // console.log('state', this.state);
        return data;
    };
    

    deleteClick = async (e) => {
        e.preventDefault();
        const updatedAnimalData = {
            id: this.state.id,
            name: this.state.name,
            type_id: this.state.type_id,
            snuggly: this.state.snuggly,
        };
        const data = await deleteAnimal(updatedAnimalData);
        // console.log('state', this.state);
        return data;
    };
    

    render() { 
        return ( 
            <>
                <h2>{ this.state.name }</h2>
                <form id ='update-a-animal'>
                    <div className='form-group'>
                        <label>Name: </label>
                        <input
                        onChange={(e) => {
                            this.setState({ name: e.target.value})
                        }}
                        type='text'
                        value={this.state.name}
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
                    <button onClick={this.handleClick}>Update Pack</button>
                    <button onClick={this.deleteClick}>Delete This Animal!</button>
                </form>
           </>
        );
    }
}
 
export default AnimalsDetails;