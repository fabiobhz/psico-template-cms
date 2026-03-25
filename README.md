# Fagom Professional Template — Complete Setup Guide

> **No coding experience required.** This guide walks you through every step — from opening the template files for the first time to seeing your finished website live on the internet.

---

## Table of Contents

1. [What You Get](#1-what-you-get)
2. [What You Will Need](#2-what-you-will-need)
3. [Install Node.js (one-time setup)](#3-install-nodejs-one-time-setup)
4. [Open the Project on Your Computer](#4-open-the-project-on-your-computer)
5. [Install the Project Dependencies](#5-install-the-project-dependencies)
6. [Preview the Site Locally](#6-preview-the-site-locally)
7. [Customise Your Site with the CMS](#7-customise-your-site-with-the-cms)
   - [7.1 — Set Your Admin Password](#71--set-your-admin-password-important--do-this-before-publishing)
8. [Set Up EmailJS (Contact Form)](#8-set-up-emailjs-contact-form)
9. [Build the Site for Publishing](#9-build-the-site-for-publishing)
10. [Choose a Hosting Provider](#10-choose-a-hosting-provider)
11. [Upload Your Site](#11-upload-your-site)
12. [Register a Domain Name](#12-register-a-domain-name)
13. [Connect Your Domain to Your Hosting](#13-connect-your-domain-to-your-hosting)
14. [Final Checklist Before Going Live](#14-final-checklist-before-going-live)
15. [Replacing Images — Sizes & Formats](#15-replacing-images--sizes--formats)
16. [Frequently Asked Questions](#16-frequently-asked-questions)

---

## 1. What You Get

After purchasing this template you will receive a folder (ZIP file) containing:

```
psico-template-cms/
├── public/
│   └── assets/          ← Placeholder images (hero backgrounds, team photos)
├── src/                 ← All website source code
├── index.html           ← Main HTML file (edit only if instructed)
├── LICENSE.txt          ← Your single-use license
├── package.json         ← Project configuration
└── README.md            ← This guide
```

**What the template includes:**
- A complete, responsive professional website
- 6 colour palettes and 6 font pairings, switchable in seconds
- Built-in CMS panel at `/admin` — no external tools required
- Sections: Hero banner, About, Services, Team, Testimonials, Contact form, Footer
- Social media links in the footer
- Cookie consent banner (GDPR-ready)
- Privacy Policy page
- Contact form powered by EmailJS (free tier available)
- Dynamic SEO metadata (title, description, keywords)

---

## 2. What You Will Need

Before you start, make sure you have:

| What | Why | Cost |
|------|-----|------|
| A computer (Windows, Mac, or Linux) | To edit and build the site | — |
| An internet connection | To install tools and upload files | — |
| Node.js installed | To run the project locally and build it | Free |
| An EmailJS account | To make the contact form work | Free tier available |
| A hosting account | To put your site on the internet | ~$3–$15/month |
| A domain name | Your website address (e.g. yourbusiness.com) | ~$10–$15/year |

> **Tip:** If you already have a hosting account that includes a free domain, you may not need to buy a domain separately.

---

## 3. Install Node.js (one-time setup)

Node.js is a free tool that lets you run and build the website on your computer. You only need to install it once.

**Step 1** — Go to [https://nodejs.org](https://nodejs.org)

**Step 2** — Click the button labelled **"LTS"** (it says something like "Recommended for most users"). This downloads the installer.

**Step 3** — Open the downloaded file and follow the installer. Click **Next** on every screen and then **Install**. You do not need to change any settings.

**Step 4** — Verify the installation:
- On **Windows**: press `Windows key + R`, type `cmd`, press Enter. A black window opens.
- On **Mac**: press `Cmd + Space`, type `Terminal`, press Enter.

In that window, type the following and press Enter:

```
node --version
```

If you see something like `v20.11.0`, Node.js is installed correctly. ✅

---

## 4. Open the Project on Your Computer

**Step 1** — Unzip the template ZIP file. You should see a folder called `psico-template-cms` (or similar).

**Step 2** — Move that folder to a convenient location, such as your Desktop or Documents folder.

**Step 3** — Open your Terminal (Mac) or Command Prompt (Windows).

**Step 4** — Navigate to the project folder. Type the following, replacing the path with your actual location:

- **Windows example:**
  ```
  cd C:\Users\YourName\Desktop\psico-template-cms
  ```
- **Mac example:**
  ```
  cd /Users/YourName/Desktop/psico-template-cms
  ```

> **Shortcut (Mac & Windows):** Type `cd ` (with a space after), then drag and drop the project folder directly into the Terminal window. The path will be filled in automatically. Press Enter.

---

## 5. Install the Project Dependencies

The template uses several open-source libraries. You need to download them once before running the project.

In the Terminal (inside the project folder), type:

```
npm install
```

Press Enter and wait. You will see a lot of text scrolling by — this is normal. It may take 1–3 minutes depending on your internet connection.

When it finishes, you will see the cursor waiting for input again. ✅

> **Note:** This creates a folder called `node_modules` inside your project. Do not delete it.

---

## 6. Preview the Site Locally

Before making any changes, let's make sure everything works on your computer.

In the Terminal, type:

```
npm run dev
```

Press Enter. You will see something like:

```
  VITE v5.x.x  ready in 500ms

  ➜  Local:   http://localhost:8080/
  ➜  Network: http://192.168.x.x:8080/
```

**Step 1** — Open your web browser (Chrome, Firefox, Safari, etc.)

**Step 2** — Go to: `http://localhost:8080`

You should see the template website running on your computer. 🎉

**Step 3** — To access the CMS panel (where you customise everything), go to:
`http://localhost:8080/admin`

During local development, the admin panel is open without a password. You will set a password before publishing your site (see Section 7.1 below).

> **To stop the preview:** Go back to the Terminal and press `Ctrl + C`.

---

## 7. Customise Your Site with the CMS

The CMS (Content Management System) is a built-in panel that lets you change every piece of text, image, and setting on the site — without touching any code.

**Access the CMS:** While the site is running locally (`npm run dev`), go to `http://localhost:8080/admin` in your browser.

---

### 7.1 — Set Your Admin Password (important — do this before publishing)

The admin panel at `/admin` is protected by a password so that only you can access it on your live site. You define this password yourself before building the site.

**Step 1** — In your project folder, find the file called `.env.example`. Make a copy of it in the same folder and rename the copy to `.env` (remove the `.example` part entirely).

> **On Windows:** In File Explorer, make sure "File name extensions" is visible (View → check "File name extensions"). Then rename the file to `.env` — the name starts with a dot and has no extension.
>
> **On Mac:** Files starting with a dot are hidden by default. In Finder, press `Cmd + Shift + .` to show hidden files, then rename the copy.

**Step 2** — Open the `.env` file with a plain text editor (Notepad on Windows, TextEdit on Mac). You will see:

```
VITE_ADMIN_PASSWORD=your-strong-password-here
```

**Step 3** — Replace `your-strong-password-here` with your chosen password. For example:

```
VITE_ADMIN_PASSWORD=MyBusiness2026!
```

Save the file.

**Step 4** — Run `npm run build` (Section 9) to compile the password into your site. From this point on, anyone who visits `/admin` on your live site will be asked for this password.

> **Tips for a good password:**
> - Use at least 10 characters
> - Mix uppercase, lowercase, numbers, and symbols
> - Avoid obvious words like your business name or "password"
> - Write it down somewhere safe — if you forget it, you will need to update the `.env` file and rebuild

**How login works on the live site:**

1. You go to `yourdomain.com/admin`
2. A login screen appears asking for the password
3. You enter your password and click **Enter**
4. You are logged in for the duration of your browser session
5. To lock the panel, click the **Lock** button in the top-right corner of the admin header

> **Security note:** The password is compiled into the site's code during the build. It protects the admin from casual visitors and is appropriate for personal and small-business use. Do not use this password for any other accounts.

---

### How the CMS works

- Each section of the site (Hero, About, Services, etc.) has its own card in the CMS panel.
- Click a card to expand it and edit its content.
- After making changes, click the green **"Save section"** button at the bottom of that card.
- Use the floating **"Preview"** button (bottom-right corner) to open a live preview of your site in a new tab. It updates automatically after each save.
- When you are done with everything, use **"Export"** (top-right) to download your configuration as a backup file.

---

### Theme — Colors & Fonts

This section controls the overall look of the entire site.

**Color Palette** — Choose from 6 pre-designed palettes. Click any palette to preview it instantly. The hero background image also changes automatically to match.

**Font Pairing** — Choose from 6 curated font combinations. The preview shows how headings and body text will look.

> **Tip:** Try different combinations — changes are previewed in real time before you save.

---

### Hero — Banner

This is the large full-screen section at the top of the page.

| Field | What it does |
|-------|-------------|
| **Main title** | The largest text — typically your business or brand name |
| **Subtitle / Tagline** | The smaller text below the title — a short description or slogan |
| **Button text** | The label on the call-to-action button (e.g. "Get in touch") |
| **Button link** | Where the button scrolls to (e.g. `#contact`) |
| **Background image** | The image behind the text. Enter a URL or a file path (see Section 15 for sizes) |

> **Tip:** If you leave the background image as the default, it will automatically use the palette's matching SVG background.

---

### About

This section introduces your business or practice.

| Field | What it does |
|-------|-------------|
| **Section title** | The heading shown above the text |
| **Paragraph 1** | First paragraph of your introduction |
| **Paragraph 2** | Second paragraph |
| **Paragraph 3 (optional)** | Third paragraph — leave blank to hide it |

---

### Services / Specialties

This section lists what you offer.

| Field | What it does |
|-------|-------------|
| **Section title** | Heading above the cards (e.g. "Our Services") |
| **Subtitle (optional)** | Smaller text below the heading |
| **Service cards** | Each card has: an icon, a title, and a description |

**To change a service icon:** Click any of the icon name buttons (Heart, Brain, Star, etc.) inside the card to select it.

---

### Team / Professionals

This section shows the people behind your business.

| Field | What it does |
|-------|-------------|
| **Section title** | Heading above the team cards |
| **Subtitle (optional)** | Smaller text below the heading |
| **Member cards** | Each card has: Name, Title/Registration, Photo, Bio, WhatsApp number |

**Adding a team member:** Click "Add team member" at the bottom.

**Removing a team member:** Click the trash icon on the top-right of the card.

**Photo field:** Enter a URL (e.g. `https://yoursite.com/photo.jpg`) or a local path (e.g. `/assets/team-member.jpg`). See Section 15 for recommended image sizes.

**WhatsApp field:** Enter digits only, including the country code. Example for a US number: `12125551234`. Example for a Brazilian number: `5531999990000`. If left blank, the WhatsApp button is hidden.

---

### Reviews & Testimonials

This section shows client reviews. It is **automatically hidden** when no reviews are added — so if you prefer not to use it, simply leave it empty.

| Field | What it does |
|-------|-------------|
| **Section title** | Heading above the review cards |
| **Subtitle (optional)** | Smaller text below the heading |
| **Review cards** | Each card has: Reviewer name, Star rating (1–5), Review text, Source |

**How to add Google Reviews manually:**
1. Go to Google Maps and search for your business.
2. Click your listing, then go to the **Reviews** tab.
3. Copy the reviewer's name, star rating, and review text.
4. Paste into a new review card in the CMS.
5. Set the **Source** field to `Google` — the Google logo will appear automatically on the card.

---

### Contact & Form

This section controls the contact form labels and connects it to EmailJS (see Section 8).

| Field | What it does |
|-------|-------------|
| **Section title** | Heading above the form |
| **Subtitle (optional)** | Smaller text below the heading |
| **Name field label** | Label above the name input |
| **Email field label** | Label above the email input |
| **Team member selector label** | Label above the dropdown to choose a team member |
| **Message field label** | Label above the message textarea |
| **Submit button text** | Text on the send button |
| **EmailJS — Service ID** | From your EmailJS account (see Section 8) |
| **EmailJS — Template ID** | From your EmailJS account (see Section 8) |
| **EmailJS — Public Key** | From your EmailJS account (see Section 8) |

---

### Site, Navigation & Footer

**Identity**

| Field | What it does |
|-------|-------------|
| **Logo / navbar text** | Your brand name shown in the top navigation bar |
| **SEO title** | The text shown on the browser tab and in Google search results |
| **SEO description** | Short summary shown in Google search results (aim for 150–160 characters) |
| **SEO keywords** | Comma-separated keywords for search engines |

**Navigation**

Edit the label and link for each menu item. Links should start with `#` to scroll to a section (e.g. `#about`, `#contact`).

**Footer**

| Field | What it does |
|-------|-------------|
| **Footer text** | Copyright line at the bottom. Use `{year}` and it will be replaced with the current year automatically |
| **Privacy Policy link label** | The text of the Privacy Policy link |

---

### Social Media

Enter the full URL for each social network you want to display. Icons appear in the footer **only** when a URL is provided. Leave blank to hide.

Example:
- Instagram: `https://instagram.com/yourbusiness`
- Facebook: `https://facebook.com/yourbusiness`

---

## 8. Set Up EmailJS (Contact Form)

EmailJS is a free service that forwards messages from your contact form to your email inbox — without needing a server.

### Create a free EmailJS account

**Step 1** — Go to [https://www.emailjs.com](https://www.emailjs.com) and click **Sign Up**.

**Step 2** — Create an account with your email address.

**Step 3** — Verify your email address by clicking the link in the confirmation email.

---

### Connect your email account (create a Service)

**Step 1** — In the EmailJS dashboard, click **"Email Services"** in the left menu, then click **"Add New Service"**.

**Step 2** — Choose your email provider (Gmail, Outlook, Yahoo, etc.).

**Step 3** — Follow the on-screen instructions to connect your email account. EmailJS will ask you to log into your email provider and grant permission.

**Step 4** — Give the service a name (e.g. "My Website") and click **"Create Service"**.

**Step 5** — Copy the **Service ID** shown — it looks like `service_xxxxxxx`. You will need this later.

---

### Create an email template

**Step 1** — In the EmailJS dashboard, click **"Email Templates"** in the left menu, then click **"Create New Template"**.

**Step 2** — In the template editor, set up the email you will receive when someone fills in the contact form. Use the following variables — they will be replaced with the actual values from the form:

| Variable | Replaced with |
|----------|--------------|
| `{{professional}}` | The team member the client chose |
| `{{from_name}}` | The sender's name |
| `{{from_email}}` | The sender's email address |
| `{{message}}` | The message content |

**Example Subject:**
```
New message for {{professional}} from {{from_name}}
```

**Example Body:**
```
You have a new message via your website contact form.

From: {{from_name}}
Email: {{from_email}}
For: {{professional}}

Message:
{{message}}
```

**Step 3** — Click **"Save"**.

**Step 4** — Copy the **Template ID** shown — it looks like `template_xxxxxxx`.

---

### Get your Public Key

**Step 1** — In the EmailJS dashboard, click your account name (top-right), then **"Account"**.

**Step 2** — Under the **"API Keys"** section, copy your **Public Key** — it looks like a random string of letters and numbers.

---

### Enter the keys in the CMS

1. In the CMS, go to **"Contact & Form"**.
2. Scroll down to the **"EmailJS Configuration"** block.
3. Paste your **Service ID**, **Template ID**, and **Public Key** in the respective fields.
4. Click **"Save section"**.
5. Test the form using the Preview to make sure emails arrive in your inbox.

> **Free tier limit:** EmailJS free plan allows 200 emails per month. This is sufficient for most small businesses.

---

## 9. Build the Site for Publishing

Once you are happy with your content, you need to create the final production files to upload to your hosting.

In the Terminal (inside the project folder), type:

```
npm run build
```

Press Enter and wait (usually 30–60 seconds). When it finishes, a new folder called **`dist`** will appear inside your project folder. This `dist` folder contains your complete, ready-to-publish website.

> **Important:** Every time you make changes in the CMS and want to update your live site, you must run `npm run build` again and re-upload the `dist` folder to your hosting.

---

## 10. Choose a Hosting Provider

Web hosting is a service that stores your website files and makes them accessible on the internet. Here is a comparison of common options:

### Option A — Drag-and-drop hosting (easiest for beginners)

Services like **Netlify** (netlify.com) and **Vercel** (vercel.com) offer free plans where you simply drag your `dist` folder onto their website and your site is live in seconds. They also provide a free temporary domain (e.g. `yoursite.netlify.app`).

**Best for:** People who want the simplest possible setup.
**Cost:** Free for basic use.

### Option B — Traditional web hosting (cPanel)

Providers like **Hostinger**, **SiteGround**, **Bluehost**, or **GoDaddy** offer shared hosting plans. You upload your files using a built-in **File Manager** or via **FTP**. Most plans include a free domain for the first year.

**Best for:** People who already have a hosting account or prefer a traditional setup.
**Cost:** ~$3–$10/month.

### Option C — Cloud storage hosting

Services like **Cloudflare Pages**, **AWS S3 + CloudFront**, or **Google Cloud Storage** can host static websites. These are more technical to set up but very reliable and fast.

**Best for:** Users comfortable with more advanced tools.

> **Recommendation for beginners:** Use **Option A** (Netlify or Vercel) to get started quickly. You can always migrate to a different host later.

---

## 11. Upload Your Site

### If using Netlify (drag-and-drop)

**Step 1** — Go to [https://netlify.com](https://netlify.com) and sign up for a free account.

**Step 2** — After logging in, you will see a page that says **"Sites"**. Scroll down until you see a box that says **"Drag and drop your site output folder here"**.

**Step 3** — Open your project folder on your computer, find the **`dist`** folder, and drag it into that box in your browser.

**Step 4** — Wait a few seconds. Netlify will give you a URL like `https://random-name-123.netlify.app`. Click it — your site is live! 🎉

**Step 5 (optional)** — To change the random name, go to **Site settings → Change site name**.

---

### If using traditional hosting (cPanel File Manager)

**Step 1** — Log in to your hosting account's control panel (cPanel).

**Step 2** — Open the **File Manager**.

**Step 3** — Navigate to the `public_html` folder (this is your website's root directory).

**Step 4** — Delete any existing files (like the default `index.html` placeholder).

**Step 5** — Click **Upload** and upload all the files from inside your `dist` folder. Make sure to upload the **contents** of `dist`, not the `dist` folder itself.

**Step 6** — Once uploaded, visit your domain — your site should be live.

---

### If using FTP (FileZilla)

**Step 1** — Download **FileZilla** for free at [https://filezilla-project.org](https://filezilla-project.org).

**Step 2** — Open FileZilla and enter your hosting FTP credentials (Host, Username, Password, Port — provided by your hosting company).

**Step 3** — Click **Quickconnect**.

**Step 4** — On the right panel, navigate to `public_html` (or `www`, depending on your host).

**Step 5** — On the left panel, navigate to your `dist` folder on your computer.

**Step 6** — Select all files inside `dist` and drag them to the right panel.

---

## 12. Register a Domain Name

A domain name is your website's address on the internet (e.g. `yourbusiness.com`).

### Where to register a domain

You can register a domain at any **domain registrar**. Popular options include:

- **Namecheap** (namecheap.com)
- **GoDaddy** (godaddy.com)
- **Squarespace Domains** (domains.squarespace.com)
- **Porkbun** (porkbun.com) — often cheaper
- **Cloudflare Registrar** (cloudflare.com) — at-cost pricing

> **Tip:** Many hosting providers also sell domains and can connect them automatically — which simplifies step 13.

### How to register

**Step 1** — Go to your chosen registrar and search for your desired domain name.

**Step 2** — If it is available, add it to cart and complete the purchase. Domain names typically cost **$10–$15 per year** for `.com`.

**Step 3** — During checkout, you may be offered add-ons (privacy protection, email hosting, etc.). **Domain Privacy (WHOIS protection)** is worth enabling — it hides your personal information from public records.

---

## 13. Connect Your Domain to Your Hosting

After registering a domain, you need to point it to your hosting provider so that when someone types your domain, they see your website.

### Method A — Change Nameservers (most common)

Your hosting provider will give you two **nameservers** — they look like:
```
ns1.yourhostingprovider.com
ns2.yourhostingprovider.com
```

**Step 1** — Log in to your domain registrar account.

**Step 2** — Find your domain in the list and click **"Manage"** or **"DNS Settings"**.

**Step 3** — Find the **"Nameservers"** section and select **"Custom nameservers"**.

**Step 4** — Replace the existing nameservers with the ones provided by your hosting company.

**Step 5** — Save the changes.

> **Important:** DNS changes can take between **15 minutes and 48 hours** to take effect worldwide. This is normal — be patient.

---

### Method B — Add an A Record (Netlify / Vercel)

If you are using Netlify or Vercel with a domain registered elsewhere:

**Step 1** — In Netlify/Vercel, go to your site settings and find **"Custom domains"**.

**Step 2** — Enter your domain name and follow the instructions. They will give you an **IP address** or a **CNAME value**.

**Step 3** — Log in to your domain registrar and go to the **DNS settings** for your domain.

**Step 4** — Add an **A record**:
- Type: `A`
- Name: `@` (or leave blank — means the root domain)
- Value: the IP address provided by Netlify/Vercel
- TTL: leave as default

**Step 5** — Add a **CNAME record** for the `www` version:
- Type: `CNAME`
- Name: `www`
- Value: the CNAME value provided by Netlify/Vercel
- TTL: leave as default

**Step 6** — Save and wait for DNS propagation (15 minutes – 48 hours).

---

### SSL Certificate (HTTPS) — Make your site secure

Most modern hosting providers (Netlify, Vercel, and many cPanel hosts) will automatically issue a free **SSL certificate** (the padlock icon in the browser). Look for a button like **"Enable HTTPS"** or **"Provision SSL"** in your hosting dashboard after connecting your domain.

If using cPanel hosting, look for **"SSL/TLS"** → **"Let's Encrypt SSL"** and enable it for your domain.

---

## 14. Final Checklist Before Going Live

Before you share your website with the world, go through this checklist:

- [ ] All CMS sections filled in with your real content (no placeholder text remaining)
- [ ] Team photos replaced with real images
- [ ] Hero background image set (or using the default palette SVG)
- [ ] EmailJS configured and contact form tested — you received a test email
- [ ] Footer text updated with your real business name and year
- [ ] Privacy Policy page updated — replace `[Your Business Name]` with your actual name
- [ ] Social media links filled in (or left blank to hide them)
- [ ] SEO title and description filled in with relevant, accurate content
- [ ] Domain connected and HTTPS enabled (padlock shows in the browser)
- [ ] Site tested on mobile (use your phone to check it looks good)
- [ ] Site tested in different browsers (Chrome, Firefox, Safari)
- [ ] Cookie consent banner appears on first visit

---

## 15. Replacing Images — Sizes & Formats

If you want to use your own images, here are the recommended sizes and formats for each image on the site:

| Image | Where used | Recommended size | Format |
|-------|-----------|-----------------|--------|
| **Hero background** | Full-screen banner behind title | 1920 × 1080 px minimum | JPG, PNG, or SVG |
| **Team member photo** | Portrait card in the Team section | 400 × 500 px (portrait 4:5 ratio) | JPG or PNG |
| **OG / Social share image** | Shown when sharing your link on social media | 1200 × 630 px | JPG or PNG |
| **Favicon** | Small icon in the browser tab | 32 × 32 px | PNG or ICO |

### How to add your images

**Option 1 — Use online image URLs**
Find or upload your image to any image hosting service (e.g. your hosting's file manager, Cloudinary, etc.) and paste the full URL into the CMS image field.

**Option 2 — Place images in the `public/assets` folder**
1. Copy your image file into the `public/assets/` folder inside your project.
2. In the CMS, enter the path as `/assets/your-image-name.jpg`.
3. Run `npm run build` again after adding new files.

> **Tip:** Before uploading, compress your images using a free tool like [Squoosh](https://squoosh.app) or [TinyPNG](https://tinypng.com) to keep your site loading fast.

---

## 16. Frequently Asked Questions

**Q: I closed the Terminal and now the preview isn't working. What do I do?**
A: Open the Terminal again, navigate to your project folder (step 4), and run `npm run dev` again.

---

**Q: I made changes in the CMS but they are not showing on the live site.**
A: The CMS saves changes in your browser. To publish updates to your live site, you need to run `npm run build` again and re-upload the new `dist` folder to your hosting.

---

**Q: Can I use the same template for multiple websites?**
A: No. Your license covers one single website. Each additional website requires a separate license purchase.

---

**Q: The contact form is not sending emails. What's wrong?**
A: Check the following:
1. Make sure you filled in the EmailJS Service ID, Template ID, and Public Key in the CMS (Section 8).
2. Make sure your EmailJS template uses the exact variable names: `{{professional}}`, `{{from_name}}`, `{{from_email}}`, `{{message}}`.
3. Check your EmailJS dashboard — you may have reached the 200 emails/month free tier limit.

---

**Q: Can I change the Privacy Policy text?**
A: Yes. Open the file `src/pages/PrivacyPolicy.tsx` in a text editor (like Notepad or TextEdit) and edit the text directly. Look for `[Your Business Name]` and replace it with your actual business name. After editing, run `npm run build` again.

---

**Q: My site looks different on mobile. How do I fix it?**
A: The template is fully responsive and should look good on all screen sizes. If something looks off, it may be due to very long words or custom images with extreme proportions. Try using images within the recommended sizes from Section 15.

---

**Q: Can I add more sections or change the layout?**
A: Adding or restructuring sections requires editing the source code. If you are not comfortable with code, consider hiring a developer for customisations beyond what the CMS offers.

---

**Q: I lost my config. Can I recover it?**
A: The CMS saves your content in your browser's local storage — it persists as long as you use the same browser and do not clear your browsing data. For safety, always export your configuration using the **"Export"** button in the CMS after each editing session. Keep the downloaded JSON file as a backup. You can restore it at any time using the **"Import config"** button.

---

**Q: The site shows the wrong language on the browser tab or in search results.**
A: Go to the CMS → **"Site, Navigation & Footer"** and update the **SEO title** and **SEO description** fields. Save the section, then run `npm run build` and re-upload the `dist` folder.

---

**Q: I forgot my admin password. How do I reset it?**
A: Open your `.env` file in a text editor, change the value of `VITE_ADMIN_PASSWORD` to a new password, save the file, and run `npm run build` again. Upload the new `dist` folder to your hosting — the new password will take effect immediately.

---

**Q: Someone found the `/admin` URL. Are they in?**
A: No. They will see the password login screen and cannot proceed without the correct password. Make sure you chose a strong, non-obvious password when setting up your `.env` file (see Section 7.1).

---

**Q: I want to access the admin on my live site. How?**
A: Go to `yourdomain.com/admin` in your browser. You will see the password login screen. Enter your admin password and click **Enter**. You will stay logged in for the rest of that browser session. To log out manually, click the **Lock** button in the top-right corner of the admin header.

---

## Support

For issues related to bugs in the original template code, please contact Fagom through the marketplace where you purchased this template.

Support does **not** cover:
- Issues caused by modifications to the source code
- Third-party services (EmailJS, hosting providers, domain registrars)
- Custom feature development

---

*Fagom Professional Template — © 2026 Fagom. All rights reserved.*
*Licensed under the Fagom Single Use EULA. See LICENSE.txt for details.*
