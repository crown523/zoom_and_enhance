# Zoom and Enhance

[Zoom and Enhance](https://zoomandenhance.herokuapp.com/) is an online solution for faster, more efficient note-taking during online lectures in the time of Covid-19, built by and for students.

_This project is created by Livia Zhu, Anna Wei, and Kyle Liang for the 2020 Hack@Home hackathon._

## Inspiration
If you’re a student right now (and we are), you know how difficult it is to watch lectures online, pay attention, and take notes. Zoom and Enhance is an accessible and convenient online platform that streamlines the note taking process for video lectures.

Powered by speech-speech-to-text technology and intelligent key-word identification, it automatically generates notes and helps identify key concepts. Zoom and Enhance also supports features like real-time highlighting of important information, manual styling through keyboard shortcuts, quick rendering, and exporting to markdown so that you can view your notes again at any time. It also supports speech-to-text in multiple languages so you can learn anytime, anywhere. Zoom and Enhance will help you zoom into your lectures and enhance your understanding.

## What it does
You sit down for your online lecture. If you have a zoom meeting ID, you'll put that in. If the lecture is streaming from a different site, you'll input the URL. Give the app permission to use your microphone, hit the start listening button, and the app will begin to transcribe your lecture. During the lecture, you can augment your automatically generated notes in various ways: professor talking about something important? Hit the "Mark as Important" button and the app will begin highlighting words from that point until you hit the button again. Want to bold, italicize, or manually highlight sections of the notes? Select them in the text editor and click the corresponding button, or use the keyboard shortcuts! At any time, you can hit render to view your notes with the proper styling. If you want a quick recap of the concepts covered, click the "identify key terms" button and a list of important terms appears instantly for your convenience. Finally, once your lecture's over and your notes are finalized, you can export your notes to a markdown file and download it to your machine, which you can then put into any interpreter to see your notes again anytime!

## How we built it
We utilized Vue.js to make a single-page app, styled using Vue Bootstrap, integrated the Web Speech API for the speech to text functionality, and utilized the RAKE.js package for rapid keyword extraction. We then deployed our app using Heroku.

## What's next for Zoom and Enhance
Our team has many ideas for future features for Zoom and Enhance. One direction is richer support for key term identification, particularly localization of the identified terms within the text. Furthermore, the keyword extraction algorithm can be modified to take the academic relevance of words into account to more intelligently tailor this functionality to the academic context. Another future direction we have in mind is matching sections of notes to the corresponding sections of the video through timestamp, so that students can supplement their notes with the specific video clip for more integrated studying.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run start
```
