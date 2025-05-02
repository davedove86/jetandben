<script>
	import ContactUsCta from '$lib/ContactUsCta.svelte';
  import Hero from '$lib/Hero.svelte';
</script>

<svelte:head>
  <title>Jet and Ben | Durham Constabulary | Jet</title>
  <meta name="description" content="I am a 2-year-old Black Labrador, I started out my life with Durham Police as a tiny puppy, I originally started out my time in the police training to be a search dog, but because I had such good skills working with people I was transferred to work with my handler Claire." />
</svelte:head>


<Hero
  title="Jet"
  kicker="Learn more about Jet who is a fun and friendly Black Labrador Police Safety Dog"
  image="/jet-puppy.jpg"
  imageAlt='Police staff outside a Police Station' />

<section class="section">
  <div class="container">
    <div class="grid-2">
      <div>
        <h2>Hello, my name is Jet</h2>
        <p>I am a Black Labrador, I started out my life with Durham Police as a tiny puppy, I originally started out my time in the police training to be a search dog, but because I had such good skills working with people I was transferred to work with my handler Claire.</p>
        <p>So, I am now a Community Engagement dog for Durham Constabulary.</p>
        <p>I love my job now; as every day is such fun; I get to visit lots of new places and meet lots of interesting new people; but I also help to keep people safe and that is extremely important.</p>
        <p>I guess you would like to know more about me, well I work as part of a team with my colleague Ben and Claire.</p>
      </div>
      <img src="/jet-school.jpg" alt="Jet at a school">
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="grid-2">
      <img src="/jet-2.jpg" alt="Jet at a school">
      <div>
        <p>I am the wild one though, I love to run all the time and when I go to any new places I get so excited that there are times I cannot help but scream.</p>
        <p>My favourite thing in the whole wide world is a tennis ball, I love; love; love tennis balls, I ask for a new one every birthday.</p>
        <p>I also love going for long walks as exercise is good for me and keeps me fit and healthy.</p>
        <p>I live at home with my handler Claire, the family and my teammate Ben, since I am the youngest, I do like to annoy Ben sometimes; but isn’t that what all younger siblings do.</p>
        <p>I love working with Claire as since I have been here she is helping me to learn new skills like how to be a wellbeing dog; so not only will I be helping members of the public.</p>
        <p>I will also be helping the police officers and staff I work with to think about their own wellbeing when dealing with traumatic incidents and sometimes my colleagues do have deal with some very difficult things and it is brilliant that I can help them.</p>
      </div>
    </div>
    <div class="center">
      <p>Well I think that is everything you need to know about me.</p>
      <p>Bye for now</p>
      <img src="/black-paw.svg" alt="Black Paw Icon" class="paw-icon">
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
