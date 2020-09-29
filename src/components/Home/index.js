import React, {useEffect} from 'react';

import {useDispatch, useSelector} from "react-redux";
import {loadData} from "../../redux/actions/actionData";
import CardItems from "./CardItems/index";
import NavBar from "./NavBar";
import Loader from "../Loader";

const Home = () => {
    const {users, loading} = useSelector(state => ({
        users: state.users.data,
        loading: state.users.loading
    }))

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadData())
    }, [])

    return (
        <div className="page__home">
            <NavBar/>
            {
                loading ? <Loader/> : <CardItems users={users}/>
            }
        </div>
    );
};

export default Home;

