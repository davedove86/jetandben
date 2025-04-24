<script>
	import '../app.css';
  import Navigation from '$lib/Navigation.svelte';
  import Footer from '$lib/Footer.svelte';

	let { children } = $props();
</script>


<Navigation />
<main>
{@render children()}
</main>
<Footer />

