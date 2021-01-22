# tdmp-merchants
 TDMP-MERCHANTS-FRONTEND-VUE-WITH-API
 <p>
 </p>
 <img src="https://github.com/gispatial/tripcarte-asia/blob/master/src/assets/images/pages/home-dashboard.png" width="100%">
 
## TDPM-API
<table data-v-7b6b9330="">
<thead data-v-7b6b9330="">
<tr data-v-7b6b9330="">
<th data-v-7b6b9330="">Name</th>
<th data-v-7b6b9330="">Type</th>
<th data-v-7b6b9330="">Parameters</th>
<th data-v-7b6b9330="">Description</th>
<th data-v-7b6b9330="">default</th>
</tr>
</thead>
<tbody data-v-7b6b9330="">
<tr data-v-7b6b9330="">
<td width="120px" data-v-7b6b9330="">disableCustomizer</td>
<td data-v-7b6b9330="">Boolean</td>
<td data-v-7b6b9330="">true, false</td>
<td data-v-7b6b9330="">Toggle display of theme customizer</td>
<td data-v-7b6b9330="">false</td>
</tr>
</tbody>
<tbody data-v-7b6b9330="">
<tr data-v-7b6b9330="">
<td width="120px" data-v-7b6b9330="">disableThemeTour</td>
<td data-v-7b6b9330="">Boolean</td>
<td data-v-7b6b9330="">true, false</td>
<td data-v-7b6b9330="">Enable/Disable app tour in Vuexy Admin</td>
<td data-v-7b6b9330="">false</td>
</tr>
</tbody>
<tbody data-v-7b6b9330="">
<tr data-v-7b6b9330="">
<td width="120px" data-v-7b6b9330="">footerType</td>
<td data-v-7b6b9330="">String</td>
<td data-v-7b6b9330="">static, sticky or hidden</td>
<td data-v-7b6b9330="">Change how footer is displayed</td>
<td data-v-7b6b9330="">static</td>
</tr>
</tbody>
<tbody data-v-7b6b9330="">
<tr data-v-7b6b9330="">
<td width="120px" data-v-7b6b9330="">hideScrollToTop</td>
<td data-v-7b6b9330="">Boolean</td>
<td data-v-7b6b9330="">true, false</td>
<td data-v-7b6b9330="">Toggle display of scroll to top button</td>
<td data-v-7b6b9330="">false</td>
</tr>
</tbody>
<tbody data-v-7b6b9330="">
<tr data-v-7b6b9330="">
<td width="120px" data-v-7b6b9330="">mainLayoutType</td>
<td data-v-7b6b9330="">String</td>
<td data-v-7b6b9330="">horizontal/ vertical</td>
<td data-v-7b6b9330="">Layout Type</td>
<td data-v-7b6b9330="">vertical</td>
</tr>
</tbody>
<tbody data-v-7b6b9330="">
<tr data-v-7b6b9330="">
<td width="120px" data-v-7b6b9330="">navbarColor</td>
<td data-v-7b6b9330="">String</td>
<td data-v-7b6b9330="">Hex, rgb, rgba or valid HTML Color</td>
<td data-v-7b6b9330="">Change color of navbar using this property</td>
<td data-v-7b6b9330="">&nbsp;</td>
</tr>
</tbody>
<tbody data-v-7b6b9330="">
<tr data-v-7b6b9330="">
<td width="120px" data-v-7b6b9330="">navbarType</td>
<td data-v-7b6b9330="">String</td>
<td data-v-7b6b9330="">floating, static, sticky or hidden</td>
<td data-v-7b6b9330="">Change how navbar is displayed</td>
<td data-v-7b6b9330="">floating</td>
</tr>
</tbody>
<tbody data-v-7b6b9330="">
<tr data-v-7b6b9330="">
<td width="120px" data-v-7b6b9330="">routerTransition</td>
<td data-v-7b6b9330="">String</td>
<td data-v-7b6b9330="">zoom-fade, slide-fade, fade-bottom, fade, zoom-out, none</td>
<td data-v-7b6b9330="">This property is used to change the router animation.</td>
<td data-v-7b6b9330="">zoom-fade</td>
</tr>
</tbody>
<tbody data-v-7b6b9330="">
<tr data-v-7b6b9330="">
<td width="120px" data-v-7b6b9330="">sidebarCollapsed</td>
<td data-v-7b6b9330="">Boolean</td>
<td data-v-7b6b9330="">true, false</td>
<td data-v-7b6b9330="">Create collapsed sidebar by setting this property to true.</td>
<td data-v-7b6b9330="">false</td>
</tr>
</tbody>
<tbody data-v-7b6b9330="">
<tr data-v-7b6b9330="">
<td width="120px" data-v-7b6b9330="">theme</td>
<td data-v-7b6b9330="">String</td>
<td data-v-7b6b9330="">light, dark, semi-dark</td>
<td data-v-7b6b9330="">Set between light theme, dark theme &amp; semi-dark theme.</td>
<td data-v-7b6b9330="">light</td>
</tr>
</tbody>
<tbody data-v-7b6b9330="">
<tr data-v-7b6b9330="">
<td width="120px" data-v-7b6b9330="">rtl</td>
<td data-v-7b6b9330="">Boolean</td>
<td data-v-7b6b9330="">true, false</td>
<td data-v-7b6b9330="">Enable/Disable RTL</td>
<td data-v-7b6b9330="">false</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
 
# Project setup

$ npm install or $ yarn

Compiles and hot-reloads for development:

- npm run serve
- yarn serve 

  Note that the development build is not optimized.
  To create a production build, run yarn build.

# Steps to build it

## Prerequisites

You will need to have Node.js or Yarn installed in your machine. 
[[NodeJs](https://nodejs.org/en)] [[YarnPkg](https://yarnpkg.com/)]


## Steps

- `npm install` or 'yarn install' to install existing dependencies:

```
$ npm install or $ yarn
```

- Create Auth0 `server` api model folder/ dir:

### mkdir ./server

```{
  "domain": "https://dev-tripcarte-asia.us.auth0.com/api/v2/",
  "clientId": "5ee225700bf777001acb0cf4"
}
```
- Execute cli to deploy as production or development:

```
npm run serve or yarn serve

- App running at:
- Local:   http://localhost:8080/ 
- Network: http://192.168.0.114:8080/
```

## Third-Party Plugins
Vuexy Admin comes with useful third party plug-ins to help you building your app quickly.

### agGrid Table
Description: THE best javascript grid in the world

## Third-Party Plugins
Tripcarte Dashboard Portal Admin comes with useful third party plug-ins to help you building your app quickly.
### Technical Specification (Credits 🙏)<p></p>
<li>Powered by&nbsp;<a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">Vue</a></li>
<li><a href="https://cli.vuejs.org/" target="_blank" rel="noopener noreferrer">Vue CLI 3</a></li>
<li><a href="https://lusaxweb.github.io/vuesax/" target="_blank" rel="noopener noreferrer">Vuesax</a>&nbsp;- Vuejs component Library</li>
<li><a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">Tailwind</a></li>
<li><a href="https://vuex.vuejs.org/" target="_blank" rel="noopener noreferrer">Vuex</a></li>
<li><a href="https://router.vuejs.org/" target="_blank" rel="noopener noreferrer">Vue Router</a></li>
<li><a href="https://vuepress.vuejs.org/" target="_blank" rel="noopener noreferrer">VuePress</a></li>
<li><a href="https://github.com/axios/axios" target="_blank" rel="noopener noreferrer">Axios</a></li>
<li><a href="https://www.algolia.com/" target="_blank" rel="noopener noreferrer">Algolia Search</a></li>
<li><a href="https://www.algolia.com/doc/guides/building-search-ui/what-is-instantsearch/vue/" target="_blank" rel="noopener noreferrer">Vue InstantSearch</a></li>
<li><a href="https://auth0.com/" target="_blank" rel="noopener noreferrer">Auth0</a></li>
<li><a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer">Firebase</a></li>
<li>SASS Powered</li>
<li>Charts
<ul>
<li><a href="https://apexcharts.com/vue-chart-demos/" target="_blank" rel="noopener noreferrer">Apex Charts</a></li>
<li><a href="https://vue-chartjs.org/" target="_blank" rel="noopener noreferrer">Chartjs</a></li>
<li><a href="https://ecomfe.github.io/vue-echarts/demo/" target="_blank" rel="noopener noreferrer">eCharts</a></li>
</ul>
</li>
<li><a href="https://baianat.github.io/vee-validate/" target="_blank" rel="noopener noreferrer">VeeValidate</a></li>
<li><a href="https://github.com/BinarCode/vue-form-wizard" target="_blank" rel="noopener noreferrer">Vue Form Wizard</a></li>
<li><a href="https://github.com/Wanderxx/vue-fullcalendar" target="_blank" rel="noopener noreferrer">Vue Full Calendar</a></li>
<li><a href="https://sagalbot.github.io/vue-select/" target="_blank" rel="noopener noreferrer">Vue Select</a></li>
<li><a href="https://github.com/SortableJS/Vue.Draggable" target="_blank" rel="noopener noreferrer">Vue Draggable</a></li>
<li><a href="https://github.com/surmon-china/vue-video-player" target="_blank" rel="noopener noreferrer">Vue Video Player</a></li>
<li><a href="https://github.com/egoist/vue-feather-icons" target="_blank" rel="noopener noreferrer">Vue Feather Icons</a></li>
<li><a href="https://github.com/xkjyeah/vue-google-maps" target="_blank" rel="noopener noreferrer">Vue Google Maps</a></li>
<li><a href="https://kazupon.github.io/vue-i18n/" target="_blank" rel="noopener noreferrer">Vue I18n</a></li>
<li><a href="https://github.com/Degfy/vue-perfect-scrollbar" target="_blank" rel="noopener noreferrer">Vue Perfect Scollbar</a></li>
<li><a href="https://github.com/egoist/vue-prism-component" target="_blank" rel="noopener noreferrer">Vue Prism Component</a></li>
<li><a href="https://github.com/surmon-china/vue-quill-editor" target="_blank" rel="noopener noreferrer">Vue Quill Editor</a></li>
<li><a href="https://github.com/lusaxweb/vuecode" target="_blank" rel="noopener noreferrer">Vue Code</a></li>
<li><a href="https://github.com/charliekassel/vuejs-datepicker" target="_blank" rel="noopener noreferrer">Vue Datepicker</a></li>
<li><a href="https://github.com/pulsardev/vue-tour" target="_blank" rel="noopener noreferrer">Vue Tour</a></li>
<li><a href="https://github.com/caiofsouza/vue-backtotop" target="_blank" rel="noopener noreferrer">Vue Backtotop</a></li>
<li><a href="https://surmon-china.github.io/vue-awesome-swiper/" target="_blank" rel="noopener noreferrer">Vue Awesome Swiper - Image Slider</a></li>
<li><a href="https://github.com/Inndy/vue-clipboard2" target="_blank" rel="noopener noreferrer">Vue Clipboard</a></li>
<li><a href="https://github.com/leonardovilarinho/vue-acl" target="_blank" rel="noopener noreferrer">Vue ACL</a></li>
</ul>

## Files Structure

<pre class="language-text"><code>tdmp-merchants/
│
├── public/
│   ├── favicon.ico
│   ├── logo.png
│   ├── loader.css                          -&gt; Initial Loader CSS
│   └── index.html                          -&gt; Main HTML
│
├── src/
│   ├── acl/                                -&gt; Aceess Control
│   │                             
│   ├── assets/
│   |    ├── css/                           -&gt; Tailwind, Feather &amp; Loader CSS
│   |    ├── fonts/                         -&gt; Feather Font Icons
│   |    ├── images/
│   |    ├── scss/							-&gt; Template SCSS files, check folder structure below
│   |    └── utils/							-&gt; utilities folder
│   │
│   ├── auth/                               -&gt; Auth0 Service
│   ├── components/                         -&gt; Vuexy Admin custom components
│   ├── fake-db/         				    -&gt; Fake Database for mocking axios requests (Fake API Calls)
│   ├── filters/                            -&gt; VueJS filters
│   ├── firebase/                           -&gt; firebase config
│   ├── http/                               -&gt; Axios Mock Adapter Requests
│   ├── i18n/         					    -&gt; I18n
│   │
│   ├── layouts/            				
│   │    │
│   |    ├── components/					-&gt; Layout components
│   |    |    ├── customizer/				-&gt; Customizer component
│   |    |    ├── horizontal-nav-menu/      -&gt; Nav-Menu Component for Horizontal layout
│   |    |    ├── Navbar/		            -&gt; Navbar Components for Vertical &amp; Horizontal Layout + Fuzzy Search Items
│   |    |    ├── vertical-nav-menu/        -&gt; Nav-Menu Component for Vertical layout (Previously VxSidebar)
│   |    |    ├── vx-tooltip/               -&gt; Extended Tooltip Component (vx-tooltip)
│   |    |    ├── Logo.vue				    -&gt; Logo Component For Dynamic Color
│   |    |    ├── TheFooter.vue             -&gt; Footer Component
│   |    |    └── VxBreadcrumb.vue			-&gt; Breadcrumb Component
│   │    │
│   |    ├── full-page/						-&gt; Full page layout for pages like login
│   |    └── main/							-&gt; Main layout
│   │
│   ├── plugins/         					-&gt; theme plugins (auth0 currently)
│   ├── store/                              -&gt; Vuex Store
│   ├── vendor/              				-&gt; Vendor files
│   ├── views/              				-&gt; View files for all pages
│   ├── App.vue                             -&gt; Application main vue file
│   ├── axios.js             				-&gt; axios (configuration) file
│   ├── globalComponents.js 				-&gt; Gloablly registered components
│   ├── main.js            					-&gt; Application main js file
│   └── router.js   						-&gt; router file
│
├── .browserlistrc                          -&gt; Browser support
├── .editorconfig			                -&gt; Editor configuration file
├── .eslintrc.js                            -&gt; ESLint Configuration
├── .gitignore  			                -&gt; gitignore
├── auth_config.json	               		-&gt; Auth0 credentials
├── babel.config.js                         -&gt; Babel configuration
├── package.json                            -&gt; Package json
├── postcss.config.js		                -&gt; postcss configuration
├── README.md                               -&gt; Readme
├── tailwind-v0.js			                -&gt; v0.x Tailwind configuration
├── tailwind.config.js                      -&gt; Tailwind configuration
├── themeConfig.js			                -&gt; Vuexy Admin configuration
└── vue.config.js			                -&gt; VueJS configuration</code></pre>

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2020 © <a href="http://tripcarte.asia/" target="_blank">Tripcarte.Asia</a>

# About Tripcarte.Asia Dashboard Portal Project

At Netquest Solutions Sdn Bhd, our engineers constantly use latest framework, technologies and programming language. Keeping up to date with latest framework not only ensures rapid development time, but updated framework technologies are more protected from malwares, security threats and operating system incompatibility. For more info, please visit: https://netquestsolutions.com/
