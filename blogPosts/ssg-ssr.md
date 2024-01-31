---
title: "When to Use Static Generation vs. Server-side Rendering"
date: "2024-01-01"
---

We recommend using **Static Generation** (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a sever render the page on every request.

You can use Static Generation for many types fo pages, including:

-Marketing pages
-Blogs posts
-E-commerce product listings
-Help and documentation

You should ask yourself: "Can I pre-render this page **ahead** of a user's request?" If the answer is yes, then you should choose Static Generation.

On the other hand, Static Generation is **not** a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.

In that case, you can use **Server-sideRenderings**. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skp pre-rendering and use client-side JavaScript to populate data.
