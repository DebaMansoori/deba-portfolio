const page = ({ title, css, body }) => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${title}</title>
<style>
* { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body { font-family: "Helvetica Neue", Arial, sans-serif; -webkit-font-smoothing: antialiased; }
a { color: inherit; text-decoration: none; }
.wrap { width: min(1080px, 88%); margin: 0 auto; }
${css}
</style>
</head>
<body>
${body}
</body>
</html>`;

const portfolio = page({
  title: "Deba — UI/UX Designer",
  css: `
body { background: #e9e9e7; color: #090909; }
.nav { display: flex; align-items: center; justify-content: space-between; padding: 28px 0; }
.logo { border: 1px solid #cfcfca; background: #f1f1ef; border-radius: 40px; padding: 9px 18px; font-size: 14px; font-weight: 600; }
.links { display: flex; gap: 26px; font-size: 13px; color: #555; }
.links a:hover { color: #090909; }
.hero { padding: 60px 0 80px; }
.eyebrow { display: inline-flex; align-items: center; gap: 9px; font-family: Georgia, serif; font-style: italic; font-size: 17px; color: #444; margin-bottom: 26px; }
.eyebrow::before { content: ""; width: 10px; height: 10px; border-radius: 50%; background: #3ac95a; }
h1 { font-size: clamp(46px, 8vw, 96px); font-weight: 500; line-height: 0.98; letter-spacing: -0.055em; }
h1 em { font-family: Georgia, serif; font-weight: 400; }
.lead { color: #6e6e6a; font-size: 17px; line-height: 1.65; max-width: 470px; margin-top: 26px; }
.cta { display: inline-flex; align-items: center; gap: 12px; margin-top: 30px; background: #090909; color: #fff; border-radius: 40px; padding: 13px 22px; font-size: 14px; }
.work { padding-bottom: 80px; }
.work-head { display: flex; align-items: flex-end; justify-content: space-between; gap: 20px; padding-bottom: 24px; border-bottom: 1px solid #cfcfca; }
.work-head h2 { font-size: 28px; font-weight: 500; letter-spacing: -0.03em; }
.work-head h2 em { font-family: Georgia, serif; }
.work-head p { color: #777; font-size: 12px; max-width: 200px; text-align: right; }
.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 18px; }
.tile { border-radius: 14px; height: 190px; padding: 16px; display: flex; flex-direction: column; justify-content: flex-end; color: #fff; position: relative; overflow: hidden; }
.tile span { position: absolute; top: 13px; left: 13px; font-size: 10px; background: rgba(255,255,255,.92); color: #111; border-radius: 20px; padding: 5px 9px; }
.tile b { font-size: 20px; font-weight: 500; letter-spacing: -0.03em; }
.tile small { font-size: 10px; opacity: .7; margin-top: 4px; }
.t1 { background: linear-gradient(140deg, #2c2c2c, #101010); }
.t2 { background: linear-gradient(140deg, #d8c9b4, #a68d6b); }
.t3 { background: linear-gradient(140deg, #9fb4b0, #3e5a58); }
.t4 { background: linear-gradient(140deg, #b8b8b2, #74746c); color: #111; }
.t5 { background: linear-gradient(140deg, #c9a38a, #7c4f39); }
.t6 { background: linear-gradient(140deg, #363636, #0c0c0c); }
.strip { background: #dededc; padding: 46px 0; }
.stats { display: flex; gap: 60px; flex-wrap: wrap; }
.stats div { display: flex; flex-direction: column; gap: 5px; }
.stats strong { font-size: 34px; font-weight: 500; letter-spacing: -0.02em; }
.stats span { font-size: 12px; color: #6e6e6a; }
footer { display: flex; justify-content: space-between; padding: 22px 0 30px; font-size: 11px; color: #777; }
@media (max-width: 640px) {
  .grid { grid-template-columns: 1fr 1fr; }
  .links { display: none; }
  .work-head p { display: none; }
}
`,
  body: `
<nav class="nav wrap">
  <a class="logo" href="#">Deba</a>
  <div class="links"><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a></div>
</nav>
<header class="hero wrap">
  <p class="eyebrow">Available for work</p>
  <h1>Hey, I'm Deba.<br /><em>I design calm websites.</em></h1>
  <p class="lead">A UI/UX designer and frontend developer turning ideas into clean, responsive experiences that feel effortless.</p>
  <a class="cta" href="#work">View selected work <span>&#8599;</span></a>
</header>
<section class="work wrap" id="work">
  <div class="work-head">
    <h2>Selected <em>work</em></h2>
    <p>Six projects, one approach: keep it clear.</p>
  </div>
  <div class="grid">
    <article class="tile t1"><span>01</span><b>Portfolio</b><small>Web design</small></article>
    <article class="tile t2"><span>02</span><b>Studio</b><small>Identity site</small></article>
    <article class="tile t3"><span>03</span><b>Travel</b><small>Landing page</small></article>
    <article class="tile t4"><span>04</span><b>Minimal</b><small>Product concept</small></article>
    <article class="tile t5"><span>05</span><b>Arch</b><small>Architecture</small></article>
    <article class="tile t6"><span>06</span><b>Brand</b><small>Digital identity</small></article>
  </div>
</section>
<section class="strip" id="about">
  <div class="wrap stats">
    <div><strong>1+</strong><span>Years of experience</span></div>
    <div><strong>10+</strong><span>Projects completed</span></div>
    <div><strong>2+</strong><span>Happy clients</span></div>
  </div>
</section>
<footer class="wrap" id="contact">
  <span>&copy; 2026 Deba Mansoori</span>
  <span>Let's talk &#8599;</span>
</footer>
`,
});

const studio = page({
  title: "Studio — Creative Space",
  css: `
body { background: #f6f3ee; color: #161616; }
.nav { display: flex; justify-content: space-between; align-items: center; padding: 28px 0; border-bottom: 1px solid #ddd8ce; }
.logo { font-size: 16px; font-weight: 600; letter-spacing: .16em; }
.links { display: flex; gap: 28px; font-size: 12px; letter-spacing: .04em; }
.links a:hover { color: #e2542c; }
.hero { padding: 56px 0 46px; }
.hero h1 { font-size: clamp(52px, 9.5vw, 118px); line-height: .92; letter-spacing: -.05em; font-weight: 500; }
.hero h1 em { font-family: Georgia, serif; font-style: italic; font-weight: 400; color: #e2542c; }
.hero-grid { display: grid; grid-template-columns: 1.2fr .8fr; gap: 50px; align-items: end; margin-top: 40px; }
.hero-grid p { color: #6a665f; font-size: 15px; line-height: 1.7; max-width: 380px; }
.hero-meta { display: flex; flex-direction: column; gap: 10px; font-size: 11px; letter-spacing: .08em; color: #6a665f; text-transform: uppercase; }
.hero-meta strong { color: #161616; font-size: 12px; font-weight: 500; }
.services { padding: 20px 0 70px; }
.services h2, .work h2 { font-size: 12px; letter-spacing: .16em; text-transform: uppercase; color: #8a857c; margin-bottom: 18px; }
.row { display: grid; grid-template-columns: 60px 1fr auto; gap: 20px; align-items: center; padding: 20px 0; border-top: 1px solid #ddd8ce; }
.row:last-child { border-bottom: 1px solid #ddd8ce; }
.row span { font-size: 11px; color: #8a857c; }
.row strong { font-size: clamp(22px, 3.4vw, 38px); font-weight: 500; letter-spacing: -.035em; }
.row small { font-size: 11px; color: #8a857c; text-align: right; }
.work { padding-bottom: 70px; }
.pieces { display: grid; grid-template-columns: 1.3fr .7fr; gap: 14px; }
.piece { border-radius: 14px; min-height: 240px; padding: 20px; display: flex; flex-direction: column; justify-content: space-between; }
.piece.a { background: linear-gradient(150deg, #272727, #0f0f0f); color: #fff; }
.piece.b { background: linear-gradient(150deg, #e2542c, #a83416); color: #fff; }
.piece b { font-size: 22px; font-weight: 500; letter-spacing: -.03em; }
.piece small { font-size: 10px; letter-spacing: .1em; text-transform: uppercase; opacity: .7; }
.quote { padding: 60px 0; border-top: 1px solid #ddd8ce; }
.quote p { font-family: Georgia, serif; font-size: clamp(24px, 4vw, 40px); line-height: 1.3; letter-spacing: -.02em; max-width: 760px; }
.quote small { display: block; margin-top: 20px; font-size: 11px; letter-spacing: .1em; text-transform: uppercase; color: #8a857c; }
footer { display: flex; justify-content: space-between; padding: 22px 0 30px; border-top: 1px solid #ddd8ce; font-size: 11px; color: #8a857c; }
@media (max-width: 640px) {
  .hero-grid { grid-template-columns: 1fr; gap: 24px; }
  .links { display: none; }
  .pieces { grid-template-columns: 1fr; }
  .row { grid-template-columns: 34px 1fr; }
  .row small { display: none; }
}
`,
  body: `
<nav class="nav wrap">
  <a class="logo" href="#">STUDIO</a>
  <div class="links"><a href="#work">Work</a><a href="#services">Services</a><a href="#contact">Contact</a></div>
</nav>
<header class="hero wrap">
  <h1>Ideas into<br /><em>experiences.</em></h1>
  <div class="hero-grid">
    <p>We are a small creative studio shaping brands and digital products with clarity, character and a healthy respect for whitespace.</p>
    <div class="hero-meta"><strong>Brand &amp; digital</strong><span>Based in Lisbon</span><span>Working worldwide</span></div>
  </div>
</header>
<section class="services wrap" id="services">
  <h2>What we do</h2>
  <div class="row"><span>01</span><strong>Brand identity</strong><small>Strategy, naming, visual systems</small></div>
  <div class="row"><span>02</span><strong>Digital design</strong><small>Websites, products, prototypes</small></div>
  <div class="row"><span>03</span><strong>Frontend build</strong><small>Responsive, accessible, fast</small></div>
  <div class="row"><span>04</span><strong>Art direction</strong><small>Photography, campaigns, print</small></div>
</section>
<section class="work wrap" id="work">
  <h2>Selected work</h2>
  <div class="pieces">
    <div class="piece a"><small>Brand &amp; web — 2026</small><b>Northwind Coffee</b></div>
    <div class="piece b"><small>Identity — 2025</small><b>Mora Type</b></div>
  </div>
</section>
<section class="quote wrap">
  <p>&ldquo;Good design is quiet. It lets the idea do the talking.&rdquo;</p>
  <small>Studio principle no. 1</small>
</section>
<footer class="wrap" id="contact">
  <span>&copy; 2026 Studio</span>
  <span>hello@studio.example &#8599;</span>
</footer>
`,
});

const travel = page({
  title: "Wander — Travel Further",
  css: `
body { background: #f7f1e8; color: #1c2b2a; }
.nav { display: flex; align-items: center; justify-content: space-between; padding: 26px 0; }
.logo { font-size: 15px; font-weight: 700; letter-spacing: .22em; }
.links { display: flex; gap: 24px; font-size: 12px; color: #4d5f5c; }
.links a:hover { color: #1c2b2a; }
.hero { position: relative; border-radius: 22px; overflow: hidden; min-height: 380px; display: flex; flex-direction: column; justify-content: flex-end; padding: 38px; color: #fff; background: linear-gradient(165deg, #f7b267 0%, #e76f51 38%, #7d6b8a 72%, #2f4858 100%); }
.hero::after { content: ""; position: absolute; inset: 0; background: linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(0,0,0,.42) 100%); }
.hero > * { position: relative; z-index: 1; }
.hero small { font-size: 10px; letter-spacing: .2em; text-transform: uppercase; opacity: .85; }
.hero h1 { font-family: Georgia, serif; font-weight: 400; font-size: clamp(42px, 8vw, 84px); line-height: .96; letter-spacing: -.03em; margin: 12px 0 20px; max-width: 640px; }
.search { display: flex; align-items: center; gap: 10px; background: rgba(255,255,255,.94); border-radius: 40px; padding: 7px 7px 7px 18px; max-width: 430px; color: #1c2b2a; }
.search span { flex: 1; font-size: 12px; color: #5d6b68; }
.search b { background: #1c2b2a; color: #fff; border-radius: 30px; padding: 9px 16px; font-size: 11px; font-weight: 500; }
.section { padding: 54px 0 0; }
.section-head { display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 18px; }
.section-head h2 { font-size: 26px; font-weight: 500; letter-spacing: -.03em; }
.section-head h2 em { font-family: Georgia, serif; }
.section-head a { font-size: 11px; color: #5d6b68; }
.cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
.card { background: #fff; border-radius: 15px; overflow: hidden; }
.thumb { height: 150px; }
.card:nth-child(1) .thumb { background: linear-gradient(150deg, #e7a9a2, #8e4a4a); }
.card:nth-child(2) .thumb { background: linear-gradient(150deg, #a9c9b4, #3f6b57); }
.card:nth-child(3) .thumb { background: linear-gradient(150deg, #b9c7dd, #4a5f82); }
.card-body { padding: 14px 16px 17px; }
.card-body b { display: block; font-size: 15px; font-weight: 500; }
.card-body span { font-size: 11px; color: #71807d; }
.card-body em { display: block; margin-top: 9px; font-family: Georgia, serif; font-size: 13px; color: #2f4858; }
.editorial { display: grid; grid-template-columns: .8fr 1.2fr; gap: 40px; padding: 58px 0; align-items: center; }
.editorial h3 { font-family: Georgia, serif; font-weight: 400; font-size: clamp(26px, 4vw, 40px); line-height: 1.12; letter-spacing: -.02em; }
.editorial p { font-size: 13px; line-height: 1.8; color: #5d6b68; }
footer { display: flex; justify-content: space-between; padding: 20px 0 30px; border-top: 1px solid #e0d7c9; font-size: 11px; color: #71807d; }
@media (max-width: 640px) {
  .links { display: none; }
  .hero { padding: 26px; min-height: 330px; }
  .cards { grid-template-columns: 1fr; }
  .editorial { grid-template-columns: 1fr; gap: 20px; }
}
`,
  body: `
<nav class="nav wrap">
  <a class="logo" href="#">WANDER</a>
  <div class="links"><a href="#places">Destinations</a><a href="#stories">Stories</a><a href="#contact">About</a></div>
</nav>
<header class="hero wrap">
  <small>Field notes · Vol. 04</small>
  <h1>Go where the map ends.</h1>
  <div class="search"><span>Where would you like to wake up?</span><b>Explore</b></div>
</header>
<section class="section wrap" id="places">
  <div class="section-head"><h2>Places worth the <em>detour</em></h2><a href="#">All destinations &#8599;</a></div>
  <div class="cards">
    <article class="card"><div class="thumb"></div><div class="card-body"><b>Kyoto, Japan</b><span>7 days · Spring</span><em>Slow mornings, quiet gardens.</em></div></article>
    <article class="card"><div class="thumb"></div><div class="card-body"><b>Amalfi Coast, Italy</b><span>5 days · Summer</span><em>Cliff paths and lemon groves.</em></div></article>
    <article class="card"><div class="thumb"></div><div class="card-body"><b>Lofoten, Norway</b><span>6 days · Winter</span><em>Cold water, warm cabins.</em></div></article>
  </div>
</section>
<section class="editorial wrap" id="stories">
  <h3>Travel slowly. Notice more.</h3>
  <p>We plan small trips with room to wander: one base, a few good walks, and long lunches that run into the evening. No checklists, no rush — just the places locals actually go back to.</p>
</section>
<footer class="wrap" id="contact">
  <span>&copy; 2026 Wander Journal</span>
  <span>Stories from the road &#8599;</span>
</footer>
`,
});

const minimal = page({
  title: "Minimal — Arc One",
  css: `
body { background: #0c0c0c; color: #f2f2ee; }
.nav { display: flex; justify-content: space-between; align-items: center; padding: 26px 0; }
.logo { font-size: 13px; font-weight: 600; letter-spacing: .28em; }
.links { display: flex; gap: 26px; font-size: 11px; letter-spacing: .1em; color: #8b8b85; text-transform: uppercase; }
.links a:hover { color: #f2f2ee; }
.hero { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: center; padding: 46px 0 30px; }
.hero small { display: block; font-size: 10px; letter-spacing: .26em; text-transform: uppercase; color: #8b8b85; margin-bottom: 18px; }
.hero h1 { font-size: clamp(46px, 8vw, 86px); font-weight: 500; line-height: .98; letter-spacing: -.05em; }
.hero h1 em { font-family: Georgia, serif; font-weight: 400; color: #d9d9d0; }
.hero p { color: #a3a39b; font-size: 13px; line-height: 1.75; max-width: 330px; margin: 22px 0 26px; }
.buy { display: flex; align-items: center; gap: 16px; }
.buy a { background: #f2f2ee; color: #0c0c0c; border-radius: 40px; padding: 12px 22px; font-size: 12px; font-weight: 600; }
.buy span { font-size: 13px; color: #8b8b85; }
.visual { position: relative; aspect-ratio: 1; display: flex; align-items: center; justify-content: center; }
.ring { position: absolute; inset: 7%; border-radius: 50%; background: radial-gradient(circle at 35% 30%, #4a4a45 0%, #26262a 42%, #111113 75%); box-shadow: inset 0 1px 0 rgba(255,255,255,.12), 0 30px 70px rgba(0,0,0,.6); }
.ring::after { content: ""; position: absolute; inset: 18%; border-radius: 50%; border: 1px solid rgba(255,255,255,.14); background: radial-gradient(circle at 50% 50%, #1a1a1c, #0e0e10); }
.ring::before { content: ""; position: absolute; left: 50%; top: 14%; width: 2px; height: 12%; background: #e8c87a; border-radius: 4px; transform: translateX(-50%); z-index: 2; }
.visual span { position: relative; z-index: 1; font-size: 10px; letter-spacing: .3em; color: #6c6c66; text-transform: uppercase; }
.specs { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; padding: 34px 0 46px; border-top: 1px solid #232323; margin-top: 26px; }
.spec b { display: block; font-size: 13px; font-weight: 500; margin-bottom: 6px; }
.spec span { font-size: 11px; line-height: 1.6; color: #8b8b85; }
.quote { border-top: 1px solid #232323; padding: 44px 0; text-align: center; }
.quote p { font-family: Georgia, serif; font-size: clamp(22px, 3.6vw, 34px); letter-spacing: -.02em; color: #d9d9d0; max-width: 620px; margin: 0 auto; line-height: 1.3; }
.quote small { display: block; margin-top: 16px; font-size: 10px; letter-spacing: .2em; text-transform: uppercase; color: #6c6c66; }
footer { display: flex; justify-content: space-between; padding: 20px 0 30px; border-top: 1px solid #232323; font-size: 10px; letter-spacing: .08em; color: #6c6c66; }
@media (max-width: 640px) {
  .links { display: none; }
  .hero { grid-template-columns: 1fr; gap: 26px; }
  .visual { max-width: 320px; margin: 0 auto; order: -1; }
  .specs { grid-template-columns: 1fr; gap: 18px; }
}
`,
  body: `
<nav class="nav wrap">
  <a class="logo" href="#">MINIMAL</a>
  <div class="links"><a href="#buy">Shop</a><a href="#specs">Story</a><a href="#contact">Support</a></div>
</nav>
<header class="hero wrap">
  <div>
    <small>Arc One — Wireless speaker</small>
    <h1>Less,<br /><em>but better.</em></h1>
    <p>One form, one purpose. A room-filling speaker with a single dial and nothing else asking for your attention.</p>
    <div class="buy" id="buy"><a href="#">Add to bag — $249</a><span>Free shipping</span></div>
  </div>
  <div class="visual"><div class="ring"></div><span>Arc One</span></div>
</header>
<section class="wrap" id="specs">
  <div class="specs">
    <div class="spec"><b>360° sound</b><span>Balanced audio in every direction, tuned for real rooms.</span></div>
    <div class="spec"><b>Single dial</b><span>Volume, power, and pairing in one deliberate gesture.</span></div>
    <div class="spec"><b>18-hour battery</b><span>Enough for a long dinner and the morning after.</span></div>
  </div>
</section>
<section class="quote wrap">
  <p>&ldquo;The best interface is the one you never have to think about.&rdquo;</p>
  <small>Design note · 01</small>
</section>
<footer class="wrap" id="contact">
  <span>&copy; 2026 Minimal Objects</span>
  <span>hello@minimal.example</span>
</footer>
`,
});

const architecture = page({
  title: "Arch — Modern Spaces",
  css: `
body { background: #eee9df; color: #1f1e1a; }
.nav { display: flex; justify-content: space-between; align-items: center; padding: 28px 0; border-bottom: 1px solid #d9d2c5; }
.logo { font-family: Georgia, serif; font-size: 20px; letter-spacing: -.02em; }
.links { display: flex; gap: 26px; font-size: 11px; letter-spacing: .1em; text-transform: uppercase; color: #5f5b52; }
.links a:hover { color: #1f1e1a; }
.hero { display: grid; grid-template-columns: .9fr 1.1fr; gap: 44px; align-items: center; padding: 52px 0 60px; }
.hero small { display: block; font-size: 10px; letter-spacing: .22em; text-transform: uppercase; color: #7d776b; margin-bottom: 18px; }
.hero h1 { font-family: Georgia, serif; font-weight: 400; font-size: clamp(44px, 7.5vw, 82px); line-height: .98; letter-spacing: -.035em; }
.hero h1 em { font-style: italic; }
.hero p { font-size: 13px; line-height: 1.8; color: #6a655b; max-width: 330px; margin-top: 22px; }
.hero a { display: inline-block; margin-top: 26px; border-bottom: 1px solid #1f1e1a; padding-bottom: 4px; font-size: 12px; }
.blocks { display: grid; grid-template-columns: 1.15fr .85fr; grid-template-rows: 1fr 1fr; gap: 10px; height: 390px; }
.block { border-radius: 10px; overflow: hidden; position: relative; }
.b1 { grid-row: span 2; background: linear-gradient(165deg, #c6b8a2 0%, #8e7f68 55%, #4f4638 100%); }
.b2 { background: linear-gradient(160deg, #dcd6c9, #a9a291); }
.b3 { background: linear-gradient(160deg, #79756b, #33302a); }
.block::after { content: ""; position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,.13) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.13) 1px, transparent 1px); background-size: 34px 34px; opacity: .5; }
.block span { position: absolute; bottom: 12px; left: 14px; z-index: 1; color: #fff; font-size: 10px; letter-spacing: .14em; text-transform: uppercase; }
.projects { border-top: 1px solid #d9d2c5; padding: 40px 0 50px; }
.projects h2 { font-size: 11px; letter-spacing: .2em; text-transform: uppercase; color: #7d776b; margin-bottom: 20px; }
.project { display: grid; grid-template-columns: 60px 1fr 1fr auto; gap: 20px; align-items: baseline; padding: 19px 0; border-bottom: 1px solid #d9d2c5; }
.project span { font-size: 10px; color: #8d877b; }
.project b { font-family: Georgia, serif; font-weight: 400; font-size: clamp(20px, 3vw, 30px); letter-spacing: -.02em; }
.project small { font-size: 11px; color: #6a655b; }
.project em { font-size: 10px; letter-spacing: .1em; text-transform: uppercase; color: #8d877b; font-style: normal; }
.statement { padding: 50px 0 60px; border-top: 1px solid #d9d2c5; display: grid; grid-template-columns: .7fr 1.3fr; gap: 40px; }
.statement p { font-family: Georgia, serif; font-size: clamp(22px, 3.6vw, 34px); line-height: 1.3; letter-spacing: -.02em; }
.statement small { font-size: 11px; line-height: 1.8; color: #6a655b; }
footer { display: flex; justify-content: space-between; padding: 20px 0 30px; border-top: 1px solid #d9d2c5; font-size: 10px; letter-spacing: .08em; color: #8d877b; text-transform: uppercase; }
@media (max-width: 640px) {
  .links { display: none; }
  .hero { grid-template-columns: 1fr; gap: 28px; }
  .blocks { height: 300px; }
  .project { grid-template-columns: 34px 1fr; }
  .project small, .project em { display: none; }
  .statement { grid-template-columns: 1fr; gap: 18px; }
}
`,
  body: `
<nav class="nav wrap">
  <a class="logo" href="#">Arch</a>
  <div class="links"><a href="#projects">Projects</a><a href="#studio">Studio</a><a href="#contact">Contact</a></div>
</nav>
<header class="hero wrap">
  <div>
    <small>Architecture &amp; interiors</small>
    <h1>Spaces that<br /><em>breathe.</em></h1>
    <p>We design quiet buildings for loud lives — places shaped by light, material and the way people actually move through them.</p>
    <a href="#projects">View selected projects</a>
  </div>
  <div class="blocks">
    <div class="block b1"><span>Casa Lumen</span></div>
    <div class="block b2"><span>Atelier North</span></div>
    <div class="block b3"><span>House No. 7</span></div>
  </div>
</header>
<section class="projects wrap" id="projects">
  <h2>Selected work</h2>
  <div class="project"><span>01</span><b>Casa Lumen</b><small>Lisbon, Portugal — 2025</small><em>Residential</em></div>
  <div class="project"><span>02</span><b>Atelier North</b><small>Oslo, Norway — 2024</small><em>Workspace</em></div>
  <div class="project"><span>03</span><b>House No. 7</b><small>Kyoto, Japan — 2024</small><em>Residential</em></div>
  <div class="project"><span>04</span><b>Stone Pavilion</b><small>Porto, Portugal — 2023</small><em>Public</em></div>
</section>
<section class="statement wrap" id="studio">
  <p>&ldquo;Good architecture gives you room to be yourself.&rdquo;</p>
  <small>Founded in 2018, the studio works across residential, cultural and public projects. Each design starts with a long walk through the site and a short list of things that genuinely matter.</small>
</section>
<footer class="wrap" id="contact">
  <span>&copy; 2026 Arch Studio</span>
  <span>Say hello &#8599;</span>
</footer>
`,
});

const brand = page({
  title: "Brand — Make It Memorable",
  css: `
body { background: #f4f3ee; color: #101010; }
.nav { display: flex; justify-content: space-between; align-items: center; padding: 26px 0; border-bottom: 1px solid #d9d8d2; }
.logo { font-size: 14px; font-weight: 700; letter-spacing: .2em; }
.links { display: flex; gap: 26px; font-size: 11px; letter-spacing: .08em; text-transform: uppercase; color: #5f5f5a; }
.links a:hover { color: #101010; }
.hero { padding: 48px 0 40px; }
.hero-top { display: flex; justify-content: space-between; align-items: flex-start; gap: 20px; }
.hero h1 { font-size: clamp(66px, 16vw, 190px); line-height: .82; letter-spacing: -.07em; font-weight: 600; }
.hero h1 sup { font-size: clamp(16px, 2.4vw, 26px); font-weight: 400; letter-spacing: 0; vertical-align: super; }
.hero aside { max-width: 210px; font-size: 11px; line-height: 1.7; color: #5f5f5a; padding-top: 12px; }
.mark { display: flex; gap: 0; margin: 26px 0 10px; }
.mark i { width: clamp(62px, 9vw, 104px); height: clamp(62px, 9vw, 104px); display: block; }
.mark i:first-child { background: #101010; border-radius: 50% 50% 50% 0; }
.mark i:last-child { background: #d9ff3f; border-radius: 0 50% 50% 50%; mix-blend-mode: multiply; margin-left: -22px; }
.hero p { font-family: Georgia, serif; font-size: clamp(18px, 2.6vw, 26px); line-height: 1.4; max-width: 560px; color: #2c2c28; }
.ticker { border-top: 1px solid #101010; border-bottom: 1px solid #101010; margin-top: 38px; padding: 12px 0; overflow: hidden; white-space: nowrap; font-size: 11px; letter-spacing: .18em; text-transform: uppercase; }
.ticker span { display: inline-block; padding-right: 40px; }
.apps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; padding: 46px 0 54px; }
.app { border-radius: 13px; padding: 20px; min-height: 210px; display: flex; flex-direction: column; justify-content: space-between; }
.app.card { background: #101010; color: #f4f3ee; }
.app.card .mini { font-size: 10px; letter-spacing: .2em; text-transform: uppercase; opacity: .6; }
.app.card b { font-size: 24px; letter-spacing: -.03em; font-weight: 500; }
.app.card small { font-size: 10px; color: #9a9a93; }
.app.poster { background: #d9ff3f; color: #101010; align-items: flex-start; }
.app.poster strong { font-size: clamp(26px, 4vw, 42px); line-height: .95; letter-spacing: -.05em; }
.app.poster small { font-size: 9px; letter-spacing: .16em; text-transform: uppercase; }
.app.social { background: #e3e1da; color: #101010; }
.app.social .dot { width: 56px; height: 56px; border-radius: 50%; background: #101010; }
.app.social b { font-size: 13px; font-weight: 500; }
.app.social small { font-size: 10px; color: #6b6b65; }
.values { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; padding: 40px 0 60px; border-top: 1px solid #d9d8d2; }
.value span { font-size: 10px; letter-spacing: .16em; color: #8a8a83; }
.value b { display: block; font-size: 14px; font-weight: 500; margin: 8px 0 6px; }
.value small { font-size: 11px; line-height: 1.6; color: #6b6b65; }
footer { display: flex; justify-content: space-between; padding: 20px 0 30px; border-top: 1px solid #d9d8d2; font-size: 10px; letter-spacing: .1em; text-transform: uppercase; color: #8a8a83; }
@media (max-width: 640px) {
  .links { display: none; }
  .hero aside { display: none; }
  .apps { grid-template-columns: 1fr; }
  .values { grid-template-columns: 1fr 1fr; gap: 24px; }
}
`,
  body: `
<nav class="nav wrap">
  <a class="logo" href="#">BRAND&reg;</a>
  <div class="links"><a href="#work">Work</a><a href="#values">Values</a><a href="#contact">Contact</a></div>
</nav>
<header class="hero wrap">
  <div class="hero-top">
    <h1>Make it<br />memorable<sup>&reg;</sup></h1>
    <aside>Identity systems, art direction and digital presence for people building something worth remembering.</aside>
  </div>
  <div class="mark"><i></i><i></i></div>
  <p>A brand is not a logo. It is the feeling that stays after the first glance.</p>
  <div class="ticker"><span>Strategy</span><span>Identity</span><span>Art direction</span><span>Digital</span><span>Print</span><span>Strategy</span><span>Identity</span></div>
</header>
<section class="apps wrap" id="work">
  <div class="app card"><div class="mini">Business card</div><div><b>BRAND&reg;</b><br /><small>hello@brand.example</small></div></div>
  <div class="app poster"><strong>MAKE<br />IT<br />STICK.</strong><small>Campaign — 2026</small></div>
  <div class="app social"><div class="dot"></div><div><b>@brand.studio</b><br /><small>Digital presence</small></div></div>
</section>
<section class="values wrap" id="values">
  <div class="value"><span>01</span><b>One clear idea</b><small>Say one thing, say it well.</small></div>
  <div class="value"><span>02</span><b>Built to flex</b><small>Systems, not one-off assets.</small></div>
  <div class="value"><span>03</span><b>Human first</b><small>Design for people, not decks.</small></div>
  <div class="value"><span>04</span><b>Made to last</b><small>Trends move on. Identity stays.</small></div>
</section>
<footer class="wrap" id="contact">
  <span>&copy; 2026 Brand Studio</span>
  <span>Start a project &#8599;</span>
</footer>
`,
});

export const projects = [
  {
    id: "portfolio",
    number: "01",
    title: "Personal Portfolio",
    category: "Web Design · Development",
    theme: "p1",
    lightMock: false,
    domain: "deba.design",
    mock: { brand: "DEBA", title: "Portfolio", subtitle: "Clean · Simple · Personal" },
    description:
      "A quiet, typographic portfolio built so the work speaks first — a custom grid, clear hierarchy, and a fully responsive layout.",
    tags: ["HTML", "CSS", "JavaScript"],
    preview: portfolio,
  },
  {
    id: "studio",
    number: "02",
    title: "Creative Studio",
    category: "UI Design · Frontend",
    theme: "p2",
    lightMock: true,
    domain: "studio.example",
    mock: { brand: "STUDIO", title: "Creative Space", subtitle: "Ideas into experiences" },
    description:
      "An editorial identity site for a small creative studio, pairing oversized type with generous whitespace and a flexible project archive.",
    tags: ["UI Design", "Responsive", "Typography"],
    preview: studio,
  },
  {
    id: "travel",
    number: "03",
    title: "Travel Landing Page",
    category: "Web Design · Responsive UI",
    theme: "p3",
    lightMock: false,
    domain: "wander.example",
    mock: { brand: "TRAVEL", title: "Explore More", subtitle: "Discover your next place" },
    description:
      "A destination-first landing page that leads with imagery, keeps planning simple, and stays fast and readable on every screen.",
    tags: ["Landing Page", "Responsive", "UI Design"],
    preview: travel,
  },
  {
    id: "minimal",
    number: "04",
    title: "Minimal Product",
    category: "UI Design · Interaction",
    theme: "p4",
    lightMock: true,
    domain: "minimal.example",
    mock: { brand: "MINIMAL", title: "Less, but better.", subtitle: "Digital product concept" },
    description:
      "A product concept exploring restraint: one clear message, calm motion, and a purchase flow with nothing extra in the way.",
    tags: ["Product UI", "Interaction", "Concept"],
    preview: minimal,
  },
  {
    id: "architecture",
    number: "05",
    title: "Architecture Website",
    category: "Web Design · Development",
    theme: "p5",
    lightMock: false,
    domain: "arch.example",
    mock: { brand: "ARCH", title: "Modern Spaces", subtitle: "Architecture & visual story" },
    description:
      "A gallery-led site for an architecture practice, where the buildings set the rhythm and every interface detail steps back to let them breathe.",
    tags: ["Web Design", "Gallery", "Development"],
    preview: architecture,
  },
  {
    id: "brand",
    number: "06",
    title: "Brand Concept",
    category: "Visual Design · UI",
    theme: "p6",
    lightMock: true,
    domain: "brand.example",
    mock: { brand: "BRAND", title: "Make it memorable.", subtitle: "Identity · Digital presence" },
    description:
      "A brand identity and digital presence built around one memorable mark — then applied consistently across web, print, and social.",
    tags: ["Identity", "Visual Design", "Art Direction"],
    preview: brand,
  },
];
