// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import './css/main.css'

const fontsCss = `
/* acme-regular - latin */
@font-face {
  font-family: 'Acme';
  font-style: normal;
  font-weight: 400;
  src: url('/fonts/acme-v11-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/acme-v11-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/acme-v11-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/acme-v11-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('/fonts/acme-v11-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/acme-v11-latin-regular.svg#Acme') format('svg'); /* Legacy iOS */
}
`

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  head.style.push({
    type: 'text/css',
    cssText: fontsCss,
  })
}
