const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');
const { chromium } = require('../.tools/card-render/node_modules/playwright');

const root = path.resolve(__dirname, '..');
const preview = process.argv.includes('--preview');
const htmlOnly = process.argv.includes('--html-only');
const out = path.join(root, preview ? 'output/cards/previas' : 'output/cards/finais');
const logoPath = path.join(root, 'references/logoFulorre.png');
const files = fs.readdirSync(path.join(root,'output/cards')).filter(f=>/^lavanda-\d\d-.*-card\.md$/.test(f)).sort();
if (!preview && !htmlOnly) {
 const missing = [logoPath, ...files.map(f=>path.join(root,'output/images',f.replace('-card.md','-transparent.png')))].filter(f=>!fs.existsSync(f));
 if(missing.length) {
  console.error('Exportação final pendente. Adicione os assets obrigatórios:\n'+missing.join('\n')+'\nUse --preview para prévias ou --html-only para atualizar os layouts editáveis.');
  process.exit(1);
 }
}
fs.mkdirSync(out, { recursive: true });
const escape = s => s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const css = `
*{box-sizing:border-box}html,body{margin:0;width:1080px;height:1920px;overflow:hidden}
body{background:#fcfaf5;color:#353a36;font-family:Arial,sans-serif}
.card{position:relative;width:1080px;height:1920px;background:#fcfaf5}
header{position:absolute;left:80px;right:80px;top:78px;z-index:2}
.eyebrow{display:flex;justify-content:space-between;font-size:21px;letter-spacing:4px;color:#68695f;border-bottom:1px solid #bdbdad;padding-bottom:23px}
h1{font-family:Georgia,serif;font-weight:400;font-size:104px;letter-spacing:8px;margin:29px 0 12px;line-height:1.05}
.botanical{font-size:27px;color:#646c61;line-height:1.4}.botanical em{font-family:Georgia,serif}
.descriptors{font-size:24px;letter-spacing:2px;color:#796b85;margin-top:23px}
.hero{position:absolute;top:405px;left:80px;right:80px;height:730px;overflow:hidden}
.hero img{position:absolute;width:600px;height:auto;left:160px;top:-100px}
.modules{position:absolute;top:1160px;left:80px;right:80px;display:grid;grid-template-columns:1fr 1fr;gap:32px 52px}
.module{border-top:1px solid #bab6bf;padding-top:17px}
h2{font-family:Georgia,serif;font-size:29px;line-height:1.2;font-weight:400;margin:0 0 13px;color:#685774}
p{font-size:28px;line-height:1.39;margin:0;text-wrap:pretty}
footer{position:absolute;bottom:64px;left:80px;right:80px;border-top:1px solid #bdbdad;padding-top:18px;font-size:17px;letter-spacing:1px;color:#68695f;display:flex;align-items:center;justify-content:space-between;gap:30px;min-height:73px}
.collection{max-width:680px}.brand{width:190px;height:54px;flex-shrink:0}.brand img{width:100%;height:100%;object-fit:contain}
.draft{position:absolute;right:80px;bottom:28px;font:14px Arial;color:#796b85;letter-spacing:1px}
.n05 .hero{height:565px}.n05 .hero img{width:700px;left:110px;top:-130px}
.n05 .modules{top:990px;gap:25px 52px}.n05 .module:last-child{grid-column:1 / -1}
.n04 .hero img,.n02 .hero img{top:-80px;width:680px;left:120px}
.n03 .hero{top:470px;height:990px;left:290px;right:290px}
.n03 .hero img{width:820px;left:-160px;top:-140px}
.n03 .modules{top:580px;display:block;height:1100px}
.n03 .module{position:absolute;width:280px;border-top:none;padding-top:0}
.n03 .module:nth-child(1){left:0;top:0}.n03 .module:nth-child(2){right:0;top:0}
.n03 .module:nth-child(3){left:0;top:470px}.n03 .module:nth-child(4){right:0;top:470px}
.n03 .module:nth-child(-n+4):after{content:'';display:block;width:75px;height:1px;background:#aba1b0;margin-top:23px}
.n03 .module:last-child{top:960px;width:100%;border-top:1px solid #bab6bf;padding-top:22px}
.n03 h2{font-size:29px}.n03 p{font-size:28px}
`;

(async () => {
 const browser = await chromium.launch({executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',headless:true,args:['--allow-file-access-from-files']});
 const page = await browser.newPage({viewport:{width:1080,height:1920},deviceScaleFactor:1});
 const report=[];
 for (const file of files) {
  const source=fs.readFileSync(path.join(root,'output/cards',file),'utf8');
  const copy=source.split('## Texto para diagramação')[1].split('## Notas de produção')[0].trim();
  const paragraphs=copy.split(/\r?\n\s*\r?\n/);
  const [name,botanical,descriptors,...rest]=paragraphs;
  const footer=rest.pop();
  const id=file.match(/lavanda-(\d\d)/)[1];
  const slug=file.replace('-card.md','');
  const title=source.split('\n')[0].split('—')[1].trim();
  const modules=rest.map(block=>{
    const match=block.match(/^\*\*(.*?)\*\*\s*\r?\n([\s\S]*)$/);
    if(!match) throw new Error('Unrecognized module: '+block);
    return `<section class="module"><h2>${escape(match[1])}</h2><p>${escape(match[2].trim()).replace(/  \r?\n/g,'<br>').replace(/\r?\n/g,' ')}</p></section>`;
  }).join('');
  const cutout=path.join(root,'output/images',slug+'-transparent.png');
  const hasCutout=fs.existsSync(cutout);
  const img=path.relative(out,hasCutout?cutout:path.join(root,'output/images',slug+'.png')).replaceAll('\\','/');
  const logo=path.relative(out,logoPath).replaceAll('\\','/');
  const html=`<!doctype html><html lang="pt-BR"><meta charset="utf-8"><title>Lavanda — ${escape(title)}</title><style>${css}</style><article class="card n${id}"><header><div class="eyebrow"><span>PERFUME ATLAS</span><span>${id} / 05 · ${escape(title.toUpperCase())}</span></div><h1>${name}</h1><div class="botanical">${escape(botanical).replace(/\*(.*?)\*/g,'<em>$1</em>')}</div><div class="descriptors">${escape(descriptors)}</div></header><div class="hero"><img src="${img}" alt="Ilustração botânica de lavanda"></div><main class="modules">${modules}</main><footer>${escape(footer)}</footer></article></html>`;
  const suffix=preview?'-preview':'-final';
  const htmlPath=path.join(out,slug+suffix+'.html');
  const brandedHtml=html.replace(`<footer>${escape(footer)}</footer>`,`<footer><span class="collection">${escape(footer)}</span><div class="brand"><img src="${logo}" alt="Fullore" onerror="this.style.visibility='hidden'" onload="this.style.visibility='visible'"></div></footer>${preview?'<div class="draft">PRÉVIA · NÃO FINAL</div>':''}`);
  fs.writeFileSync(htmlPath,brandedHtml);
  if(htmlOnly) {report.push({file:path.basename(htmlPath),status:'layout atualizado',logoPresent:fs.existsSync(logoPath),transparentAssetPresent:hasCutout});continue;}
  await page.goto(pathToFileURL(htmlPath).href);
  await page.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.images].filter(i=>i.complete&&i.naturalWidth>0).map(i=>i.decode()));});
  const assets=await page.evaluate(()=>{
   const art=document.querySelector('.hero img');
   const canvas=document.createElement('canvas');canvas.width=art.naturalWidth;canvas.height=art.naturalHeight;
   const ctx=canvas.getContext('2d');ctx.drawImage(art,0,0);
   const data=ctx.getImageData(0,0,canvas.width,canvas.height).data;
   let clear=0,visible=0;for(let i=3;i<data.length;i+=4){if(data[i]===0)clear++;if(data[i]>0)visible++;}
   const logo=document.querySelector('.brand img');
   return {transparent:clear>canvas.width*canvas.height*0.05&&visible>0,logoLoaded:logo.naturalWidth>0};
  });
  if(!preview&&(!assets.transparent||!assets.logoLoaded))throw new Error(slug+': PNG com alfa real e logo carregado são obrigatórios para exportação final.');
  const check=await page.evaluate(()=>{
   const boxes=[...document.querySelectorAll('.module')].map(e=>{const r=e.getBoundingClientRect();return {text:e.innerText,x:r.x,y:r.y,right:r.right,bottom:r.bottom};});
   const limit=document.querySelector('footer').getBoundingClientRect().top;
   return {boxes,limit,overflow:boxes.some(b=>b.bottom>limit-20||b.x<80||b.right>1000),images:document.querySelector('.hero img').naturalWidth>0};
  });
  if(check.overflow||!check.images)throw new Error(slug+' failed layout validation: '+JSON.stringify(check));
  await page.screenshot({path:path.join(out,slug+suffix+'.png')});
  report.push({file:slug+suffix+'.png',width:1080,height:1920,modules:check.boxes.length,layoutValidated:true,status:preview?'preview':'final',...assets});
 }
 await browser.close();
 fs.writeFileSync(path.join(out,htmlOnly?'layout-report.json':'export-report.json'),JSON.stringify(report,null,2));
 console.log(JSON.stringify(report,null,2));
})().catch(e=>{console.error(e);process.exit(1)});
