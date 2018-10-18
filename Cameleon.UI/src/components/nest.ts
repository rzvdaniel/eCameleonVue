import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import WithRender from './nest.html';

@WithRender
@Component({})
export default class NestComponent extends Vue {
  public data() {
    return {
      text: 'I\'m an alligator!',
    };
  }

  private baz() {
    const c = 1;
  }
}
