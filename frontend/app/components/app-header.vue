

<template>
   <header class="header-area">
    <!-- Navbar Area -->
    <div class="famie-main-menu">
      <div class="classy-nav-container breakpoint-off">
        <div class="container">
          <!-- Menu -->
          <nav class="classy-navbar justify-content-between" id="famieNav" aria-label="Main navigation">
            <!-- Nav Brand -->
            <a href="index.html" class="nav-brand">
              <!-- <picture><source srcset="img/core-img/logo.avif" type="image/avif"><img src="img/core-img/logo.png" alt="" fetchpriority="high" decoding="sync"></picture> -->
            </a>
            <!-- Navbar Toggler -->
            <div class="classy-navbar-toggler">
              <span class="navbarToggler"><span></span><span></span><span></span></span>
            </div>
            <!-- Menu -->
            <div class="classy-menu">
              <!-- Close Button -->
              <div class="classycloseIcon">
                <div class="cross-wrap"><span class="top"></span><span class="bottom"></span></div>
              </div>
              <!-- Navbar Start -->
              <div class="classynav">
                <ul>
                  <li class="active"><NuxtLink to="/">Accueil</NuxtLink></li>
                  <li><NuxtLink to="/about">A propos</NuxtLink></li>
                  <li><a href="#">Marches</a>
                    <ul class="dropdown">
                      <li><a href="/">Modifications et annulations marches FFBMP</a></li>
                      <li><a href="/">Marche du Club 2026</a></li>
                      <li><a href="/">Autres Clubs</a></li>
                      <li><a href="/">Résumé des marches FFBMP</a></li>
                      <li><a href="/">Mpm Cars 2026</a></li>
                      <li><a href="/">Beffroi 2022</a></li>
                    </ul>
                  </li>
                  <li><a href="/">Boutique</a></li>
                  <li><NuxtLink to="/contact">Contact</NuxtLink></li>
                </ul>
              </div>
              <!-- Navbar End -->
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>