(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{371:function(e,s,a){"use strict";a.r(s);var t=a(5),n=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"asset-handling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#asset-handling"}},[e._v("#")]),e._v(" Asset Handling")]),e._v(" "),a("h2",{attrs:{id:"relative-urls"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#relative-urls"}},[e._v("#")]),e._v(" Relative URLs")]),e._v(" "),a("p",[e._v("All Markdown files are compiled into Vue components and processed by webpack, so you can and "),a("strong",[e._v("should prefer")]),e._v(" referencing any asset using relative URLs:")]),e._v(" "),a("div",{staticClass:"language-md line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[a("span",{pre:!0,attrs:{class:"token url"}},[e._v("!["),a("span",{pre:!0,attrs:{class:"token content"}},[e._v("An image")]),e._v("](./image.png)")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("This would work the same way as in "),a("code",[e._v("*.vue")]),e._v(" file templates. The image will be processed with "),a("code",[e._v("url-loader")]),e._v(" and "),a("code",[e._v("file-loader")]),e._v(", and copied to appropriate locations in the generated static build.")]),e._v(" "),a("p",[e._v("Also, you can use the "),a("code",[e._v("~")]),e._v(" prefix to explicitly specify this is a webpack module request, allowing you to reference files with webpack aliases or from npm dependencies:")]),e._v(" "),a("div",{staticClass:"language-md line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[a("span",{pre:!0,attrs:{class:"token url"}},[e._v("!["),a("span",{pre:!0,attrs:{class:"token content"}},[e._v("Image from alias")]),e._v("](~@alias/image.png)")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token url"}},[e._v("!["),a("span",{pre:!0,attrs:{class:"token content"}},[e._v("Image from dependency")]),e._v("](~some-dependency/image.png)")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("Webpack aliases can be configured via "),a("RouterLink",{attrs:{to:"/config/#configurewebpack"}},[e._v("configureWebpack")]),e._v(" in "),a("code",[e._v(".vuepress/config.js")]),e._v(". Example:")],1),e._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[e._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  configureWebpack"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    resolve"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      alias"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'@alias'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'path/to/some/dir'")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br")])]),a("h2",{attrs:{id:"public-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#public-files"}},[e._v("#")]),e._v(" Public Files")]),e._v(" "),a("p",[e._v("Sometimes you may need to provide static assets that are not directly referenced in any of your Markdown or theme components - for example, favicons and PWA icons. In such cases, you can put them inside "),a("code",[e._v(".vuepress/public")]),e._v(" and they will be copied to the root of the generated directory.")]),e._v(" "),a("h2",{attrs:{id:"base-url"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#base-url"}},[e._v("#")]),e._v(" Base URL")]),e._v(" "),a("p",[e._v("If your site is deployed to a non-root URL, you will need to set the "),a("code",[e._v("base")]),e._v(" option in "),a("code",[e._v(".vuepress/config.js")]),e._v(". For example, if you plan to deploy your site to "),a("code",[e._v("https://foo.github.io/bar/")]),e._v(", then "),a("code",[e._v("base")]),e._v(" should be set to "),a("code",[e._v('"/bar/"')]),e._v(" (it should always start and end with a slash).")]),e._v(" "),a("p",[e._v("With a base URL, to reference an image in "),a("code",[e._v(".vuepress/public")]),e._v(", you’d have to use URLs like "),a("code",[e._v("/bar/image.png")]),e._v(". Yet, this is brittle if you ever decide to change the "),a("code",[e._v("base")]),e._v(" later. To help with that, VuePress provides a built-in helper "),a("code",[e._v("$withBase")]),e._v(" (injected onto Vue’s prototype) that generates the correct path:")]),e._v(" "),a("div",{staticClass:"language-vue line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("img")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v(":src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("$withBase('/foo.png')"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("alt")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Note you can use the above syntax not only in theme components, but in your Markdown files as well.")]),e._v(" "),a("p",[e._v("Also, if a "),a("code",[e._v("base")]),e._v(" is set, it’s automatically prepended to all asset URLs in "),a("code",[e._v(".vuepress/config.js")]),e._v(" options.")])])}),[],!1,null,null,null);s.default=n.exports}}]);