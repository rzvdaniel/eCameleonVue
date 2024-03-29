// TypeScript type module definition required for vue-template-loader
declare module '*.html' {
  import Vue, { ComponentOptions, FunctionalComponentOptions } from 'vue'

  interface WithRender {
      <V extends Vue, U extends ComponentOptions<V> | FunctionalComponentOptions>(options: U): U
      <V extends typeof Vue>(component: V): V
  }

  const withRender: WithRender
  export default withRender
}