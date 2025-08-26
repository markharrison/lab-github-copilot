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
---
functionality need for the audio library to include :
Use Web Audio API ... no fall back is needed. Will only be using modern browsers . Definitely Microsoft Edge - probably others.
Needs to be able to play the following:
-Back ground music - support for looping. Music files maybe several minutes long.
-Multiple short sounds for game effects.
All sounds must be able to be played simultaneously
Need support for pre-loading sounds
Support for volume - values from 0 (off) to 100 (full volume) (user interface config of required volume is outside of this library)
Can change background music with a nice transition blend (music 1 volume drops / music 3 volume increases to create a transition).
Handle any music block by some browsers - user needs to interact. Audio Context Resume Handling ?
Need to support MP3 and WAV. No other codecs needed.
support for Pause / Resume / Stop
support for fade-in/fade-out
any clean-up - if needed .
---
functionality need for the test page to include :
intialise audiomark library
load music1 and music2 files - file selectors to upload from disk
load sound1, sound2, sound2 files - file selectors to upload from disk
play music1 / music2 files
play sound1, sound2, sound2 files ..
start / stop play
pause / resume
cleanup
test loop
test simulataneous playing
Switch music track being played - enable smooth transitions.  Able to adjust transition time.
volume controls master / music / effects
Detailed action log

```
