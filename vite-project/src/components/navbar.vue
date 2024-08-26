<template>
    <!-- <div class="container-fluid navv">
    <h1>naxxxxxvbar</h1>
</div> -->
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Portfolio.</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"><i class="bi bi-list"></i></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
      
        <li class="nav-item">
          <RouterLink class="nav-link" to="/home">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/about">About</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/services">Services</RouterLink>
          
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/skills">Skills</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/portfolio">Projects</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/contactUs">ContactUs</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>
<style scoped>

.navbar{
    background-color: var(--bg-color);
  color: var(--text-color);
  border-bottom: 2px solid var(--main-color);
}
.navbar-brand{
font-size: 1.5rem;
font-weight: 700;
color: var(--text-color);
margin-left: 1rem;
}
a{
  text-decoration: none;
}
.nav-link {
    display: block;
    padding: .5rem 0 !important;
    margin-right: 2rem;
    color: var(--text-color);
    text-decoration: none;
    transition: color 0.3s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out;
    font-weight: 500;
    font-size: 0.9rem;
    position: relative;
    overflow: hidden;
}

.nav-link:hover {
    color: var(--main-color);
    transform: translateY(5px);
}

.nav-link::after {
  content: "";
background-color: var(--main-color);
width: 100%;
height: 2px;
position: absolute;
bottom: 8px;
left: 0;
transform: translateX(-105%);
transition: transform 0.6s ease;
}
.nav-link:hover:after {
  transform: translateX(0);
}
</style>