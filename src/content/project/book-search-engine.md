---
title: Book search engine
summary: Web/mobile search engine over a library of Gutenberg books, with regex search and graph-based ranking
code: M2
period: Second master year · 2026–2027
order: 13
tags: [TypeScript, React, Tailwind CSS, Java, Spring Boot, PostgreSQL, Maven, JUnit, GitHub Actions]
homeTags: [React, Tailwind CSS, Java, Spring Boot, PostgreSQL]
draft: false
---

Web/mobile search engine for a library of text documents. The library holds at least 1,664 books of 10,000+ words each, sourced from [Project Gutenberg](https://www.gutenberg.org), and the application points users to the right book through keyword and regex search, relevance ranking and recommendations.

Main features:

- Search: returns the books whose index table contains a given keyword.
- Advanced search: regex search, either over the index table or directly over the full text of the books.
- Ranking: results ordered by relevance. The ranking combines occurrence counts with a centrality measure (closeness, betweenness or PageRank) computed on the Jaccard similarity graph of the books.
- Recommendation: suggests books close to the top results in the Jaccard graph.
- Multi-device: the app runs on several clients (laptops, iOS and Android phones) connected to the same LAN.

<img src="/assets/work-in-progress.png" alt="WORK IN PROGRESS" />
