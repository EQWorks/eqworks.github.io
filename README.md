# Company Website

EQ Works company website.

- **Production URL:** https://eqworks.com
- **Staging URL:** https://eqworks-staging.netlify.app/

---

## Blog

There is a "blog" aspect to this website. This is where we post **Press Releases**, **Case Studies**, **Insights**, and more. To do that, we are using the Headless CMS platform [Contentful](https://www.contentful.com/). We create the content on Contentful, and then leverage Contentful's [Content Delivery API](https://www.contentful.com/developers/docs/references/content-delivery-api/) to request and render that content. Byebye WordPress 👋

For contributing content, please visit this [Google Drive folder containing guides and walkthroughs](https://drive.google.com/drive/folders/1IVVPuNTpHZMi1OjolZkVtkQiJ1bQPKgw?usp=sharing).

---

## Forms

This website uses [Formspree](https://formspree.io/) to handle form submissions.

---

## Maps

This website uses [Mapbox](https://www.mapbox.com/) to embed interact maps.

---

## Development

This website is built using the [Next.js](https://nextjs.org/) framework.

### Local development

1. Ensure your environment has [Git](https://git-scm.com/), [Node.js](https://nodejs.org/en/), and [npm](https://www.npmjs.com/) installed.
2. Clone repository, run `git clone https://github.com/EQWorks/eqworks.github.io.git`.
3. Install dependencies, run `npm i`.
4. Start the website in development mode, run `npm run dev`.
5. View website at http://localhost:3000.

### Development workflow

1. Update the `origin/master` reference, run `git fetch --prune && git pull`.
2. Checkout to the `staging` branch, run `git checkout staging`.
3. Checkout to a `feature-branch` (this is where you can make your changes), run `git checkout -b [feature-branch]`.
4. Once your `feature-branch` is ready to be added to the website, request a PR to merge your `feature-branch` into the `staging` branch.
5. Once your `feature-branch` is accepted and merged into the `staging` branch, head over to our [staging preview URL](https://eqworks-staging.netlify.app/) to test your feature, and ensure everything is working.
6. Once the [staging preview URL](https://eqworks-staging.netlify.app/) has been tested and everything is working, you can then request a PR to merge the `staging` branch into the `master` branch.
7. Once the staging branch is accepted and merged into the master branch, head over to our [production URL](https://eqworks.com) to test, and ensure everything is working. **Important:** We do not delete the `staging` branch after merging with `master`. This way our [staging preview URL](https://eqworks-staging.netlify.app/) is preserved, and we can add new features to the `staging` after merging, enabling us to easily repeat the cycle.
8. Rinse and repeat!

### Git branch diagram

```
PRESENT
| |
| | <- staging (retained for future feature branches to be created)
| |
|\|<- staging (merged into master but not deleted after)
| |
| |\<- feature-branch  (merged into staging and deleted after)
| | |
| | |<- feature-branch (your feature branch where you work on your code)
| |/
| |
| |<- staging (this represents the staging website, where we all branch our features off of)
|/
|<- master (this represents the live website)
PAST
```

---

## Staging

We are hosting the staging website using [Netlify](https://www.netlify.com/), a static website hosting platform. The staging website is used for internal preview and testing of the website before deploying the changes to production.

When `feature-branches` are merged into the `staging` branch, this triggers Netlify to build and export the website to the [staging preview URL](https://eqworks-staging.netlify.app/).

---

## Production

We are hosting the live website using [GitHub Pages](https://pages.github.com/). When the `staging` branch is merged into the `master` branch, this triggers a workflow that builds and exports the website to the `gh-pages` branch. This branch is used for production, and it is where the [live website](https://eqworks.com) is published.

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
