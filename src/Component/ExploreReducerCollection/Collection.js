// export const initialPatient = {patient: []}

// export const patientReducer = (state, action) => {
//     switch(action.type) {
//         case "ADD_PATIENT":
//             const newPatient = {
//                 id: action.id,
//                 name: action.name
//             }
//             const allPatient = [...state.patient, newPatient]
//             return {patient: allPatient}

//         case "REMOVE_PATIENT":
//             const remainingPatients = state.patient.filter(pt => pt.id != action.id)
//             const remainingPatient = {patient : remainingPatients}
//             return remainingPatient

//         default: 
//         return state
//     }
// }




export const initialPatient = {patient : []}

export const patientReducer = (state, action) => {
    switch(action.type) {
        case "ADD_PATIENT":
            const newPatient = {
                id: action.id,
                name: action.name
            }
            const allPatient = [...state.patient, newPatient]
            return {patient: allPatient}

        case 'REMOVE_PATIENT':
            const remainingPatients = state.patient.filter(pt => pt.id != action.id)
            const remainingPatient = {patient: remainingPatients}
            return remainingPatient

        default: 
            return state
    }
}