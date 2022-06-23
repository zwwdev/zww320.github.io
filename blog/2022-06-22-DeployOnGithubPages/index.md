---
slug: deploy-on-github-pages-without-repo-name
title: How to deploy your website on github pages without repo name?
authors:
  name: Ziwei Wang
  title: this website owner
  url: https://github.com/zwwang98
  image_url: https://github.com/zwwang98.png
tags: [deploy on github]
---

### Situation
When I was deploying my website on github pages, I found that the deployment url always containing my repo name. The whole url was 'https://zwwang98.github.io/blog' and I want it to be just 'https://zwwang98.github.io/'. Here's what I have done to solve this problem.

### Action
1. Changed my website's repo name into `<username>.github.io`.  
   Say if your github user name is "user", then your repo for generating a github page without trailing repo name must be "user.github.io".
2. Deploy it. In your repo:  
   `settings` -> `pages` -> choose the `source` and click `save`

   ![how to deploy on github](./how-to-deploy-on-github.png)

### Summary
Based on [github docs](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites),  
> There are three types of GitHub Pages sites: project, user, and organization.

Based on my understanding, the repo name constraints and the result github pages url are listed below:  

|              | Repo Name                  | Result Site                                                                                          |
|--------------|----------------------------|------------------------------------------------------------------------------------------------------|
| project      | any name you want          | `http(s)://<username>.github.io/<repository>`  or  `http(s)://<organization>.github.io/<repository>` |
| user         | `<username>.github.io`     | `http(s)://<username>.github.io`                                                                     |
| organization | `<organization>.github.io` | `http(s)://<organization>.github.io`                                                                 |



### Reference
https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites