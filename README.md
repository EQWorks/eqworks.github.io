# Company Website

EQ Works company website.

- Production: <https://www.eqworks.com>
- Staging deployment preview: <https://eqworks.github.io/>
- Accounts Holder: creativestudio@eqworks.com

## Blog

There is a "blog" aspect to this website, where we post **Press Releases**, **Case Studies**, **Insights**, and more. To do that, we are using the Headless CMS platform [Contentful](https://www.contentful.com/). We create the content on Contentful and then leverage Contentful's [Content Delivery API](https://www.contentful.com/developers/docs/references/content-delivery-api/) to request and render that content. Byebye WordPress 👋

Whenever new content on Contentful is either published or unpublished, this will send out a webhook to this repository (see the [deploy-to-production workflow file](.github/workflows/deploy-to-production.yml)) that will trigger a rebuild of the website. This allows for the website to remain static while maintaining access to the latest content from Contentful. The GitHub account authenticating the GitHub webhook is the CreativeStudioEQ account.

You can visit this [Google Drive folder](https://drive.google.com/drive/folders/1IVVPuNTpHZMi1OjolZkVtkQiJ1bQPKgw?usp=sharing) to learn about how to add content through Contentful.

## Development

This website uses the [Next.js](https://nextjs.org/) framework.

### Local development

1. Ensure your environment has [Git](https://git-scm.com/), [Node.js](https://nodejs.org/en/) (use the version recommended by `.nvmrc`, ideally through [nvm](https://github.com/nvm-sh/nvm)), and [npm](https://www.npmjs.com/) installed.
2. Clone repository, run `git clone https://github.com/EQWorks/eqworks.github.io.git`.
3. Install dependencies, run `npm i`.
4. Start the website in development mode, run `npm run dev`.
5. View the website at http://localhost:3000.

### Development workflow

1. Update the `origin/main` reference, run `git fetch --prune && git pull`.
2. Checkout to a `<feature-branch>` (this is where you can make your changes), run `git checkout -b <feature-branch>`.
3. Once your `<feature-branch>` is ready to be added to the website, open a pull request (PR) to merge your `<feature-branch>` into the `main` branch.
4. Upon review (ideally by other team members) and merge, it will trigger a staging build, you can monitor the status in the repo's Actions tab.
5. Verify the [staging deployment](https://eqworks.github.io) is working.
6. [Make a release](https://github.com/EQWorks/eqworks.github.io/releases) by filling in `Tag version` with the convetion of `vX.Y.Z` where `X.Y.Z` may follow the [semantic versioning] practice. This will trigger a production build (through Netlify), and generate a release notes based on commit messages automatically.
7. Rinse and repeat!

## Guidelines

To achieve a high level of quality and maintain consistency throughout, we adhere to the guidelines laid out in this section.

### Accessibility

We are committed to comply with [WCAG 2.1 level AA](https://www.w3.org/TR/WCAG21/). We will be using this [WCAG 2.1 quick reference guide](https://www.w3.org/WAI/WCAG21/quickref/?currentsidebar=%23col_customize&showtechniques=126%2C127%2C128%2C129%2C136%2C144%2C145%2C146%2C147%2C148%2C149%2C1410%2C1411%2C1412%2C1413%2C211%2C212%2C214%2C221%2C222%2C223%2C224%2C225%2C226%2C231%2C232%2C233%2C241%2C242%2C243%2C244%2C245%2C246%2C247%2C248%2C249%2C2410%2C251%2C252%2C253%2C254%2C255%2C256%2C311%2C312%2C313%2C314%2C315%2C316%2C321%2C322%2C323%2C324%2C325%2C331%2C332%2C333%2C334%2C335%2C411%2C412%2C413&levels=aaa#top) set to level AA compliancy as our auditing guide for design and development iterations.

### Code Formatting

All code must format to the [Prettier](https://prettier.io/) configuration file.

- Check code format, run `npm run lint`.
- Format code to Prettier configuration, run `npm run lint:format`.

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

## Services

- [Contentful](https://www.contentful.com/)
- [Formspree](https://formspree.io/)
- [Mapbox](https://www.mapbox.com/)
- [Netlify](https://www.netlify.com/)

## Contact

For questions or others, start a thread in the `#infrastructure` channel on Slack to get help or a discussion going.
