import { observable, action } from 'mobx';

class MemberStore {
  @observable items = [
    {
      id: 0,
      name: '임블리',
      profile_image: 'https://cf.shop.s.zigzag.kr/images/imvely.jpg'
    },
    {
      id: 1,
      name: '미아마스빈',
      profile_image: 'https://cf.shop.s.zigzag.kr/images/miamasvin.jpg'
    }
  ];

  @action getChats() {
    return this.items;
  }
}

export default MemberStore;
