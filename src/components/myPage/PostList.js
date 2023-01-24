import React, { useState, useRef, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { postListState } from "../../recoil/state";
import { useLocation } from "react-router-dom";

import { Div } from "../../styles/style";
import CommunityPostPre from "../community/CommunityPostPre";

const PostList = () => {
    //const [ post, setPost ] = useRecoilState(example)

    // 폴더 위치 고민해보기
    const path = useLocation().pathname
    const postList = useRecoilValue(postListState)
    const listLength = postList.length
    
    return (
        <React.Fragment>
            {
                path == '/myPage/setting' &&
                <Div fontSize='20px' margin='14px 0 0' padding='0 0 4px' borderBottom='4px dotted #E1E4E6'>{listLength}</Div>
            }
            {
                postList.map((eachPost) => <CommunityPostPre eachPost={eachPost}/>)
            }
        </React.Fragment>
    )

    // 무한스크롤 구현 예제 코드
    /*
    const [ bottom, setBottom ] = useRef(null)
    const bottomObserver = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting) {
                    const { page, totalElement, limit } = params.pageData
                    if (totalElement < limit * (page - 1)) {
                        return;
                    }
                }
                params.getProductList({ page: page + 1})
            },
            { threshold: 0.3, rootMargin: '80px' }
        )
        bottomObserver.current = observer
    }, [])

    useEffect(() => {
        const observer = bottomObserver.current
        if (bottom) {
            observer.observe(bottom)
        }
        return () => {
            if (bottom) { 
                observer.unobserve(bottom)
            }
        }
    }, [bottom])
    */
    
    /*
    const target = useRef(null);
    const [isLoading, setIsLoading] = useState(true);
    const [postList, setPostList] = useState([]);

    const { count } = useInfiniteScroll({
        target: target,
        targetArray: postList,
        threshold: 0.2,
        endPoint: 3
    });

    useEffect(() => {
        // API 호출 부분 - 실제로는 count를 이용해 API를 호출
        setIsLoading(true);
        setTimeout(() => {
        setPostList([...postList, ...FAKE_DATA]);
        setIsLoading(false);
        }, 1000);
    }, [count]);

    const listLength = postList.length

    return (
        <React.Fragment>
            <section ref={target}>
                {
                postList.map((eachPost, idx) => <CommunityPostPre key={idx} eachPost={eachPost}/>)
                }
            </section>
            { isLoading && <Loading/> }
        </React.Fragment>
    )
    */

}

export default PostList