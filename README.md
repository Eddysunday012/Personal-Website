# Ethan Domingo's Personal Website

My very own personal website!

<img width="1512" alt="Screenshot 2023-01-12 at 1 22 43 PM" src="https://user-images.githubusercontent.com/30426558/212184142-6a1f959e-a613-4a5f-895b-a27a0d0260a0.png">

## What is this?

In short, this is a personal website I have created that is designed to go hand in hand with my resume.

## Setting up

The fully functioning site can be found here through this [link](https://ethandomingo.com/):

https://eddysunday012-eddysunday012.vercel.app/

To run this on a local machine, follow these primary steps for setup

0. Have Python 3.6+ and Java 11+
1. Install Node.js (v16.18.1) and npm
2. Install Yarn: `npm install --global yarn`
3. Install npm dependencies: `yarn`

## Project Structure

This project uses [Turborepo](https://turborepo.org/) to help facilitate and create a hyper-modularized codebase. This means creating many local npm modules to build, iterate, and test features in complete isolation.

_NOTE_: Turborepo supports a monorepo structure, which is what the website's architecture is based off of. It is _extremely_ overkill for the needs of the current state of this project, however I modeled it this way in case for possible larger expansion in the future.

## Technologies

In no particular order:

- JavaScript
- React
- Chakra UI
- npm, yarn, turborepo
- Vitest
- Prettier (code styling)
