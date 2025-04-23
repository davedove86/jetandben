<script>
	import Hero from '$lib/Hero.svelte';

</script>
<svelte:head>
  <title>Jet & Ben | Durham Constabulary | Home</title>
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
      title="Jet & Ben Are The Durham Police Community Dogs"
      kicker="Durham Police’s Safety Dogs, we visit educational settings and other community engagement events." />
  </div>
</section>

<section class="bg-[#f2f2f2]">
  <div class="container">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="bg-white shadow-md rounded-lg p-4">
        <img src="/school-icon.svg" alt="Graduation hat icon" class="h-25">
        <h2 class="text-3xl font-bold my-6">Schools</h2>
        <p class="text-gray-700 my-6">Jet & Ben would like to help all schools and early years providers to keep children safe.</p>
      </div>
      <div class="bg-white shadow-md rounded-lg p-4">
        <img src="/community-icon.svg" alt="group of people icon" class="h-25">
        <h2 class="text-3xl font-bold my-6">Community</h2>
        <p class="text-gray-700 my-6">We attend a range of organised events, visiting day centres, care homes or out of school groups.</p>
      </div>
      <div class="bg-white shadow-md rounded-lg p-4">
        <img src="/about-us-icon.svg" alt="Dog paw icon" class="h-25">
        <h2 class="text-3xl font-bold my-6">About Us</h2>
        <p class="text-gray-700 my-6">If you would like to know more about us; who we are and what we do, then this section has it all for you.</p>
      </div>
  </div>

</section>
