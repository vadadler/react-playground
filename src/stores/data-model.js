import {extendObservable} from 'mobx';

export default class DataModel {
  constructor() {
    extendObservable(this, {
      // Login dialog image path.
      imageURL: 'https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2017/44-researcherss.jpg',
    });
  }
}
