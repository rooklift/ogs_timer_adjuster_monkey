After losing yet another game to OGS timeouts, I decided to take decisive action.

This script can be installed in ViolentMonkey or some such similar browser addon. It essentially adjusts the warning timers by 2 seconds. In other words, when the OGS timer has 5 seconds remaining, you will instead hear the warning for 3 seconds.

## To use:

* Install some browser addon that enables monkey-patching. I went with [ViolentMonkey](https://github.com/violentmonkey/violentmonkey).
* Add [the script](https://github.com/rooklift/ogs_timer_adjuster_monkey/blob/main/script.js) to it.
* In OGS, make sure your settings look as follows, then restart the browser...

![Settings](https://user-images.githubusercontent.com/16438795/185694344-e90a28e2-482c-42bb-94ff-92bb3a4f4507.png)

## Note

* I decided to suppress all warnings above 10 seconds (it's troublesome to start the countdown at exactly 10 otherwise). You must choose some setting above 10 seconds in order to start at 10 (for example, 15 seconds in the screenshot above).
