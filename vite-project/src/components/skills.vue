<template>
  <div class="container-fluid skills">
    <div class="heading-box">
      <h1 class="heading">My <span class="span-1">Skills</span></h1>
    </div>
   
    <div class="cardd">
        <div class="boxx">
      <img src="../assets/imges/html.webp" class="iconeimg" alt="html-pic" />
      <h6 class="icone-heading">HTML</h6>
    </div>
        <div class="progress">
      <div
        class="progress-bar a"
        role="progressbar"
        style="width: 95%"
        aria-valuenow="95"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        95%
      </div>
    </div>

    <div class="boxx">
      <img src="../assets/imges/css.png" class="iconeimg" alt="html-pic" />
      <h6 class="icone-heading">CSS</h6>
    </div>
    <div class="progress">
      <div
        class="progress-bar b"
        role="progressbar"
        style="width: 85%"
        aria-valuenow="95"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        85%
      </div>
    </div>

    <div class="boxx">
      <img src="../assets/imges/js.jpg" class="iconeimg" alt="html-pic" />
      <h6 class="icone-heading">JAVASCRIPT </h6>
    </div>
    <div class="progress">
      <div
        class="progress-bar c"
        role="progressbar"
        style="width: 70%"
        aria-valuenow="95"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        70%
      </div>
    </div>

    <div class="boxx">
      <img src="../assets/imges/vuejs.webp" class="iconeimg" alt="html-pic" />
      <h6 class="icone-heading">VUE.JS</h6>
    </div>
    <div class="progress">
      <div
        class="progress-bar d"
        role="progressbar"
        style="width: 75%"
        aria-valuenow="95"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        75%
      </div>
    </div>
    </div>
   
  </div>
</template>

<style scoped>
.skills {
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
.cardd{
    width: 60%;
  margin: 0 auto;
}
.progress {
  margin-bottom: 2rem;
  background-color: #fff;
}
.progress-bar {
    font-size: 0.8rem;
    font-weight: 600;
    color: rgb(40, 42, 43);

  /* background-color: var(--main-color); */
}
.a{
    background-color: #e65733;
}
.b{
    background-color: #5a9cff;
}
.c{
    background-color: #ffe13c;
}
.d{
    background-color: #6aae82;
}
.boxx {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
}
.iconeimg {
    height: 20px;
    width: 20px;
}
.icone-heading {
    color: var( --text-color);
    font-size: 1rem;
  font-weight: 600;
  margin-left: 5px;
}
</style>
