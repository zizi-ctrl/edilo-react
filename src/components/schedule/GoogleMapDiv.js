import React, { useRef, useEffect, useCallback, useState, Suspense } from "react";
import { GoogleMap, LoadScript, Marker, Polyline, StandaloneSearchBox } from '@react-google-maps/api';
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";

import { Button, Div, Img, Input, FlexDiv } from "../../styles/style";
import { curMarkerPosState, lineCoordListState, mapCenterState, openPlanNavState, openSearchNavState, planModifyCheckState, tempPlanBlockListState, tempPlanListState } from "../../recoil/state";
import { planListState } from "../../recoil/backendState";
import SearchItem from "./SearchItem";


const SearchNav = styled(FlexDiv)`
    overflow-y: scroll;
    overflow-x: hidden;
    
    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background: #E1E4E5;
        border-radius: 30px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #CCCCCC;
        border-radius: 30px;
    }

    ::-webkit-scrollbar-track {
        background: #F0F3F5;
    }
`


const GoogleMapComponent = () => {
    // google map, line style 모아둠
    /*
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false,
    */
    const containerStyle = {
        width: '100%',
        height: 'calc(100vh - 70px)'
    };

    const lineSymbol = {
        path: "M 0,-1 0,1",
        strokeOpacity: 1,
        scale: 2
    };

    const options = {
        strokeOpacity: 0,
        fillOpacity: 0,
        zIndex: 1,
        icons: [
            {
                icon: lineSymbol,
                offset: "0",
                repeat: "12px"
            }
        ]
    };


    // plan 저장관련 변수들 정리좀 해야함 ㅜㅜ
    const savedPlanList = useRecoilValue(planListState)
    const [planList, setPlanList] = useRecoilState(tempPlanListState)
    const tempPlanBlockList = useRecoilValue(tempPlanBlockListState)
    const lineCoordList = useRecoilValue(lineCoordListState)

    const setPlanModifyCheck = useSetRecoilState(planModifyCheckState)

    const [openSearch, setOpenSearch] = useRecoilState(openSearchNavState)

    // google map
    const apiKey = process.env.REACT_APP_GOOGLEMAP_API_KEY

    const [map, setMap] = useState(null)
    const [mapCenter, setMapCenter] = useRecoilState(mapCenterState)
    const [mapBounds, setMapBounds] = useState(null)

    // 검색 기능
    const [searchBox, setSearchBox] = useState(null);
    const [curMarkerPos, setCurMarkerPos] = useRecoilState(curMarkerPosState)
    const [searchResult, setSearchResult] = useState(null)


    // search nav close
    const openSearchEvent = () => setOpenSearch(false)

    // google map
    const mapOnLoad = useCallback((map) => {
        setMap(map)
    }, [])

    const boundsHandler = () => {
        setMapBounds(map.getBounds())
    }

    const onSBLoad = useCallback((ref) => {
        setSearchBox(ref);
    })


    // 검색 기능
    const onPlacesChanged = () => {
        const places = searchBox.getPlaces()
        console.log(places)


        let searchList = []
        let markerPosList = []
        places.forEach(element => {
            searchList.push({
                'name': element.name,
                'types': element.types ? element.types : '',
                'img': element.photos ? element.photos[0].getUrl() : '',
                'position': [{
                    lat: element.geometry.location.lat(),
                    lng: element.geometry.location.lng()
                }]
            })

            markerPosList.push({
                lat: element.geometry.location.lat(),
                lng: element.geometry.location.lng()
            })
        });
        setSearchResult(searchList)
        setCurMarkerPos(markerPosList)
    }


    // 마운트 될 때
    useEffect(() => {
        if (savedPlanList) {
            const plan = savedPlanList[0].scheduleList[0]
            const center = {
                lat: plan.blockYCoordinate,
                lng: plan.blockXCoordinate
            }
            setCurMarkerPos([]) // 페이지 이동할 때 marker 초기화
            setMapCenter(center)
            setPlanList(savedPlanList)
            setPlanModifyCheck(false)
        }
    }, [])


    return (
        <LoadScript googleMapsApiKey={apiKey} libraries={["places"]}>
            <GoogleMap
                onLoad={mapOnLoad}
                mapContainerStyle={containerStyle}
                center={mapCenter}
                zoom={14.5}
                onBoundsChanged={boundsHandler}
            >
                { /* Child components, such as markers, info windows, etc. */}
                {/* 검색 결과 marker */}
                {
                    curMarkerPos &&
                    curMarkerPos.map((pos) => <Marker position={pos} />)
                }

                {/* 여행 일정 marker & line */}
                {
                    tempPlanBlockList &&
                    tempPlanBlockList.map((item, key) =>
                        <Marker
                            label={`${key + 1}`}
                            icon={{
                                url: item.blockCategory == '숙소' && require('../../img/marker_hotel.svg').default
                                || item.blockCategory == '편의점' && require('../../img/marker_convenience_store.svg').default
                                || item.blockCategory == '음식점' && require('../../img/marker_restaurant.svg').default
                                || item.blockCategory == '쇼핑' && require('../../img/marker_shop.svg').default
                                || item.blockCategory == '관광명소' && require('../../img/marker_attraction.svg').default
                                || require('../../img/marker_etc.svg').default
                                ,
                                scaledSize: { width: 30, height: 30 },
                                anchor: { x: 15, y: 15 }
                            }}
                            position={{
                                lat: item.blockYCoordinate,
                                lng: item.blockXCoordinate
                            }}
                        />
                    )
                }
                {
                    lineCoordList &&
                    lineCoordList.map((item) =>
                        <Polyline
                            path={item}
                            options={options}
                        />
                    )
                }
                {
                    // search Nav - 따로 빼고 싶었는데 serachbox 때문에 못 뺌
                    openSearch &&
                    <SearchNav position='fixed' backgroundColor='backgroundGray' zIndex='300' width='300px' height='calc(100vh - 70px)' align='column-center' right='0px'>
                        <FlexDiv>
                            <Button onClick={openSearchEvent}>
                                <Img cursor='pointer' zIndex='4000' width='18px' src={require('../../img/menuclose_right.svg').default} />
                            </Button>
                            <FlexDiv backgroundColor='white' height='39px' alignItems='center' margin='18px 8px' padding='8px' borderRadius='24px'>
                                <StandaloneSearchBox
                                    onPlacesChanged={onPlacesChanged}
                                    onLoad={onSBLoad}
                                    bounds={mapBounds}
                                >
                                    <Input placeholder='장소 검색' border='none' width='200px' outline='none' fontSize='14px' height='20px' padding='0 22px 0 12px' />
                                </StandaloneSearchBox>
                                <Img src={require('../../img/search2.svg').default} position='relative' right='8px' />
                            </FlexDiv>
                        </FlexDiv>
                        {
                            searchResult != null &&

                            searchResult.map((eachResult) =>
                                <SearchItem eachResult={eachResult} />
                            )
                        }
                    </SearchNav>
                }
            </GoogleMap>
        </LoadScript >
    )
}

export default React.memo(GoogleMapComponent)

//