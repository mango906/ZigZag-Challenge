import { observable, action } from 'mobx';

class MemberStore {
  @observable items = [
    {
      id: 0,
      name: '임블리',
      profile_image: 'https://cf.shop.s.zigzag.kr/images/imvely.jpg',
      data: [
        {
          id: 0,
          type: 'received',
          content: '받는 메세지',
          mimeType: 'text',
          date: '2019-06-29 10:01:03'
        },
        {
          id: 1,
          type: 'sended',
          content: '보내는 메세지',
          mimeType: 'text',
          date: '2019-06-29 20:01:05'
        }
      ]
    },
    {
      id: 1,
      name: '미아마스빈',
      profile_image: 'https://cf.shop.s.zigzag.kr/images/miamasvin.jpg',
      data: [
        {
          id: 0,
          type: 'received',
          content: '이벤트에 당첨되셨습니다!',
          mimeType: 'text',
          date: '2019-06-30 10:01:03'
        },
        {
          id: 1,
          type: 'received',
          content: '주소와 휴대폰 번호를 적어 보내주세요!',
          mimeType: 'text',
          date: '2019-06-30 20:01:05'
        }
      ]
    },
    {
      id: 2,
      name: '모코블링',
      profile_image: 'https://cf.shop.s.zigzag.kr/images/mocobling.jpg',
      data: []
    },
    {
      id: 3,
      name: '데일리먼데이',
      profile_image: 'https://cf.shop.s.zigzag.kr/images/dailymonday.jpg',
      data: []
    },
    {
      id: 4,
      name: '파티수',
      profile_image: 'https://cf.shop.s.zigzag.kr/images/partysu.jpg',
      data: []
    },
    {
      id: 5,
      name: '하나언니',
      profile_image: 'https://cf.shop.s.zigzag.kr/images/66girls.jpg',
      data: []
    }
  ];

  @action getRooms() {
    return this.items;
  }

  @action getChats(idx) {
    return this.items[idx];
  }

  @action submitChat(idx, data) {
    this.items[idx].data.push(data);
  }
}

export default MemberStore;
