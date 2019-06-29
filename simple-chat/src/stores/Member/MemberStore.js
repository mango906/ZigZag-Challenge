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
          date: '2019-06-29 20:01:03'
        }
      ]
    },
    {
      id: 1,
      name: '미아마스빈',
      profile_image: 'https://cf.shop.s.zigzag.kr/images/miamasvin.jpg',
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
