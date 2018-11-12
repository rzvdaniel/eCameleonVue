import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import WithRender from './Test02.html';

@WithRender
@Component({})
export default class Test02 extends Vue {

  public constructor() {
    super();
  }

  public data() {
    return {
      text: 'This is a test app 2!',
    };
  }

  public baz() {
    const c = 1;
    alert('baz');
  }
}
