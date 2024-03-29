'use server';

const ContactForm = async () => {
	return (
		<form
			name='contact'
			method='POST'
			data-netlify='true'
			action='/success'>
			<input
				type='hidden'
				name='form-name'
				value='contact'
			/>
			<p>
				<input
					type='text'
					name='firstname'
					id='firstname'
				/>
				<label htmlFor='yourname'>Your Name:</label> <br />
				<input
					type='text'
					name='name'
					id='yourname'
				/>
			</p>
			<p>
				<label htmlFor='youremail'>Your Email:</label> <br />
				<input
					type='email'
					name='email'
					id='youremail'
				/>
			</p>
			<p>
				<label htmlFor='yourmessage'>Message:</label> <br />
				<textarea
					name='message'
					id='yourmessage'></textarea>
			</p>
			<p>
				<button type='submit'>Send</button>
			</p>
		</form>
	);
};

export default ContactForm;
