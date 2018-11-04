import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import WithRender from './TestApp.html';

@WithRender
@Component({})
export default class TestApp extends Vue {

  public constructor() {
    super();
  }

  public data() {
    return {
      text: 'This is a test app!',
    };
  }

  public created() {
    // alert('Created!');
  }

  public baz() {
    const c = 1;
    alert('baz');
  }
}
