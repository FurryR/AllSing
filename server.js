// 注: 这是一个最简单的大市唱服务器，只提供“能用就行”的功能，欢迎改进。
// 注#2: 写得很烂，但考虑到项目有乐子性质，烂也罢了。
const http = require('http')
const fs = require('fs')

http
  .createServer(async function (req, res) {
    let contentType = 'text/plain'
    if (req.url === '/') req.url = '/index.html'
    console.log('📄', req.url)
    if (req.url.endsWith('.htm') || req.url.endsWith('.html'))
      contentType = 'text/html'
    else if (req.url.endsWith('.js')) contentType = 'application/javascript'
    else if (req.url.endsWith('.json')) contentType = 'application/json'
    else if (req.url.endsWith('.png')) contentType = 'image/png'
    else if (req.url.endsWith('.gif')) contentType = 'image/gif'
    else if (req.url.endsWith('.jpg')) contentType = 'image/jpeg'
    else if (req.url.endsWith('.wasm')) contentType = 'application/wasm'
    const query = req.url.indexOf('?')
    const path =
      './web' +
      decodeURIComponent(
        req.url.substring(0, query !== -1 ? query : req.url.length)
      )
    try {
      if (req.url.startsWith('.aspx')) throw new Error()
      const file = fs.readFileSync(path)
      res.writeHead(200, {
        'Content-Type': contentType,
        'Cross-Origin-Opener-Policy': 'same-origin',
        'Cross-Origin-Embedder-Policy': 'require-corp'
      })
      res.write(file)
    } catch {
      if (req.url.startsWith('/TSSGetParameter.aspx'))
        console.log(
          '-- 💫 正重定向至 https://dashichang.work/TSSGetParameter.aspx'
        )
      else console.error(`-- 🔽 在线同步 https://dashichang.work/${req.url}`)
      try {
        const data = await fetch(`https://dashichang.work/${req.url}`)
        if (data.ok) {
          const buffer = Buffer.from(await data.arrayBuffer())
          if (!req.url.startsWith('/TSSGetParameter.aspx'))
            fs.writeFileSync(path, buffer)
          res.writeHead(200, {
            'Content-Type': contentType,
            'Cross-Origin-Opener-Policy': 'same-origin',
            'Cross-Origin-Embedder-Policy': 'require-corp'
          })
          res.write(buffer)
        } else {
          res.writeHead(404)
          res.write('File not found :/')
        }
      } catch (e) {
        console.error('-- ❌ 发生错误')
        console.error(e)
        res.writeHead(500)
        res.write('Server Internal Error -- check Server Console')
      }
    }
    res.end()
  })
  .listen(8080)
console.log('🎤 大市唱 正在 http://127.0.0.1:8080/ 运行。')
