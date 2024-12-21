// ==UserScript==
// @name         florrehoh hackering
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  take over the florr.io better now!
// @author       m28 (so real)
// @match        https://florr.io/*
// @icon         data:image/gif;base64,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
// @grant        unsafeWindow
// @run-at       document-start
// @require      https://unpkg.com/string-similarity@4.0.4/umd/string-similarity.min.js
// @license      AGPL
// ==/UserScript==

/*
https://github.com/cat2d2/florr.io
⚠️ Best paired with ui.js (warning emoji just to catch your attention, script will work without)
*/

(function() {
  'use strict';
  const client = {
    autoRespawn: {
      enabled: 1,
      spawnBiome: 'Garden'
    },
    bypassAfkCheck: {
      movementCheck: 1,
      afkButton: 1,
    },
    autoGrind: {
     enabled: 1,
    },
    tracers: 1,
  }

unsafeWindow.client = client; // for ui

  let respawnState = 0
  let lastCheck = 0
  const _console = {
    _log: window.console.log,
    log: function() {
      this._log(`%c[https://github.com/cat2d2/florr.io]`, `color: rgb(25, 156, 35); background: rgb(200, 255, 200)`, ...arguments)
    }
  }
  const multiply = function(t,l){let e=t.length,n=t[0].length,$=l[0].length,r=Array(e);for(let f=0;f<e;++f){let o=Array($);r[f]=o;let g=t[f];for(let h=0;h<$;++h){let u=0;for(let i=0;i<n;++i)u+=g[i]*l[i][h];o[h]=u}}return r}

  let identity = function(a, b, c) {
    return Reflect.apply(a, b, c)
  }
  let beforeAnimationFrame = identity
  let tracers = {}, addTracer = function(t, color) {
    if(!color) { color = '#000000' } // if no color
    if(!tracers[color]) { tracers[color] = [] }
    tracers[color].push(t)
  }, mobs = []
  const parseColor = function(str) { // converter
    return [parseInt(str[1] + str[2], 16), parseInt(str[3] + str[4], 16), parseInt(str[5] + str[6], 16)]
  }
  let mouse = {
    dx: 0,
    dy: 0
  }
  const main = function() {
    const canvas = document.getElementById('canvas')
    canvas._addEventListener('mousemove', function(e) {
      mouse.dx = (e.clientX - window.innerWidth * 0.5)
      mouse.dy = (e.clientY - window.innerHeight * 0.5)
    })
    const ctx = canvas.getContext('2d')
    beforeAnimationFrame = function(a, b, c) {
      let n = performance.now()
      let w = canvas.width * 0.5, h = canvas.height * 0.5
      let ir = 1 / window.devicePixelRatio
      let dw = w * ir, dh = h * ir
      if(client.autoGrind.enabled) {
        let closestMob = false, closestDistance = -1
        for(let i=mobs.length-1;i>=0;i--) {
          let m = mobs[i]
          let dx = m[0] - w, dy = m[1] - h
          let d = dx * dx + dy * dy
          if(d < closestDistance || closestDistance < 0) {
            closestDistance = d
            closestMob = [dx, dy]
          }
        }
        if(closestMob) {
          let d = 100 * (closestDistance < 1 ? 1 : 1 / Math.sqrt(closestDistance))
          mouse.dx = closestMob[0] * d
          mouse.dy = closestMob[1] * d
        }
      }
      if(!buttons.Ready || !client.autoRespawn.enabled) { respawnState = 0 }
      if(n - lastCheck > 100) {
        lastCheck = n
        !function() {
          if(client.autoRespawn.enabled) {
            if(respawnState < 1) {
              if(buttons[client.autoRespawn.spawnBiome]) {
                if(clickButton(client.autoRespawn.spawnBiome)) {
                  respawnState ++
                }
                return
              }
            } else {
              if(buttons.Ready) {
                clickButton('Ready')
                return
              }
            } if(buttons.Continue) {
              clickButton('Continue')
              respawnState = 0
            }
          }
          if(client.bypassAfkCheck.afkButton) {
            // broken
            clickButton(`I'm here`)
          }
        }()
      } else if(!buttons.Continue && (client.bypassAfkCheck.movementCheck || client.autoGrind.enabled)) {
        let a = (n / 1000) % (2 * Math.PI)
        let tx = mouse.dx + dw + Math.sin(a), ty = mouse.dy + dh + Math.cos(a)
        listeners.mousemove({
          clientX: tx,
          screenX: tx,
          clientY: ty,
          screenY: ty
        })
      }
      let transform = ctx.getTransform()
      ctx.translate(w, h)
      ctx.lineCap = 'round'
      ctx.miterLimit = 1.68
      ctx.font = '14px Ubuntu'
      for(let color in tracers) {
        let o = tracers[color]
        for(let i=o.length-1;i>=0;i--) {
          let t = o[i]
          let l = 1, a = 1
          if(t[2] > 3) {
            l += (t[2] - 3) * 0.5
          } else {
            a = (t[2] + 1) / 4
          }
          let j = a
          a *= 0.5
          let r = parseColor(color)
          ctx.strokeStyle = `rgba(${r[0]}, ${r[1]}, ${r[2]}, ${a})`
          ctx.setLineDash([10, 15])
          ctx.lineWidth = l
          ctx._beginPath()
          let dx = t[0] - w, dy = t[1] - h
          ctx._moveTo(dx, dy)
          let d = dx * dx + dy * dy
          ctx._lineTo(0, 0)
          ctx._stroke()
          a *= 0.25
          ctx.strokeStyle = `rgba(${r[0]}, ${r[1]}, ${r[2]}, ${a})`
          ctx.setLineDash([])
          ctx._stroke()
          ctx._closePath()
          if(d > 300 * 300) {
            let rd = Math.sqrt(d)
            if(rd < 350) {
              j *= (rd - 300) * 0.02
            }
            if(j > 0.05) {
              d = 1 / rd
              let y = 300 + (rd - 300) / (rd - 100) * 100
              let tx = dx * d * y
              let ty = dy * d * y + 7
              if(r[0] === 0 && r[1] === 0 && r[2] === 0) { r[0] = r[1] = r[2] = 255 }
              ctx.fillStyle = `rgb(${r[0]}, ${r[1]}, ${r[2]})`
              ctx.strokeStyle = '#000000'
              ctx.lineWidth = 1.68
              j *= j
              if(j < 0.95) { ctx.globalAlpha = j }
              let text = '' + Math.round(rd / 100)
              ctx.textAlign = 'center'
              ctx._strokeText(text, tx, ty)
              ctx.lineWidth = 10
              ctx._fillText(text, tx, ty)
              if(j < 0.95) { ctx.globalAlpha = 1 }
            }
          }
        }
      }
      ctx.setTransform(transform)
      let f = c[0]
      if(f.proxy) { c[0] = f.proxy } else {
        c[0] = f.proxy = new Proxy(f, { apply:function(a, b, c) {
          lbuttons = buttons
          buttons = {}
          tracers = {}
          mobs = []
          window.l = listeners
          window.b = buttons
          return Reflect.apply(a, b, c)
        } })
      }
      return Reflect.apply(a, b, c)
    }
  }
  window.console.log = new Proxy(window.console.log, { apply:function(a, b, c) {
    return Reflect.apply(a, b, c)
  } })
  const untransform = function(x, y, t) {
    let r = multiply([[x, y, 1]], [[t.a, t.b, 0], [t.c, t.d, 0], [t.e, t.f, 1]])[0]
    return [r[0] / r[2], r[1] / r[2]]
  }
  let lastText = [], lastWhiteText = []
  let rarities = {
    Common: {
      name: 'Common',
      color: '#7eef6d',
      index: 0
    },
    Unusual: {
      name: 'Unusual',
      color: '#ffe65d',
      index: 1
    },
    Rare: {
      name: 'Rare',
      color: '#4d52e3',
      index: 2
    },
    Epic: {
      name: 'Epic',
      color: '#861fde',
      index: 3
    },
    Legendary: {
      name: 'Legendary',
      color: '#de1f1f',
      index: 4
    },
    Mythic: {
      name: 'Mythic',
      color: '#1fdbde',
      index: 5
    },
    Ultra: {
      name: 'Ultra',
      color: '#ff2b75',
      index: 6
    },
    Super: {
      name: 'Super',
      color: '#000000',
      index: 7
    }
  }
  let colors = {}
  for(let r in rarities) {
    colors[rarities[r].color] = rarities[r]
  }
  const textTransform = function(text, ctx) {
    if(text === 'Plinko') {
      text = 'scammer'
    }
    return text
  }
  let buttons = {}, lbuttons = {}
  window.CanvasRenderingContext2D.prototype._measureText = window.CanvasRenderingContext2D.prototype.measureText
  window.CanvasRenderingContext2D.prototype.measureText = new Proxy(window.CanvasRenderingContext2D.prototype.measureText, { apply:function(a, b, c) {
    c[0] = textTransform(c[0], b)
    return Reflect.apply(a, b, c)
  } })
  window.CanvasRenderingContext2D.prototype._strokeText = window.CanvasRenderingContext2D.prototype.strokeText
  window.CanvasRenderingContext2D.prototype.strokeText = new Proxy(window.CanvasRenderingContext2D.prototype.strokeText, { apply:function(a, b, c) {
    c[0] = textTransform(c[0], b)
    return Reflect.apply(a, b, c)
  } })
  window.CanvasRenderingContext2D.prototype._fillText = window.CanvasRenderingContext2D.prototype.fillText
  window.CanvasRenderingContext2D.prototype.fillText = new Proxy(window.CanvasRenderingContext2D.prototype.fillText, { apply:function(a, b, c) {
    if(lastText[1]) {
      if(colors[b.fillStyle] && b.globalAlpha >= 1 && lastPaths[0][3] && client.tracers) {
        let t = lastPaths[0]
        if(c[0].startsWith('Lvl ') && parseInt(c[0].slice(4)) >= 0) {
          t = untransform((t[0] + t[1]) * 0.5, t[2], t[3])
          addTracer([t[0], t[1], colors[b.fillStyle].index], '#000000')
          lastPaths = [[], [], []]
        } else if(rarities[c[0]]) { // includes summons
          t = untransform((t[0] + t[1]) * 0.5, t[2], t[3])
          addTracer([t[0], t[1], colors[b.fillStyle].index], b.fillStyle)
          mobs.push([t[0], t[1]])
          lastPaths = [[], [], []]
        }
      }
    }
    let bd = buttonData[c[0]]
    if(bd && (!bd.color || bd.color === b.fillStyle) && (!bd.font || bd.font === b.font)) {
      let t = untransform(c[1], c[2], b.getTransform())
      let o = lbuttons[c[0]]
      let n = buttons[c[0]] = {
        x: t[0],
        y: t[1],
        d: 1,
        s: performance.now(), // **WAIT BEFORE CLICKING A BUTTON** Removing this will
                              // probably get you banned faster
        fillStyle: b.fillStyle,
        font: b.font
      }
      if(o) {
        n.d = Math.abs(n.x - o.x) + Math.abs(n.y - o.y)
        n.s = o.s
      }
    }
    if(c[0] === `I'm here` && client.bypassAfkCheck.afkButton) {
      afkButton(untransform(c[1], c[2], b.getTransform()))
    }
    lastText = [c, b.fillStyle]
    if(b.fillStyle === '#ffffff') {
      lastWhiteText = [c, b.fillStyle]
    }
    c[0] = textTransform(c[0], b)
    return Reflect.apply(a, b, c)
  } })
  let clicking = false
  const afkButton = function(t) {
    if(clicking) { return }
    clicking = true
    setTimeout(function() {
      clicking = false
      clickAt(t.x, t.y)
    }, 500 + 2000 * Math.random())
  }
  let buttonData = {
    Ready: {
      color: '#ffffff',
      font: '27.5px Ubuntu'
    },
    Garden: {
      color: '#ffffff',
      font: '16px Ubuntu'
    },
    Desert: {
      color: '#ffffff',
      font: '16px Ubuntu'
    },
    Ocean: {
      color: '#ffffff',
      font: '16px Ubuntu'
    },
    Jungle: {
      color: '#ffffff',
      font: '16px Ubuntu'
    },
    Hel: {
      color: '#ffffff',
      font: '16px Ubuntu'
    },
    'Play as guest': {},
    Continue: {
      color: '#ffffff',
    }
  }
  let lastPaths = [[], [], []], lastFill = ''
  let path = [], topPath = false, addSegment = function(s) {
    if(topPath) {
      topPath.push(s)
    } else {
      path.push(topPath = [s])
    }
  }
  window.CanvasRenderingContext2D.prototype._beginPath = window.CanvasRenderingContext2D.prototype.beginPath
  window.CanvasRenderingContext2D.prototype.beginPath = new Proxy(window.CanvasRenderingContext2D.prototype.beginPath, { apply:function(a, b, c) {
    path = []
    topPath = false
    return Reflect.apply(a, b, c)
  } })
  window.CanvasRenderingContext2D.prototype._moveTo = window.CanvasRenderingContext2D.prototype.moveTo
  window.CanvasRenderingContext2D.prototype.moveTo = new Proxy(window.CanvasRenderingContext2D.prototype.moveTo, { apply:function(a, b, c) {
    addSegment({
      type: 'moveTo',
      x: c[0],
      y: c[1]
    })
    return Reflect.apply(a, b, c)
  } })
  window.CanvasRenderingContext2D.prototype._lineTo = window.CanvasRenderingContext2D.prototype.lineTo
  window.CanvasRenderingContext2D.prototype.lineTo = new Proxy(window.CanvasRenderingContext2D.prototype.lineTo, { apply:function(a, b, c) {
    addSegment({
      type: 'lineTo',
      x: c[0],
      y: c[1]
    })
    return Reflect.apply(a, b, c)
  } })
  window.CanvasRenderingContext2D.prototype._closePath = window.CanvasRenderingContext2D.prototype.closePath
  window.CanvasRenderingContext2D.prototype.closePath = new Proxy(window.CanvasRenderingContext2D.prototype.closePath, { apply:function(a, b, c) {
    path = []
    topPath = false
    return Reflect.apply(a, b, c)
  } })
  window.CanvasRenderingContext2D.prototype._stroke = window.CanvasRenderingContext2D.prototype.stroke
  window.CanvasRenderingContext2D.prototype.stroke = new Proxy(window.CanvasRenderingContext2D.prototype.stroke, { apply:function(a, b, c) {
    if(path.length === 1 && path[0].length === 2 && path[0][0].y === path[0][1].y) {
      lastPaths[0] = lastPaths[1]
      lastPaths[1] = lastPaths[2]
      lastPaths[2] = [path[0][0].x, path[0][1].x, path[0][0].y, b.getTransform()]
    }
    return Reflect.apply(a, b, c)
  } })
  window.CanvasRenderingContext2D.prototype._fill = window.CanvasRenderingContext2D.prototype.fill
  window.CanvasRenderingContext2D.prototype.fill = new Proxy(window.CanvasRenderingContext2D.prototype.fill, { apply:function(a, b, c) {
    lastFill = b.fillStyle
    return Reflect.apply(a, b, c)
  } })
  window.requestAnimationFrame = new Proxy(window.requestAnimationFrame, { apply:function(a, b, c) {
    return beforeAnimationFrame(a, b, c)
  } })
  const interval = setInterval(function() {
    if(document.body) {
      clearInterval(interval)
      main()
    }
  })
  if(0) {
    window.WebAssembly.instantiateStreaming = new Proxy(window.WebAssembly.instantiateStreaming, { apply:function(a, b, c) {
      let d = new Response()
      c[0] = d
      return Reflect.apply(a, b, c)
    } })
  }
  const listeners = {}, trigger = function(type, data) {
    if(listeners[type]) { listeners[type](data) }
  }
  const listenerApply = function(a, b, c) {
    if(c[0] === 'mousemove') {
      listeners.mousemove = c[1]
    }
    if(c[0] === 'blur' || c[0] === 'focus' || c[0] === 'visibilitychange') {
      return
    }
    if(b && b.id === 'canvas') {
      if(c[0] === 'mousedown') {
        listeners.mousedown = c[1]
      }
    }
    if(c[0] === 'mouseup') {
      listeners.mouseup = c[1]
    }
    if(c[0] === 'keydown') {
      listeners.keydown = c[1]
    }
    if(c[0] === 'keyup') {
      listeners.keyup = c[1]
    }
    return Reflect.apply(a, b, c)
  }
  const clickAt = function(x, y) {
    let ir = 1 / window.devicePixelRatio
    x *= ir
    y *= ir
    listeners.mousemove({
      clientX: x,
      screenX: x,
      clientY: y,
      screenY: y
    })
    listeners.mousedown({
      preventDefault: function() {},
      clientX: x,
      clientY: y
    })
    listeners.mouseup({
      preventDefault: function() {},
      clientX: x,
      clientY: y
    })
  }
  const clickButton = function(text) {
    if(buttons[text]) {
      if(buttons[text].d > 0.01) {
        return
      }
      let n = performance.now()
      if(n - buttons[text].s < 2000) {
        return
      }
      clickAt(buttons[text].x, buttons[text].y)
      return true
    }
  }
  HTMLElement.prototype._addEventListener = HTMLElement.prototype.addEventListener
  HTMLElement.prototype.addEventListener = new Proxy(HTMLElement.prototype.addEventListener, { apply:listenerApply })
  window.addEventListener = new Proxy(window.addEventListener, { apply:listenerApply })
  document.addEventListener = new Proxy(document.addEventListener, { apply:listenerApply })
  localStorage.florrio_tutorial = 'complete'
  if (client.autoGrind.enabled === 1) {
    localStorage.florrio_keyboard_control = 'N';
  }
})();


