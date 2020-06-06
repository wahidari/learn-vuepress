---
home: true
heroImage: /hero.png
heroText: Hero Title
tagline: Hero subtitle
actionText: Get Started →
actionLink: /guide/
readingShow: false
---

<div class="features">
  <div class="feature">
    <h2>Simplicity First</h2>
    <p>Minimal setup with markdown-centered project structure helps you focus on writing.</p>
  </div>
  <div class="feature">
    <h2>Vue-Powered</h2>
    <p>Enjoy the dev experience of Vue + webpack, use Vue components in markdown, and develop custom themes with Vue.</p>
  </div>
  <div class="feature">
    <h2>Performant</h2>
    <p>VuePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded.</p>
  </div>
</div>

### As Easy as 1, 2, 3

``` bash
# install
yarn global add vuepress
# OR npm install -g vuepress

# create a markdown file
echo '# Hello VuePress' > README.md

# start writing
vuepress dev

# build to static files
vuepress build
```

::: warning COMPATIBILITY NOTE
VuePress requires Node.js >= 8.6.
:::

<div class="footer">
  Copyright © <a href="https://github.com/wahidari">Wahid Ari</a> 2020. <br>
  Powered by <a href="https://vuepress.vuejs.org/">VuePress</a>
</div>