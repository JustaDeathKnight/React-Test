export const crearRegistro = (nomina) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // const firestore = getFirestore();
        // const profile = getState().firebase.profile;
        // const authorId = getState().firebase.auth.uid;
        // firestore.collection('nomina').add({
        //     ...nomina,
        //     authorFirstName: profile.firstName,
        //     authorLastName: profile.lastName,
        //     authorId: authorId,
        //     createdAt: new Date()
        // }).then(() => {
        //     dispatch({ type: 'CREAR_NOMINA', payload: nomina });
        // }).catch((err) => {
        //     dispatch({ type: 'CREAR_NOMINA_ERROR', payload: err });
        // });

        const nomina = getState().nomina;


    };
}