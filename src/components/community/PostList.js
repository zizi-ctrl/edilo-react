import React, { useState, useRef, useEffect, useCallback } from "react";
import { useRecoilValue } from "recoil";
import { postListState } from "../../recoil/backendState";
import { useLocation } from "react-router-dom";

import { Div } from "../../styles/style";
import CommunityPostPre from "./CommunityPostPre";
import { useInView } from "react-intersection-observer";

const PostList = () => {
    const [ posts, setPosts ] = useState([])
    const [ hasNextPage, setHasNextPage ] = useState(true)  // 다음페이지 존재하면 true
    const page = useRef(1)
    const [ ref, inView ] = useInView() // ref 관찰할 대상, inView 타겟이 화면에 보이면 true
    
    const path = useLocation().pathname
    const postList = useRecoilValue(postListState)
    const listLength = postList.length

    const fetch = useCallback(async () => {
        /* 더 불러올거 없을때 false
        try {
          const { data } = await axios.get<Post[]>(
            `http: `
          );
          setPosts((prevPosts) => [...prevPosts, ...data]);
          setHasNextPage(data.length == 10);
          if (data.length) {
            page.current += 1;
          }
        } catch (err) {
          console.error(err);
        }
        */
        let data = postList   // 받아오는 데이터, 일단 무한대으로 늘어남
        //console.log(data)

        setPosts((prevPosts) => [...prevPosts, ...data])
        setHasNextPage(data.length == 10)
        if (data.length) {
            page.current += 1
        }
    }, []);

    //console.log(posts, page)

    useEffect(() => {
        if (inView && hasNextPage) {
            fetch()
        }
    }, [fetch, hasNextPage, inView])
    // 페이지 이동할 때 등 state 초기화

    return (
        <React.Fragment>
            {
                path == '/myPage/setting' &&
                <Div fontSize='20px' margin='14px 0 0' padding='0 0 4px' borderBottom='4px dotted #E1E4E6'>{listLength}</Div>
            }
            {
                posts?.map((eachPost) => <CommunityPostPre eachPost={eachPost}/>)
            }
            <Div ref={ref}></Div>
        </React.Fragment>
    )

}

export default PostList