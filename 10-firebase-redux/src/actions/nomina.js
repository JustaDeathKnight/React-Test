import { db } from "../firebase/config-firebase";
import { types } from "../types/types";

export const crearRegistro = (pago) => {
  return async (getState) => {
    const { uid } = getState().auth;
    const datos = {
      fecha: new Date(),
      pago,
    };

    const referencia = await db.collection(`${uid}/nominas/nomina`).add(datos);

    console.log(referencia);
  };
};

export const leerRegistros = (data) => {
  return {
    type: types.nominaRead,
    payload: data,
  };
};
