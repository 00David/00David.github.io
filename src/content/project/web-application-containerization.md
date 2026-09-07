---
title: Web application containerization
summary: Splitting a provided web application into containers, made to communicate through Kafka and the Strapi API.
code: L3
period: Third bachelor year · 2024–2025
order: 5
tags: [Docker, Docker Compose, Kafka, Strapi, PostgreSQL]
homeTags: [Docker, Docker Compose, Kafka, Strapi]
repo: https://github.com/00David/DevOps_Project
draft: false
---

Containerization of a web application, with both frontend and backend provided. The goal was to run the different components of the application in their own containers, and to provide easy usage.

Main features:

- Through Strapi, running in container A, modify frontend content running in another container B.
- Launch containerized producers/consumers with Docker Compose, and make them communicate with the Strapi API.

See in the repository for a demonstration video (in French).
