import { h, Component } from 'preact';
// import { Link } from 'preact-router';
import style from './style.less';

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				<h1>25 Years of Joy</h1>
				<nav>
					{/* <Link href="/">Home</Link> */}
					{/* <Link href="/profile">Me</Link>
					<Link href="/profile/john">John</Link> */}
				</nav>
			</header>
		);
	}
}
