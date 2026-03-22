<template>

<div class="hero">

<div class="hero-overlay">

<h1 data-aos="fade-up">
Entrena. Vive. Evoluciona.
</h1>

<p data-aos="fade-up" data-aos-delay="200">
Un gimnasio diseñado para transformar tu vida.
</p>

<v-btn
color="primary"
size="x-large"
class="mt-6"
href="#pricing"
data-aos="zoom-in"
>
Ver membresías
</v-btn>

</div>

</div>

</template>

<style scoped>

.hero{

height:100vh;

background-image:
url("https://images.unsplash.com/photo-1583454110551-21f2fa2afe61");

background-size:cover;
background-position:center;

display:flex;
align-items:center;
justify-content:center;

}

.hero-overlay{

background:rgba(0,0,0,0.6);

padding:60px;
border-radius:20px;

text-align:center;
color:white;

}

h1{

font-size:4rem;
font-weight:bold;

}

p{

font-size:1.4rem;

}

</style>
