const fs = require('fs');
const path = require('path');
const {pathToFileURL} = require('url');
const {chromium} = require('../.tools/card-render/node_modules/playwright');
const root=path.resolve(__dirname,'..');
const preview=process.argv.includes('--preview');
const logo=path.join(root,'references/logoFullore.png');
const out=path.join(root,preview?'output/cards/previas/camomila-romana':'output/cards/finais/camomila-romana');
const records=JSON.parse(fs.readFileSync(path.join(root,'output/prompts/camomila-romana-generation.json'),'utf8'));
if(!preview&&!fs.existsSync(logo))throw Error('Falta references/logoFullore.png. Use --preview enquanto a marca estiver pendente.');
fs.mkdirSync(out,{recursive:true});
const esc=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
const css=`*{box-sizing:border-box}html,body{margin:0;width:960px;height:1280px;background:#faf8f1;color:#363d36;font-family:Arial,sans-serif}article{position:relative;width:960px;height:1280px;padding:64px 72px}header{height:175px}.eyebrow{font-size:12px;letter-spacing:3px;display:flex;justify-content:space-between;padding-bottom:18px;border-bottom:1px solid #c2c5b5;color:#68725b}h1{font:normal 52px/1.08 Georgia,serif;margin:24px 0 12px;letter-spacing:1px;white-space:nowrap}.latin{font-size:17px;color:#65715d}.latin em{font-family:Georgia,serif}.descriptors{font-size:14px;letter-spacing:1.6px;color:#887b61;margin-top:16px}.hero{height:400px;margin:0 auto 25px;display:flex;justify-content:center;align-items:center}.hero img{width:490px;height:400px;object-fit:contain}.modules{display:grid;grid-template-columns:1fr 1fr;gap:23px 42px}.module{border-top:1px solid #bec4b1;padding-top:13px}h2{font:normal 22px/1.15 Georgia,serif;color:#807448;margin:0 0 10px}p{font-size:18px;line-height:1.4;margin:0;text-wrap:pretty}footer{position:absolute;left:72px;right:72px;bottom:49px;height:59px;border-top:1px solid #c2c5b5;display:flex;align-items:center;justify-content:space-between;color:#707765;font-size:11px;letter-spacing:1.6px}.brand{width:169px;height:48px;object-fit:contain}.pending{position:absolute;bottom:24px;left:72px;font-size:10px;letter-spacing:1px;color:#867f70}`;
(async()=>{
 const browser=await chromium.launch({executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',headless:true,args:['--allow-file-access-from-files']});
 try{
 const page=await browser.newPage({viewport:{width:960,height:1280},deviceScaleFactor:3});
 const report=[];
 for(const {slug,asset} of records){
  const source=fs.readFileSync(path.join(root,'aromas',slug+'.md'),'utf8');
  const cardPath=path.join(root,'output/cards',slug+'-card.md');
  const copy=fs.existsSync(cardPath)
   ? fs.readFileSync(cardPath,'utf8').split('## Texto para diagramação')[1].split('## Notas de produção')[0].trim()
   : source.split('## Texto condensado para card 3:4')[1].split('## Direção visual')[0].trim();
  const [heading,latin,descriptors,...blocks]=copy.split(/\r?\n\s*\r?\n/);
  const title=heading.replace(/^### /,'');
  const code=source.match(/\*\*Arquivo:\*\* (BOA-\d+)/)[1];
  const modules=blocks.map(b=>{const m=b.match(/^\*\*(.*?)\*\*\s*\n([\s\S]*)$/);if(!m)throw Error('Módulo inválido '+slug);return `<section class="module"><h2>${esc(m[1])}</h2><p>${esc(m[2].trim()).replace(/\*(.*?)\*/g,'<em>$1</em>')}</p></section>`;}).join('');
  const rel=p=>path.relative(out,p).replaceAll('\\','/');
  const html=`<!doctype html><html lang="pt-BR"><meta charset="utf-8"><title>${esc(title)} · Camomila-romana</title><style>${css}</style><article><header><div class="eyebrow"><span>PERFUME ATLAS</span><span>BOTÂNICO · ${code}</span></div><h1>${esc(title)}</h1><div class="latin">${esc(latin).replace(/\*(.*?)\*/g,'<em>$1</em>')}</div><div class="descriptors">${esc(descriptors)}</div></header><div class="hero"><img src="${rel(path.join(root,asset))}" alt="${esc(title)}"></div><div class="modules">${modules}</div><footer><span>ARQUIVO BOTÂNICO OLFATIVO · ${code}</span>${fs.existsSync(logo)?`<img class="brand" src="${rel(logo)}" alt="Fullore">`:'<span class="brand"></span>'}</footer>${preview?'<div class="pending">PRÉVIA · LOGO FULLORE PENDENTE</div>':''}</article></html>`;
  const basename=slug+(preview?'-preview':'-final');
  fs.writeFileSync(path.join(out,basename+'.html'),html);
  await page.goto(pathToFileURL(path.join(out,basename+'.html')).href);
  await page.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.images].map(i=>i.decode()));const h=document.querySelector('h1');while(h.scrollWidth>h.clientWidth&&parseFloat(getComputedStyle(h).fontSize)>32)h.style.fontSize=(parseFloat(getComputedStyle(h).fontSize)-1)+'px';});
  const validation=await page.evaluate(()=>{
   const image=document.querySelector('.hero img'),canvas=document.createElement('canvas');canvas.width=image.naturalWidth;canvas.height=image.naturalHeight;const ctx=canvas.getContext('2d');ctx.drawImage(image,0,0);const pixels=ctx.getImageData(0,0,canvas.width,canvas.height).data;let transparent=0,visible=0;for(let i=3;i<pixels.length;i+=4){if(pixels[i]===0)transparent++;else visible++;}
   const footerTop=document.querySelector('footer').getBoundingClientRect().top;
   const modules=[...document.querySelectorAll('.module')];
   return {nativeWidth:image.naturalWidth,nativeHeight:image.naturalHeight,alphaValid:transparent>pixels.length/4*.05&&visible>0,overflow:modules.some(m=>m.getBoundingClientRect().bottom>footerTop-15),logoLoaded:!!document.querySelector('img.brand')?.naturalWidth,assetScale:Math.min(1470/image.naturalWidth,1200/image.naturalHeight)};
  });
  if(!validation.alphaValid||validation.overflow||(!preview&&!validation.logoLoaded))throw Error(slug+' validação falhou '+JSON.stringify(validation));
  await page.screenshot({path:path.join(out,basename+'.png')});
  report.push({slug,file:basename+'.png',status:preview?'preview':'final',width:2880,height:3840,...validation,scaling:'Composição HTML/CSS renderizada em 3x; asset interpolado pelo navegador na escala registrada.'});
 }
 fs.writeFileSync(path.join(out,'export-report.json'),JSON.stringify(report,null,2));
 // Contact sheet is an HTML review surface; individual deliverables retain full resolution.
 const gallery=`<!doctype html><html lang="pt-BR"><meta charset="utf-8"><title>Camomila-romana — revisão</title><style>body{background:#deded8;padding:20px;display:grid;grid-template-columns:repeat(4,1fr);gap:18px}img{width:100%;display:block}a{font:14px Arial;color:#333;text-decoration:none}</style>${report.map(r=>`<a href="${r.file}"><img src="${r.file}">${r.slug}</a>`).join('')}</html>`;
 fs.writeFileSync(path.join(out,'index.html'),gallery);
 console.log(JSON.stringify(report,null,2));
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exit(1)});
