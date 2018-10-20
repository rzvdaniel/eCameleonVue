import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import WithRender from './nest.html';

// Using vue-template-loader with Vue.js to Compile HTML Templates
// https://alligator.io/vuejs/vue-template-loader

// Why I use vue-class-component
// Readable class rather than an odd JS Object
// https://medium.com/haiiro-io/why-i-use-vue-class-component-472579a266b4

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
