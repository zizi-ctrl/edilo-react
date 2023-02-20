import React from "react";
import useFetch from "../../hooks/useFetch";

import PostList from "../community/PostList";

const Clipping = () => {

    useFetch('/post/scrap/all', 'GET')
    

    return (
        <PostList/>  
    )
}

export default Clipping