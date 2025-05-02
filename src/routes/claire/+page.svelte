<script>
	import ContactUsCta from '$lib/ContactUsCta.svelte';
  import Hero from '$lib/Hero.svelte';
</script>

<svelte:head>
  <title>Jet & Ben | Durham Constabulary | Claire</title>
  <meta name="description" content="I am the Community Engagement dog Handler for Jet and Ben within Durham Constabulary." />
</svelte:head>


<Hero
  title="Claire"
  kicker="Learn more about Claire who is the handler for the  Police Safety Dogs Jet & Ben"
  image="/claire-jet-ben-field.jpg"
  imageAlt='Police staff outside a Police Station' />

<section class="section">
  <div class="container">
    <div class="grid-2">
      <div>
        <h2>Hello, my name is Claire</h2>
        <p>I am the Community Engagement dog Handler for Jet and Ben within Durham Constabulary.</p>
        <p>I have been in this role for over 13 years and have managed to be lucky enough to meet thousands of children in my time here and engage with many of the communities within Durham and Darlington.</p>
        <p>I love working with Jet and Ben as everyday is a new exciting experience for us.</p>
        <p>We love visiting schools, nurseries and many other educational providers and helping to protect our local communities.</p>
      </div>
      <img src="/claire-2.jpg" alt="Ben as a puppy">
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="grid-2">
      <img src="/claire-3.jpg" alt="Jet at a school">
      <div>
        <p>Before joining the police I went to university and gained a degree in History and Sociology and then went on to work with the Youth Offending Team; helping to divert young people away from crime, that is where my passion for helping young people began and that was when I decided to apply for the role as the Jet and Ben handler.</p>
        <p>This meant that I could continue to educate and keep young people safe; it is also a massive bonus that my colleagues are cute and cuddly too.</p>
        <p>In order to ensure the role I fill is supporting schools in the best way possible, I have a level 3 in education and training, an accreditation for the National PSHE CPD Programme, I am a CEOP Ambassador and a Mental health First Aider.</p>
        <p>We will look forward to meeting you all when we next visit, take care and see you soon</p>
      </div>
    </div>
    <div class="center">
      <p>Well I think that is everything you need to know about me.</p>
      <p>Bye for now</p>
      <img src="/hand.svg" alt="Hand Icon" class="paw-icon">
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
