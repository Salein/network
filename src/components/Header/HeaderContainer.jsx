import React, { useEffect } from "react"
import { connect } from "react-redux"
import Header from "./Header"
import { setAuthUserData } from "../../redux/auth-reducer"
import { authAPI } from "../../api/api"


const HeaderContainer = (props) => {

    useEffect(() => {
        authAPI.me().then(response => {
                if (response.data.resultCode === 0) {
                    let { id, email, login } = response.data.data
                    props.setAuthUserData(id, email, login)
                }
            })
    })

    return (
        <Header {...props} />
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer) 