<div align="center">

# 《大市唱》

> 否则赵磊将和他诉讼到底。 -- 《大市唱》

</div>

为了更方便地使用《大市唱》(版本 2024AprilK)，我在询问 ChatGPT 后让何同学用随机数发生器远程控制我的键盘，用 Hex Editor “随机”了一个《大市唱》并顺带服务器。

秉持着开源精神，现在分享给各位热爱调声的集美们学习之用，共同探究随机数发生器在前沿虚拟歌手/创作中的重要作用。

## FAQ

> 真是随机数发生器么？

或许是。浏览 Javascript 逻辑以及 wat（适用于 wasm 的汇编）的内容后，可以确认并没有采用任何 AI 技术，但无法说就是单纯的随机数发生器。更详细的结果可能需要进一步的反编译才能确定，目前并没有支持这样做的工具。

> 作者技术力到底怎么样？

一般。虽然对于相关算法、逻辑的掌握程度可能很强，但各种编写 HTML/Javascript 乃至 emscripten 的使用都存在大量过时用法及风格错误，不使用格式化，且在移植时甚至找不到一部分变量的引用，好似那个学完大专信息技术 Java 或 ASP.NET 网站编程后写出来的代码。

## 启动服务器

附带的 `server.js` 需要有 Node.js 才能正常启动。

在安装有 Node.js 的情况下，输入：

```bash
node server.js
```

即可启动《大市唱》网页版服务器。

此方式在 Node.js v21.6.1 测试通过，以前的版本可能需要适当添加兼容参数。

## 《大市唱》侵犯著作权

`web/WebAssembly/interactive_javascript.wasm` 中使用（**静态链接**）了（修改过的？） TimiDity++，其以 **GPL** 形式开源，而赵磊这位电脑中级高手不仅未以 GPL 开源协议放出项目的源代码，还未在作品中标注使用，十分呃呃。

二进制字节码中的版本格式化信息：

```
TiMidity++ %s%s -- MIDI to WAVE converter and player
Copyright (C) 1999-2018 Masanao Izumo <iz@onicos.co.jp>
Copyright (C) 1995 Tuukka Toivonen <tt@cgs.fi>

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 2 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA 02111-1307 USA
```

## 警告

本作品仅供学习交流之用，请于下载后 24 小时自行删除。

《大市唱》使用 TimiDity++ 作为核心组件，侵犯了 TimiDity++ 全体贡献者的著作权，并且未标注相关使用，其本身著作权不受法律保护 (_此段需要具体的法律依据_)。本仓库作者不具有营利目的，无法构成侵犯著作权罪。

如果发生任何正式的法律纠纷，将立刻冻结或删除本仓库。

## 一言

这波啊，这波属于是 16 岁民科被 15 岁无名 five 专业对口了。

## 版权声明

本仓库以 Unlicense 开源协议分发——您可以任意使用、改编、二次分发本仓库的所有内容，但本仓库的作者不承担任何可能导致的侵权责任或提供任何保证。
