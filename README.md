After losing yet another game to OGS timeouts, I decided to take decisive action.

This script can be installed in ViolentMonkey or some such similar browser addon. It essentially adjusts the warning timers by 2 seconds. In other words, when the OGS timer has 5 seconds remaining, you will instead hear the warning for 3 seconds.

## To use:

* Install some browser addon that enables monkey-patching. I went with [ViolentMonkey](https://github.com/violentmonkey/violentmonkey).
* Add [the script](https://raw.githubusercontent.com/rooklift/ogs_timer_adjuster_monkey/main/script.js) to it. (You could also install via URL.)
* In OGS, make sure your settings look as follows, then restart the browser...

![Settings](https://user-images.githubusercontent.com/16438795/185694344-e90a28e2-482c-42bb-94ff-92bb3a4f4507.png)

## Note

* I decided to suppress all warnings above 10 seconds (it's troublesome to start the countdown at exactly 10 otherwise). You must choose some setting above 10 seconds in order to actually start at 10 (for example, 15 seconds in the screenshot above).
* You should use the setting which counts *DOWN*.

## Technical notes

In OGS there is a global object called `sprite_packs` which, among other things, contains timing data for the OGS sound files. Each sound file for the countdowns contains 61 numbers (0 through 60) and the timing data allows OGS to play the right part of the file at the right time.

The script works by adjusting the timing data, so that the sound for (e.g.) the 6 second warning plays when there are 8 seconds remaining.

If your settings ask to countdown from 10 seconds, you will hear it start at "8". For that reason, I recommend choosing 15 seconds. Obviously though, that would mean you'd hear warnings starting at "13" (really 15), which would be strange. To prevent that, I suppress all sounds above "10" (really 12) seconds.
