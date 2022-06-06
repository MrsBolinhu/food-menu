import api from './api'

const register = (username, password, repassword) => {
    const newUser = { "username": username, "password": password, "re_password": repassword }
    return api.post("register_user.php", newUser)
        .then((response) => {
            return response.data
        })
}

const login = (username, password) => {
    const user = { "username": username, "password": password }
    return api.post("login_user.php", user)
        .then((response) => {
            if (response.data.token) {
                localStorage.setItem("user", JSON.stringify(response.data))
            }
            return response.data
        })
}

const logout = () => {
    localStorage.removeItem("user")
}

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"))
}

const AuthService = {
    register,
    login,
    logout,
    getCurrentUser,
}

export default AuthService