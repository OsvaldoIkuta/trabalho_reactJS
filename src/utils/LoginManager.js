
//const {AUTENTICADO} = Boolean;

export const isAutenticado = () => {
    if (localStorage.getItem('id_token') == undefined || localStorage.getItem('id_token') == ''){
        return false
    } else {
        return true
    }
}

/*export const setAutenticado = aut => {
    AUTENTICADO = aut
}*/

export const setToken = (idToken) => {
    // Saves user token to localStorage
    localStorage.setItem('id_token', idToken)
}

export const getToken = () => {
    // Retrieves the user token from localStorage
    return localStorage.getItem('id_token')
}

export const logout = () => {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('id_token');
    localStorage.removeItem('usuario_id');
}

export const setId = (id) => {
    // Saves user token to localStorage
    localStorage.setItem('usuario_id', id)
}

export const getId = () => {
    // Retrieves the user token from localStorage
    return localStorage.getItem('usuario_id')
}
