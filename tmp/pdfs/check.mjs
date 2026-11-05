import { chromium } from '/Users/rajatkumarburde/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
import assert from 'node:assert/strict';
import { mkdir } from 'node:fs/promises';
await mkdir('output/pdf', {recursive:true});
const browser = await chromium.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless:true});
const page = await browser.newPage({viewport:{width:1280,height:1000}});
const issues=[];
const serviceNames=['Branch €500','VAT €500','Employer €500','Legal Entity Incorporation €1,999'];
const sets=[[0],[1],[2],[3],[0,1],[0,2],[1,2],[3,1],[3,2],[0,1,2],[3,1,2]];
async function inspect(label){
 const errors=await page.locator('.a4-page').evaluateAll(pages=>pages.flatMap((p,i)=>{
  const footer=p.querySelector('footer').getBoundingClientRect();
  const content=p.querySelector(':scope > div');
  const leaves=[...content.querySelectorAll('*')].filter(e=>e.children.length===0 && e.getBoundingClientRect().height);
  return leaves.filter(e=>e.getBoundingClientRect().bottom>footer.top+1).map(e=>({page:i+1,text:e.textContent.slice(0,70),overlap:Math.round(e.getBoundingClientRect().bottom-footer.top)}));
 }));
 if(errors.length)issues.push({label,errors});
}
for(const set of sets){
 await page.goto('http://127.0.0.1:5173');
 await page.evaluate(()=>document.fonts.ready);
 for(const i of set)if(i!==0)await page.getByRole('button',{name:serviceNames[i],exact:true}).click();
 if(!set.includes(0)&&!set.includes(3))await page.getByRole('button',{name:serviceNames[0],exact:true}).click();
 for(const membership of ['The Registry · €49/mo','Registry Unlimited · €199/mo','Existing relationship']){
  await page.getByRole('radio',{name:membership,exact:true}).click();
  await inspect(`${set}/${membership}`);
  await page.emulateMedia({media:'print'});
  await inspect(`${set}/${membership}/print`);
  assert.equal(await page.locator('.no-print').isVisible(),false);
  await page.emulateMedia({media:'screen'});
 }
}
await page.getByRole('radio',{name:'The Registry · €49/mo',exact:true}).click();
await page.pdf({path:'tmp/pdfs/three-services.pdf',preferCSSPageSize:true,printBackground:true});
await page.locator('.a4-page').first().screenshot({path:'tmp/pdfs/three-services.png'});
await page.getByRole('tab',{name:'Brochure',exact:true}).click();
await inspect('brochure');
assert.equal(await page.locator('.a4-page').count(),3);
assert(!await page.locator('.doc-viewport').innerText().then(t=>/Sample Trading|Sample Lead|HC-REG|Version|€500|€1,999/.test(t)));
await page.pdf({path:'tmp/pdfs/brochure.pdf',preferCSSPageSize:true,printBackground:true});
await page.evaluate(() => { window.print = () => { window.__printed = {title:document.title,text:document.querySelector('.doc-viewport').innerText}; }; });
await page.getByRole('button',{name:'Download Quotation PDF',exact:true}).click();
await page.waitForFunction(()=>window.__printed?.title.includes('Proposal'));
assert((await page.evaluate(()=>window.__printed.text)).includes('Sample Trading'));
await page.getByRole('button',{name:'Download Brochure PDF',exact:true}).click();
await page.waitForFunction(()=>window.__printed?.title.includes('Brochure'));
assert(!(await page.evaluate(()=>window.__printed.text)).includes('Sample Trading'));
await page.pdf({path:'output/pdf/registry-brochure.pdf',preferCSSPageSize:true,printBackground:true});
await page.goto('http://127.0.0.1:5173');
await page.evaluate(()=>document.fonts.ready);
await page.pdf({path:'output/pdf/branch-quotation.pdf',preferCSSPageSize:true,printBackground:true});
await page.setViewportSize({width:390,height:844});
await inspect('mobile/default');
await page.waitForTimeout(200);
console.log('mobile',await page.evaluate(()=>({width:innerWidth,scroll:document.documentElement.scrollWidth,wide:[...document.querySelectorAll('body *')].filter(e=>e.getBoundingClientRect().right>innerWidth+1).slice(0,8).map(e=>({tag:e.tagName,cls:e.className,right:e.getBoundingClientRect().right}))})));
assert(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth));
await page.getByRole('button',{name:serviceNames[1],exact:true}).click();
await page.getByRole('button',{name:serviceNames[2],exact:true}).click();
await inspect('mobile/three-services');
await page.pdf({path:'tmp/pdfs/branch-three-services.pdf',preferCSSPageSize:true,printBackground:true});
console.log(JSON.stringify({configurations:33,printConfigurations:33,downloadButtons:2,issues},null,2));
assert.equal(issues.length,0);
await browser.close();
