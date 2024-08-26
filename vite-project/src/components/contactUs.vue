<template>
  <div class="container-fluid contactus">
    <div class="heading-box">
      <h1 class="heading">Contact <span class="span-1">Us</span></h1>
    </div>

    <div class="form" data-aos="zoom-out">
      <div class="row">
        <div class="col-lg-6 mb-4">
          <input type="text" class="inputss" placeholder="First Name" name="" id="" />
        </div>
        <div class="col-lg-6 mb-4">
          <input type="text" class="inputss" placeholder="Last Name" name="" id="" />
        </div>
        <div class="col-lg-6 mb-4">
          <input type="number" class="inputss" placeholder="Mobile Number" name="" id="" />
        </div>
        <div class="col-lg-6 mb-4">
          <input type="email" class="inputss" placeholder="Email" name="" id="" />
        </div>
        <div class="col-lg-12 mb-4">
          <textarea
            name=""
            class="textarea"
            id=""
            placeholder="Your Message" 
            cols="20"
            rows="10"
          ></textarea>
        </div>
      </div>
      <button type="button" class="Message">Sant Message</button>
    </div>
  </div>
</template>

<style scoped>
.contactus {
  background-color: var(--bg-color);
  color: var(--text-color);
  padding: 1rem 2rem;
}
.heading-box {
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
.form {
    width: 60%;
    margin: 0 auto;
}
.inputss {
    border: none; 
    width: 100%;
    padding: 0.9rem; 
    font-size: 1rem;
    color: var(--text-color);
    background: var(--secound-bg-color);
    border-radius: 8px;
}
.inputss:focus {
   outline: none;
}
.textarea {
    border: none; 
    width: 100%;
    padding: 0.9rem; 
    font-size: 1rem;
    color: var(--text-color);
    background: var(--secound-bg-color);
    border-radius: 8px;
}
.textarea:focus {
    outline: none;
}
::placeholder{
    font-size: 1rem;
    font-weight: 500;
}


.Message {
  width: 40%;
  height: 50px;
  border: 1px solid var(--main-color); /* Border width and color */
  color: var(--text-color);
  background-color: transparent;
  box-shadow: 0 0 8px var(--main-color);
  font-size: 15px;
  font-weight: 600;
  border-radius: 12px;
  text-transform: capitalize;
  transition: all 0.5s;
  position: relative;
  text-align: center;
  overflow: hidden;
  z-index: 2;
  margin:  1rem auto;
  display: block;
}
.Message:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-top: 25px solid var(--main-color);
  border-bottom: 25px solid var(--main-color);
  border-right: 25px solid transparent;
  transition: all 0.5s;
  z-index: -1;
  transform: translateX(-100%);
}
.Message:hover:before {
  transform: translateX(0);
}
.Message:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-top: 25px solid var(--main-color);
  border-bottom: 25px solid var(--main-color);
  border-left: 25px solid transparent;
  transition: all 0.5s;
  z-index: -1;
  transform: translateX(100%);
}
.Message:hover::after {
  transform: translateX(0);
}
.Message:hover {
  color: var(--secound-bg-color);
  box-shadow: none
}
</style>
