import { atom } from 'recoil'

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

//////// MyPage ////////


//////// Community ////////


//////// Write ////////
export const attachImgState = atom({
    key: 'attachImg',
    default: []
})
