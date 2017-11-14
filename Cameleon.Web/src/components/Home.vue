<template>
<div>

  <div class="mdc-card demo-card demo-card--with-avatar">
    <section class="mdc-card__primary">
      <div class="demo-card__avatar"></div>
      <h1 class="mdc-card__title">Title</h1>
      <h2 class="mdc-card__subtitle">Subhead</h2>
    </section>
    <section class="mdc-card__media demo-card__16-9-media"></section>
    <section class="mdc-card__supporting-text">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
    </section>
    <section class="mdc-card__actions">
      <button class="mdc-button mdc-button--compact mdc-card__action">Action 1</button>
      <button class="mdc-button mdc-button--compact mdc-card__action">Action 2</button>
    </section>
  </div>

  <div class="mdc-card demo-card demo-card--with-avatar">
    <section class="mdc-card__primary">
      <div class="demo-card__avatar"></div>
      <h1 class="mdc-card__title">Title</h1>
      <h2 class="mdc-card__subtitle">Subhead</h2>
    </section>
    <section class="mdc-card__media demo-card__16-9-media"></section>
    <section class="mdc-card__supporting-text">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
    </section>
    <section class="mdc-card__actions">
      <button class="mdc-button mdc-button--compact mdc-card__action">Action 1</button>
      <button class="mdc-button mdc-button--compact mdc-card__action">Action 2</button>
    </section>
  </div>

</div>

</template>

<style>
.demo-card {
  max-width: 21.875rem;
  margin: 20px;
  float: left;
}

@media (min-width: 768px) {
  .demo-card {
    margin-bottom: 24px;
  }
}

.demo-card--with-avatar .mdc-card__primary {
  position: relative;
}

.demo-card--with-avatar .demo-card__avatar {
  position: absolute;
  background: #bdbdbd;
  height: 2.5rem;
  /* 40sp */
  width: 2.5rem;
  /* 40sp */
  border-radius: 50%;
}

.demo-card--with-avatar .mdc-card__title,
.demo-card--with-avatar .mdc-card__subtitle {
  margin-left: 56px;
}

.demo-card__16-9-media {
  background-image: url("../assets/16-9.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 12.313rem;
  /* 197sp, for 16:9 ratio with 350sp demo card width */
}
</style>

