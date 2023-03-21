import React from 'react'

const HeroSection = () => {
	return (
		<div className='grid place-content-center w-screen h-screen'>
			<section className=''>
				<div>
					<p>Plant-a-holic</p>
					<h2>
						<span>We got your plants</span> <br />
						<span>And we deliver them for you</span>
					</h2>
					<p>
						Our hand-picked collection of plants gives you all the natural
						wonders you ever wanted in your room, living space or even kitchen.
					</p>
					<div>
						<button>See The Collection</button>
						<button>Learn More</button>
					</div>
				</div>

				{/* <div>
					<img
						src='https://images.pexels.com/photos/3952029/pexels-photo-3952029.jpeg'
						alt=''
					/>
				</div> */}
			</section>
		</div>
	)
}

export default HeroSection
