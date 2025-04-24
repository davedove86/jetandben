<script>
	import BookUsCta from '$lib/BookUsCta.svelte';
  import Hero from '$lib/Hero.svelte';
	import ImageBanner from '$lib/ImageBanner.svelte';
</script>
<svelte:head>
  <title>Jet & Ben | Durham Constabulary | Home</title>
  <meta name="description" content="Jet & Ben's website" />
  <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="shortcut icon" href="/favicon.ico" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <meta name="apple-mobile-web-app-title" content="Jet & Ben Website" />
  <link rel="manifest" href="/site.webmanifest" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#ffffff">
</svelte:head>

<section>
  <div class="container">
    <Hero
      title="Jet & Ben Are The Durham Police Community Dogs"
      kicker="Durham Police’s Safety Dogs, we visit educational settings and other community engagement events." />
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="grid">
      <div class="card">
        <img src="/school-icon.svg" alt="school hat icon" class="icon">
        <h2 class="title">Schools</h2>
        <p class="description">Jet & Ben would like to help all schools and early years providers to keep children safe.</p>
        <a href="/about" class="learn-more">Learn More</a>
      </div>

      <div class="card">
        <img src="/community-icon.svg" alt="Group of people icon" class="icon">
        <h2 class="title">Community</h2>
        <p class="description">We attend a range of organised events, visiting day centres, care homes or out of school groups.</p>
        <a href="/community" class="learn-more">Learn More</a>
      </div>

      <div class="card">
        <img src="/about-us-icon.svg" alt="Dog paw icon" class="icon">
        <h2 class="title">About Us</h2>
        <p class="description">If you would like to know more about us; who we are and what we do, then this section has it all for you.</p>
        <a href="/about" class="learn-more">Learn More</a>
      </div>
    </div>
  </div>
</section>


<ImageBanner />

<BookUsCta />

<style>
  /* General Section Styles */
.section {
  background-color: #f2f2f2;
  padding: 4rem 0;
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

/* Grid Layout */
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Card Styles */
.card {
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 2rem;
}

.icon {
  width: 75px;
  margin-bottom: 1.5rem;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.description {
  font-size: 1rem;
  color: #4a4a4a;
  margin-bottom: 1.5rem;
}

/* Learn More Link */
.learn-more {
  text-decoration: none;
  transition: transform 0.3s ease, color 0.3s ease;
}

.learn-more:hover {
  transform: scale(1.2); /* Larger scale effect */
  color: #1a4f8b; /* Darker blue color */
}


</style>
