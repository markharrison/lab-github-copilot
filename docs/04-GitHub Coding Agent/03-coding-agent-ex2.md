---
sidebar_label: "Example JS"
slug: /caexample2
---

# GitHub Copilot Coding Agent

## Example - Create Audio JS library

:::warning
This document is work in progress
:::

- Create Issue

- Assign to Copilot

```
I need an Audio JavaScript library for use in simple web games. Called AudioMark.

create index.html - for a test page.
create test.js - for test JavaScript used by index.html ... don't want to pollute the main library with test functionality
create audio.js - for the audio library . export class AudioMark

License MIT

Provide detailed documentation how to use the library in the audiomark.md
Overview documentation in readme.md

errors should be displayed using alerts()
---
functionality need for the audio library to include :
Use Web Audio API ... no fall back is needed. Will only be using modern browsers . Definitely Microsoft Edge - probably others.
Needs to be able to play the following:
- SFX (Sound Effects): Short, low-latency, often triggered frequently. fast, fire-and-forget.
- Music: Longer, streamed tracks with full playback controls.
All sounds must be able to be played simultaneously
Need support for pre-loading audio files.   Also support for unloading.
Support for volume - values from 0 (off) to 100 (full volume) (user interface config of required volume is outside of this library)
- master volume / music volume / sfx volume
Can change background music with a nice transition blend (music 1 volume drops / music 2 volume increases to create a transition).
Handle any music block by some browsers - user needs to interact. Audio Context Resume Handling ?
Need to support MP3 and WAV. No other codecs needed.
support for Pause / Resume / Stop
support for looping.
support for fade-in/fade-out
support for transition from one music track to another music track.   Nicely blended.
any clean-up - if needed .
---
functionality need for the test page to include :
nice looking UI experience
initialise audiomark library
load music1 and music2 files - file selectors to upload from disk
load sfx1, sfx2, sfx3 files - file selectors to upload from disk
unload files

play music1 / music2 files
play sfx1, sfx2, sfx3 files ..
start / stop play
pause / resume
clean-up
test loop
test simultaneous playing
Switch music track being played - enable smooth transitions.  Able to adjust transition time (1 to 10 seconds)
volume controls master / music / effects
Detailed action log


```
