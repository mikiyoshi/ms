# Reference
## [Home by Cloudflare](https://ms-685.pages.dev/)
- if it's not update in your pages
### [Cloudflare - Workers & Pages](https://dash.cloudflare.com/270f9cb49aae52f6601a8f8cca96bda0/workers-and-pages)


## [【Cloudflare Pages】ブログを公開したい？...5分もあれば十分だ](https://zenn.dev/rivine/articles/2023-06-23-deploy-hugo-to-cloudflare-pages)
## [Cloudflare Pagesを使って自作ブログをホスティングしてみたら良かったので紹介する](https://note.com/dev_makuake/n/naf6aa6ee2c37)

## [WPGraphQLとREST APIを使ってWordPressをヘッドレス化する方法](https://kinsta.com/jp/blog/wpgraphql-vs-wp-rest-api/)
## [WordPress WP REST APIで投稿データを取得してReactで表示する](https://note.com/armada3524/n/n1bb6b51373f0)
## [Fixing and Parsing WordPress Rest Api content in React.](https://since1979.dev/fixing-and-parsing-wordpress-rest-api-content-in-react/)

# [tailwind](https://tailwindcss.com/docs/installation/using-postcss)

# Flowrift Tailwind template
## [Flowrift - Beautifully designed Tailwind CSS UI blocks](https://flowrift.com/c/blog/68U8N?view=preview)

## 100. Google検索の仕方
- XXX after:2021
- XXX site:abc.com 
  - XXX -site:abc.com
- XXX "abc"
- Uncaught TypeError: * in not a function

# [Swiper React Components](https://swiperjs.com/react)
## [Demo](https://swiperjs.com/demos)
### [Autoplay](https://swiperjs.com/demos#autoplay)
#### [Autoplay React](https://codesandbox.io/p/devbox/swiper-react-autoplay-pdrc53?file=%2Fsrc%2FApp.jsx%3A1%2C1-1%2C49)


# [WordPress REST API - more than 10 posts](https://stackoverflow.com/questions/50495815/wordpress-rest-api-more-than-10-posts)
- add after link `/?per_page=100`

# [How to fix single quote error](https://stackoverflow.com/questions/32979512/react-jsx-how-to-render-text-with-a-single-quote-example-pive-p)
- use `&apos;`

# [Customizing your theme](https://tailwindcss.com/docs/background-color#customizing-your-theme)

```
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
      },
    }
  }
}
```

# [Tailwind Customizing Colors](https://tailwindcss.com/docs/customizing-colors)

## Color Variation
- primary `#5cb85c`
- secondary `#c6e8fb`
  - select highlight
    - command + K
    - command + G
```
    primary: {
      100: "#def1de",
      200: "#bee3be",
      300: "#9dd49d",
      400: "#7dc67d",
      500: "#5cb85c",
      600: "#4a934a",
      700: "#376e37",
      800: "#254a25",
      900: "#122512",
    }
```

# [Tailwind UI Using React](https://tailwindui.com/documentation#using-react)
- `npm install @headlessui/react @heroicons/react`

## [Headers Demo](https://tailwindui.com/components/marketing/elements/headers)

# [Scroll Restoration](https://v5.reactrouter.com/web/guides/scroll-restoration)
  - `react-router-dom` didn't have a function each header navigation link to scroll top
  - `react-router-dom`を使うとヘッダーナビゲーションからのリンクは、ページ遷移しても中身だけ入れ替わるので、ページの先頭から表示されない
## create `ScrollToTop.js` file in `components` folder
```
// ScrollToTop.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
}

```
## add `<ScrollToTop />` in `App.js` file
### [React Scroll to Top on Page Change with React Router](https://www.youtube.com/watch?si=zSu9lm1ychwhDkNr&v=8c5eMyJR9Js&feature=youtu.be)

# [【Tailwind CSS】長い文字列を三点リーダー（…）で省略する方法](https://zenn.dev/ilove/articles/8a93705d396e05)
- import `npm install @tailwindcss/line-clamp`
```
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    // ...
  ],
}
```
- add class like a `line-clamp-3`

# [Heroicons](https://heroicons.com/)
- [Design resources](https://tailwindcss.com/resources)