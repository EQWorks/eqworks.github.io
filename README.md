# Company Website

EQ Works company website.

---

## Blog

There is a "blog" aspect to this website. This is where we post Press Releases, Case Studies, Insights, and more. To do that, we are using the Headless CMS platform [Contentful](https://www.contentful.com/). We create the content on Contentful, and then leverage Contentful's [Content Delivery API](https://www.contentful.com/developers/docs/references/content-delivery-api/) to request and render that content. Byebye WordPress 👋

For contributing content, please visit this [Google Drive folder containing guides and walkthroughs](https://drive.google.com/drive/folders/1IVVPuNTpHZMi1OjolZkVtkQiJ1bQPKgw?usp=sharing).

---

## Forms

This project uses [Formspree](https://formspree.io/) to handle form submissions.

---

## Maps

This project uses [Mapbox](https://www.mapbox.com/) to embed interact maps.

---

## Development

This website was built using the [Next.js](https://nextjs.org/) framework.

Next.js is built around the concept of pages. A page is a [React Component](https://reactjs.org/docs/components-and-props.html) exported from a `.js`, `.jsx`, `.ts`, or `.tsx` file in the pages directory.

1. Ensure your environment has [Git](https://git-scm.com/), [Node.js](https://nodejs.org/en/), and [npm](https://www.npmjs.com/) installed.
2. Clone repository, run `git clone https://github.com/EQWorks/eqworks.github.io.git`.
3. Install dependencies, run `npm i`.
4. Start the website in development mode, run `npm run dev`.
5. View website at http://localhost:3000.

---

## Production

We are hosting the website using [GitHub Pages](https://pages.github.com/). When changes are merged into the `master` branch, this will trigger a workflow that builds and exports the website to the `gh-pages` branch. This branch is used for production, and it is where the website is being published.

To host this website anywhere, you can do the following:

1. Follow the first 3 steps in the **Development** section.
2. Create an optimized production build, run `npm run build`.
3. Start the website in production mode, run `npm run start`.
4. View website at http://localhost:3000.

You can also check out the [Next.js documentation on deployment](https://nextjs.org/docs/deployment) for additional info.

---

## Guidelines

In order to achieve a high level of quality and maintain consistency throughout, we adhere to the guidelines laid out in this section.

### Accessibility

We are committed to comply with [WCAG 2.1 level AA](https://www.w3.org/TR/WCAG21/). We will be using this [WCAG 2.1 quick reference guide](https://www.w3.org/WAI/WCAG21/quickref/?currentsidebar=%23col_customize&showtechniques=126%2C127%2C128%2C129%2C136%2C144%2C145%2C146%2C147%2C148%2C149%2C1410%2C1411%2C1412%2C1413%2C211%2C212%2C214%2C221%2C222%2C223%2C224%2C225%2C226%2C231%2C232%2C233%2C241%2C242%2C243%2C244%2C245%2C246%2C247%2C248%2C249%2C2410%2C251%2C252%2C253%2C254%2C255%2C256%2C311%2C312%2C313%2C314%2C315%2C316%2C321%2C322%2C323%2C324%2C325%2C331%2C332%2C333%2C334%2C335%2C411%2C412%2C413&levels=aaa#top) set to level AA compliancy as our auditing guide for design and development iterations.

### Code Formatting

All code must formatted to the [Prettier](https://prettier.io/) configuration file.

- Check code format, run `npm run syntax-check`.
- Format code to Prettier configuration, run `npm run syntax-format`.

### Components

Order element attributes alphabetically. For example:

```jsx
<Smile aria-label='smiley face' role='img' />
```

### Images

This website uses [WebP](https://developers.google.com/speed/webp) as the image format for better compression and sending less down the wire to clients. We do keep a "fallback" file of every image to ensure maximum browser compatibility. See the `ImgWebP` component located in `/components/shared/img-webp.js` for how it works.

To convert any image type (`.png`, `.jpg`, etc.) to the `.webp` format, you can do the following (or follow [this tutorial](https://www.smashingmagazine.com/2018/07/converting-images-to-webp/#:~:text=To%20export%20an%20image%20to,WEBP%E2%80%9D%20in%20the%20format%20dropdown.&text=After%20you%20make%20your%20selection,image%20to%20be%20exported%20to)):

1. Install the webp CLI, run `brew install webp`.
2. Convert the images you want:

- Update one image, run `cwebp -q 75 image.png -o image.webp`
  - The `-q 75` flag refers to `quality of 75%`. Meaning the image will be reduced by 25% in "perceivable" quality.
- Update all images of same extension in a directory, run `find ./ -type f -name '*.png' -exec sh -c 'cwebp -q 75 $1 -o "${1%.png}.webp"' _ {} \;`.
  - Change `.png` in both instances to any other image format (e.g. `.jpg`).

### Styling

- Styling for this website is using [styled-component](https://styled-components.com/).
- Order selectors alphabetically. For example: `a {} h1 {} p {}`.
- Order declaration properties alphabetically, but ignore vendor prefixes (`-webkit`, `-moz`, `-o`, `-ms`). Meaning `-webkit-box-shadow` should be treated as starting with the letter `b`.
- Order action selectors alphabetically.
- Place `@media` declarations at the end of properties.
- For example:

```jsx
import styled from 'styled-components'

const sectionStyled = styled.section`
  /* declaration-property: declaration-value */
  -webkit-box-shadow: none;
  box-shadow: none;
  display: inline-block;
  font-family: ${({ theme }) => theme.font.copy.name}, sans-serif;
  font-weight: ${({ theme }) => theme.font.copy.regular};
  text-align: center;
  a {
    text-decoration: none;
  }
  p {
    color: ${({ theme }) => theme.color.white};
    &:focus {
      background-color: #790100;
      color: ${({ theme }) => theme.color.black};
    }
    @media ${({ theme }) => theme.breakpoint.md} {
      color: ${({ theme }) => theme.color.black};
    }
  }
  .item {
    border: 1px solid color: ${({ theme }) => theme.color.greyLight};
  }
`
```

---

## Contact

Have any questions, concerns, or suggestions? Why not send the Creative team an email ([creativestudio@eqworks.com](mailto:creativestudio@eqworks.com)) 😊
