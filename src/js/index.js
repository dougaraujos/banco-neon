import { tns } from "tiny-slider/src/tiny-slider.module";


const carousel = tns({
	arrowKeys: true,
	container: '.carousel',
	controls: false,
	items: 1,
	responsive: {
		1220: {
			gutter: 50,
			edgePadding: 330
		}
	}
});