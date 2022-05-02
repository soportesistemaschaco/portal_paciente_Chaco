import { API_ENDPOINTS_CHANGEPASSWORD, API_ENDPOINTS_RECOVERPASSWORD, API_HEADER } from "../constants/api.constants";
import { get } from "./httpServices";

export async function recoverPasswordServices(email) {
  try {
    const searchParams = new URLSearchParams({
      email: email
    });
    let query = searchParams.toString();
    const promise = await get(API_ENDPOINTS_RECOVERPASSWORD(query), API_HEADER())
   return promise
  }
  catch (err) {
    console.log('Error al cargar las instituciones: ', err);
  }
}

export async function changePassword(token, password) {
  try {
    const searchParams = new URLSearchParams({
      token: token,
      password: password
    });
    let query = searchParams.toString();
    const promise = await get(API_ENDPOINTS_CHANGEPASSWORD(query), API_HEADER())
   return promise
  }
  catch (err) {
    console.log('Error al cargar las instituciones: ', err);
  }
}
