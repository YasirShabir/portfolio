<template>
  <div class="container-fluid portfolio">
    <div class="heading-box">
      <h1 class="heading">Latest <span class="span-1">Project</span></h1>
    </div>
    <div class="row">
      <div class="col-lg-4 mb-5" data-aos="zoom-in-down">
        <div class="portfolio-cardd">
          <img
            src="../../src/assets/imges/we.avif"
            class="portfolio-pic"
            alt="portfolio picture"
          />
          <div class="hover-box">
            <h2 class="portfolio-heading1">City Sport</h2>
            <p class="portfolio-pregraf">
              I have created its design and also integrated its APIs, ensuring responsiveness across all screens with the help of CSS, HTML, Bootstrap 5, and Vue.js.
            </p>
            <i class="bi bi-box-arrow-up-right"></i>
          </div>
        </div>
      </div>
      <div class="col-lg-4 mb-5" data-aos="zoom-in-down">
        <div class="portfolio-cardd">
          <img
            src="../../src/assets/imges/b.avif"
            class="portfolio-pic"
            alt="portfolio picture"
          />
          <div class="hover-box">
            <h2 class="portfolio-heading1">Nursing</h2>
            <p class="portfolio-pregraf">
              I have created its design and also integrated its APIs, ensuring responsiveness across all screens with the help of CSS, HTML, Bootstrap 5, and Vue.js.
            </p>
            <i class="bi bi-box-arrow-up-right"></i>
          </div>
        </div>
      </div>
      <div class="col-lg-4 mb-5" data-aos="zoom-in-down">
        <div class="portfolio-cardd">
          <img
            src="../../src/assets/imges/a.avif"
            class="portfolio-pic"
            alt="portfolio picture"
          />
          <div class="hover-box">
            <h2 class="portfolio-heading1">King Food</h2>
            <p class="portfolio-pregraf">
              I have created its designs with the help of CSS, HTML, JavaScript, and Vue.js.
            </p>
            <i class="bi bi-box-arrow-up-right"></i>
          </div>
        </div>
      </div>
      <div class="col-lg-4 mb-5" data-aos="zoom-in-down">
        <div class="portfolio-cardd">
          <img
            src="../../src/assets/imges/we.avif"
            class="portfolio-pic"
            alt="portfolio picture"
          />
          <div class="hover-box">
            <h2 class="portfolio-heading1">King Food admin site</h2>
            <p class="portfolio-pregraf">
              I have created its designs with the help of CSS, HTML, JavaScript, and Vue.js.
            </p>
            <i class="bi bi-box-arrow-up-right"></i>
          </div>
        </div>
      </div>
      <div class="col-lg-4 mb-5" data-aos="zoom-in-down">
        <div class="portfolio-cardd">
          <img
            src="../../src/assets/imges/b.avif"
            class="portfolio-pic"
            alt="portfolio picture"
          />
          <div class="hover-box">
            <h2 class="portfolio-heading1">Skin</h2>
            <p class="portfolio-pregraf">
              I have created its designs with the help of CSS, HTML, JavaScript, and Vue.js.
            </p>
            <i class="bi bi-box-arrow-up-right"></i>
          </div>
        </div>
      </div>
      <div class="col-lg-4 mb-5" data-aos="zoom-in-down">
        <div class="portfolio-cardd">
          <img
            src="../../src/assets/imges/a.avif"
            class="portfolio-pic"
            alt="portfolio picture"
          />
          <div class="hover-box">
            <h2 class="portfolio-heading1">Redvok</h2>
            <p class="portfolio-pregraf">
              I have created its design and also integrated its APIs, ensuring responsiveness across all screens with the help of CSS, HTML, Bootstrap 5, and Vue.js.
            </p>
            <i class="bi bi-box-arrow-up-right"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.heading-box{
  text-align: center;
  margin-bottom: 3rem;
}
.heading {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 10px;
 
}
.span-1 {
  color: var(--main-color);
}
.portfolio {
  background-color: var(--bg-color);
  color: var(--text-color);
  /* height: 100vh; */
  padding: 1rem 2rem;
}
.portfolio-cardd {
  position: relative;
  border-radius: 2rem;
  overflow: hidden;
  box-shadow: 0 0 1rem var(--bg-color);
}
.portfolio-pic {
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: .5s ease;
}
.portfolio-cardd:hover .portfolio-pic{
transform: scale(1.1);
}
.portfolio-cardd:hover .hover-box{
  transform: translateY(0);
}
.hover-box {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
 background: linear-gradient( rgba(0,0,0,.1),var(--main-color));
 flex-direction: column;
 display: flex;
 align-items: center;
 justify-content: center;
 text-align: center;
 padding: 0 4rem;
 transform: translateY(100%);
 transition: .5s ease;
}
.portfolio-heading1 {
  font-size: 2.5rem;
  font-weight: 600;
  color: black;
}
.portfolio-pregraf {
  font-size: 1rem;
  font-weight: 500;
  margin-top: 0.8rem;
  color: black;
}
.bi-box-arrow-up-right {
  color: var(--secound-bg-color);
  font-size: 1.2rem;
  border-radius: 50%;
  display: flex;
 align-items: center;
 justify-content: center;
 width: 2.8rem;
  height: 2.8rem;
  background-color: var(--text-color);
  margin-top: 0.6rem;
  cursor: pointer;

}
</style>
