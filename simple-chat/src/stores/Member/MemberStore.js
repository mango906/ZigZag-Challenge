import { observable, action } from 'mobx';

class MemberStore {
  @observable items = [
    {
      id: 0,
      name: '임블리',
      desc: 'Hey, how it is going?',
      profile_image: 'https://cf.shop.s.zigzag.kr/images/imvely.jpg'
    },
    {
      id: 1,
      name: '미아마스빈',
      desc: "Haha that's was so funny Story hahah..",
      profile_image: 'https://cf.shop.s.zigzag.kr/images/miamasvin.jpg'
    }
  ];

  @action getChats() {
    return this.items;
  }
}

export default MemberStore;
