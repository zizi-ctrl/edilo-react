import { atom, selector } from 'recoil'
import { planListState } from './backendState'

//////// Main ////////


//////// Schedule ////////
export const openPlanNavState = atom({
    key: 'planNavOpen',
    default: true
})

export const openSearchNavState = atom({
    key: 'searchNavOpen',
    default: true
})

export const curMarkerPosState = atom({
    key: 'curMarkerPos',
    default: null
})

export const mapCenterState = atom({
    key: 'mapCenter',
    default:  {
        lat: 37.5666805,
        lng: 126.9784147
    }
})

// atomFamily 적용해보기
// 수정할 수 있는 plan, 저장 시 이 state를 백엔드로 전송
export const tempPlanListState = atom({
    key: 'tempPlanList',
    default: []
})

//////// MyPage ////////


//////// Community ////////


//////// Write ////////
export const attachImgState = atom({
    key: 'attachImg',
    default: []
})
