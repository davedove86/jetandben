<script>
	import ContactSection from '$lib/ContactSection.svelte';
	import Hero from '$lib/Hero.svelte';
	import ImageBanner from '$lib/ImageBanner.svelte';
</script>

<svelte:head>
  <title>Jet & Ben | Durham Constabulary | Contact Us</title>
  <meta name="description" content="If you would like us to come and visit your school or community event please use our contact options to get in touch and let's have some fun." />
  <meta itemprop="image" content="../claire.jpg" />
</svelte:head>

<Hero
  title="Contact Us"
  kicker="If you would like us to come and visit your school or community event please use our contact options to get in touch and let's have some fun."
  image="/contact-hero.jpg"
  imageAlt="Ben and Claire at a school"/>

<ContactSection />
<ImageBanner />
