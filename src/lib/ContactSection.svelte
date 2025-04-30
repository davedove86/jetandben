<section class="contact-section">
  <div class="container">
    <div class="grid">
      <!-- Left Column: Email and Phone -->
      <div class="card contact-info">
        <h2>Get In Touch</h2>
        <p>If you would like to know more about what we can do please contact us using the methods below or visit our social media pages.</p>
        <a href="mailto:jet&ben@durham.police.uk" class="contact-item">
          <img src="/mail-icon.svg" alt="mail icon">
          <p>jet&ben@durham.police.uk</p>
        </a>
        <a href="https://www.facebook.com/jetandben" target="_blank" class="contact-item">
          <img src="/facebook-icon.svg" alt="Facebook icon">
          <p>@jetandben</p>
        </a>
        <a href="https://www.instagram.com/jetandben/" target="_blank" class="contact-item">
          <img src="/instagram-icon.svg" alt="Instagram icon">
          <p>@jetandben</p>
        </a>
         <a href="https://twitter.com/jetandben" target="_blank" class="contact-item">
          <img src="/twitter-icon.svg" alt="Twitter icon">
          <p>@jetandben</p>
        </a>
      </div>

      <!-- Right Column: Contact Form -->
      <div class="card contact-form">
        <img src="contact-paws.svg" alt="Tow dog paws icon" class="paws-icon">
        <h2>Send Us a Message</h2>
        <form
        name="contact"
        method="POST"
        data-netlify-recaptcha="true"
        data-netlify="true"
      >
        <input type="hidden" name="contact" value="contact" />
        <div>
          <label for="text">Name</label>
          <input
            id="text"
            type="text"
            name="name"
            placeholder="Name"
            required
          />
        </div>
        <div>
          <label for="email">Email</label>
          <!-- TODO add a default subject -->
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>
        <div>
          <label for="phone">Phone</label>
          <input id="phone" type="Phone" name="phone" placeholder="Phone" />
        </div>
        <div>
          <label for="textarea">Message</label>
          <textarea
            id="textarea"
            type="textarea"
            name="message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <div data-netlify-recaptcha="true" />
        <button class="btn" type="submit">Submit Form</button>
      </form>
      </div>
    </div>
  </div>
</section>

<style>
  .contact-section {
    padding: 4rem 0;
    background-color: #f9f9f9;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  .contact-form {
    position: relative;
  }

  .paws-icon {
    position: absolute;
    top: -18px;
    right: -12px;
    width: 100px;
    height: auto;
  }

  .contact-info h2,
  .contact-form h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-weight: bold;
  }

  .contact-info p {
    margin: 0.5rem 0;
  }

  .contact-info a {
    color: #007bff;
    text-decoration: none;
  }

  .contact-info a:hover {
    text-decoration: underline;
  }

  .contact-item {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    text-decoration: none;
    gap: 1rem;
    margin-top: 1rem;
  }

  .contact-item p {
    color: #333;
  }

  .form-group {
    margin-bottom: 1rem;
  }

  .form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }

  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
  }


  @media (max-width: 768px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
</style>
