<script>
  let isMenuOpen = false;
</script>

<header>
  <a href="/"><img src="../jetandben-logo.svg" alt="Jet & Ben Logo" /></a>

  <button class="burger-menu" class:open={isMenuOpen} on:click={() => (isMenuOpen = !isMenuOpen)} aria-label="Toggle navigation">
    <span></span><span></span><span></span>
  </button>

  <nav class:open={isMenuOpen}>
    <ul>
      {#each ['Home', 'Schools', 'Community', 'About', 'Contact'] as item}
        <li><a href={`/${item.toLowerCase()}`} on:click={() => (isMenuOpen = false)}>{item}</a></li>
      {/each}
    </ul>
  </nav>
</header>

<style>
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1440px;
    padding: 1rem;
    margin: 0 auto;
    position: relative;
    z-index: 100;
  }

  img { width: 75px; }

  nav { display: flex; }

  nav ul {
    list-style: none;
    display: flex;
    gap: 1rem;
    padding: 0;
    margin: 0;
  }

  nav a { text-decoration: none; color: black; }

  .burger-menu {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    width: 30px;
    height: 30px;
    z-index: 200;
  }

  .burger-menu span {
    display: block;
    width: 25px;
    height: 3px;
    background-color: black;
    transition: all 0.3s ease;
    border-radius: 2px;
  }

  .burger-menu.open span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
  .burger-menu.open span:nth-child(2) { opacity: 0; }
  .burger-menu.open span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }

  @media (max-width: 768px) {
    nav {
      flex-direction: column;
      position: absolute;
      top: 100%;
      right: 0;
      background: white;
      width: 100%;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.4s ease, opacity 0.4s ease;
      opacity: 0;
    }

    nav.open { max-height: 500px; opacity: 1; }

    nav ul { flex-direction: column; }

    nav li { padding: 1rem; text-align: left; }

    .burger-menu { display: flex; }
  }
</style>
