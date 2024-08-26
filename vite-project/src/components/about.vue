<template>
  <div class="container-fluid about">
    <div class="row">
      <div class="col-lg-6">
        <div class="text-box2">
          <img
            src="../assets/imges/mypic.jpeg"
            class="portpoliyo"
            alt="portpoliyo-pic"
          />
        </div>
      </div>
      <div class="col-lg-6">
       <div class="text-box">
        <h3 class="heading-1">About <span class="span-1">Me</span></h3>
        <h2 class="heading-2">Frontend Developer</h2>
        <p class="pregraf">
          I have connections from Kohat, and I am a hardworking young man with
          two years of experience in UZR teach.
        </p>
        <button type="button" class="Read" data-aos="fade-up">Read More</button>
       </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  background-color: var(--bg-color);
  color: var(--text-color);
  padding: 12rem 2rem ;
}
.text-box2 {
  margin-left: 4.5rem;
}
.portpoliyo {
  height: 300px;
  width: 300px;
  border-radius: 50%;
  border: 2px solid var(--main-color);
  object-fit: cover;
  box-shadow: 0 0 1rem var(--main-color);
  margin: 0 auto;
}
.text-box {
  margin-top: 2.5rem;
}
.heading-1 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 10px;
 
}
.heading-2 {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 10px;
}
.span-1 {
  color: var(--main-color);
}
.pregraf {
  font-size: 0.9rem;
  font-weight: 400;
  margin-bottom: 15px;
}
.Read {
  margin-right: 8px;
  width: 30%;
  height: 40px;
  border: 1px solid var(--main-color); /* Border width and color */
  color: var(--text-color);
  background-color: transparent;
  box-shadow: 0 0 8px var(--main-color);
  font-size: 15px;
  font-weight: 600;
  border-radius: 2rem;
  text-transform: capitalize;
  transition: all 0.5s;
  position: relative;
  text-align: center;
  overflow: hidden;
  z-index: 2;
  margin-top: 1rem;
}
.Read:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-top: 20px solid var(--main-color);
  border-bottom: 20px solid var(--main-color);
  border-right: 20px solid transparent;
  transition: all 0.5s;
  z-index: -1;
  transform: translateX(-100%);
}
.Read:hover:before {
  transform: translateX(0);
}
.Read:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-top: 20px solid var(--main-color);
  border-bottom: 20px solid var(--main-color);
  border-left: 20px solid transparent;
  transition: all 0.5s;
  z-index: -1;
  transform: translateX(100%);
}
.Read:hover::after {
  transform: translateX(0);
}
.Read:hover {
  color: var(--secound-bg-color);
  box-shadow: none
}

</style>
