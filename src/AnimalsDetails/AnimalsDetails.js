import { Component } from 'react';
import { getAnimalById } from '../fetch-utils.js';

class AnimalsDetails extends Component {
    state = {
        id: 0,
        name: '',
        type: 0,
        snuggly: true,
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
                <div>this furbaby is snuggly?</div> 
                <div>{ this.state.type }</div>
                <div>{ this.state.snuggly }</div> 
           </>
         );
    }
}
 
export default AnimalsDetails;