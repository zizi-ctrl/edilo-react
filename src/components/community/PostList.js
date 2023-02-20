import React, { useState, useRef, useEffect, useCallback } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { postListState } from "../../recoil/backendState";
import { postCategoryState } from "../../recoil/state";
import { Div, FlexDiv } from "../../styles/style";
import CommunityPostPre from "./CommunityPostPre";
import { useInView } from "react-intersection-observer";
import { useLocation } from "react-router-dom";


const PostList = (props) => {
    const location = useLocation()
    const url = location.pathname + location.search
    // const [posts, setPosts] = useState([])
    // const [hasNextPage, setHasNextPage] = useState(true)  // 다음페이지 존재하면 true
    // const page = useRef(1)
    // const [ref, inView] = useInView() // ref 관찰할 대상, inView 타겟이 화면에 보이면 true
    //const postList = useRecoilValue(postListState)
    //const listLength = postList.length

    //const [firstLoading, setFirstLoading] = useState(true) // 처음 로딩때만 글씨 보여주기
    const [posts, setPosts] = useRecoilState(postListState)
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [preParams, setPreParams] = useState('')
    const [ref, inView] = useInView({threshold: 1})
    const postCategory = useRecoilValue(postCategoryState)


    //console.log(process.env.REACT_APP_BACK_HOST_IP + url + `?postCategory=${postCategory}&postPage=${page}`)

    const fetchURL = () => {
        if (url == '/post') {
            return url + `/all?postCategory=1&postPage=${page}`
        }
        else return url + `&postPage=${page}`
    }


    const getPosts = useCallback(async () => {    //서버에 데이터 페이지마다 요청
        console.log(fetchURL())
        try {
            const response = await fetch(process.env.REACT_APP_BACK_HOST_IP + fetchURL(), {
                "method": "GET",
                "mode": 'cors', // no-cors, *cors, same-origin
                "credentials": "include"
            })
            const result = await response.json()

            if (result.success) {
                if (result.data.length != 0) {
                    setPosts((prevPosts) => [...prevPosts, ...result.data[0]])
                }
                else {
                    alert('마지막 게시글입니다.')
                }
            }
            else {
                console.log(`${result.message}`)
            }
        } catch (err) {
            console.log(err)
        }
        setLoading(false)
    }, [page])


    useEffect(() => {  // getPosts가 바뀔때 마다 데이터 불러오기
        getPosts()

        return () => {
            setPosts([])
        }
    }, [getPosts, url]) // 카테고리 바뀌면

    useEffect(() => {
        // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면 page+=1
        if (inView && !loading) {
            setIsLoading(true)
            setPage((prevState) => prevState + 1)
            setIsLoading(false)
        }
    }, [inView])

    // useEffect(() => {
    //     setPosts([])
    // }, )

    // useEffect(() => {
    //     setPosts([])
    // }, [params]))
    // const fetch = useCallback(async () => {
    //     // 더 불러올거 없을때 false
    //     try {
    //         const response = await fetch(process.env.REACT_APP_BACK_HOST_IP + url + params + `&postPage=${page.current}`, {
    //             "method": "GET",
    //             "mode": 'cors', // no-cors, *cors, same-origin
    //             "credentials": "include"
    //         })
    //         const result = await response.json()
    //         console.log(result)

    //         setPosts((prevPosts) => [...prevPosts, ...result.data]);
    //         setHasNextPage(result.data.length === 10);
    //         if (result.data.length) {
    //             page.current += 1;
    //         }
    //     } catch (err) {
    //         console.error(err);
    //     }
    //     const data = postList   // 받아오는 데이터, 일단 무한대으로 늘어남
    //     //console.log(data)

    //     setPosts((prevPosts) => [...prevPosts, ...data])
    //     setHasNextPage(data.length == 10)
    //     if (data.length) {
    //         page.current += 1
    //     }
    // }, []);

    //console.log(posts, page)

    // useEffect(() => {
    //     if (inView && hasNextPage) {
    //         fetch()
    //     }
    // }, [fetch, hasNextPage, inView])
    // 페이지 이동할 때 등 state 초기화

    return (
        <React.Fragment>
            {
                posts && posts.map((eachPost) => <CommunityPostPre eachPost={eachPost} />)
            }
            <Div ref={ref}></Div>
        </React.Fragment>
    )

}

export default PostList