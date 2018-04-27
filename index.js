var ua = navigator.userAgent
var browser = {
  type: null,
  version: null
}

function isIE11(ua) {
  return ua.indexOf('Trident') !== -1 && ua.indexOf('rv') !== -1
}

function isIE(ua) {
  return ua.match(/msie/gi)
}

function isFireFox(ua) {
  return ua.match(/Firefox/i)
}

function isChrome(ua) {
  return ua.match(/Chrome/i)
}

function isSafari(ua) {
  return ua.match(/Version.*Safari/i)
}

if (isIE(ua) || isIE11(ua)) {
  browser.type = 'IE'
  if (isIE11(ua)) {
    browser.version = ua.match(/rv:(\d*)/i)[1]
  } else {
    browser.version = ua.match(/msie\s*(\d*)/)[1]
  }
} else if (isFireFox(ua)) {
  browser.type = 'Firefox'
  browser.version = ua.match(/Firefox\/(\d+)/i)[1]
} else if (isChrome(ua)) {
  browser.type = 'Chrome'
  browser.version = ua.match(/Chrome\/(\d+)/i)[1]
} else if (isSafari(ua)) {
  browser.type = 'Safari'
  browser.version = ua.match(/Version.*Safari\/(\d*)/i)[1]
}

module.exports = {
  browserType: browser.type,
  browserVersion: browser.version
}
