---
title: Managing Homepage Content
description: Learn how to manage all content appearing on the Hayden's Hub homepage and its related sections.
---

The **homepage and its related sections** (Team, FAQ, and Footer Contacts) are fully managed in **Contentful**.  
As an admin, you can **edit text, update team members, change contact info, and add FAQs** without touching the website code.

---

## 1. Homepage Content Model

**Content Type:** `homepage`

- Stores all homepage texts and links. Required content:
  - **Subtitle** (below hero heading)
  - **About Us Section Story** (`aboutStory`)
  - **Our Mission** (`aboutMission`)
  - **Our Vision** (`aboutVision`)
  - **Submit Article Link** (`submitArticle`)
- Optional content (but recommended):
  - **Volunteer Button Link** (`applyVolunteer`)
  - **Partner Button Link** (`becomePartner`)

> 💡 **Note:** There should be **only 1 `homepage` entry**.  
> Editing it updates the homepage immediately after publishing.

---

## 2. Team Content Model

**Content Type:** `team`

- Stores all team members displayed in the **Our Team** section.
- **Required fields:**
  - `name` → Full name of team member
  - `title` → Role or position (e.g., *Tech Lead*)
  - `bio` → 1–2 sentences for their background
- **Optional Fields:**
  - `linkedin` → URL for their LinkedIn profile _(optional but recommended)_
  - `headshot` → Image upload (prefer **square photos** for consistency. Admin can also crop the image in the Contentful after uploading)

> ⚠️ **Tip:**  
> Unpublishing a member immediately **removes them from the website**.  
> To **add a new member**, see the **Add/Edit Entry Steps** below.

---

## 3. FAQ Content Model

**Content Type:** `faq`

- Stores **Frequently Asked Questions** displayed in the **FAQ section**.
- **Required fields:**
  - `question` → The question text
  - `answer` → Full response displayed in the collapsible panel

> 💡 **Tip:**  
> FAQs can be **reordered** in Contentful (not website) by updating the “Sort Order”.  
> Always **keep answers short and clear** for readability.

---

## 4. Footer / Contact Info Content Model

**Content Type:** `haydens hub all contacts`

- Controls **footer and contact card info**, including:
  - `outreachEmail` → Email for general inquiries
  - `researchEmail` → Email for research submissions
  - `instagramLink` → Social media link
  - `linkedInLink` → Social media link

> ⚠️ **Important:**  
> There should be **only 1 `haydens hub all contacts` entry**.  
> Any **wrong email or broken link** here will break contact options site-wide.  
> Double-check before publishing.

---

## Quick Admin Tips

- **`homepage` & `haydens hub all contacts` usually have only 1 entry** – always edit the existing one.
- **Team & FAQ** can have multiple entries – each represents a card on the website.
- **Footer contacts** should **never have duplicates** – edit the single existing entry.
- Always **preview fields** before publishing to avoid broken links or empty sections.

---

After updating entries, the **website auto-fetches** the new content.  
If changes don’t appear in **5 minutes**, contact the Tech Lead at [website.haydenshub@gmail.com](mailto:website.haydenshub@gmail.com)
