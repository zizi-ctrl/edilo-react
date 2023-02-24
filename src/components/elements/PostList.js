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
    const [posts, setPosts] = useRecoilState(postListState)
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [preParams, setPreParams] = useState('')
    const [ref, inView] = useInView({threshold: 1})
    const postCategory = useRecoilValue(postCategoryState)


    const fetchURL = () => {
        if (url == '/community') {
            return '/post' + `/all?postCategory=1&postPage=${page}`
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
    }, [getPosts]) // 카테고리 바뀌면

    useEffect(() => {
        // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면 page+=1
        if (inView && !loading) {
            setIsLoading(true)
            setPage((prevState) => prevState + 1)
            setIsLoading(false)
        }
    }, [inView])


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