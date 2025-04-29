<script>
	import Hero from '$lib/Hero.svelte';
  import Faq from '$lib/Faq.svelte';
  import Faqs from '$lib/faq'; // Assuming this file exports an array of FAQ objects
	import ContactUsCta from '$lib/ContactUsCta.svelte';
	import AboutCards from '$lib/AboutCards.svelte';
</script>

<svelte:head>
  <title>Jet & Ben | Durham Constabulary | About Us</title>
</svelte:head>

  <Hero
    title="About Us"
    kicker="If you would like to know more about us; who we are and what we do, then this section has all the information you will need, if you love cute dogs, this is the section for you."
    image="/about-hero.jpg"
    imageAlt="Claire, Jet & Ben" />

<section>
  <div class="container">
    <h2 class="section-heading">Meet The Team</h2>
    <p class="kicker">Click on the learn more more about our team and read their bios.</p>
    <div class="grid">
      <div class="card">
        <img src="/jet.jpg" alt="Jet" class="profile">
        <h3 class="title">Jet</h3>
        <p class="description">Hello my name is Jet I am fun and friendly Black Labrador.</p>
        <div class="learn-more-wrapper">
          <a href="/jet" class="learn-more">Learn More</a>
          <img src="/arrow-icon.svg" alt="Arrow Icon">
        </div>
      </div>
      <div class="card">
        <img src="/claire.jpg" alt="Claire" class="profile">
        <h3 class="title">Claire</h3>
        <p class="description">Hello my name is Claire and I am Jet & Ben’s favourite two legged human.</p>
        <div class="learn-more-wrapper">
          <a href="/claire" class="learn-more">Learn More</a>
          <img src="/arrow-icon.svg" alt="Arrow Icon">
        </div>
      </div>
      <div class="card">
        <img src="/ben.jpg" alt="Ben" class="profile">
        <h3 class="title">Ben</h3>
        <p class="description">Hello my name is Ben I am cute and cuddly Golden Labrador.</p>
        <div class="learn-more-wrapper">
          <a href="/ben" class="learn-more">Learn More</a>
          <img src="/arrow-icon.svg" alt="Arrow Icon">
        </div>
      </div>
    </div>
  </div>
</section>

<section class=black-section>
  <div class="container">
    <div class="grid-2 reverse">
      <img src='/ok9-video.jpg' alt="Ben doing OK9 Work" />
      <div>
        <h2>Oscar Kilo 9</h2>
        <p>The dogs are the forces trauma and wellbeing support dogs and help to support all officers and staff.</p>
        <div class="what-we-do-item">
          <img src="/mental-health-first.svg" alt="Award icon">
          <div>
            <h3>Mental health first aid</h3>
            <p>Claire is trained in Mental Health First Aid to be able to recognise and respond when officers and staff need further support.</p>
          </div>
        </div>
        <div class="what-we-do-item">
          <img src="/trauma-support.svg" alt="dog bone icon">
          <div>
            <h3>Trauma support</h3>
            <p>Police officers and staff do a demanding and sometimes dangerous job and can be exposed to trauma.  Police forces have recognised the value of dogs in helping officers and staff with their wellbeing.</p>
          </div>
        </div>
        <div class="what-we-do-item">
          <img src="/post-incident.svg" alt="two dog bones icon">
          <div>
            <h3>Post incident support</h3>
            <p>After any traumatic incident a referral can be made through the wellbeing team and Reggie or Ben will be out into action.</p>
          </div>
        </div>
        <a href="https://oscarkilo.org.uk/category/national-police-wellbeing-service/wellbeing-at-work/ok9-wellbeing-and-trauma-support-dogs/">Learn more about OK9 on their website</a>
      </div>
    </div>
  </div>
</section>


<section>
  <div class="container">
    <h2 class="text-center">FAQ's</h2>
    <p class="kicker">Below we answer some of the most frequently asked questions</p>
    {#each Faqs as faq}
      <Faq>
        <span slot="head">{faq.question}</span>
        <div slot="details">
          <p>{faq.answer}</p>
        </div>
      </Faq>
    {/each}
  </div>
</section>

<ContactUsCta />

<style>

.black-section {
  background-color: #231f1e;
  color: #fff;
  padding: 6rem 0;
}

  h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  .kicker {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    text-align: center;
  }

  span {
    text-align: left;
  }

  a {
    text-decoration: underline;
  }
</style>


