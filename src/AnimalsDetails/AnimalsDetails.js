import { Component } from 'react';
import { getAnimalById, updatePackAnimal, getTypes } from '../fetch-utils.js';

class AnimalsDetails extends Component {
    state = {
        id: 0,
        name: '',
        type_name: '',
        snuggly: true,
    };

    componentDidMount = async () => {
        const animalsId = this.props.match.params.id;
        const animalsData = await getAnimalById(animalsId);
        const animalTypes = await getTypes();
        // console.log(animalsData)
        this.setState( {...animalsData, animalTypes } );
    
        // console.log('state' ,this.state)
    };
    getTypesId = () => {
        const typesObject = this.state.animalsData.find(
            (animalId) => animalId.name === this.state.type_id
        );
        return typesObject.id;
    }

    handleClick = async (e) => {
        e.preventDefault();
        const updatedAnimalData = {
            id: this.state.id,
            name: this.state.name,
            type_name: this.state.type_name,
            snuggly: this.state.snuggly,
        };
        const data = await updatePackAnimal(updatedAnimalData);
        console.log('state', this.state);
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
                                value={this.state.type_name} 
                                onChange={ async (e) => {
                                await this.setState({ type_name: e.target.value });
                                // console.log (typeof (this.state.type_name))
                                }} 
                                >
                                    <option value='cat'>cat</option>
                                    <option value='dog'>dog</option>
                            </select>
                    </div>
                    <button onClick={this.handleClick}>Update Pack</button>
                </form>
           </>
        );
    }
}
 
export default AnimalsDetails;