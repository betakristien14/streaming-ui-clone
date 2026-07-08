<template>
  <footer class="footer">
    <div class="footer-container">

      <!-- Logo -->
      <div class="footer-section">
        <h2>StreamFlix</h2>
        <p>
          StreamFlix merupakan platform streaming film yang menyediakan
          berbagai genre film terbaik mulai dari Trending, Horror,
          Comedy hingga Top Rated.
        </p>
      </div>

      <!-- Menu -->
      <div class="footer-section">
        <h3>Menu</h3>

        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/my-list">My List</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </div>

      <!-- Genre -->
      <div class="footer-section">
        <h3>Genre</h3>

        <span>Trending</span>
        <span>Popular</span>
        <span>Top Rated</span>
        <span>Comedy</span>
        <span>Horror</span>
      </div>

      <!-- Contact -->
      <div class="footer-section">
        <h3>Contact</h3>

        <p>Email</p>
        <span>support@streamflix.com</span>

        <p>Phone</p>
        <span>+62 812-3456-7890</span>
      </div>

    </div>

    <hr>

    <div class="footer-bottom">

      <div class="social">
        <i class="fab fa-facebook"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-youtube"></i>
      </div>

      <p>
        © 2026 StreamFlix. All Rights Reserved.
      </p>

    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>
.footer{
    background:#0f0f0f;
    color:#d1d1d1;
    margin-top:80px;
    padding:60px;
}

.footer-container{
    display:grid;
    grid-template-columns:2fr 1fr 1fr 1fr;
    gap:50px;
}

.footer-section h2{
    color:#E50914;
    margin-bottom:20px;
    font-size:32px;
}

.footer-section h3{
    color:white;
    margin-bottom:20px;
}

.footer-section p{
    line-height:1.8;
}

.footer-section a,
.footer-section span{
    display:block;
    color:#b5b5b5;
    text-decoration:none;
    margin-bottom:12px;
    transition:.3s;
}

.footer-section a:hover{
    color:#E50914;
}

hr{
    margin:40px 0 25px;
    border:none;
    border-top:1px solid #333;
}

.footer-bottom{
    display:flex;
    justify-content:space-between;
    align-items:center;
}

.social{
    display:flex;
    gap:18px;
}

.social i{
    width:45px;
    height:45px;

    display:flex;
    justify-content:center;
    align-items:center;

    border-radius:50%;
    background:#1d1d1d;

    cursor:pointer;
    transition:.3s;

    font-size:18px;
}

.social i:hover{
    background:#E50914;
    transform:translateY(-4px);
}

.footer-bottom p{
    color:#888;
}

/* Tablet */

@media(max-width:900px){

.footer-container{
grid-template-columns:repeat(2,1fr);
}

.footer-bottom{
flex-direction:column;
gap:20px;
}

}

/* Mobile */

@media(max-width:600px){

.footer{
padding:40px 25px;
}

.footer-container{
grid-template-columns:1fr;
}

.footer-bottom{
text-align:center;
}

.social{
justify-content:center;
}

}
</style>
