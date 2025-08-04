---
title: Hayden’s Hub Journal Page Content
description: Learn how to manage all content appearing on the Hayden's Hub homepage and its related sections.
---

The Hayden’s Hub Journal is our **blog and advocacy space**, where we share research, community stories, creative content, and youth voices. This page explains all related content models in Contentful and how to manage them.

---

## Content Models for Journal

The Journal is powered by **8 content models**:

1. Academic Blog  
2. Advocacy Blog 
3. Community Spotlight Blog  
4. Creative Blog  
5. Youth Voices Blog  
6. Author  
7. Guidelines  
8. TOC Item (Table of Contents for Guidelines)

Each content model serves a specific purpose:

---

> The Hayden’s Hub Journal accepts submissions across five different article types: Academic, Advocacy, Community Spotlight, Creative, and Youth Voices. Each of these types has its own dedicated content model in Contentful, because the information required is different for each. 

> For example, an Academic article needs an abstract, references, and a structured main content area, while a Creative entry might only need a title, rich text content, and optional images. This separation ensures that the website displays each type of content in the right format and makes it easy for admins to manage entries without confusion.

---

## Five types of Articles and their Content Models

### 1. Academic Blog

* **Content Type:** `academicBlog`
* **Fields to Fill (all required):**
  - **Title**  
  - **Published Date** 
  - **Short Blurb** *(for article-card on the Journal Page)* 
  - **Abstract** 
  - **Main Content (Rich Text)** – Can include headings, images, blockquotes. 
  - **Category Type** - by default it is `Academic` - **not need to change** 
  - **PDF** - the pdf that the author submitted
  - **Author (linked entry)** - see [section 6 Author](#6-author) for more details
  - **References** 
  - **slug** - this determines the URL for the entry. 
    - **e.g.** if you set the slug to `test blog`, the page URL will be: `https://haydenshub.netlify.app/blog/test-blog/`
    - **Tip:** Keep it short, simple, and unique for each entry.

> **Note:** Only publish once everything is finalized. Drafts stay hidden until published.

---

### 2. Advocacy Blog

* **Content Type:** `advocacyBlog` 
* **Fields to Fill (all required):**
  - **Title**  
  - **Published Date** 
  - **Short Blurb** *(for article-card on the Journal Page)* 
  - **Main Content (Rich Text)** – Can include headings, images, blockquotes. 
  - **Category Type** - by default it is `Advocacy` - **not need to change** 
  - **Author (linked entry)** - see [section 6 Author](#6-author) for more details
  - **References** 
  - **slug** - this determines the URL for the entry. 
    - **e.g.** if you set the slug to `test blog`, the page URL will be: `https://haydenshub.netlify.app/blog/test-blog/`
    - **Tip:** Keep it short, simple, and unique for each entry.

* **Optional Fields:**
  - **PDF** - the pdf that the author submitted
  - **Abstract** 

> **Note:** Only publish once everything is finalized. Drafts stay hidden until published.

---

### 3. Community Spotlight Blog

* **Content Type:** `communitySpotlightBlog` 
* **Fields to Fill (all required):**
  - **Title**  
  - **Published Date** 
  - **Short Blurb** *(for article-card on the Journal Page)* 
  - **Main Content (Rich Text)** – Can include headings, images, blockquotes. 
  - **Category Type** - by default it is `Community Spotlight` - **not need to change** 
  - **Author (linked entry)** - see [section 6 Author](#6-author) for more details
  - **slug** - this determines the URL for the entry. 
    - **e.g.** if you set the slug to `test blog`, the page URL will be: `https://haydenshub.netlify.app/blog/test-blog/`
    - **Tip:** Keep it short, simple, and unique for each entry.

* **Optional Fields:**
  - **PDF** - the pdf that the author submitted
  - **Abstract** 
  - **References** 

> **Note:** Only publish once everything is finalized. Drafts stay hidden until published.

---

### 4. Creative Blog

* **Content Type:** `creativeBlog` 
* **Fields to Fill (all required):**
  - **Title**  
  - **Published Date** 
  - **Short Blurb** *(for article-card on the Journal Page)* 
  - **Main Content (Rich Text)** – Can include headings, images, blockquotes. 
  - **Category Type** - by default it is `Creative` - **not need to change** 
  - **Author (linked entry)** - see [section 6 Author](#6-author) for more details
  - **slug** - this determines the URL for the entry. 
    - **e.g.** if you set the slug to `test blog`, the page URL will be: `https://haydenshub.netlify.app/blog/test-blog/`
    - **Tip:** Keep it short, simple, and unique for each entry.

* **Optional Fields:**
  - **PDF** - the pdf that the author submitted
  - **Abstract** 
  - **References** 

> **Note:** Only publish once everything is finalized. Drafts stay hidden until published.

---

### 5. Youth Voices Blog

* **Content Type:** `youthVoicesBlog` 
* **Fields to Fill (all required):**
  - **Title**  
  - **Published Date** 
  - **Short Blurb** *(for article-card on the Journal Page)* 
  - **Main Content (Rich Text)** – Can include headings, images, blockquotes. 
  - **Category Type** - by default it is `Youth Voices` - **not need to change** 
  - **Author (linked entry)** - see [section 6 Author](#6-author) for more details
  - **References** 
  - **slug** - this determines the URL for the entry. 
    - **e.g.** if you set the slug to `test blog`, the page URL will be: `https://haydenshub.netlify.app/blog/test-blog/`
    - **Tip:** Keep it short, simple, and unique for each entry.

* **Optional Fields:**
  - **PDF** - the pdf that the author submitted
  - **Abstract** 

> **Note:** Only publish once everything is finalized. Drafts stay hidden until published.

---

### 6. Author

* **Content Type:** `author` 
* **Fields to Fill (all required):**
  - **Author Name**  
  - **Author Title** - what role they have (student, developer, researcher, etc.)
  - **About Author** - their bio 
  - **Reflection on Writing** 
  - **slug** - this determines the URL for the entry. 
    - **e.g.** if you set the slug to `author name`, the page URL will be: `https://haydenshub.netlify.app/blog/author-name/`
    - **Tip:** Keep it short, simple, and unique for each entry - preferably their firstLast name.

* **Optional Fields:**
  - **Author Email** 
  - **Author Instagram**  
  - **Author Facebook**
  - **Author Twitter**
  - **Author LinkedIn**
  - **Author Headshot**

> **Tip for Admins:**  
> If a new contributor joins, **create an Author entry first**, then link it in the blog entry.

---

### 7. Guidelines

* **Content Type:** `guidelines` 
* **Fields to Fill (all required):**
  - **Title**  - What article guideline it is (e.g. Youth Voices Outline)
  - **Guideline Type Dropdown** - choose the type of article guideline (e.g. Youth Voices)
  - **Content Sections** - the main content of the guideline 
    - **Note:** The headings here should have exactly the same name entered in the TOC below
  - **Table of Contents** 
  - **slug** - this determines the URL for the entry. 
    - **e.g.** if you set the slug to `youth voices outline`, the page URL will be: `https://haydenshub.netlify.app/blog/youth-voices-outline/`
    - **Tip:** Keep it short, simple, and unique for each entry - preferably their same as title.


> **Note:**  
> You only need to update this when **submission rules change**.
> ⚠️ The wrong entries for `TOC` and not following structure in the `Content Section` can actually break the website. Please strictly follow the steps in next page. 

---

### 8. TOC Item (Table of Contents)

* **Content Type:** `tocItem` 
* **Fields:**  
  - Title (what appears in sidebar)  
  - Slug (used to link to a heading in main content)  
   - **Note:** This has to be the same as the Title (in lowercase)
  - Optional **Sub Headings** for nested TOC  


---

## Workflow for Adding or Editing Journal Content

1. Decide which blog type fits your article (Academic, Advocacy, Creative, etc.).  
2. Create a new entry under the correct content model.  
3. Fill in all required fields.
4. Publish the entry.  
5. Check the live site – updates may take 1–5 minutes.  

> ⚠️ **Admins should not create or modify content models.**  
> Only create or edit **entries** for the models listed above.


