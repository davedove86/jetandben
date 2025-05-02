<script>
	import Hero from '$lib/Hero.svelte';
  import BookUsCta from '$lib/BookUsCta.svelte';
  import ContactUsCta from '$lib/ContactUsCta.svelte';
  import schools from '$lib/schools.js'; // Assuming this file exports an array of school objects


  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';


  let testimonials = [
    {
      quote: "Thank you to Jet & Ben for coming to see our children at Parkside Childcare, they thoroughly enjoyed your visit and we would definitely use you again in the future.",
      name: "Deputy Manager",
      school: "Parkside Childcare, Darlington"
    },
    {
      quote: "We loved watching the dogs in action hunting for their tennis ball. It was great fun. Thank you!",
      name: "Teacher",
      school: "Reid Street Primary School, Darlington"
    },
    {
      quote: "This was a great way to get the children thinking about online safety it is good for them to hear the message from a police officer and not just the teacher.",
      name: "Headteacher",
      school: "St Andrew’s Primary School, Bishop Auckland"
    },
    {
      quote: "It was fantastic to welcome Jet and Ben and their human friends into school. The session was friendly, engaging and informative. It covered all aspects of safety ranging from road safety to keeping yourself safe whilst online. Meeting and stroking Jet and Ben was very exciting for the children and helped to build their confidence around dogs. We are looking forward to another visit later in the year.",
      name: "Headteacher",
      school: "Stanhope Barrington RC Primary School"
    },
  ];

  let current = 0;
  let interval;

  onMount(() => {
    interval = setInterval(() => {
      current = (current + 1) % testimonials.length;
    }, 5000);

    return () => clearInterval(interval);
  });
</script>

<svelte:head>
  <title>Jet & Ben | Durham Constabulary | Schools</title>
  <meta name="description" content="Jet & Ben would like to help all schools and early years providers within County Durham and Darlington to educate children especially when it comes to their safety. Find out more below about the lessons we can provide to you." />
  <meta itemprop="image" content="/claire.jpg" />
</svelte:head>

  <Hero
    title="Schools"
    kicker="Jet & Ben would like to help all schools and early years providers within County Durham and Darlington to educate children especially when it comes to their safety. Find out more below about the lessons we can provide to you."
    image="/jet-puppy.jpg"
    imageAlt="Jet as a puppy"/>

<section class="section">
  <div class="container">
    <div class="grid">
      <div class="card">
        <img src="/presentations-icon.svg" alt="school hat icon" class="icon">
        <h2 class="title">Presentations</h2>
        <p class="description">We deliver a range of presentations for different ages and abilities including, Personal Safety, Internet Safety and People Who Help Us.</p>
      </div>

      <div class="card">
        <img src="/meet-icon.svg" alt="Group of people icon" class="icon">
        <h2 class="title">Meet & Greet</h2>
        <p class="description">Are you having a summer fair, charity event or anything within school where a cuddly cute dog would make a nice addition then why not invite us along.</p>
      </div>

      <div class="card">
        <img src="/competitions-icon.svg" alt="Dog paw icon" class="icon">
        <h2 class="title">Competitions</h2>
        <p class="description">Teachers watch this space for regular competitions that your school can get involved with and hopefully win some great prizes.</p>
      </div>
    </div>
  </div>
</section>

<div class="testimonial-section">
  <div class="image-wrapper">
    <img src="/jet-puppy.jpg" alt="Jet & Ben in a school visit" />
  </div>

  <div class="testimonial-slider">
    {#each testimonials as t, i}
      {#if i === current}
        <div transition:fade={{ duration: 500 }} class="testimonial">
          <p class="quote">“{t.quote}”</p>
          <p class="author">{t.name}</p>
          <p class="school">{t.school}</p>
        </div>
      {/if}
    {/each}

    <div class="dots">
      {#each testimonials as _, i}
        <button
          type="button"
          class="dot {i === current ? 'active' : ''}"
          aria-label="Select testimonial {i + 1}"
          on:click={() => current = i}
        ></button>
      {/each}
    </div>
    </div>
  </div>

<section>
  <div class="container">
    <div class="grid">
      {#each schools as school}
        <div class="school-card">
          <h3 class="title">{school.name}</h3>
          <p class="description">{school.description}</p>
          <div class="learn-more-wrapper">
            <a href={school.slug} target="_blank">Book Here Now</a>
            <img src="/arrow-icon.svg" alt="Arrow Icon">
          </div>
        </div>
      {/each}
  </div>
</section>

<ContactUsCta />

<style>
.testimonial-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.image-wrapper {
  width: 100%;
  height: auto;
}

.image-wrapper img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.testimonial-slider {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
}

.testimonial {
  text-align: left;
}

.quote {
  font-size: 1.5rem;
  font-style: italic;
  margin-bottom: 1rem;
  color: #333;
}

.author {
  font-weight: bold;
  color: #555;
}

.school {
  font-size: 0.95rem;
  color: #888;
}

.card {
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.school-card {
  display: flex;
  flex-direction: column;
  background-color: #f2c165;
  border: 6px solid #231F1E;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.dots {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ccc;
  cursor: pointer;
  transition: background-color 0.3s;
}

.dot.active {
  background-color: #333;
}

  @media (max-width: 768px) {
    .testimonial-section {
      grid-template-columns: 1fr;
    }
  }
</style>
