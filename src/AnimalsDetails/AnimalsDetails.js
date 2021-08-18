import { Component } from 'react';
import { getAnimalById } from '../fetch-utils.js';

class AnimalsDetails extends Component {
    state = {
        id: 0,
        name: '',
        type_id: 0,
        snuggly: true,
    };

    componentDidMount = async () => {
        const animalsId = this.props.match.params.id;
        const animalsData = await getAnimalById(animalsId);
        this.setState( animalsData );
    
        // console.log('state' ,this.state)
        // console.log(animalsData)
    };
    render() { 
        return ( 
            <>
                <h1>{ this.state.name }</h1>
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
           </>
         );
    }
}
 
export default AnimalsDetails;