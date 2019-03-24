![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# SVGram Core WebComponent

[![npm version](https://badge.fury.io/js/%40svgram%2Fsvgram-wc-core.svg)](https://www.npmjs.com/package/@svgram/svgram-wc-core)
[![GitHub version](https://badge.fury.io/gh/svgram%2Fsvgram-wc-core.svg)](https://github.com/svgram/svgram-wc-core)
[![Dependency Status](https://david-dm.org/svgram/svgram-wc-core/status.svg)](https://david-dm.org/svgram/svgram-wc-core)
[![devDependency Status](https://david-dm.org/svgram/svgram-wc-core/dev-status.svg)](https://david-dm.org/svgram/svgram-wc-core?type=dev)

## Intro

This is a data driven diagram tool hosted by a SVG canvas in a webcomponent (WC).

Usage:  
index.html  

```html
<!DOCTYPE html>
<html dir="ltr" lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0">
  <title>Stencil Component Starter</title>
  <script src="https://unpkg.com/@svgram/svgram-wc-core@0.0.2/dist/svgram-wc-core.js"></script>
  <script type="text/javascript">
    function setSv5Shapes(){
      let container =  {
      shapes: [{ "x": "100px", "y": "10px", "width": "80px", "heigth": "70px", "stroke": "red", "fill": "green"},
      { "x": "200px", "y": "10px", "width": "70px", "heigth": "60px", "stroke": "blue", "fill": "brown"}]
      };
      let containerJson = JSON.stringify(container);
      let canvas = document.getElementById("canvas");
      canvas.setAttribute("content", containerJson);
    };
  </script>
</head>
<body onload="setSv5Shapes()">
  <svgram-canvas id="canvas" first="Sv5" last="Canvas" content="" ></svgram-canvas>
</body>
</html>
```

## How this project was build

```bash
npm init stencil
# you get a menu - choose component
# Name of proejct: scgram-wc-core

# Test run: Build, start a webserver and a browser:
npm start

# Kill webserver:
ctrl-c
```

* Copy demo WC /src/components/my-component/ to /src/components/sv5-canvas/
* Add content to new WC
* Send data to the WC from /src/index.html

## Credits

Thanks to  

* [Stencil](https://stenciljs.com/)
* Forked from [rasor/stncl-svg-poc](https://github.com/rasor/stncl-svg-poc)

## Npm publish guides

* [Distributing Web Components Built with Stencil](https://stenciljs.com/docs/distribution)
* [Contributing packages to the registry](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)
* [Creating Node.js modules](https://docs.npmjs.com/creating-node-js-modules)
* [About scopes](https://docs.npmjs.com/about-scopes)
* [Problems publishing scoped module · Issue #12194 · npm/npm](https://github.com/npm/npm/issues/12194#issuecomment-363055154)
```bash
npm test
npm run build --prod
npm login --scope=@svgram
npm publish --access=public
```
* Example of using Badges: [ckeditor5-build-classic](https://github.com/ckeditor/ckeditor5-build-classic)

## Tutorials

* Using SVG and css4 in Stencil: [Ionic 4 Tutorial: Mastering Web Components in Ionic 4](https://ionicthemes.com/tutorials/about/ionic-4-tutorial-mastering-web-components-in-ionic-4)
* [Getting Started with StencilJS](https://cloudinary.com/blog/getting_started_with_stenciljs)
* [Publishing a Web Component Using Stencil (And Using It Anywhere)](https://www.joshmorony.com/publishing-a-web-component-using-stencil-and-using-it-anywhere/)
* [How I created SmileToUnlock with StencilJS - Part 1/2](https://codecraft.tv/blog/2017/10/20/smile-to-unlock-webcomponent-stenciljs-part-1/)

The End.