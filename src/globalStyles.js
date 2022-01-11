import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
	scroll-behavior: smooth;
	overflow-x: hidden;

	/* dark shades of primary color*/
	--clr-primary-1: hsl(215, 91%, 18%);
	--clr-primary-2: hsl(216, 92%, 21%);
	--clr-primary-3: hsl(216, 92%, 24%);
	--clr-primary-4: hsl(216, 93%, 27%);
	/* primary/main color */
	--clr-primary-5: hsl(216, 92%, 30%);
	/* lighter shades of primary color */
	--clr-primary-6: hsl(216, 67%, 37%);
	--clr-primary-7: hsl(216, 50%, 44%);
	--clr-primary-8: hsl(216, 39%, 51%);
	--clr-primary-9: hsl(216, 39%, 58%);
	--clr-primary-10: hsl(216, 39%, 65%);
	/* darkest grey - used for headings */
	--clr-grey-1: hsl(209, 61%, 16%);
	--clr-grey-2: hsl(211, 39%, 23%);
	--clr-grey-3: hsl(209, 34%, 30%);
	--clr-grey-4: hsl(209, 28%, 39%);
	/* grey used for paragraphs */
	--clr-grey-5: hsl(210, 22%, 49%);
	--clr-grey-6: hsl(209, 23%, 60%);
	--clr-grey-7: hsl(211, 27%, 70%);
	--clr-grey-8: hsl(210, 31%, 80%);
	--clr-grey-9: hsl(212, 33%, 89%);
	--clr-grey-10: hsl(210, 36%, 96%);
	--clr-white: #fff;
	--clr-red-dark: hsl(360, 67%, 44%);
	--clr-red-light: hsl(360, 71%, 66%);
	--clr-green-dark: hsl(125, 67%, 44%);
	--clr-green-light: hsl(125, 71%, 66%);
	--clr-black: #222;

	--transition: all 0.3s linear;
	--spacing: 0.1rem;
	--radius: 0.25rem;
	--light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
	--dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);

	--max-width: 1170px;


	/* font-families */
	--ff-serif: "Bellefair", serif;
	--ff-sans-cond: "Barlow Condensed", sans-serif;
	--ff-sans-normal: "Inter", sans-serif;
}

*,
::after,
::before {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

html {
  --fs-h1: 1.8rem;
  --fs-h2: 2rem;
  --fs-h3: 1.4rem;
  --fs-h4: 1.2rem;
	--fs-nav: 1.4rem;
  --fs-p: 1.2rem;
  --fs-p-home: 1.7rem;
  --fs-p--slider: 1rem;
  --fs-p--card: 1rem;
  --fs-p--footer: 1rem;
  --font-size-small: 1rem;
  --font-size-medium: 1.25rem;

  --width: 90vw;
  --width: 100%;

  @media (min-width: 800px) {
    --fs-h1: 3rem;
    --fs-h2: 2.5rem;
    --fs-h3: 2rem;
    --fs-h4: 1.25rem;
		--fs-nav: 1.5rem;
    --fs-p: 1.5rem;
    --fs-p-home: 2rem;
    --fs-p--slider: 1.3rem;
    --fs-p--card: 1.125rem;
    --fs-p--footer: 1.125rem;
    --font-size-small: 1.25rem;
    --font-size-medium: 1.5rem;

    --width: 95vw;
    --width: 100%;
    }
}

body {
  font-family: "Barlow Condensed", sans-serif;
  background: #aba5a9;
  color: var(--clr-grey-2);
  font-size: var(--font-size-small);
  min-height: 100vh;
  width: 100vw;
  overflow-x: hidden;
}

h1 {
	letter-spacing: var(--spacing);
	text-transform: capitalize;
  font-weight: 500;
	line-height: 1.25;
	font-size: var(--fs-h1);
	text-shadow: 0 0 25px rgba(0, 0, 0, 1);
  color: var(--clr-white);
	max-width: 30ch;
	z-index: 5;
}
h2,
h3,
h4 {
	letter-spacing: var(--spacing);
	text-transform: capitalize;
	line-height: 1.25;
	margin-bottom: 0.75rem;
	color: var(--clr-primary-5);
}
h2 {
  font-size: var(--fs-h2);
}
h3 {
  font-size: var(--fs-h3);
}
h4 {
  font-size: var(--fs-h4);
	color: var(--clr-primary-6);
}
p {
	font-size: var(--fs-p);
	margin-bottom: 1rem;
	color: var(--clr-grey-5);
  line-height: 1.2;
}
li {
  font-size: var(--fs-p);
	letter-spacing: 1px;
}

img,
picture {
	max-width: 100%;
	display: block;
}

input,
button,
textarea,
select {
	font: inherit;
}

button {
	background-color: var(--clr-primary-5);
	color: var(--clr-white);
	padding-inline: 0.7em;
	padding-block: 0.3em;
	border: 1px solid var(--clr-white);
	outline: var(--clr-primary-5);
	text-transform: capitalize;
	letter-spacing: 1px;
	font-weight: 400;
	cursor: pointer;
	transition: var(--transition);
	margin-top: 0.5em;
}

button:hover {
	color: var(--clr-primary-5);
	background-color: var(--clr-white);
	border-color: var(--clr-primary-5);
}

ul {
	list-style-type: none;
}
a {
	text-decoration: none;
	color: inherit;
	cursor: pointer;
}

main {
	width: var(--width);
	margin: 0 auto;
	max-width: var(--max-width);
	background-color: var(--clr-white);
	padding-block: 4.5em;
	overflow-x: hidden;
}

/*
=============== 
Layout
===============
*/
main {
	display: grid;
	grid-template-areas: "hero" "middle" "bottom";
	row-gap: 2.5em;

	@media screen and (min-width: 890px) {
	grid-template-rows: auto minmax(25vh, min-content) auto;
}
}

.home__content,
.about__content,
.contact__content,
.services .toolbar,
.restoration__content,
.partnership__content {
	grid-area: middle;
}

.home__slider,
.about__management,
.services__outlet,
.restoration__bottom,
.partnership__slider {
	grid-area: bottom;
}

.restoration__content,
.partner__content {
	display: grid;
	grid-template-areas:
		"title"
		"text"
		"card";
	gap: 2em;
	align-items: center;
}

.restoration__content-header,
.partner__content-header {
	grid-area: title;
}
.restoration__content-text,
.partner__content-text {
	grid-area: text;
}
.restoration__card,
.partner__card {
	grid-area: card;
	display: flex;
	align-items: flex-end;
	margin-inline: auto;
}
@media screen and (min-width: 800px) {
	.restoration__content,
	.partner__content {
		grid-template-areas:
			"title card"
			"text card";
	}
}
/* CLASSES */
.container {
	max-width: 90%;
	margin-inline: auto;
}

@media screen and (min-width: 992px) {
	.container {
		width: 900px;
	}
}

.react-icons {
	font-size: 1em;
	cursor: pointer;
	z-index: 3;
	color: inherit;
}
.react-icons--lg {
	font-size: 1.5em;
	z-index: 3;
	color: inherit;
}
.react-icons--xl {
	font-size: 2.2em;
	z-index: 3;
	color: inherit;
}

.react-icons--lg path {
	stroke: inherit;
}

/*
=============== 
Footer
===============
*/
footer {
	background-color: var(--clr-primary-10);
	color: var(--clr-grey-10);
	position: relative;
	bottom: 0;
}

.footer__box > * {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.footer__services ul,
.footer__contact ul,
.footer__opening ul {
	display: grid;
	grid-template-columns: 1fr;
	align-items: center;
	row-gap: 0.2em;
}

footer .react-icons--lg,
footer .react-icons--xl,
footer .react-icons {
	margin-right: 0.3em;
}

footer .react-icons path,
footer .react-icons--lg path,
footer .react-icons--xl path {
	color: var(--clr-primary-5);
	stroke: var(--clr-primary-5);
}

.footer__logo {
	grid-area: logo;
}
.footer__address {
	grid-area: address;
}
.footer__address li {
	max-width: 18ch;
}
.footer__services {
	grid-area: services;
}
.footer__contact {
	grid-area: contact;
}
.footer__opening {
	grid-area: opening;
}
.footer__social {
	grid-area: social;
}
.footer__social ul {
	display: flex;
}
.footer-logo {
	height: 60px;
}

.footer__attribution {
	position: absolute;
	bottom: 0;
	right: 0;
	left: 0;
	text-align: center;
	font-size: 0.875em;
}

.footer__attribution a {
	color: var(--clr-primary-6);
}

@media screen and (min-width: 500px) {
	.footer__services ul {
		text-align: left;
	}
}

@media screen and (min-width: 900px) {
	.footer__box {
		grid-template-areas:
			"logo address address services "
			"social contact opening services";
	}

	.footer__address li {
		max-width: 35ch;
	}

	.footer__services ul {
		grid-template-columns: repeat(2, 1fr);
		column-gap: 1.5em;
		row-gap: 0;
	}
}

`;

export default GlobalStyle;
