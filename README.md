# Lingua Australis website

A one-page static site: `index.html` (content), `styles.css` (look), `script.js` (menu + form), `images/`.

## 1. Connect the contact form (Formspree)

1. Sign up at https://formspree.io with **linguaaustralis.espanol@gmail.com** (submissions go to the account's email).
2. Create a new form. Formspree gives you an endpoint like `https://formspree.io/f/abcdwxyz`.
3. In `index.html`, search for `YOUR_FORM_ID` and replace it with your ID (e.g. `abcdwxyz`).

Until then, the form shows a "not connected yet" message pointing people to WhatsApp/Instagram.

## 2. Put it on GitHub Pages

1. Create a new public repository on GitHub (e.g. `lingua-australis`).
2. Upload everything in this folder (keep the `images` folder as is): **Add file → Upload files**, drag it all in, commit.
3. Go to **Settings → Pages**. Under "Build and deployment", choose **Deploy from a branch**, branch `main`, folder `/ (root)`, and save.
4. After a minute the site is live at `https://YOUR-USERNAME.github.io/lingua-australis/`.

Custom domain later: buy the domain, then add it under **Settings → Pages → Custom domain** and follow GitHub's DNS instructions.

## 3. Showing hidden parts

Everything hidden is wrapped in HTML comments in `index.html`. Search for these labels:

| What | Search for | How to show it |
|---|---|---|
| Prices (5 spots) | `PRICE (hidden)` | Delete the `<!-- PRICE ...` line and the `-->` line around the price, then replace `US$ 00` with the real price |
| Workshops section | `WORKSHOPS SECTION (hidden)` | Delete the start line and the matching `END WORKSHOPS SECTION` line |
| Workshops nav link | `WORKSHOPS NAV LINK` | Remove the comment markers |
| Workshops form option | `WORKSHOPS OPTION` | Remove the comment markers |
| Testimonials section | `TESTIMONIALS SECTION (hidden)` | Delete the start line and the matching `END TESTIMONIALS SECTION` line |
| Testimonials nav link | `TESTIMONIALS NAV LINK` | Remove the comment markers |

Note: HTML comments can't be nested, so don't add new `<!-- -->` comments *inside* a hidden block.

## 4. Common edits

- **Colors and fonts:** top of `styles.css`, in the `:root` block.
- **Text:** edit directly in `index.html`; each section has a labeled header comment.
- **Photos:** replace a file in `images/` with one of the same name (square photos work best for polaroids; the About photo is 4:5).
- **WhatsApp number:** search `5491127965941` (appears 3 times).

## Fonts

The brand guide's Worker and Handsome aren't free web fonts, so the site uses close free stand-ins from Google Fonts: **Saira** (for Worker) and **Dancing Script** (for Handsome). **Playfair Display** is used as specified.
