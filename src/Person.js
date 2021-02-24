import React, {Component} from 'react';

//* function based
// function Person(props) {
//     const { data } = props;
//     const { name } = data;
//     return (
//         <div>
//             <h2>{ name }</h2>
//         </div>
//     )
// }


//* class based
class Person extends Component {
    state = {
        city: 'Los Angeles',
        phone: '888-888-8888',
        name: this.props.info.name
    }

    render() {
        this.state.name = 'Johnny'

        return (
            <div>
                
            </div>
        )
    }
}

export default Person;

