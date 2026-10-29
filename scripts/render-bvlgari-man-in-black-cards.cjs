const fs = require('fs');
const path = require('path');
const {pathToFileURL} = require('url');
const {chromium} = require('../.tools/card-render/node_modules/playwright');
const root = path.resolve(__dirname, '..');
const out = path.join(root, 'output/cards/finais/bvlgari-man-in-black');
const asset = path.join(root, 'output/images/bvlgari-man-in-black-eau-de-parfum-transparent.png');
const logo = path.join(root, 'references/logoFullore.png');
const source = fs.readFileSync(path.join(root, 'output/cards/bvlgari-man-in-black-eau-de-parfum-card.md'), 'utf8');
const sections = source.split(/^## \d — /m).slice(1);
const slugs = ['essencia', 'anatomia', 'harmonias', 'atmosfera', 'uso'];
const labels = ['Essência', 'Anatomia', 'Harmonias', 'Atmosfera', 'Uso'];
const subtitles = ['Uma flor na penumbra', 'Mapa das notas', 'Relações internas', 'Luz, matéria e atmosfera', 'Observar texturas'];
const esc = s => s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const rel = p => path.relative(out, p).replaceAll('\\', '/');
if (!fs.existsSync(asset) || !fs.existsSync(logo)) throw Error('Asset e logo original obrigatórios.');
if (sections.length !== 5) throw Error('Esperados cinco cards.');
fs.mkdirSync(out, {recursive:true});
const css = `
*{box-sizing:border-box}html,body{margin:0;width:960px;height:1280px}body{background:#f8f5ed;color:#343738;font-family:Arial,sans-serif}
article{position:relative;width:960px;height:1280px;padding:54px 68px;background:radial-gradient(ellipse at 25% 48%,#fffdf7 0,transparent 65%),#f8f5ed}
.paper{position:absolute;inset:0;opacity:.045;pointer-events:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' opacity='.5' filter='url(%23n)'/%3E%3C/svg%3E")}
header,.hero,.modules,footer{position:relative}.eyebrow{display:flex;justify-content:space-between;border-bottom:1px solid #bab6b3;padding-bottom:17px;font-size:12px;letter-spacing:3px;color:#625c68}
h1{font:normal 72px/1 Georgia,serif;letter-spacing:1px;margin:29px 0 12px}.product{font-size:18px;letter-spacing:1px;color:#66606b}.subtitle{font:italic 26px/1.25 Georgia,serif;color:#86634d;margin-top:19px}
.hero{height:424px;margin:12px auto 16px;display:flex;justify-content:center;align-items:center}.hero img{width:460px;height:424px;object-fit:contain}
.modules{display:grid;grid-template-columns:1fr 1fr;gap:20px 40px}.module{border-top:1px solid #cbbeb0;padding-top:12px}h2{font:normal 24px/1.2 Georgia,serif;color:#78553e;margin:0 0 8px}p{font:19px/1.4 Arial,sans-serif;margin:0;text-wrap:pretty}.module:last-child:nth-child(odd){grid-column:1/-1}.main .module:last-child p{font-size:17px}.main .module:last-child h2{font-size:21px}
footer{position:absolute;bottom:40px;left:68px;right:68px;height:120px;border-top:1px solid #bab6b3;display:flex;align-items:center;justify-content:space-between}.brand{width:170px;height:110px;object-fit:contain}.collection{font-size:11px;line-height:1.8;letter-spacing:1.7px;color:#6b666c}.collection strong{font-weight:normal;color:#3d3a40}.page-no{font:italic 20px Georgia,serif;color:#86634d;margin-top:9px}
.detail .hero{position:absolute;left:56px;top:340px;width:396px;height:620px;margin:0}.detail .hero img{width:396px;height:620px}.detail .modules{position:absolute;left:493px;right:68px;top:340px;display:flex;flex-direction:column;gap:23px}.detail h2{font-size:27px}.detail p{font-size:22px;line-height:1.42}.detail .module:last-child p{font-size:20px}.detail .module:last-child{border-top-color:#af937a}.n4 .modules{gap:28px}.n4 h2{font-style:italic}.n5 .modules{top:312px;gap:19px}.n5 h2{font-size:24px}.n5 p{font-size:20px;line-height:1.38}.n5 .hero{top:365px}.image-note{position:absolute;left:68px;top:1000px;width:370px;font:italic 17px/1.4 Georgia,serif;color:#777078}
`;
(async()=>{
 const browser = await chromium.launch({executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',headless:true,args:['--allow-file-access-from-files']});
 try {
 const page = await browser.newPage({viewport:{width:960,height:1280},deviceScaleFactor:3});
 const report=[];
 for(let i=0;i<sections.length;i++){
  const blocks=sections[i].split(/^### /m).slice(1).map(b=>{const [heading,...lines]=b.trim().split(/\r?\n/);return {heading,body:lines.join(' ').trim()};});
  const modules=blocks.slice(i===0?2:1);
  const html=`<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><title>Man in Black · ${labels[i]} · Perfume Atlas</title><style>${css}</style></head><body><article class="${i===0?'main':'detail'} n${i+1}"><div class="paper"></div><header><div class="eyebrow"><span>PERFUME ATLAS</span><span>ESTUDO OLFATIVO · ${String(i+1).padStart(2,'0')} / 05</span></div><h1>Man in Black</h1><div class="product">BVLGARI · EAU DE PARFUM · LEITURA CLÁSSICA</div><div class="subtitle">${esc(subtitles[i])}</div></header><figure class="hero"><img src="${rel(asset)}" alt="Tuberosa branca, rizoma, tonka, resina, madeira e uma dobra castanha como representação de notas olfativas."></figure><div class="modules">${modules.map(b=>`<section class="module"><h2>${esc(b.heading)}</h2><p>${esc(b.body)}</p></section>`).join('')}</div>${i?'<div class="image-note">Representação das notas olfativas.<br>Não identifica os ingredientes do frasco.</div>':''}<footer><div class="collection"><strong>ARQUIVO OLFATIVO CONTEMPORÂNEO</strong><br>ESPECIAL · FRAGRÂNCIAS COMPOSTAS<div class="page-no">${String(i+1).padStart(2,'0')} — ${labels[i]}</div></div><img class="brand" src="${rel(logo)}" alt="Fullore — Essências da natureza"></footer></article></body></html>`;
  const name=`bvlgari-man-in-black-${String(i+1).padStart(2,'0')}-${slugs[i]}`;
  fs.writeFileSync(path.join(out,name+'.html'),html);
  await page.goto(pathToFileURL(path.join(out,name+'.html')).href);
  await page.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.images].map(i=>i.decode()));});
  const validation=await page.evaluate(()=>{
   const img=document.querySelector('.hero img'),canvas=document.createElement('canvas');canvas.width=img.naturalWidth;canvas.height=img.naturalHeight;
   const ctx=canvas.getContext('2d');ctx.drawImage(img,0,0);const data=ctx.getImageData(0,0,canvas.width,canvas.height).data;let transparent=0,opaque=0,partial=0;
   for(let n=3;n<data.length;n+=4){if(data[n]===0)transparent++;else if(data[n]===255)opaque++;else partial++;}
   const footer=document.querySelector('footer').getBoundingClientRect();const modules=[...document.querySelectorAll('.module')];
   const overflow=modules.some(m=>m.getBoundingClientRect().bottom>footer.top-20||m.scrollWidth>m.clientWidth+1);
   const box=img.getBoundingClientRect();const scale=Math.min(box.width*3/img.naturalWidth,box.height*3/img.naturalHeight);
   return {nativeWidth:img.naturalWidth,nativeHeight:img.naturalHeight,transparentPixels:transparent,opaquePixels:opaque,partialAlphaPixels:partial,alphaValid:transparent>data.length/4*.05&&opaque>0,overflow,logoLoaded:document.querySelector('.brand').naturalWidth>0,assetScale:scale,modulesBottom:Math.max(...modules.map(m=>m.getBoundingClientRect().bottom)),footerTop:footer.top};
  });
  if(!validation.alphaValid||validation.overflow||!validation.logoLoaded)throw Error(name+' '+JSON.stringify(validation));
  const png=path.join(out,name+'.png');await page.screenshot({path:png});
  const bytes=fs.readFileSync(png);const width=bytes.readUInt32BE(16),height=bytes.readUInt32BE(20);
  if(width!==2880||height!==3840)throw Error('Dimensão inválida');
  report.push({file:name+'.png',width,height,...validation,scaling:'HTML/CSS em 3x. Escala do asset registrada; interpolação não acrescenta detalhe nativo.'});
 }
 fs.writeFileSync(path.join(out,'export-report.json'),JSON.stringify(report,null,2));
 const thumbs=report.map(r=>`<figure><img src="${r.file}" alt="${r.file}"><figcaption>${r.file.replace('bvlgari-man-in-black-','').replace('.png','')}</figcaption></figure>`).join('');
 const index=`<!doctype html><html lang="pt-BR"><meta charset="utf-8"><title>Man in Black — coleção</title><style>body{margin:0;padding:32px;background:#e8e3dc;color:#38333b;font-family:Arial}h1{font:36px Georgia}main{display:flex;gap:16px}figure{margin:0;width:240px}img{width:240px;display:block}figcaption{font-size:12px;margin-top:10px}</style><h1>Man in Black · Perfume Atlas</h1><main>${thumbs}</main></html>`;
 fs.writeFileSync(path.join(out,'index.html'),index);
 await page.setViewportSize({width:1328,height:450});
 await page.goto(pathToFileURL(path.join(out,'index.html')).href);await page.evaluate(()=>Promise.all([...document.images].map(i=>i.decode())));
 await page.screenshot({path:path.join(out,'bvlgari-man-in-black-colecao-preview.png'),fullPage:true,scale:'css'});
 console.log(JSON.stringify(report,null,2));
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});


