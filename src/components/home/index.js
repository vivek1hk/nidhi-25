import { h } from 'preact';
import style from './style.less';

export default () => {
	return (
		<div class={style.content}>
			<div class={style.home}>
				<h1 >Happy Birthday Shistaa 🎉</h1>
				<p> Let's take a trip down memory lane...</p>
			</div>
			
			<ul class={style.timeline}>
				<li class={style.timeline_event}>
					<label class={style.timeline_event_icon} />
					<div class={style.timeline_event_copy}>
						<p class={style.timeline_event_thumbnail}>September 7th 1995</p>
						<h4>SriNiDHi BN is born 👶 and by her side - protector and warrior, Vivek HK</h4>
						<img class={style.timeline_image} src="https://res.cloudinary.com/dtr9micp0/image/upload/v1599462699/born_ni0bc1.jpg"/>
					</div>
				</li>

				<li class={style.timeline_event}>
					<label class={style.timeline_event_icon} />
					<div class={style.timeline_event_copy}>
						<p class={style.timeline_event_thumbnail} >1995-2000</p>
						<h4>Coolest baby in the city!</h4>
						<p>Below is a moment captured during a lecture by baby NiDHi on "How to be a cool baby"</p>
						<img class={style.timeline_image} src="https://res.cloudinary.com/dtr9micp0/image/upload/v1599462700/swag_cf2hll.jpg"/>
						<p>And this was captured during a lecture on "Fashion tips for cool babies"</p>
						<img class={style.timeline_image} src="https://res.cloudinary.com/dtr9micp0/image/upload/v1599462699/fashion-baby_x8corx.jpg"/>
					</div>
				</li>

				<li class={style.timeline_event}>
					<label class={style.timeline_event_icon} />
					<div class={style.timeline_event_copy}>
						<p class={style.timeline_event_thumbnail} > The early 2000's</p>
						<h4> Early 2000's was just straight up fun! Let's test your memory a bit</h4>
						<p> An easy one, remember this place?</p>
						<img class={style.timeline_image} src="https://res.cloudinary.com/dtr9micp0/image/upload/v1599462699/ajji-mane_otdo7s.jpg"/>
						<p>I loved that we sat and played video games all day. Remember this game? 🎮</p>
						<img class={style.timeline_image} src="https://img.mensxp.com/media/content/2014/Apr/these15videogameswilltakeyoubacktothe90s12_1398747304.jpg"/>
						<p>Remember that "thotti" by the back of your house? Which was our state of the art swimming pool!</p>
						<p>Remember us making cork balls with those weird seeds from trees in front of your 5th block house? </p>
						<p>The trio were inseparable (also we were snappy dressers!)</p>
						<img class={style.timeline_image} src="https://res.cloudinary.com/dtr9micp0/image/upload/v1599462700/trio_fonvpf.jpg"/>
						<p>Remember all the summer camps?</p>
						<img class={style.timeline_image} src="https://res.cloudinary.com/dtr9micp0/image/upload/v1599462699/summer-camp_xjlgih.jpg"/>
						<img class={style.timeline_image} src="https://res.cloudinary.com/dtr9micp0/image/upload/v1599462700/summer-camp2_xn2gnb.jpg"/>
						<p>Remember those Rube Goldberg machines we used to build? </p>
						<img class={style.timeline_image} src="https://media.giphy.com/media/iiRne6uEp2EyA/source.gif"/>
						<p> Remember current sweet? </p>
					</div>
				</li>
				<li class={style.timeline_event}>
					<label class={style.timeline_event_icon} />
					<div class={style.timeline_event_copy}>
						<p class={style.timeline_event_thumbnail} > 2010-2015</p>
						<p>Remember where this picture was taken? </p>
						<img class={style.timeline_image} src="https://res.cloudinary.com/dtr9micp0/image/upload/v1599462699/cermony_i5ux6e.jpg"/>
						<p>What about this one? </p>
						<img class={style.timeline_image} src="https://res.cloudinary.com/dtr9micp0/image/upload/v1599462700/happy-bunch_biclnx.jpg"/>
						<p>The cousin train!</p>
						<img class={style.timeline_image} src="https://res.cloudinary.com/dtr9micp0/image/upload/v1599462700/family-fun_yc8egk.jpg"/>
						<p> Remember our Dubai trip?? I couldn't get my hands on those pics </p>
						<p> So many photos are in my hard disk and it's in Chicago 😢. But I promise to update this page with more memories soon. </p>
					</div>
				</li>
				<li class={style.timeline_event}>
					<label class={style.timeline_event_icon} />
					<div class={style.timeline_event_copy}>
						<p class={style.timeline_event_thumbnail} > 2015-2020</p>
							
						<h4>It's sad that I have been away the last 5 years. Help me fill it with your memories!
						Call me when you see this. </h4>
						<img class={style.timeline_image} src="https://res.cloudinary.com/dtr9micp0/image/upload/v1599462699/away_nhtzse.jpg"/>
						<h4> Happy birthday Shishta. Here is some cake for you 🎂 🎂 🎂 🎂 🎂 </h4>
						<p>Also, you have the best smile</p>
						<img class={style.timeline_image} src="https://res.cloudinary.com/dtr9micp0/image/upload/v1599462699/smile_mknjcs.jpg"/>

						<p>🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈</p>
					</div>
				</li>
			</ul>
		</div>
		
	);
};
