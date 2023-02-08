import { atom, atomFamily, selector, selectorFamily } from 'recoil'
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
    default: {
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

export const tempPlanBlockListState = atom({
    key: 'tempPlanBlockList',
    default: []
})

export const lineCoordListState = selector({
    key: 'lineCoordList',
    get: ({ get }) => {
        const planBlock = get(tempPlanBlockListState)
        let coordList = []
        let temp = []
        planBlock.forEach((item) => {
            const coord = {
                lat: item.blockYCoordinate,
                lng: item.blockXCoordinate
            }
            temp.push(coord)
            if (temp.length == 2) {
                coordList.push(temp)
            }
            // const someCoords = [
            //     center, center2
            // ]
        })
        console.log(coordList)
        return coordList
    }
})

export const planModifyCheckState = atom({
    key: 'planModifyCheck',
    default: false
})

export const dragLabelState = atom({
    key: 'dragLabel',
    default: null
})

// export const planIdState = atom({
//     key: 'planId',
//     default: []
// })

// export const planSelectorFamily = selectorFamily({
//     key: 'planSelector',
//     get: (planId) => ({get}) => get(tempPlanState())
// })

//////// MyPage ////////


//////// Community ////////


//////// Write ////////
export const attachImgState = atom({
    key: 'attachImg',
    default: []
})
