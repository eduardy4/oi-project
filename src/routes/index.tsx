import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

// Add the real payment-provider URL here before publishing.
const CHECKOUT_URL = "";
const checkoutHref = CHECKOUT_URL || "#offer";

const recipes = [
  { name: "Creamy Garlic Chicken", type: "Dinner", time: "25 min", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=85", description: "Tender chicken with a rich, creamy garlic sauce." },
  { name: "Avocado Egg Salad", type: "Lunch", time: "10 min", image: "https://images.unsplash.com/photo-1512621776951-a57141f2e394?auto=format&fit=crop&w=900&q=85", description: "A fresh, satisfying combination for busy days." },
  { name: "Zucchini Noodle Bowl", type: "Light meal", time: "20 min", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=85", description: "A colorful bowl packed with fresh ingredients." },
];

const benefits = [
  { icon: "🥑", title: "Simple ingredients", text: "Make meals with familiar ingredients that are easy to find." },
  { icon: "⏱️", title: "Practical ideas", text: "Get inspiration for everyday meals without complicated steps." },
  { icon: "🍽️", title: "More variety", text: "Explore different ways to bring low-carb meals to your table." },
  { icon: "📖", title: "Easy to follow", text: "A straightforward digital guide you can open whenever you need it." },
];

function Index() {
  return (
    <main className="ebook-site">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Playfair+Display:wght@600;700;800&display=swap');
        :root{color-scheme:light;scroll-behavior:smooth}
        *{box-sizing:border-box}
        body{margin:0;background:#fbfaf6}
        .ebook-site{font-family:'DM Sans',sans-serif;color:#202820;overflow:hidden}
        .ebook-site a{color:inherit}
        .ewrap{width:min(1160px,calc(100% - 44px));margin:auto}
        .enav{height:82px;display:flex;align-items:center;justify-content:space-between;gap:24px}
        .elogo{font-weight:800;letter-spacing:-.6px;font-size:18px;text-decoration:none;display:flex;align-items:center;gap:10px}
        .elogo-mark{width:38px;height:38px;border-radius:13px;background:#e6edda;display:grid;place-items:center;font-size:20px}
        .enavlinks{display:flex;align-items:center;gap:28px}
        .enavlinks a{text-decoration:none;color:#657064;font-size:13px;font-weight:700}
        .enavlinks a:hover{color:#47734a}
        .ebtn{display:inline-flex;align-items:center;justify-content:center;gap:9px;border:0;border-radius:999px;padding:15px 22px;background:#365f3e;color:#fff!important;text-decoration:none;font-size:14px;font-weight:800;box-shadow:0 8px 22px #365f3e25;transition:.2s}
        .ebtn:hover{background:#294c31;transform:translateY(-2px)}
        .ebtn-light{background:#fff;color:#365f3e!important;border:1px solid #e4e8dc;box-shadow:none}
        .ehero{background:linear-gradient(115deg,#f0f2e8 0%,#f8f5ec 58%,#f3eadb 100%);position:relative}
        .ehero-grid{display:grid;grid-template-columns:1.02fr .98fr;gap:54px;align-items:center;padding:65px 0 78px}
        .ekicker{display:inline-flex;align-items:center;gap:8px;padding:8px 13px;border-radius:999px;background:#e2e9d8;color:#466a43;font-size:11px;letter-spacing:.1em;text-transform:uppercase;font-weight:800}
        .ehero h1{font-family:'Playfair Display',serif;font-size:clamp(42px,5.4vw,68px);line-height:1.06;letter-spacing:-1.8px;margin:20px 0 18px;max-width:640px}
        .ehero h1 em{font-style:normal;color:#55794e}
        .elead{max-width:550px;color:#667064;line-height:1.8;font-size:16px;margin:0 0 26px}
        .eactions{display:flex;flex-wrap:wrap;gap:12px}
        .etrust{display:flex;gap:10px;align-items:center;margin-top:25px;color:#6e776b;font-size:12px}
        .etrust strong{color:#3c5c3c}
        .evisual{min-height:470px;position:relative;display:grid;place-items:center}
        .ebook-cover{position:relative;z-index:2;width:min(310px,72%);aspect-ratio: .72;background:linear-gradient(155deg,#263f2e,#526e4b 70%,#b6a77c);border:8px solid #fff;border-radius:7px;box-shadow:0 28px 55px #263a2b35;transform:rotate(-5deg);padding:27px 22px;color:white;display:flex;flex-direction:column;justify-content:space-between;text-align:center}
        .ebook-cover:before{content:'';position:absolute;inset:8px;border:1px solid #ffffff65;pointer-events:none}
        .cover-small{font-size:9px;letter-spacing:.19em;text-transform:uppercase;font-weight:700;color:#e4e7d8}
        .ebook-cover h2{font-family:'Playfair Display',serif;font-size:31px;line-height:1.08;margin:17px 0;text-shadow:0 2px 12px #0003}
        .ebook-cover p{font-size:11px;line-height:1.5;color:#edf0e7}
        .cover-food{font-size:90px;line-height:1;filter:drop-shadow(0 12px 12px #0004)}
        .evisual-photo{position:absolute;width:270px;height:355px;object-fit:cover;border-radius:150px 150px 20px 20px;right:0;top:35px;opacity:.85;box-shadow:0 20px 45px #3c483025}
        .efloat{position:absolute;z-index:3;background:#fff;border:1px solid #e9eadf;border-radius:16px;padding:13px 16px;box-shadow:0 12px 30px #25392515;font-size:12px;font-weight:800}
        .efloat-one{left:0;top:80px}.efloat-two{right:0;bottom:52px}
        .esection{padding:82px 0}
        .esection-soft{background:#f3f4ec}
        .ecenter{text-align:center;max-width:690px;margin:0 auto 42px}
        .eyebrow{color:#648052;font-size:11px;text-transform:uppercase;letter-spacing:.16em;font-weight:800}
        .ecenter h2,.eabout h2{font-family:'Playfair Display',serif;font-size:clamp(32px,4vw,46px);line-height:1.13;letter-spacing:-.8px;margin:13px 0}
        .ecenter p,.eabout p{color:#70796e;line-height:1.8;margin:0;font-size:15px}
        .erecipe-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
        .erecipe{background:white;border:1px solid #e9ebdf;border-radius:20px;overflow:hidden;box-shadow:0 10px 30px #24332309}
        .erecipe img{width:100%;height:225px;object-fit:cover;display:block}
        .erecipe-body{padding:21px}
        .erecipe-meta{font-size:10px;text-transform:uppercase;letter-spacing:.12em;color:#738267;font-weight:800;display:flex;justify-content:space-between}
        .erecipe h3{font-family:'Playfair Display',serif;font-size:22px;margin:11px 0 7px}
        .erecipe p{font-size:13px;color:#788074;line-height:1.65;margin:0}
        .e-note{text-align:center;color:#81877b;font-size:12px;margin-top:22px}
        .ebenefits{display:grid;grid-template-columns:repeat(4,1fr);gap:17px}
        .ebenefit{background:#fff;border:1px solid #e8ebdf;border-radius:18px;padding:24px 21px}
        .ebenefit-icon{font-size:28px;width:52px;height:52px;border-radius:16px;background:#f0f2e8;display:grid;place-items:center;margin-bottom:17px}
        .ebenefit h3{font-size:16px;margin:0 0 8px}
        .ebenefit p{font-size:13px;line-height:1.7;color:#788074;margin:0}
        .eabout{display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:65px}
        .eabout-art{height:390px;position:relative;border-radius:24px;overflow:hidden;background:#e5e9dc}
        .eabout-art img{width:100%;height:100%;object-fit:cover}
        .eabout-art-label{position:absolute;left:20px;bottom:20px;background:#fff;padding:12px 16px;border-radius:12px;font-size:12px;font-weight:800}
        .echecks{list-style:none;padding:0;margin:23px 0 27px;display:grid;gap:13px}
        .echecks li{display:flex;gap:10px;color:#5e6a5b;font-size:14px;line-height:1.5}
        .echecks span{color:#5f8052;font-weight:900}
        .eoffer{background:#263f2e;color:#fff;border-radius:28px;padding:43px;display:grid;grid-template-columns:1fr auto;gap:35px;align-items:center}
        .eoffer .eyebrow{color:#c4d3ae}
        .eoffer h2{font-family:'Playfair Display',serif;font-size:clamp(31px,4vw,44px);line-height:1.1;margin:12px 0}
        .eoffer p{color:#d3ddce;line-height:1.7;margin:0;max-width:570px;font-size:14px}
        .eprice{text-align:center;min-width:210px}
        .eprice small{display:block;color:#d3ddce;font-size:12px}
        .eprice strong{display:block;font-family:'Playfair Display',serif;font-size:54px;line-height:1.2;margin:5px 0 14px}
        .eprice .ebtn{background:#e6edda;color:#294b31!important;width:100%}
        .efaq{max-width:780px;margin:auto;display:grid;gap:12px}
        .efaq details{background:#fff;border:1px solid #e7eadd;border-radius:15px;padding:19px 21px}
        .efaq summary{cursor:pointer;font-weight:800;font-size:14px}
        .efaq details p{color:#737c70;font-size:13px;line-height:1.7;margin:12px 0 0}
        .efooter{background:#eceedf;padding:34px 0}
        .efooter-top{display:flex;justify-content:space-between;gap:25px;align-items:center;padding-bottom:23px;border-bottom:1px solid #d9dfd0}
        .efooter p{font-size:12px;color:#737d70;line-height:1.7;margin:7px 0 0}
        .efooter-links{display:flex;gap:18px;flex-wrap:wrap}
        .efooter-links a{font-size:12px;color:#596c55;text-decoration:none;font-weight:700}
        .efooter-bottom{display:flex;justify-content:space-between;gap:18px;padding-top:18px;color:#7b8377;font-size:11px}
        .elegal{max-width:900px;margin:25px auto 0;color:#7c8478;font-size:11px;line-height:1.65}
        .elegal details{margin-top:8px}
        .elegal summary{cursor:pointer;font-weight:700}
        @media(max-width:850px){.enavlinks{display:none}.ehero-grid{grid-template-columns:1fr;gap:10px;padding:52px 0 40px}.evisual{min-height:420px}.evisual-photo{right:6%;}.ebenefits{grid-template-columns:repeat(2,1fr)}.eabout{grid-template-columns:1fr;gap:32px}.eabout-art{height:320px}.eoffer{grid-template-columns:1fr}.eprice{text-align:left;max-width:250px}}
        @media(max-width:560px){.ewrap{width:calc(100% - 30px)}.enav{height:70px}.elogo{font-size:15px}.enav>.ebtn{padding:12px 14px;font-size:12px}.ehero h1{font-size:43px}.elead{font-size:14px}.evisual{min-height:355px}.ebook-cover{width:220px;padding:20px 16px}.ebook-cover h2{font-size:25px}.cover-food{font-size:67px}.evisual-photo{width:190px;height:270px;right:0;top:40px}.efloat{font-size:10px;padding:10px 12px}.efloat-one{top:40px}.efloat-two{bottom:28px}.esection{padding:60px 0}.erecipe-grid{grid-template-columns:1fr}.erecipe img{height:205px}.ebenefits{grid-template-columns:1fr 1fr;gap:10px}.ebenefit{padding:18px 15px}.eabout-art{height:260px}.eoffer{padding:28px 23px}.eprice strong{font-size:48px}.efooter-top,.efooter-bottom{align-items:flex-start;flex-direction:column}.efooter-links{gap:13px}}
      `}</style>

      <div className="ehero" id="top">
        <header className="ewrap enav">
          <a className="elogo" href="#top"><span className="elogo-mark">🥑</span><span>Simply <span style={{color:"#628052"}}>Low Carb</span></span></a>
          <nav className="enavlinks" aria-label="Main navigation"><a href="#recipes">Recipes</a><a href="#benefits">What's inside</a><a href="#faq">FAQ</a></nav>
          <a className="ebtn" href={checkoutHref}>Get the eBook <span>↗</span></a>
        </header>
        <div className="ewrap ehero-grid">
          <div>
            <span className="ekicker">🥗 A simple low-carb recipe guide</span>
            <h1>Enjoy delicious meals. <em>Keep it simple.</em></h1>
            <p className="elead">Discover easy low-carb recipe inspiration for everyday cooking. A practical digital guide created to help you bring more variety and flavor to your meals.</p>
            <div className="eactions"><a className="ebtn" href={checkoutHref}>Get instant access — $6.99 <span>→</span></a><a className="ebtn ebtn-light" href="#recipes">Explore the recipes</a></div>
            <div className="etrust"><span>✓</span><span><strong>One-time payment</strong> · Digital eBook · Read at your own pace</span></div>
          </div>
          <div className="evisual" aria-label="Digital low-carb recipe eBook preview">
            <img className="evisual-photo" src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=85" alt="Fresh healthy meal bowl" />
            <div className="ebook-cover"><span className="cover-small">A simple recipe collection</span><div><h2>15 Delicious<br/>Low-Carb<br/>Recipes</h2><p>Easy ideas for flavorful everyday meals</p></div><div className="cover-food">🥑</div><span className="cover-small">YOUR KITCHEN, MADE SIMPLE</span></div>
            <div className="efloat efloat-one">🌿 Simple meal inspiration</div><div className="efloat efloat-two">📘 Digital eBook</div>
          </div>
        </div>
      </div>

      <section className="esection" id="recipes"><div className="ewrap">
        <div className="ecenter"><span className="eyebrow">A taste of what's possible</span><h2>Fresh ideas for your everyday table</h2><p>Get inspired by the kinds of meals you can explore with a low-carb approach. These images are visual examples, not a representation of the complete eBook contents.</p></div>
        <div className="erecipe-grid">{recipes.map((recipe)=><article className="erecipe" key={recipe.name}><img src={recipe.image} alt={recipe.name} loading="lazy"/><div className="erecipe-body"><div className="erecipe-meta"><span>{recipe.type}</span><span>{recipe.time}</span></div><h3>{recipe.name}</h3><p>{recipe.description}</p></div></article>)}</div>
        <p className="e-note">Recipe names and descriptions shown here are illustrative examples for this sales page.</p>
      </div></section>

      <section className="esection esection-soft" id="benefits"><div className="ewrap">
        <div className="ecenter"><span className="eyebrow">Made for real life</span><h2>A simpler way to find meal inspiration</h2><p>No complicated promises. Just approachable ideas to help make everyday food choices feel more varied and enjoyable.</p></div>
        <div className="ebenefits">{benefits.map((benefit)=><article className="ebenefit" key={benefit.title}><div className="ebenefit-icon">{benefit.icon}</div><h3>{benefit.title}</h3><p>{benefit.text}</p></article>)}</div>
      </div></section>

      <section className="esection"><div className="ewrap eabout">
        <div className="eabout-art"><img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1100&q=85" alt="A table filled with fresh ingredients and colorful food" loading="lazy"/><span className="eabout-art-label">Simple ingredients. Delicious inspiration.</span></div>
        <div><span className="eyebrow">Your kitchen companion</span><h2>Make room for more delicious possibilities</h2><p>This digital guide is designed as an approachable starting point for anyone looking for low-carb recipe inspiration. Keep it handy on your phone, tablet, or computer and revisit it whenever you need a fresh idea.</p><ul className="echecks"><li><span>✓</span> A convenient digital format</li><li><span>✓</span> Inspiration for everyday meals</li><li><span>✓</span> A one-time price of $6.99</li></ul><a className="ebtn" href={checkoutHref}>Get the eBook — $6.99 →</a></div>
      </div></section>

      <section className="esection esection-soft" id="offer"><div className="ewrap"><div className="eoffer">
        <div><span className="eyebrow">A little inspiration goes a long way</span><h2>Bring fresh ideas to your kitchen.</h2><p>Get the digital guide <em>15 Delicious Recipes for Losing Weight with Low Carb Diets</em> for one simple payment. No subscription is advertised.</p></div>
        <div className="eprice"><small>One-time payment</small><strong>$6.99</strong><a className="ebtn" href={checkoutHref}>Get instant access ↗</a></div>
      </div>
      {!CHECKOUT_URL && <p className="e-note">Checkout connection pending: add your real payment link to CHECKOUT_URL before publishing.</p>}
      </div></section>

      <section className="esection" id="faq"><div className="ewrap">
        <div className="ecenter"><span className="eyebrow">Good to know</span><h2>Frequently asked questions</h2><p>A few quick answers before you get started.</p></div>
        <div className="efaq">
          <details><summary>What will I receive?</summary><p>You will receive a digital eBook titled “15 Delicious Recipes for Losing Weight with Low Carb Diets.” Please review the product details at checkout for the exact file format and delivery method.</p></details>
          <details><summary>Is this a physical book?</summary><p>No. This offer is for a digital product. No physical book will be shipped.</p></details>
          <details><summary>How much does it cost?</summary><p>The listed one-time price is $6.99. Any applicable taxes or payment-provider charges will be shown by the checkout provider, if relevant.</p></details>
          <details><summary>Will these recipes guarantee weight loss?</summary><p>No. Individual results vary, and no specific weight-loss result is promised. This eBook is recipe inspiration, not medical advice or a substitute for guidance from a qualified healthcare professional.</p></details>
          <details><summary>How do I get help with my purchase?</summary><p>For purchase or delivery questions, use the customer support contact provided by the seller or on your checkout receipt. Add your real support email before publishing this page.</p></details>
        </div>
      </div></section>

      <footer className="efooter"><div className="ewrap">
        <div className="efooter-top"><div><a className="elogo" href="#top"><span className="elogo-mark">🥑</span><span>Simply <span style={{color:"#628052"}}>Low Carb</span></span></a><p>Simple inspiration for everyday low-carb cooking.</p></div><nav className="efooter-links" aria-label="Footer navigation"><a href="#faq">FAQ</a><a href="#privacy-policy">Privacy Policy</a><a href="#terms">Terms &amp; Conditions</a><a href="#refund-policy">Refund Policy</a><a href="mailto:support@example.com">Contact</a></nav></div>
        <div className="efooter-bottom"><span>© {new Date().getFullYear()} Simply Low Carb. All rights reserved.</span><span>Digital product · $6.99 USD</span></div>
        <div className="elegal">
          <details id="privacy-policy"><summary>Privacy Policy — placeholder</summary><p>Publish a complete privacy policy that identifies the seller, explains what personal data is collected by the website and checkout provider, how it is used, retention practices, cookies or analytics, and how customers can contact you about privacy. This placeholder is not a complete legal policy.</p></details>
          <details id="terms"><summary>Terms &amp; Conditions — placeholder</summary><p>Publish terms identifying the seller, digital-product access and usage rights, payment terms, limitations, governing law, and contact details. This placeholder is not a complete legal agreement.</p></details>
          <details id="refund-policy"><summary>Refund Policy — placeholder</summary><p>Add your actual refund and cancellation terms here, consistent with the laws that apply to your customers and the checkout provider's rules. Do not publish this placeholder as a final refund policy.</p></details>
          <p>General information only. This recipe guide is not medical or nutritional treatment advice. Consult a qualified professional about dietary changes, especially if you have a medical condition or specific nutritional needs.</p>
        </div>
      </div></footer>
    </main>
  );
}
