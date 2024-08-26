<template>
  <div class="container-fluid homee">
    <div class="row">
      <div class="col-12 col-sm-12 col-md-6 col-lg-6">
        <div class="text-box">
          <h2 class="heading-1">Hello,It's Me</h2>
          <h1 class="heading-2">YASIR SHABIR</h1>
          <h3 class="heading-1">
            And I'm a <span class="span-1 anime"></span>
          </h3>
          <p class="pregraf" data-aos="fade-left">
            I have connections from Kohat, and I am a hardworking young man with
            two years of experience in UZR teach.
          </p>
          <div class="icone-box" data-aos="zoom-in-up">
            <i class="bi bi-whatsapp iconee"></i>
            <i class="bi bi-linkedin iconee"></i>
            <i class="bi bi-instagram iconee"></i>
          </div>
          <button type="button" @click="downloadCV" class="DownloadCV"  data-aos="fade-up">
            Download CV
          </button>
        </div>
      </div>
      <div class="col-12 col-sm-12 col-md-6 col-lg-6">
        <div class="text-box2" data-aos="zoom-out">
          <img
            src="../assets/imges/mypic.jpeg"
            class="portpoliyo"
            alt="portpoliyo-pic"
          />
        </div>
      </div>
    </div>
  </div>
  <about />
  <services />
  <skills />
  <portfolio />
  <contactus />
</template>
<script setup>
import about from "../components/about.vue";
import skills from "../components/skills.vue";
import contactus from "../components/contactUs.vue";
import portfolio from "../components/portfolio.vue";
import services from "../components/services.vue";
import { onMounted, onUnmounted } from "vue"; // Import onMounted and onUnmounted from Vue

// Import Typed.js
import Typed from "typed.js";

// Define Typed.js options
const options = {
  strings: ["Frontend Developer"],
  typeSpeed: 200,
  backSpeed: 20,
  loop: true,
};

let typed; // Declare a variable to hold the Typed.js instance

// Function to initialize Typed.js
const initializeTyped = () => {
  typed = new Typed(".anime", options);
};

// Function to destroy Typed.js instance
const destroyTyped = () => {
  if (typed) {
    typed.destroy(); // Destroy Typed.js instance to prevent memory leaks
  }
};

// Call initializeTyped when the component is mounted
onMounted(() => {
  initializeTyped();
});

// Call destroyTyped when the component is unmounted
onUnmounted(() => {
  destroyTyped();
});
// Method to handle CV download
const downloadCV = () => {
  const link = document.createElement("a");
  link.href = "../assets/imges/yasirshabircv.pdf"; 
  link.download = "yasirshabircv.pdf";
  link.click();
};
</script>

<style scoped>
h1,
h2,
h3,
h5,
p {
  margin-bottom: 0;
}
.homee {
  background-color: var(--bg-color);
  color: var(--text-color);
  padding: 1rem 2rem;
}
.text-box {
  margin: 0 auto;
  width: 80%;
  margin-top: 8.5rem;
}
.heading-1 {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 10px;
}
.heading-2 {
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 10px;
}
.span-1 {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--main-color);
}
.pregraf {
  font-size: 0.9rem;
  font-weight: 400;
  margin-bottom: 15px;
}
.icone-box {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}
.iconee {
  font-size: 1.2rem;
  color: var(--main-color);
  margin-right: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  width: 2.5rem;
  background-color: transparent;
  border-radius: 50%;
  border: 1px solid var(--main-color);
  cursor: pointer;
  transition: 0.5s ease;
}
.iconee:hover {
  color: var(--secound-bg-color);
  background-color: var(--main-color);
  box-shadow: 0 0 12px var(--main-color);
}

.DownloadCV {
  margin-right: 8px;
  width: 40%;
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
.DownloadCV:before {
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
.DownloadCV:hover:before {
  transform: translateX(0);
}
.DownloadCV:after {
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
.DownloadCV:hover::after {
  transform: translateX(0);
}
.DownloadCV:hover {
  color: var(--secound-bg-color);
  box-shadow: none;
}
.text-box2 {
  text-align: center;
  margin-top: 5rem;
}
.portpoliyo {
  height: 400px;
  width: 400px;
  border-radius: 50%;
  border: 2px solid var(--main-color);
  object-fit: cover;
  box-shadow: 0 0 1rem var(--main-color);
  margin: 0 auto;
}

/* lg */
/* Large devices (desktops, 992px to 1199px) */
/* @media (min-width: 992px) and (max-width: 1199px) {
  .homee {
    background-color: red;
  }

  .text-box {
  margin-top: 9rem;
}

.portpoliyo {
  height: 350px;
  width: 350px;
}
} */

/* md  */
/* Medium devices (tablets, 768px to 991px) */
/* @media (min-width: 768px) and (max-width: 991px) {
  .homee {
    background-color: blue;
  }
  .text-box {
  margin-top: 9rem;
}
  .portpoliyo {
  height: 350px;
  width: 350px;
}
} */

/* sm  */
/* Small devices (landscape phones, 576px to 767px) */
/* @media (min-width: 576px) and (max-width: 767px) {
  .homee {
    background-color: green;
  }

  .text-box {
  margin: 0;
  width: 100%;
  margin-top: 2rem;
}
.portpoliyo {
  height: 350px;
  width: 350px;
}
} */

/* Small devices (landscape phones, 576px to 767px) */
/* @media (min-width: 0px) and (max-width: 575px) {
  .homee {
    background-color: aqua;
  }

  .text-box {
  margin: 0;
  width: 100%;
  margin-top: 2rem;
}
.portpoliyo {
  height: 350px;
  width: 350px;
}
} */
</style>
