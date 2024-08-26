<template>
  <div class="container-fluid services">
    <div class="heading-box">
      <h1 class="heading">My <span class="span-1">Services</span></h1>
    </div>
    <div class="row">
      <div class="col-lg-4"></div>
      <div class="col-lg-4">
        <div class="cardd" data-aos="flip-left">
          <i class="bi bi-code-slash"></i>
          <h3 class="cardd-heading">Web Frontend Development</h3>
          <p class="cardd-pregraf">
            I can build responsive designs with the help of CSS, HTML5, and
            JavaScript. I am familiar with various CSS frameworks like
            Bootstrap, SCSS, and Tailwind. I also have experience working with
            Vue.js and some knowledge of Firebase. Additionally, I can integrate
            APIs using state management.
          </p>
          <button type="button" class="Message">Read More</button>
        </div>
      </div>
      <div class="col-lg-4"></div>
    </div>
  </div>
</template>

<style scoped>
.services {
  background-color: var(--bg-color);
  color: var(--text-color);
  height: 100vh;
  padding: 1rem 2rem;
}
.heading-box {
  text-align: center;
  margin-bottom: 5rem;
}
.heading {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 10px;
}
.span-1 {
  color: var(--main-color);
}
.cardd {
  border: 1px solid var(--bg-color);
  border-radius: 1rem;
  text-align: center;
  padding: 2rem;
  background-color: var(--secound-bg-color);
  transition: 0.5s ease;
}
.cardd:hover {
  border: 1px solid var(--main-color);
  transform: scale(1.02);
}
.bi-code-slash {
  color: var(--main-color);
  font-size: 3rem;
}
.cardd-heading {
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
}
.cardd-pregraf {
  font-size: 0.8rem;
  font-weight: 400;
}
.Message {
  width: 50%;
  height: 50px;
  border: 1px solid var(--main-color); /* Border width and color */
  color: var(--text-color);
  background-color: transparent;
  box-shadow: 0 0 8px var(--main-color);
  font-size: 15px;
  font-weight: 600;
  border-radius: 6px;
  text-transform: capitalize;
  transition: all 0.5s;
  position: relative;
  text-align: center;
  overflow: hidden;
  z-index: 2;
  margin: 2rem auto 0 auto;
  display: block;
}

.Message:hover {
  color: var(--secound-bg-color);
  box-shadow: none;
  background-color: var(--main-color);
}
</style>
