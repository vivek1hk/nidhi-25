import { h } from 'preact';
import style from './style.less';

export default () => {
	return (
		<div class={style.content}>
			<div class={style.home}>
				<h1 >Happy Birthday Shistaa 🎉</h1>
				<p> Wanna take a trip down the memory lane?</p>
			</div>
			
			<ul class={style.timeline}>
				<li class={style.timeline_event}>
					<label class={style.timeline_event_icon} />
					<div class={style.timeline_event_copy}>
						<p class={style.timeline_event_thumbnail}>September 7th 1995</p>
						<h4>SriNiDHi BN is born 👶</h4>
						<img class={style.timeline_image} src="./assets/born.jpeg"/>
					</div>
				</li>

				<li class={style.timeline_event}>
					<label class={style.timeline_event_icon} />
					<div class={style.timeline_event_copy}>
						<p class={style.timeline_event_thumbnail} > The 90's</p>
						<h4>A toddler learns to walk</h4>
						<p>The 90's was baby Nidhi growing up in that cool house next to Hande hall and Ajji mane </p>
					</div>
				</li>

				<li class={style.timeline_event}>
					<label class={style.timeline_event_icon} />
					<div class={style.timeline_event_copy}>
						<p class={style.timeline_event_thumbnail} > The early 2000's</p>
						<p>Remember me pushing you to play video games all day? </p>
						<img class={style.timeline_image} src="https://img.mensxp.com/media/content/2014/Apr/these15videogameswilltakeyoubacktothe90s12_1398747304.jpg"/>
						<p>Remember the thotti back of your house? Which was a state of the art swimming pool to us?!</p>
						<p>Remember us making cork balls with those weird seeds in front of your 5th block house? </p>
					</div>
				</li>

				<li class={style.timeline_event}>
					<label class={style.timeline_event_icon} />
					<div class={style.timeline_event_copy}>
						<p class={style.timeline_event_thumbnail} > The early 2000's</p>
						<p>Remember those Rube Goldberg machines we used to build? </p>
						<img class={style.timeline_image} src="https://media.giphy.com/media/iiRne6uEp2EyA/source.gif"/>
						<p>Remember the thotti back of your house? Which was a state of the art swimming pool to us!!</p>
						<p>Remember us making cork balls with those weird seeds in front of your 5th block house </p>
					</div>
				</li>
			</ul>
		</div>
		
	);
};
