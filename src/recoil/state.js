import { atom } from 'recoil'

export const userImgState = atom({
    key: 'userImg',
    default: require('../img/userImg.svg').default
})

// atomFamily ... ?
export const postListState = atom({
    key: 'postList',
    default: [
        {
            'areaTag' : {
                'cityCategory' : '대한민국',
                'cityCountry' : '',
                'cityName' : '강릉'
            },
            'postTitle' : '강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행100자',
            'postDate' : '2022-12-31',
            'postWriter' : '뚜벅이 여행가',
            'postImg' : 'https://img.eomisae.co.kr/files/attach/images/100572/573/731/080/00f5f916a83dcc308af32c241e2dab20.jpg'
        },
        {
            'areaTag' : {
                'cityCategory' : '유럽',
                'cityCountry' : '프랑스',
                'cityName' : '파리'
            },
            'postTitle' : '프랑스 파리',
            'postDate' : '2022-01-01',
            'postWriter' : '뚜벅이 여행가',
            'postImg' : ''
        },
        {
            'areaTag' : {
                'cityCategory' : '유럽',
                'cityCountry' : '프랑스',
                'cityName' : '파리'
            },
            'postTitle' : '강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행100자',
            'postDate' : '2022-01-01',
            'postWriter' : '뚜벅이 여행가',
            'postImg' : ''
        },
    ]
})

export const noticeListState = atom({
    key: 'noticeList',
    default: [
        {
            'senderNickname' : '여행가123',
            'alarmCategory' : 'reply',
            'postTitle' : '유럽여행 후기'
        },
        {
            'senderNickname' : '여행가123',
            'alarmCategory' : 'like',
            'postTitle' : '유럽여행 후기'
        },
        {
            'senderNickname' : '여행가123',
            'alarmCategory' : 'reply',
            'postTitle' : '유럽여행 후기'
        },
        {
            'senderNickname' : '여행가123',
            'alarmCategory' : 'like',
            'postTitle' : '유럽여행 후기'
        }
    ]
})