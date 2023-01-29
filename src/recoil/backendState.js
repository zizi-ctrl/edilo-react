import { atom } from 'recoil'

export const cityListState = atom({
    key: 'cityList',
    default: [
        {
            'cityCategory' : '대한민국',
            'name' : [
                {
                    'cityCategory' : '미국',
                    'name' : ['뉴욕', '라스베이가스', '로스앤젤레스', '샌프란시스코', '하와이']
                },
            ]
        },
        {
            'cityCategory' : '아시아',
            'name' : [
                {
                    'cityCategory' : '미국',
                    'name' : ['뉴욕', '라스베이가스', '로스앤젤레스', '샌프란시스코', '하와이']
                },
            ]
        },
        {
            'cityCategory' : '유럽',
            'name' : [
                {
                    'cityCategory' : '미국',
                    'name' : ['뉴욕', '라스베이가스', '로스앤젤레스', '샌프란시스코', '하와이']
                },
            ]
        },
        {
            'cityCategory' : '북아메리카',
            'name' : [                
                {
                    'cityCategory' : '미국',
                    'name' : ['뉴욕', '라스베이가스', '로스앤젤레스', '샌프란시스코', '하와이']
                },
                {
                    'cityCategory' : '미국',
                    'name' : ['뉴욕', '라스베이가스', '로스앤젤레스', '샌프란시스코', '하와이']
                },
                {
                    'cityCategory' : '미국',
                    'name' : ['뉴욕', '라스베이가스', '로스앤젤레스', '샌프란시스코', '하와이']
                },
            ]
        },
        {
            'cityCategory' : '남아메리카',
            'name' : [
                {
                    'cityCategory' : '미국',
                    'name' : ['뉴욕', '라스베이가스', '로스앤젤레스', '샌프란시스코', '하와이']
                },
            ]
        },
        {
            'cityCategory' : '오세아니아',
            'name' : [
                {
                    'cityCategory' : '미국',
                    'name' : ['뉴욕', '라스베이가스', '로스앤젤레스', '샌프란시스코', '하와이']
                },
            ]
        },
        {
            'cityCategory' : '아프리카',
            'name' : [
                {
                    'cityCategory' : '미국',
                    'name' : ['뉴욕', '라스베이가스', '로스앤젤레스', '샌프란시스코', '하와이']
                },
            ]
        }   
    ]
})

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
                'cityCategory' : '유럽',
                'cityCountry' : '프랑스',
                'cityName' : '파리'
            },
            'postTitle' : '강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행100자',
            'postDate' : '2022-01-01',
            'postWriter' : '뚜벅이 여행가',
            'postImg' : ''
        },
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