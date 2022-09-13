<template>

  <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center justify-content-between">

      <h1 class="logo"><a href="index.html">Tom Grootjans</a></h1>

      <nav id="navbar" class="navbar" :class="{'navbar-mobile': mobileNavIsActive}">
        <ul>
          <li><a @click="scrollTo" class="nav-link active" href="#hero">Home</a></li>
          <li><a @click="scrollTo" class="nav-link" href="#about">About</a></li>
          <li><a @click="scrollTo" class="nav-link" href="#services">Services</a></li>
          <li><a @click="scrollTo" class="nav-link" href="#portfolio">Portfolio</a></li>
          <li><a @click="scrollTo" class="getstarted" href="#about">Get Started</a></li>
        </ul>
        <i class="bi mobile-nav-toggle" @click="mobileNav" :class="{ 'bi-list': !mobileNavIsActive, 'bi-x': mobileNavIsActive }"></i>
      </nav>

    </div>
  </header>

</template>

<script>
import { scrollTo } from '../../modules/scrollTo';

export default {

   /**
     * Navbar links active state on scroll
     */
    // let navbarlinks = select('#navbar .scrollto', true)
    // const navbarlinksActive = () => {
    //   let position = window.scrollY + 200
    //   navbarlinks.forEach(navbarlink => {
    //     if (!navbarlink.hash) return
    //     let section = select(navbarlink.hash)
    //     if (!section) return
    //     if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
    //       navbarlink.classList.add('active')
    //     } else {
    //       navbarlink.classList.remove('active')
    //     }
    //   })
    // }
    // window.addEventListener('load', navbarlinksActive)
    // onscroll(document, navbarlinksActive)




    data() {
      return {
        mobileNavIsActive: false,
        scrollTo,
      }
    },
    methods: {
      mobileNav(event) {
        this.mobileNavIsActive = !this.mobileNavIsActive;
      }
    },
}
</script>