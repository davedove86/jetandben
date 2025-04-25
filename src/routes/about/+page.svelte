<script>
	import Hero from '$lib/Hero.svelte';
  import Faq from '$lib/Faq.svelte';
  import Faqs from '$lib/faq'; // Assuming this file exports an array of FAQ objects
	import ContactUsCta from '$lib/ContactUsCta.svelte';
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
    <h2>FAQ's</h2>
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
  h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
    text-align: center;
  }
  .kicker {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    text-align: center;
  }
</style>


