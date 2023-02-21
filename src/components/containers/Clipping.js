import React from "react";

import useFetch from "../../hooks/useFetch";
import PostList from "../elements/PostList";

const Clipping = () => {

    useFetch('/post/scrap/all', 'GET')
    

    return (
        <PostList/>  
    )
}

export default Clipping