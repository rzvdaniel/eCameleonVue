import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import WithRender from './nest.html';

@WithRender
@Component({})
export default class NestComponent extends Vue {

  // data
  // private text: string = 'I\'m an aligator';
  @Prop() private text!: string;

  // computed
  public get computed(): string {
    return this.text.split('').reverse().join('');
  }

  // methods
  public changeMessage() {
    this.text = 'Good bye';
  }

  // Lifecycle hooks
  // created() { }
  // mounted() { }
  // updated() { }
  // destroyed() { }
}
