<script context="module">
  import schools from '$lib/schools.js';

  /** @type {import('./$types').PageLoad} */
  export function load({ params }) {
    const school = schools.find((s) => s.slug === params.slug);

    if (!school) {
      throw error(404, 'School not found');
    }

    return { school };
  }
</script>

<section>
  <div class="container">
    <h1>test</h1>
  </div>
</section>

<style>
  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
</style>
