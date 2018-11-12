import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import WithRender from './Test01.html';

@WithRender
@Component({})
export default class Test01 extends Vue {

  public constructor() {
    super();
  }

  public data() {
    return {
      text: 'This is a test app!',
    };
  }

  public baz() {
    const c = 1;
    alert('baz');
  }
}
