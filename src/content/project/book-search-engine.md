---
title: GutenDAAR — A book search engine
summary: Web/mobile search engine over a library of Gutenberg books, with regex search and graph-based ranking
code: M2
period: Second master year · 2026–2027
order: 13
tags:
    [
        TypeScript,
        React,
        Java,
        Spring Boot,
        PostgreSQL,
        Maven,
        JUnit,
        Docker,
        Docker Compose,
        GitHub Actions,
    ]
homeTags: [React, Java, Spring Boot, PostgreSQL, Docker]
repo: https://github.com/00David/GutenDAAR
draft: false
---

GutenDAAR is a web/mobile search engine for a library of text documents. The library holds at least 1,664 books of 10,000+ words each, sourced from [Project Gutenberg](https://www.gutenberg.org), and the application points users to the right book through keyword and regex search, relevance ranking and recommendations.

Main features:

- Search: returns the books whose index table contains a given keyword.
- Advanced search: regex search, either over the index table or directly over the full text of the books.
- Ranking: results ordered by relevance. The ranking combines occurrence counts with a centrality measure (closeness, betweenness or PageRank) computed on the Jaccard similarity graph of the books.
- Recommendation: suggests books close to the top results in the Jaccard graph.
- Multi-device: the app runs on several clients (laptops, iOS and Android phones) connected to the same LAN.
- Deployment: frontend, Spring Boot backend and PostgreSQL database each run in their own container, orchestrated with Docker Compose.

<video controls loop playsinline preload="metadata" aria-label="Demonstration of the GutenDAAR search engine">
    <source src="/assets/m2/demo-library.mp4" type="video/mp4" />
</video>
