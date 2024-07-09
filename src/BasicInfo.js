import React, {Componet} from 'react';

//Medium 
class BasicInfo extends React.Component {
    render(){
        const { name,phone,dob,favmovie } = this.props.person;
        return (
            <div className = "person-info">
                <h1>{name}</h1>
                <p>Phone: {phone}</p>
                <p>Date of Birth:{dob}</p>
                <p>Favorite Movie:{favmovie}</p>
            </div>
        );
    }
}

export default BasicInfo;

// VERY EASY -----------------------------------------

// class App extends Componet {
// render (){
//     return (
//         <div>
//             <h1> Jorge Esparza </h1>
//             <p>999-999-9999</p>
//             <p>Date of Birth: May 4, 2000</p>
//         </div>
//     )
// }
// }


//EASY -----------------------------------------------

// class App extends Componet {
//     constructor(props){
//         super(props);
//         this.state = {
//             person: {}
//         }
//     }
//     render(){
//     return (
//         <div>
//             <h1>Axel Esparza</h1>
//             <p>Phone: 888-888-8888</p>
//             <p> Date of Birth: May 4, 1785</p>
//         </div>
//     )
// }
// }