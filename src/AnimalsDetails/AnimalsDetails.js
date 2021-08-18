import { Component } from 'react';
import { getAnimalById } from '../fetch-utils.js';

class AnimalsDetails extends Component {
    state = {
        id: 0,
        name: '',
        type: 0,
        snuggly: '',
    };

    componentDidMount = async () => {
        const animalsId = this.props.match.params.id;
        const animalsData = await getAnimalById(animalsId);
        this.setState({ ...animalsData });
    };
    render() { 
        return ( 
            <>
                <h1>{ this.state.name }</h1>
                <label>this furbaby is snuggly?</label> 
                <select onChange={(e) => {
                    this.setState({ snuggly: e.target.value });
                }} value={this.state.snuggly ? true : false}>
                <option value='true'>TRUE</option>
                <option value='false'>FALSE</option>
                </select>
           </>
         );
    }
}
 
export default AnimalsDetails;