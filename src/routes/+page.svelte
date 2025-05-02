<script>
	import BookUsCta from '$lib/BookUsCta.svelte';
  import Hero from '$lib/Hero.svelte';
	import ImageBanner from '$lib/ImageBanner.svelte';
	import AboutCards from '$lib/AboutCards.svelte';
	import ContactUsCta from '$lib/ContactUsCta.svelte';
</script>
<svelte:head>
  <title>Jet & Ben | Durham Constabulary | Home</title>
</svelte:head>

<Hero
  title="Jet & Ben Are The Durham Police Community Dogs"
  kicker="Durham Police’s Safety Dogs, we visit educational settings and other community engagement events." />

<section class="section">
  <div class="container">
    <div class="grid">
      <div class="card">
        <img src="/school-icon.svg" alt="school hat icon" class="icon">
        <h2 class="title">Schools</h2>
        <p class="description">Jet & Ben would like to help all schools and early years providers to keep children safe.</p>
        <div class="learn-more-wrapper">
          <a href="/schools" class="learn-more">Learn More</a>
          <img src="/arrow-icon.svg" alt="Arrow Icon">
        </div>
      </div>

      <div class="card">
        <img src="/community-icon.svg" alt="Group of people icon" class="icon">
        <h2 class="title">Community</h2>
        <p class="description">We attend a range of organised events, visiting day centres, care homes or out of school groups.</p>
        <div class="learn-more-wrapper">
          <a href="/community" class="learn-more">Learn More</a>
          <img src="/arrow-icon.svg" alt="Arrow Icon">
        </div>
      </div>

      <div class="card">
        <img src="/about-us-icon.svg" alt="Dog paw icon" class="icon">
        <h2 class="title">About Us</h2>
        <p class="description">If you would like to know more about us; who we are and what we do, then this section has it all for you.</p>
        <div class="learn-more-wrapper">
          <a href="/about" class="learn-more">Learn More</a>
          <img src="/arrow-icon.svg" alt="Arrow Icon">
        </div>
      </div>
    </div>
  </div>
</section>


<ImageBanner />

<!-- What we do -->
<section>
  <div class="container">
    <div class="grid-2">
      <div>
        <h2 class="title">What We Do</h2>
        <p class="description">We have various roles within Durham Constabulary and if you would like to know more please contact us.</p>
        <div class="what-we-do-item">
          <img src="/school-visit-icon.svg" alt="Dog award icon" class="icon">
          <div>
            <h3>School Visits</h3>
            <p>Are you a Primary School teacher or Early years provider, then we can visit you & deliver topics including Personal Safety, internet safety and people who help us.</p>
          </div>
        </div>
        <div class="what-we-do-item">
          <img src="/events-icon.svg" alt="Dog events icon" class="icon">
          <div>
            <h3>Community events</h3>
            <p>Organising a local event, then consider Jet & Ben as a fun & informative addition to your event. Scouts, Brownies, Cubs or out of school groups, we’ll attend them all.</p>
          </div>
        </div>
        <div class="what-we-do-item">
          <img src="/officer-support-icon.svg" alt="two dog bones icon" class="icon">
          <div>

            <h3>Officer Support</h3>
            <p>Police officers & staff do a demanding and sometimes dangerous job, and are frequently exposed to trauma, we come in to support and listen to the officers.</p>
          </div>
        </div>
      </div>
      <img class="what-image" src="/jetben-contact-us.jpg" alt="Jet and Ben with Claire"/>
    </div>
  </div>
</section>

<BookUsCta />

<AboutCards />

<ContactUsCta />

<style>

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}
.what-image {
  max-width: 100%;
  height: auto;
  border-radius: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.what-we-do-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.what-we-do-item h3 {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

@media (max-width: 834px) {
  .what-we-do-item {
    flex-direction: column;
    align-items: flex-start;
  }
}

</style>
