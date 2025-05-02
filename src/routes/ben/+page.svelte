<script>
	import ContactUsCta from '$lib/ContactUsCta.svelte';
  import Hero from '$lib/Hero.svelte';
</script>

<svelte:head>
  <title>Jet & Ben | Durham Constabulary | Ben</title>
  <meta name="description" content="Jet & Ben's website" />
  <link rel="icon" href="/favicon.png" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  <link rel="manifest" href="/manifest.webmanifest" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#ffffff">
</svelte:head>


<Hero
  title="Ben"
  kicker="Learn more about Ben who is a cute and cuddly Golden Labrador Police Safety Dog."
  image="/ben.jpg"
  imageAlt='Police staff outside a Police Station' />

<section class="section">
  <div class="container">
    <div class="grid-2">
      <div>
        <h2>Hello, my name is Ben</h2>
        <p>I am a Golden Labrador, I started out my life with Durham Police as a tiny puppy, this is me with my litter brothers and sisters and just before I began my life with my police handler Claire.</p>
        <p>I am a Community Engagement dog for Durham Constabulary.</p>
        <p>What does this mean I hear you ask? Well it means I am cute and cuddly and get to meet lots of new people every day, I go into schools to educate children, visit elderly people in care homes and visit many other community venues and events and I love my role.</p>
        <p>I suppose you would like to know more about me, well I work very hard; but outside of work I am also very active. I live at home with my handler Claire and have two small two legged siblings who I love to play with.</p>
      </div>
      <img src="/ben-2.jpg" alt="Ben as a puppy">
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="grid-2">
      <img src="/ben-3.jpg" alt="Jet at a school">
      <div>
        <p>I also like to spend my spare time playing football, going for long walks, searching for tennis balls and even swimming in the river (even though my Mam does tell me off sometimes as I get messy when I am not supposed to…oops).</p>
        <p>I love to eat MMMMMMMMM; food is absolutely one of my most favourite things, I love all food of any type, but my human Mam won’t let me eat some things as she says they are not good for me ( but if I can sneak some I will, don’t tell her).</p>
        <p>My handler Claire is my favourite two legged human as she is my Mam and takes good care of me (even though she won’t let me eat certain treats), she has worked for Durham Police for over 13 years and has trained and encouraged me to do the job that I do. I love keeping all of you safe as your safety is very important to me.</p>
      </div>
    </div>
    <div class="center">
      <p>Well I think that is everything you need to know about me.</p>
      <p>Bye for now</p>
      <img src="/gold-paw.svg" alt="Black Paw Icon" class="paw-icon">
    </div>
  </div>
</section>

<ContactUsCta />

<style>
  .grid-2 {
    align-items: flex-start;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    font-weight: bold;
  }

  p {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .center {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 6rem;
  }

  .paw-icon {
    border-radius: 100%;
    box-shadow: none;
  }
</style>
