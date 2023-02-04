import { atom } from 'recoil'


export const mainCityState = atom({
    key: 'mainCity',
    defualt: [
        //     {
        //         'cityName': '서울',
        //         'cityEnglishName': 'SEOUL',
        //         'cityImg': require('../img/seoul.svg').default
        //     },
        //     {
        //         'cityName': '서울',
        //         'cityEnglishName': 'SEOUL',
        //         'cityImg': require('../img/seoul.svg').default
        //     },
        //     {
        //         'cityName': '서울',
        //         'cityEnglishName': 'SEOUL',
        //         'cityImg': require('../img/seoul.svg').default
        //     },
        //     {
        //         'cityName': '서울',
        //         'cityEnglishName': 'SEOUL',
        //         'cityImg': require('../img/seoul.svg').default
        //     },
        //     {
        //         'cityName': '서울',
        //         'cityEnglishName': 'SEOUL',
        //         'cityImg': require('../img/seoul.svg').default
        //     },
        //     {
        //         'cityName': '서울',
        //         'cityEnglishName': 'SEOUL',
        //         'cityImg': require('../img/seoul.svg').default
        //     },
        //     {
        //         'cityName': '서울',
        //         'cityEnglishName': 'SEOUL',
        //         'cityImg': require('../img/seoul.svg').default
        //     },
        //     {
        //         'cityName': '서울',
        //         'cityEnglishName': 'SEOUL',
        //         'cityImg': require('../img/seoul.svg').default
        //     },
        //     {
        //         'cityName': '서울',
        //         'cityEnglishName': 'SEOUL',
        //         'cityImg': require('../img/seoul.svg').default
        //     },
        //     {
        //         'cityName': '서울',
        //         'cityEnglishName': 'SEOUL',
        //         'cityImg': require('../img/seoul.svg').default
        //     },
        //     {
        //         'cityName': '서울',
        //         'cityEnglishName': 'SEOUL',
        //         'cityImg': require('../img/seoul.svg').default
        //     },
        //     {
        //         'cityName': '서울',
        //         'cityEnglishName': 'SEOUL',
        //         'cityImg': require('../img/seoul.svg').default
        //     },
        //     {
        //         'cityName': '서울',
        //         'cityEnglishName': 'SEOUL',
        //         'cityImg': require('../img/seoul.svg').default
        //     },
        //     {
        //         'cityName': '서울',
        //         'cityEnglishName': 'SEOUL',
        //         'cityImg': require('../img/seoul.svg').default
        //     },
        //     {
        //         'cityName': '서울',
        //         'cityEnglishName': 'SEOUL',
        //         'cityImg': require('../img/seoul.svg').default
        //     },
        //     {
        //         'cityName': '서울',
        //         'cityEnglishName': 'SEOUL',
        //         'cityImg': require('../img/seoul.svg').default
        //     },
        //     {
        //         'cityName': '서울',
        //         'cityEnglishName': 'SEOUL',
        //         'cityImg': require('../img/seoul.svg').default
        //     },
    ]
})

export const cityListState = atom({
    key: 'cityList',
    default: [
        {
            'cityCategory': '대한민국',
            'name': [
                {
                    'cityCategory': '미국',
                    'name': ['뉴욕', '라스베이가스', '로스앤젤레스', '샌프란시스코', '하와이']
                },
            ]
        },
        {
            'cityCategory': '아시아',
            'name': [
                {
                    'cityCategory': '미국',
                    'name': ['뉴욕', '라스베이가스', '로스앤젤레스', '샌프란시스코', '하와이']
                },
            ]
        },
        {
            'cityCategory': '유럽',
            'name': [
                {
                    'cityCategory': '미국',
                    'name': ['뉴욕', '라스베이가스', '로스앤젤레스', '샌프란시스코', '하와이']
                },
            ]
        },
        {
            'cityCategory': '북아메리카',
            'name': [
                {
                    'cityCategory': '미국',
                    'name': ['뉴욕', '라스베이가스', '로스앤젤레스', '샌프란시스코', '하와이']
                },
                {
                    'cityCategory': '미국',
                    'name': ['뉴욕', '라스베이가스', '로스앤젤레스', '샌프란시스코', '하와이']
                },
                {
                    'cityCategory': '미국',
                    'name': ['뉴욕', '라스베이가스', '로스앤젤레스', '샌프란시스코', '하와이']
                },
            ]
        },
        {
            'cityCategory': '남아메리카',
            'name': [
                {
                    'cityCategory': '미국',
                    'name': ['뉴욕', '라스베이가스', '로스앤젤레스', '샌프란시스코', '하와이']
                },
            ]
        },
        {
            'cityCategory': '오세아니아',
            'name': [
                {
                    'cityCategory': '미국',
                    'name': ['뉴욕', '라스베이가스', '로스앤젤레스', '샌프란시스코', '하와이']
                },
            ]
        },
        {
            'cityCategory': '아프리카',
            'name': [
                {
                    'cityCategory': '미국',
                    'name': ['뉴욕', '라스베이가스', '로스앤젤레스', '샌프란시스코', '하와이']
                },
            ]
        }
    ]
})

export const userImgState = atom({
    key: 'userImg',
    default: require('../img/userImg.svg').default
})


export const noticeListState = atom({
    key: 'noticeList',
    default: [
        {
            'senderNickname': '여행가123',
            'alarmCategory': 'reply',
            'postTitle': '유럽여행 후기'
        },
        {
            'senderNickname': '여행가123',
            'alarmCategory': 'like',
            'postTitle': '유럽여행 후기'
        },
        {
            'senderNickname': '여행가123',
            'alarmCategory': 'reply',
            'postTitle': '유럽여행 후기'
        },
        {
            'senderNickname': '여행가123',
            'alarmCategory': 'like',
            'postTitle': '유럽여행 후기'
        }
    ]
})

//////// Post ////////
// atomFamily ... ? 
export const postListState = atom({
    key: 'postList',
    default: [
        {
            'areaTag': {
                'cityCategory': '유럽',
                'cityCountry': '프랑스',
                'cityName': '파리'
            },
            'postTitle': '강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행100자',
            'postDate': '2022-01-01',
            'postWriter': '뚜벅이 여행가',
            'postImg': ''
        },
        {
            'areaTag': {
                'cityCategory': '대한민국',
                'cityCountry': '',
                'cityName': '강릉'
            },
            'postTitle': '강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행100자',
            'postDate': '2022-12-31',
            'postWriter': '뚜벅이 여행가',
            'postImg': 'https://img.eomisae.co.kr/files/attach/images/100572/573/731/080/00f5f916a83dcc308af32c241e2dab20.jpg'
        },
        {
            'areaTag': {
                'cityCategory': '유럽',
                'cityCountry': '프랑스',
                'cityName': '파리'
            },
            'postTitle': '프랑스 파리',
            'postDate': '2022-01-01',
            'postWriter': '뚜벅이 여행가',
            'postImg': ''
        },
        {
            'areaTag': {
                'cityCategory': '유럽',
                'cityCountry': '프랑스',
                'cityName': '파리'
            },
            'postTitle': '강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행100자',
            'postDate': '2022-01-01',
            'postWriter': '뚜벅이 여행가',
            'postImg': ''
        },
        {
            'areaTag': {
                'cityCategory': '대한민국',
                'cityCountry': '',
                'cityName': '강릉'
            },
            'postTitle': '강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행100자',
            'postDate': '2022-12-31',
            'postWriter': '뚜벅이 여행가',
            'postImg': 'https://img.eomisae.co.kr/files/attach/images/100572/573/731/080/00f5f916a83dcc308af32c241e2dab20.jpg'
        },
        {
            'areaTag': {
                'cityCategory': '유럽',
                'cityCountry': '프랑스',
                'cityName': '파리'
            },
            'postTitle': '프랑스 파리',
            'postDate': '2022-01-01',
            'postWriter': '뚜벅이 여행가',
            'postImg': ''
        },
        {
            'areaTag': {
                'cityCategory': '유럽',
                'cityCountry': '프랑스',
                'cityName': '파리'
            },
            'postTitle': '강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행100자',
            'postDate': '2022-01-01',
            'postWriter': '뚜벅이 여행가',
            'postImg': ''
        },
        {
            'areaTag': {
                'cityCategory': '대한민국',
                'cityCountry': '',
                'cityName': '강릉'
            },
            'postTitle': '강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행100자',
            'postDate': '2022-12-31',
            'postWriter': '뚜벅이 여행가',
            'postImg': 'https://img.eomisae.co.kr/files/attach/images/100572/573/731/080/00f5f916a83dcc308af32c241e2dab20.jpg'
        },
        {
            'areaTag': {
                'cityCategory': '유럽',
                'cityCountry': '프랑스',
                'cityName': '파리'
            },
            'postTitle': '프랑스 파리',
            'postDate': '2022-01-01',
            'postWriter': '뚜벅이 여행가',
            'postImg': ''
        },
        {
            'areaTag': {
                'cityCategory': '유럽',
                'cityCountry': '프랑스',
                'cityName': '파리'
            },
            'postTitle': '강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행100자',
            'postDate': '2022-01-01',
            'postWriter': '뚜벅이 여행가',
            'postImg': ''
        },
    ]
})

export const currentPostState = atom({
    key: 'currentPost',
    default:{
        'areaTag': {
            'cityCategory': '유럽',
            'cityCountry': '프랑스',
            'cityName': '파리'
        },
        'postTitle': '강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행입니다/강릉 여행100자',
        'postDate': '2022-01-01',
        'postWriter': '뚜벅이 여행가',
        'postImg': ['https://eomisae.co.kr/files/attach/images/100572/573/731/080/00f5f916a83dcc308af32c241e2dab20.jpg', 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/e2/b1/c7/caption.jpg?w=500&h=-1&s=1', 'https://eomisae.co.kr/files/attach/images/100572/573/731/080/00f5f916a83dcc308af32c241e2dab20.jpg'],
        'postCategory': '',
        'like': 15,
        'scrap': 12,
        'view': 33, // API 명세서에 있나??
        'postContent': '<div>강릉시는 대한민국 강원도 동해안 중부에 있는 시이다. 서울과 비슷한 위도에 위치한 영동 지방 최대 도시이다. 서쪽으로 태백산맥이 뻗어 있고, 동쪽으로 동해가 펼쳐져 있으며, 해안선 길이는 73.72km이다.<br> 기온 1°C, 풍향 서, 풍속 3m/s, 습도 36%<div/>',
        'postIndex': '',
        'comment': [{
            'commentDate': '2023-02-03',
            'commentWriter': '여행가123',
            'commentWriterImg': 'https://i.pinimg.com/736x/57/43/39/574339961a29d3429a9a90c212abfd34.jpg',
            'commentContent': '좋은 정보 감사합니다!!!!!!!',
            'commentIndex': 0
        },
        {
            'commentDate': '2023-02-03',
            'commentWriter': '뚜벅이 여행가',
            'commentWriterImg': 'https://i.pinimg.com/736x/57/43/39/574339961a29d3429a9a90c212abfd34.jpg',
            'commentContent': '좋은 댓글 감사합니다!!!!!!!',
            'commentIndex': 1
        }]
    }
})