FRESHBITE KITCHEN — WEBSITE STARTER FILES
==========================================

FILES
- index.html  : Main homepage (keep this at the ZIP root)
- styles.css  : Responsive styling
- script.js   : Recipe data, English/Sinhala switch, search, filters and recipe modal

HOW TO OPEN
1. Extract freshbite_kitchen_website.zip.
2. Open the extracted folder.
3. Double-click index.html to preview in a modern browser.
4. Keep index.html, styles.css and script.js in the same folder.

HOW TO PUBLISH FOR FREE
Option A: GitHub Pages (free static hosting)
1. Create a GitHub account and a new public repository.
2. Upload index.html, styles.css and script.js to the repository ROOT.
3. Open repository Settings > Pages.
4. Select deployment from the main branch and root folder, then save.
5. GitHub will provide the published website address when deployment finishes.

Option B: Netlify Drop
- You can upload the extracted folder to Netlify's manual deploy/drop page if that service's current free plan and terms suit you.

IMPORTANT BEFORE PUBLIC LAUNCH
- Replace hello@freshbitekitchen.example with a real email address you control.
- The email is a placeholder; no contact form or newsletter service is connected.
- The recipes are starter examples. Test every recipe yourself and check quantities, food safety, and translations before publishing.
- The current illustrations use food emoji and CSS shapes, so no paid photos are required.
- Google Fonts require an internet connection; system fonts are used as fallback.
- This is a static HTML site. The recipe search, category filters, language switch, and recipe pop-up work in the browser.
- Saved recipes are only kept in the current page session; there is no database or user account.
- No ads, analytics, email collection, or payment system is installed.
- Before applying for ads, add a real Privacy Policy, About page, contact details, and sufficient original, helpful content. Ad approval and earnings are not guaranteed.
- If later you add analytics, affiliate links, ads, or newsletter sign-up, update your privacy/cookie disclosures as applicable.
- Do not present recipes as medical treatment. Nutrition values are not calculated in this starter.

EDITING CONTENT
- Edit recipe data in script.js inside the `recipes` array.
- Each recipe has English and Sinhala titles, descriptions, ingredients, steps and a tip.
- To add a recipe, copy one recipe object and change its id to a unique value.
- Category IDs currently used: breakfast, snacks, lunch, sri-lankan.
