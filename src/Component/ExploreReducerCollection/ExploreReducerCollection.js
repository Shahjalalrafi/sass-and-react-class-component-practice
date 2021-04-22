// import React, { useReducer, useRef } from 'react';
// import { initialPatient, patientReducer } from './Collection';
import React, { useReducer, useRef } from 'react';
import { initialPatient, patientReducer } from './Collection';

const ExploreReducerCollection = () => {

    // const nameRef = useRef()
    // const [state, dispatch] = useReducer(patientReducer, initialPatient)

    // const handleSubmit = event => {
        
    //     dispatch({
    //         type: 'ADD_PATIENT',
    //         id: state.patient.length + 1,
    //         name: nameRef.current.value,
            
    //     })
    //     nameRef.current.value = ''
        
    //     event.preventDefault()
    // }
    // return (
    //     <div>
    //         <h3>Patient management: {state.patient.length}</h3>
    //         <form onSubmit={handleSubmit}>
    //             <input ref={nameRef} type="text"/>
    //         </form>
    //         {
    //             state.patient.map(pt => <li
    //                 key={pt.id}
    //                 onClick={() => dispatch({type: 'REMOVE_PATIENT', id: pt.id})}
    //             >{pt.id} is {pt.name}</li>)
    //         }
    //     </div>
    // );


    const userName = useRef()
    const [state, dispatch ] = useReducer(patientReducer, initialPatient)

    const handleSubmit = e => {

        dispatch({
            type: "ADD_PATIENT",
            name: userName.current.value,
            id: state.patient.length + 1
        })

        userName.current.value = ''

        e.preventDefault()
    }

    return (
        <div>
            <h3>patient details: {state.patient.length}</h3>
            <form onSubmit={handleSubmit}>
                <input ref={userName} type="text"/>
            </form>
            {
                state.patient.map(pt => <li
                    key={pt.id}
                    onClick={() => dispatch({type: 'REMOVE_PATIENT', id: pt.id})}
                >{pt.name}</li>)
            }
        </div>
    )
};

export default ExploreReducerCollection;