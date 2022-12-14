// ==UserScript==
// @name        OGS Timer Adjuster Monkey
// @namespace   Violentmonkey Scripts
// @match       https://online-go.com/*
// @grant       none
// @version     1.0.2
// @author      Rooklift
// @description Adjusts the OGS audio timer by 2 seconds
// @downloadURL https://raw.githubusercontent.com/rooklift/ogs_timer_adjuster_monkey/main/script.js
// @homepageURL https://github.com/rooklift/ogs_timer_adjuster_monkey/
// ==/UserScript==

if (!window.ogs_timer_adjuster_monkey) {

	window.ogs_timer_adjuster_monkey = () => {

		// Constantly checks if each object is as we desire, in case it somehow
		// gets changed at some random time. Maybe this is a bit too tryhard?

		if (typeof window.sprite_packs === "object") {

			for (let key of Object.keys(window.sprite_packs)) {

				if (!key.includes("numbers")) {
					continue;
				}

				let defs = window.sprite_packs[key].definitions;
				let silence = defs["silence"];     // Something like [0, 50]

				if (defs[1][0] !== silence[0] || defs[1][1] !== silence[1]) {

					console.log(`Adjusting window.sprite_packs["${key}"].definitions`);
					
					// Suppress all warnings for 13 seconds and higher
					for (let n = 60; n >= 13; n--) {
						defs[n] = Array.from(silence);
					}
					
					// Adjust warning sounds between 12 and 3 seconds to use the sounds for 10 to 1
					for (let n = 12; n >= 3; n--) {
						defs[n] = Array.from(defs[n - 2]);
					}
					
					// Suppress warnings for 2 and 1 seconds
					for (let n = 2; n >= 1; n--) {
						defs[n] = Array.from(silence);
					}

				}
			}
		}

		setTimeout(window.ogs_timer_adjuster_monkey, 1000);
	}

	window.ogs_timer_adjuster_monkey();
}
