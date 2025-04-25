<script>
  export let title = 'Jet & Ben Are The Durham Police Community Dogs'
  export let kicker = 'Durham Police’s Safety Dogs, we visit educational settings and other community engagement events.'
  export let image = '/claire-jet-ben-field.jpg'
  export let imageAlt = 'Jet & Ben with Claire in a field'
</script>

<div class="hero-wrapper">
  <div class="container">
    <div class="grid">
      <div class="hero-text">
        <h1>{title}</h1>
        <p>{kicker}</p>
        <a href="/contact" class="btn">Contact Us</a>
      </div>
      <img src={image} alt={imageAlt} />
    </div>
  </div>
</div>
<style>

.hero-wrapper {
  background-color: #f2f2f2;
  background-image: url('/paw-bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: repeat;
  padding: 4rem 0;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
  justify-items: stretch;
}
.hero-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.hero-text h1 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
.hero-text p {
  font-size: 1.25rem;
  margin-bottom: 2rem;
}

img {
  max-width: 100%;
  height: auto;
  max-height: 500px;
  border-radius: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
    justify-items: center;
  }
  .hero-text {
    align-items: center;
    text-align: center;
  }
}

</style>
