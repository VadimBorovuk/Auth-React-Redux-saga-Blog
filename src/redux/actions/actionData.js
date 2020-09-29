export const GET_DATA = "GET_DATA";
export const LOAD_DATA = "LOAD_DATA";

export const getData = (users) => ({
    type: GET_DATA,
    payload: users
})

export const loadData = () => ({
    type: LOAD_DATA
})