<script>
	import Hero from '$lib/Hero.svelte';
  import Faq from '$lib/Faq.svelte';
  import Faqs from '$lib/faq'; // Assuming this file exports an array of FAQ objects
	import ContactUsCta from '$lib/ContactUsCta.svelte';
</script>

<svelte:head>
  <title>Jet & Ben | Durham Constabulary | About</title>
  <meta name="description" content="Jet & Ben's website" />
  <link rel="icon" href="/favicon.png" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  <link rel="manifest" href="/manifest.webmanifest" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#ffffff">
</svelte:head>

<section>
  <div class="container">
    <Hero
      title="About"
      kicker="If you would like to know more about us; who we are and what we do, then this section has all the information you will need, if you love cute dogs, this is the section for you." />
  </div>
</section>

<section>
  <div class="container">
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



