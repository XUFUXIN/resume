;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-yonghu" viewBox="0 0 1000 1000">'+
      ''+
      '<path d="M520.5344 489.0684c107.1038 0 216.1113-96.5685 216.1113-198.7383S632.8469 84.1969 525.7441 84.1969c-107.0478 0-213.5919 106.4838-213.5919 208.5976C312.1522 394.9642 413.4296 489.0684 520.5344 489.0684zM139.1723 787.0084c13.5564-79.8209 26.7759-76.628 53.5519-153.2551 26.7759-76.628 107.1038-102.1697 160.6557-102.1697 107.1038 0 106.6561 0 214.2075 0 88.4497 0 19.2687 0 133.8797 0 53.5519 0 107.1038 25.5427 133.8797 102.1697s26.7759 51.0854 53.5519 153.2551C920.4926 916.6255 117.3822 915.1136 139.1723 787.0084z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-xiangji" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M548.785152 435.293184c-61.336576 0-111.17056 51.607552-111.17056 115.337216 0 63.659008 49.833984 115.305472 111.17056 115.305472 61.45024 0 111.245312-51.646464 111.245312-115.305472C660.030464 486.899712 610.236416 435.293184 548.785152 435.293184zM882.47808 243.23584 437.583872 243.23584c0-42.566656-33.007616-76.79488-74.04544-76.79488l-74.037248 0c-41.0368 0-74.043392 34.229248-74.043392 76.79488l-74.365952 0c-40.676352 0-74.043392 34.231296-74.043392 76.792832l0 461.094912c0 42.524672 33.36704 77.128704 74.043392 77.128704l741.387264 0c40.676352 0 74.041344-34.604032 74.041344-77.128704L956.520448 320.028672C956.519424 277.467136 923.154432 243.23584 882.47808 243.23584zM548.967424 742.724608c-102.376448 0-185.428992-86.140928-185.428992-192.323584 0-105.837568 83.053568-191.97952 185.428992-191.97952s185.10336 86.142976 185.10336 191.97952C734.070784 656.58368 651.343872 742.724608 548.967424 742.724608z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-duanxin" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M921.408 213.333333 938.986667 231.402667 935.616 234.666667 960 234.666667 960 789.333333 64 789.333333 64 234.666667 86.144 234.666667 83.52 231.978667 102.698667 213.333333 42.666667 213.333333 42.666667 810.666667 981.333333 810.666667 981.333333 213.333333Z"  ></path>'+
      ''+
      '<path d="M86.144 234.666667 935.616 234.666667 938.986667 231.402667 921.408 213.333333 102.698667 213.333333 83.52 231.978667Z"  ></path>'+
      ''+
      '<path d="M938.986667 231.402667 498.773333 659.221333 83.52 231.978667 102.698667 213.333333 75.413333 213.333333 56.213333 232 497.962667 686.528 966.293333 231.381333 948.757333 213.333333 921.408 213.333333Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-dingwei" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M927.721472 423.964672C927.721472 189.810688 741.597184 0 512 0 282.404864 0 96.280576 189.810688 96.280576 423.964672c0 7.432192 0.718848 14.616576 1.093632 21.891072-0.342016 3.592192-1.093632 7.057408-1.093632 10.743808 0 260.947968 383.744 556.531712 383.744 556.531712s31.977472 24.451072 63.956992 0c31.977472-24.48384 383.741952-295.583744 383.741952-556.531712 0-3.6864-0.74752-7.151616-1.091584-10.743808C927.004672 438.581248 927.721472 431.396864 927.721472 423.964672zM512 587.071488c-88.315904 0-159.891456-73.0112-159.891456-163.106816 0-90.032128 71.575552-163.045376 159.891456-163.045376 88.317952 0 159.893504 73.013248 159.893504 163.045376C671.893504 514.060288 600.317952 587.071488 512 587.071488z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-iconfontdianhua" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M644.521 606.099c0 0-35.088-14.242-61.7 27.423 0 0-21.392 36.811-60.429 3.765 0 0-104.555-75.515-152.591-174.36 0 0-10.209-17.055 12.975-25.899 0 0 61.695-27.415 63.352-58.186L366.12 189.108c0 0-19.203-33.65-60.018-3.382 0 0-73.033 35.885-99.902 76.117 0 0-3.013 6.603-3.287 15.545-0.921 29.976 4.777 57.168 4.777 57.168S290.339 710.928 661.156 854c0 0 118.999 10.953 156.737-114.633l1.695-30.779L644.521 606.099 644.521 606.099zM644.521 606.099"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
