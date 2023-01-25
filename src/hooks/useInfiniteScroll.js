import { useEffect, useState, useMemo, useRef } from 'react';

// 아직 이해 필요!!!!!!!

/*Props 타입 정의

  root?: Element | null;
  // root 의 margin 값
  rootMargin?: string;
  // target element 가 root 와 몇 % 교차했을 때, callback 을 실행할지 결정하는 값 
  target: MutableRefObject<HTMLDivElement | null>;
  threshold?: number;
  // 관찰을 할 Array
  targetArray: Array<any>;
  // 리스트의 갯수중 불러올 시점 (pageSize가 20이고 endPoint가 5라면, 15번째 리스트 아이템을 관찰)
  endPoint?: number;
}*/

// usefetch hook 파기 (필수)
/*
const useInfiniteScroll = (props) => {              
    const { target, root, rootMargin, targetArray, threshold, endPoint } = props
    const [count, setCount] = useState(0);
    const currentChild = useRef(null);
                                
    // IntersectionObserver 생성자 등록 및 callback 함수 등록
    const observer = useMemo(() => {
    return new IntersectionObserver(
        (entries, observer) => {
            if (target?.current === null) {
                return;
            }
            if (entries[0].isIntersecting) {
                setCount((v) => v + 1);
                // setCount가 무한으로 올라가는 것을 방지하기 위한 연결 끊음
                observer.disconnect();
            }
        },
        {root, rootMargin: '50px', threshold: 0.3 },);
    }, [target, root, rootMargin, threshold]);

    useEffect(() => {
    if (target?.current === null) {
        return;
    }

    // 관측하는 Element가 달라졌을 때, 다시 관측을 시작
    const observeChild = target.current.children[target.current.children.length - endPoint];
    if (observeChild && currentChild.current !== observeChild) {
        currentChild.current = observeChild;
        observer.observe(observeChild);
    }

    return () => {
        if (target.current !== null && observer) {
        observer.unobserve(target.current);
        }
    };
    }, [count, targetArray, target, endPoint]);

    return {
    count,
    setCount
    };
};

export default useInfiniteScroll;
*/