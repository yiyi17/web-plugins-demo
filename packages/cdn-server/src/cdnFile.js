!(function () {
  'use strict'
  var e = {
      628: function (e, n, t) {
        var r = t(91),
          o = t.n(r),
          a = t(28),
          i = t.n(a)()(o())
        i.push([
          e.id,
          '.plugin-box {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 150px;\n  height: 150px;\n  margin-left: 20px;\n  font-size: 24px;\n  background-color: bisque;\n  border: 2px solid rgba(214, 23, 9, 0.667);\n}\n',
          '',
        ]),
          (n.Z = i)
      },
      28: function (e) {
        e.exports = function (e) {
          var n = []
          return (
            (n.toString = function () {
              return this.map(function (n) {
                var t = '',
                  r = void 0 !== n[5]
                return (
                  n[4] && (t += '@supports ('.concat(n[4], ') {')),
                  n[2] && (t += '@media '.concat(n[2], ' {')),
                  r &&
                    (t += '@layer'.concat(
                      n[5].length > 0 ? ' '.concat(n[5]) : '',
                      ' {'
                    )),
                  (t += e(n)),
                  r && (t += '}'),
                  n[2] && (t += '}'),
                  n[4] && (t += '}'),
                  t
                )
              }).join('')
            }),
            (n.i = function (e, t, r, o, a) {
              'string' == typeof e && (e = [[null, e, void 0]])
              var i = {}
              if (r)
                for (var c = 0; c < this.length; c++) {
                  var u = this[c][0]
                  null != u && (i[u] = !0)
                }
              for (var s = 0; s < e.length; s++) {
                var l = [].concat(e[s])
                ;(r && i[l[0]]) ||
                  (void 0 !== a &&
                    (void 0 === l[5] ||
                      (l[1] = '@layer'
                        .concat(l[5].length > 0 ? ' '.concat(l[5]) : '', ' {')
                        .concat(l[1], '}')),
                    (l[5] = a)),
                  t &&
                    (l[2]
                      ? ((l[1] = '@media '
                          .concat(l[2], ' {')
                          .concat(l[1], '}')),
                        (l[2] = t))
                      : (l[2] = t)),
                  o &&
                    (l[4]
                      ? ((l[1] = '@supports ('
                          .concat(l[4], ') {')
                          .concat(l[1], '}')),
                        (l[4] = o))
                      : (l[4] = ''.concat(o))),
                  n.push(l))
              }
            }),
            n
          )
        }
      },
      91: function (e) {
        e.exports = function (e) {
          return e[1]
        }
      },
      451: function (e) {
        var n = []
        function t(e) {
          for (var t = -1, r = 0; r < n.length; r++)
            if (n[r].identifier === e) {
              t = r
              break
            }
          return t
        }
        function r(e, r) {
          for (var a = {}, i = [], c = 0; c < e.length; c++) {
            var u = e[c],
              s = r.base ? u[0] + r.base : u[0],
              l = a[s] || 0,
              f = ''.concat(s, ' ').concat(l)
            a[s] = l + 1
            var d = t(f),
              p = {
                css: u[1],
                media: u[2],
                sourceMap: u[3],
                supports: u[4],
                layer: u[5],
              }
            if (-1 !== d) n[d].references++, n[d].updater(p)
            else {
              var v = o(p, r)
              ;(r.byIndex = c),
                n.splice(c, 0, {identifier: f, updater: v, references: 1})
            }
            i.push(f)
          }
          return i
        }
        function o(e, n) {
          var t = n.domAPI(n)
          return (
            t.update(e),
            function (n) {
              if (n) {
                if (
                  n.css === e.css &&
                  n.media === e.media &&
                  n.sourceMap === e.sourceMap &&
                  n.supports === e.supports &&
                  n.layer === e.layer
                )
                  return
                t.update((e = n))
              } else t.remove()
            }
          )
        }
        e.exports = function (e, o) {
          var a = r((e = e || []), (o = o || {}))
          return function (e) {
            e = e || []
            for (var i = 0; i < a.length; i++) {
              var c = t(a[i])
              n[c].references--
            }
            for (var u = r(e, o), s = 0; s < a.length; s++) {
              var l = t(a[s])
              0 === n[l].references && (n[l].updater(), n.splice(l, 1))
            }
            a = u
          }
        }
      },
      747: function (e) {
        var n = {}
        e.exports = function (e, t) {
          var r = (function (e) {
            if (void 0 === n[e]) {
              var t = document.querySelector(e)
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head
                } catch (e) {
                  t = null
                }
              n[e] = t
            }
            return n[e]
          })(e)
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            )
          r.appendChild(t)
        }
      },
      445: function (e) {
        e.exports = function (e) {
          var n = document.createElement('style')
          return e.setAttributes(n, e.attributes), e.insert(n, e.options), n
        }
      },
      53: function (e, n, t) {
        e.exports = function (e) {
          var n = t.nc
          n && e.setAttribute('nonce', n)
        }
      },
      755: function (e) {
        e.exports = function (e) {
          var n = e.insertStyleElement(e)
          return {
            update: function (t) {
              !(function (e, n, t) {
                var r = ''
                t.supports && (r += '@supports ('.concat(t.supports, ') {')),
                  t.media && (r += '@media '.concat(t.media, ' {'))
                var o = void 0 !== t.layer
                o &&
                  (r += '@layer'.concat(
                    t.layer.length > 0 ? ' '.concat(t.layer) : '',
                    ' {'
                  )),
                  (r += t.css),
                  o && (r += '}'),
                  t.media && (r += '}'),
                  t.supports && (r += '}')
                var a = t.sourceMap
                a &&
                  'undefined' != typeof btoa &&
                  (r +=
                    '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      ' */'
                    )),
                  n.styleTagTransform(r, e, n.options)
              })(n, e, t)
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1
                e.parentNode.removeChild(e)
              })(n)
            },
          }
        }
      },
      237: function (e) {
        e.exports = function (e, n) {
          if (n.styleSheet) n.styleSheet.cssText = e
          else {
            for (; n.firstChild; ) n.removeChild(n.firstChild)
            n.appendChild(document.createTextNode(e))
          }
        }
      },
    },
    n = {}
  function t(r) {
    var o = n[r]
    if (void 0 !== o) return o.exports
    var a = (n[r] = {id: r, exports: {}})
    return e[r](a, a.exports, t), a.exports
  }
  ;(t.n = function (e) {
    var n =
      e && e.__esModule
        ? function () {
            return e.default
          }
        : function () {
            return e
          }
    return t.d(n, {a: n}), n
  }),
    (t.d = function (e, n) {
      for (var r in n)
        t.o(n, r) &&
          !t.o(e, r) &&
          Object.defineProperty(e, r, {enumerable: !0, get: n[r]})
    }),
    (t.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n)
    }),
    (t.r = function (e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, {value: 'Module'}),
        Object.defineProperty(e, '__esModule', {value: !0})
    }),
    (t.nc = void 0)
  var r = {}
  !(function () {
    t.r(r),
      t.d(r, {
        init: function () {
          return S
        },
      })
    var e = require('react'),
      n = t.n(e),
      o = require('react-dom'),
      a = t.n(o),
      i = t(451),
      c = t.n(i),
      u = t(755),
      s = t.n(u),
      l = t(747),
      f = t.n(l),
      d = t(53),
      p = t.n(d),
      v = t(445),
      m = t.n(v),
      y = t(237),
      h = t.n(y),
      g = t(628),
      b = {}
    ;(b.styleTagTransform = h()),
      (b.setAttributes = p()),
      (b.insert = f().bind(null, 'head')),
      (b.domAPI = s()),
      (b.insertStyleElement = m()),
      c()(g.Z, b),
      g.Z && g.Z.locals && g.Z.locals
    var x = function () {
        return n().createElement(n().Fragment, null, 'Plugin Dialog')
      },
      S = function () {
        var e = document.getElementById('btn')
        null == e ||
          e.addEventListener('click', function () {
            a().render(
              n().createElement(x, null),
              document.querySelector('#dialog')
            )
          })
      }
  })()
  var o = exports
  for (var a in r) o[a] = r[a]
  r.__esModule && Object.defineProperty(o, '__esModule', {value: !0})
})()
