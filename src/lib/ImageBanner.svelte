<section id='banner-container'>
			<div class='photobanner'>
				<img
					class='first'
					src='/banner/banner1.jpg'
					alt='Jet as a puppy'
				/>
				<img
					src='/banner/banner2.jpg'
					alt='Ben'
				/>
				<img
					src='/banner/banner3.jpg'
					alt='ben with brothers'
				/>
				<img
					src='/banner/banner4.jpg'
					alt='Claire, Jet and Ben'
				/>
				<img
					src='/banner/banner5.jpg'
					alt='Ben outside an elevator'
				/>
				<img
					src='/banner/banner6.jpg'
					alt='Jet and Ben'
				/>
				<img
					src='/banner/banner7.jpg'
					alt='Ben on a couch'
				/>
        <img
					src='/banner/banner1.jpg'
					alt='Jet as a puppy'
				/>
				<img
					src='/banner/banner2.jpg'
					alt='Ben'
				/>
				<img
					src='/banner/banner3.jpg'
					alt='ben with brothers'
				/>
				<img
					src='/banner/banner4.jpg'
					alt='Claire, Jet and Ben'
				/>
				<img
					src='/banner/banner5.jpg'
					alt='Ben outside an elevator'
				/>
				<img
					src='/banner/banner6.jpg'
					alt='Jet and Ben'
				/>
				<img
					src='/banner/banner7.jpg'
					alt='Ben on a couch'
				/>
        <img
					src='/banner/banner1.jpg'
					alt='Jet as a puppy'
				/>
				<img
					src='/banner/banner2.jpg'
					alt='Ben'
				/>
				<img
					src='/banner/banner3.jpg'
					alt='ben with brothers'
				/>
				<img
					src='/banner/banner4.jpg'
					alt='Claire, Jet and Ben'
				/>
				<img
					src='/banner/banner5.jpg'
					alt='Ben outside an elevator'
				/>
				<img
					src='/banner/banner6.jpg'
					alt='Jet and Ben'
				/>
				<img
					src='/banner/banner7.jpg'
					alt='Ben on a couch'
				/>
			</div>
		</section>


<style>
  #banner-container {
	width: 100%;
	overflow: hidden;
	/* margin: 50px auto; */
	/* background-color: red; */
}

#banner-container .photobanner {
	height: 233px;
	width: 3350px;
	display: flex;
	gap: 0.5rem;
}

#banner-container .photobanner img {
	max-width: 400px;
	max-height: 320px;
}

/*keyframe animations*/
.first {
	-webkit-animation: bannermove 30s linear infinite;
	-moz-animation: bannermove 30s linear infinite;
	-ms-animation: bannermove 30s linear infinite;
	-o-animation: bannermove 30s linear infinite;
	animation: bannermove 30s linear infinite;
}

@keyframes bannermove {
	0% {
		margin-left: 0px;
	}
	100% {
		margin-left: -2125px;
	}
}

@-moz-keyframes bannermove {
	0% {
		margin-left: 0px;
	}
	100% {
		margin-left: -2125px;
	}
}

@-webkit-keyframes bannermove {
	0% {
		margin-left: 0px;
	}
	100% {
		margin-left: -2125px;
	}
}

@-ms-keyframes bannermove {
	0% {
		margin-left: 0px;
	}
	100% {
		margin-left: -2125px;
	}
}

@-o-keyframes bannermove {
	0% {
		margin-left: 0px;
	}
	100% {
		margin-left: -2125px;
	}
}

</style>
