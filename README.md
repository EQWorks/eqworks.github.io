# Company Website

EQ Works company website.

---

## Framework

This website was built using the [Next.js](https://nextjs.org/) framework.

Next.js is built around the concept of pages. A page is a [React Component](https://reactjs.org/docs/components-and-props.html) exported from a `.js`, `.jsx`, `.ts`, or `.tsx` file in the pages directory.

---

## Posts

This project renders [Markdown](https://en.wikipedia.org/wiki/Markdown) files as blog posts. If you are looking to add a new post, please do the following:

- Create your Markdown file (feel free to use the **Markdown file starter** below), and save it to the appropriate folder: `/posts/<YOUR_MARKDOWN_FILE>.md`.
  - When naming your Markdown file, please use this convention: `YYYY-MM-DD-shortened-post-title.md`. Replace the `YYYY-MM-DD` with the publishing date of that post.
  - Ensure your Markdown file has the appropriate meta data at the top: `title, excerpt, date, author, and category`.
- Save any images relating to your Markdown file to the appropriate folder: `/images/posts/<YOUR_IMAGE_FILE>.jpg`.
  - To reference your images, please use this convention: `![image alt text](/images/posts/<YOUR_IMAGE_FILE>.jpg "Image title")`.
- Once the site has been updated with your Markdown file (and image files, if required), you can then visit your post at this address: `https://www.eqworks.com/posts/<shortened-post-title>`.

### Markdown file starter

```
---
title: 'Your Post Title'
excerpt: 'Short line to summarize the post'
date: 'January 1, 2020'
author: 'EQ Works'
category: 'Press Releases'
---

This is a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

**This text will be bold**

*This text will be italicized*

The following will be a list:

- First
- Second
- Third

This will be an image:
![image alt text](/images/posts/<YOUR_IMAGE_FILE>.jpg "Image title")

This will be a divider:
---
```

---

## Development

- Ensure your environment has [Git](https://git-scm.com/), [Node.js](https://nodejs.org/en/), and [npm](https://www.npmjs.com/) installed.
- Clone repository, run `git clone https://github.com/EQWorks/cs-company-website.git`.
- Install dependencies, run `npm i`.
- Start Next.js in development mode, run `npm run dev`.
- View website at http://localhost:3000.

---

## Production

- We're not quite there yet, but here are some useful Next.js scripts:
  - Build website for production usage, run `npm run build`.
  - Start the Next.js production server, run `npm run start`.

---

## Guides

In order to achieve a high level of quality and maintain consistency throughout the entire project, we aim to adhere to the guides laid out in this section.

### Accessibility

We are committed to comply with [WCAG 2.1 level AA](https://www.w3.org/TR/WCAG21/). We will be using this [WCAG 2.1 quick reference guide](https://www.w3.org/WAI/WCAG21/quickref/?currentsidebar=%23col_customize&showtechniques=126%2C127%2C128%2C129%2C136%2C144%2C145%2C146%2C147%2C148%2C149%2C1410%2C1411%2C1412%2C1413%2C211%2C212%2C214%2C221%2C222%2C223%2C224%2C225%2C226%2C231%2C232%2C233%2C241%2C242%2C243%2C244%2C245%2C246%2C247%2C248%2C249%2C2410%2C251%2C252%2C253%2C254%2C255%2C256%2C311%2C312%2C313%2C314%2C315%2C316%2C321%2C322%2C323%2C324%2C325%2C331%2C332%2C333%2C334%2C335%2C411%2C412%2C413&levels=aaa#top) set to level AA compliancy as our auditing guide for design and development iterations.

### HTML

Order element attributes alphabetically. For example:

```html
<p aria-label="My label." className="my-class" id="my-id">Hello there.</p>
```

### CSS

- Styling for this project is written in [Sass](https://sass-lang.com/).
- All class naming must adhere to the [Block Element Modifier (BEM)](http://getbem.com/naming/) methodology.
- Order selectors alphabetically. For example: `a {} h1 {} p {}`.
- Order declaration properties alphabetically, but ignore vendor prefixes (`-webkit`, `-moz`, `-o`, `-ms`). Meaning `-webkit-box-shadow` should be treated as starting with the letter `b`.
- Order action selectors alphabetically.
- Place `@media` declarations at the end of properties.
- For example:

```scss
.main-content {
  /* declaration-property: declaration-value */
  -webkit-box-shadow: none;
  display: inline-block;
  font-family: 'FontRobotoBold', sans-serif;
  text-align: center;
  a {
    text-decoration: none;
  }
  p {
    color: $color-white;
    &:focus {
      background-color: #790100;
      color: $color-black;
    }
  }
  @media (max-width: $viewport-md) {
    font-size: 12px;
    padding: 14px 20px;
  }
  .main-content__sub-item {
    border: 1px solid $color-grey;
  }
}
```

### JavaScript

All JavaScript must formatted to the [Prettier](https://prettier.io/) configuration file.

- Check code format, run `npm run syntax-check`.
- Format code to Prettier configuration, run `npm run syntax-format`.

---

## Contact

Have any questions, concerns, or suggestions? Why not send the Creative team an email ([creativestudio@eqworks.com](mailto:creativestudio@eqworks.com)) :)
