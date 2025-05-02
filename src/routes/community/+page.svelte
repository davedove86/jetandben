<script>
	import ContactUsCta from '$lib/ContactUsCta.svelte';
  import Hero from '$lib/Hero.svelte';
</script>

<svelte:head>
  <title>Jet & Ben | Durham Constabulary | Community</title>
  <meta name="description" content="Jet & Ben maintain many links within the local community, attending organised events, visiting day centres, care homes, or out of school groups. If you run a local community group find out more here." />
</svelte:head>


<Hero
  title="Community"
  kicker="Jet & Ben maintain many links within the local community, attending organised events, visiting day centres, care homes or out of school groups. If you run a local community group find out more here."
  image="/community-hero.jpg"
  imageAlt='Police staff outside a Police Station' />

<section class="section">
  <div class="container">
    <div class="grid">
      <div class="card">
        <img src="/care-home-icon.svg" alt="school hat icon" class="icon">
        <h2 class="title">Care Homes & Day Centres</h2>
        <p class="description">We are happy to visit you as a meet and greet or if you would prefer something more formal such as a question and answer session or even a safety session for your residents, please contact us with your request or to find out more.</p>
      </div>

      <div class="card">
        <img src="/out-school-icon.svg" alt="Group of people icon" class="icon">
        <h2 class="title">Out Of School Groups</h2>
        <p class="description">We often visit out of school groups whether that be on an evening or in the holidays, if you would like to find out more or make an enquiry then please feel free to contact us.</p>
      </div>

      <div class="card">
        <img src="/community-events-icon.svg" alt="Dog paw icon" class="icon">
        <h2 class="title">Community Events</h2>
        <p class="description">If you are organising a local community event and would like us to attend for a meet and greet, question and answer and photo opportunities with the furry duo then please contact us with your request.</p>
      </div>
    </div>
  </div>
</section>

<ContactUsCta />
