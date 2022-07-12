
import { useContext } from "react"
import { Routes,Route } from "react-router-dom"
import AuthProvider, { AuthContext } from "../contexts/auth"
import Menu from "../layouts/Menu"
import Login from "../pages/Login"

function Private(props){
    if(!props.isLogged){
        return(
            <Login />
        )
    }
    return(
        <>
        <Menu/>
        {props.children}
        </>
    )
}

function RoutePrivate(props){

    const {isLogged} = useContext(AuthContext)
    return(
        <Routes>
            <Route path={props.path} element={
                <Private {...props} isLogged={isLogged}>
                    {props.element}

                </Private>
            }/>
        </Routes>
        //<></>
    )
}
export default RoutePrivate