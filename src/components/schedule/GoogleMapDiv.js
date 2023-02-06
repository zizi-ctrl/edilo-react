import React, { useRef, useEffect, useCallback, useState } from "react";
import { GoogleMap, LoadScript, Marker, Polyline, StandaloneSearchBox } from '@react-google-maps/api';
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";

import { Button, Div, Img, Input, FlexDiv } from "../../styles/style";
import { curMarkerPosState, mapCenterState, openPlanNavState, openSearchNavState, tempPlanListState } from "../../recoil/state";
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
    const savedPlanList = useRecoilValue(planListState)
    const [planList, setPlanList] = useRecoilState(tempPlanListState)
    const [openSearch, setOpenSearch] = useRecoilState(openSearchNavState)
    const apiKey = process.env.REACT_APP_GOOGLEMAP_API_KEY

    // search nav close
    const openSearchEvent = () => setOpenSearch(false)


    // google map style 
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

    const center = {    // 1번 장소
        lat: 35.65849864918091,
        lng: 139.7022513688183
    };

    const center2 = {
        lat: 35.6601234,
        lng: 139.7043604
    };

    const someCoords = [
        center, center2
    ]

    // google map
    const [map, setMap] = useState(null)
    const [mapCenter, setMapCenter] = useRecoilState(mapCenterState)
    const [mapBounds, setMapBounds] = useState(null)
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
    const [searchBox, setSearchBox] = useState(null);
    const [curMarkerPos, setCurMarkerPos] = useRecoilState(curMarkerPosState)
    const [searchResult, setSearchResult] = useState(null)

    const onPlacesChanged = () => {
        const places = searchBox.getPlaces()
        console.log(places)

        if (places.length == 1) {
            const resultLocation = places[0].geometry.location
            const resultCoord = [{
                lat: resultLocation.lat(),
                lng: resultLocation.lng()
            }]
            setMapCenter(resultCoord[0])
            setCurMarkerPos(resultCoord)
            setSearchResult(null)
        }
        else {
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
    }

    const markerClickEvent = (pos) => {
        console.log(pos)
        // info 박스로 바꿔서 일정 추가 버튼 넣기
    }

    // 마운트 될 때
    useEffect(() => {
        if (savedPlanList) {
            const plan = savedPlanList[0].scheduleList[0]
            const center = {
                lat: plan.blockYCoordinate,
                lng: plan.blockXCoordinate
            }
            setMapCenter(center)
            setPlanList(savedPlanList)
        }
    }, [])


    return (
        <LoadScript googleMapsApiKey={apiKey} libraries={["places"]}>
            <GoogleMap
                onLoad={mapOnLoad}
                mapContainerStyle={containerStyle}
                center={mapCenter}
                zoom={14}
                onBoundsChanged={boundsHandler}
            >
                { /* Child components, such as markers, info windows, etc. */}
                {/* 검색 결과 marker */}
                {
                    curMarkerPos &&
                    curMarkerPos.map((pos) => <Marker position={pos} onClick={(pos) => {
                        markerClickEvent(pos)
                    }}/>)
                }

                {/* 여행 일정 marker & line */}
                {
                    
                }
                <Marker
                    label="1"
                    icon={{
                        url: require('../../img/marker_attraction.svg').default,
                        scaledSize: { width: 30, height: 30 },
                        anchor: { x: 15, y: 15 }
                    }}
                    position={center}
                />
                <Marker
                    label="2"
                    icon={{
                        url: require('../../img/marker_attraction.svg').default,
                        scaledSize: { width: 30, height: 30 },
                        anchor: { x: 15, y: 15 }
                    }}
                    position={center2}
                />
                <Polyline
                    path={someCoords}
                    options={options}
                />
                {
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
                                <SearchItem eachResult={eachResult}/>
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