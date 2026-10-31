import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Index });

const CHECKOUT_URL_EN = "https://pay.cakto.com.br/37dht6v_1261733";
const CHECKOUT_URL_PT = "https://pay.cakto.com.br/dzjq97m_1131232";

const recipes = [
  { name: "Creamy Garlic Chicken", type: "Dinner", time: "25 min", image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&q=85", description: "Tender chicken with a rich, creamy garlic sauce." },
  { name: "Avocado Egg Salad", type: "Lunch", time: "10 min", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=85", description: "A fresh, satisfying combination for busy days." },
  { name: "Zucchini Noodle Bowl", type: "Light meal", time: "20 min", image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=85", description: "A colorful bowl packed with fresh ingredients." },
];

const benefits = [
  { icon: "🥑", title: "Simple ingredients", text: "Make meals with familiar ingredients that are easy to find." },
  { icon: "⏱️", title: "Practical ideas", text: "Get inspiration for everyday meals without complicated steps." },
  { icon: "🍽️", title: "More variety", text: "Explore different ways to bring low-carb meals to your table." },
  { icon: "📖", title: "Easy to follow", text: "A straightforward digital guide you can open whenever you need it." },
];

const copy = {
  en: {
    navRecipes: "Recipes", navInside: "What's inside", navFaq: "FAQ", getBook: "Get the eBook",
    kicker: "🥗 A simple low-carb recipe guide", heroA: "Enjoy delicious meals.", heroB: "Keep it simple.",
    lead: "Discover easy low-carb recipe inspiration for everyday cooking. A practical digital guide created to help you bring more variety and flavor to your meals.",
    heroCta: "Get instant access — $6.99", explore: "Explore the recipes", trust: "One-time payment · Digital eBook · Read at your own pace",
    taste: "A taste of what's possible", recipeTitle: "Fresh ideas for your everyday table",
    recipeIntro: "Get inspired by the kinds of meals you can explore with a low-carb approach. These images are visual examples, not a representation of the complete eBook contents.",
    recipeNote: "Recipe names and descriptions shown here are illustrative examples for this sales page.",
    recipeTypes: ["Dinner", "Lunch", "Light meal"], recipeDescriptions: ["Tender chicken with a rich, creamy garlic sauce.", "A fresh, satisfying combination for busy days.", "A colorful bowl packed with fresh ingredients."],
    realLife: "Made for real life", benefitsTitle: "A simpler way to find meal inspiration",
    benefitsIntro: "No complicated promises. Just approachable ideas to help make everyday food choices feel more varied and enjoyable.",
    benefitTitles: ["Simple ingredients", "Practical ideas", "More variety", "Easy to follow"],
    benefitTexts: ["Make meals with familiar ingredients that are easy to find.", "Get inspiration for everyday meals without complicated steps.", "Explore different ways to bring low-carb meals to your table.", "A straightforward digital guide you can open whenever you need it."],
    companion: "Your kitchen companion", aboutTitle: "Make room for more delicious possibilities",
    aboutText: "This digital guide is designed as an approachable starting point for anyone looking for low-carb recipe inspiration. Keep it handy on your phone, tablet, or computer and revisit it whenever you need a fresh idea.",
    checks: ["A convenient digital format", "Inspiration for everyday meals", "A one-time price of $6.99"], aboutCta: "Get the eBook — $6.99 →",
    offerEyebrow: "A little inspiration goes a long way", offerTitle: "Bring fresh ideas to your kitchen.",
    offerText: "Get the digital guide 15 Delicious Recipes for Losing Weight with Low Carb Diets for one simple payment. No subscription is advertised.",
    oneTime: "One-time payment", instant: "Get instant access ↗",
    goodToKnow: "Good to know", faqTitle: "Frequently asked questions", faqIntro: "A few quick answers before you get started.",
    questions: ["What will I receive?", "Is this a physical book?", "How much does it cost?", "Will these recipes guarantee weight loss?", "How do I get help with my purchase?"],
    answers: [
      "You will receive a digital eBook titled “15 Delicious Recipes for Losing Weight with Low Carb Diets.” Please review the product details at checkout for the exact file format and delivery method.",
      "No. This offer is for a digital product. No physical book will be shipped.",
      "The listed one-time price is $6.99. Any applicable taxes or payment-provider charges will be shown by the checkout provider, if relevant.",
      "No. Individual results vary, and no specific weight-loss result is promised. This eBook is recipe inspiration, not medical advice or a substitute for guidance from a qualified healthcare professional.",
      "For purchase or delivery questions, use the customer support contact provided by the seller or on your checkout receipt. Add your real support email before publishing this page."
    ],
    footerLine: "Simple inspiration for everyday low-carb cooking.", footerFaq: "FAQ", privacy: "Privacy Policy", terms: "Terms & Conditions", refund: "Refund Policy", contact: "Contact",
    footerMeta: "Digital product · $6.99 USD", privacyTitle: "Privacy Policy — placeholder", termsTitle: "Terms & Conditions — placeholder", refundTitle: "Refund Policy — placeholder",
    privacyText: "Publish a complete privacy policy that identifies the seller, explains what personal data is collected by the website and checkout provider, how it is used, retention practices, cookies or analytics, and how customers can contact you about privacy. This placeholder is not a complete legal policy.",
    termsText: "Publish terms identifying the seller, digital-product access and usage rights, payment terms, limitations, governing law, and contact details. This placeholder is not a complete legal agreement.",
    refundText: "Add your actual refund and cancellation terms here, consistent with the laws that apply to your customers and the checkout provider's rules. Do not publish this placeholder as a final refund policy.",
    disclaimer: "General information only. This recipe guide is not medical or nutritional treatment advice. Consult a qualified professional about dietary changes, especially if you have a medical condition or specific nutritional needs."
  },
  pt: {
    navRecipes: "Receitas", navInside: "O que você recebe", navFaq: "Dúvidas", getBook: "Adquirir eBook",
    kicker: "🥗 Um guia simples de receitas low carb", heroA: "Refeições deliciosas.", heroB: "Sem complicação.",
    lead: "Descubra ideias práticas de receitas low carb para o dia a dia. Um guia digital criado para ajudar você a trazer mais variedade e sabor às suas refeições.",
    heroCta: "Acesse agora — R$ 9,90", explore: "Ver receitas", trust: "Pagamento único · eBook digital · Leia no seu ritmo",
    taste: "Um gostinho do que você vai encontrar", recipeTitle: "Novas ideias para suas refeições",
    recipeIntro: "Inspire-se com exemplos de refeições que combinam com uma alimentação low carb. As imagens são ilustrativas e não representam o conteúdo completo do eBook.",
    recipeNote: "Os nomes e as descrições das receitas exibidos aqui são exemplos ilustrativos desta página de vendas.",
    recipeTypes: ["Jantar", "Almoço", "Refeição leve"], recipeDescriptions: ["Frango macio com um molho cremoso de alho.", "Uma combinação fresca e saborosa para os dias corridos.", "Uma tigela colorida com ingredientes fresquinhos."],
    realLife: "Pensado para a vida real", benefitsTitle: "Mais facilidade para encontrar inspiração",
    benefitsIntro: "Sem promessas milagrosas. Apenas ideias acessíveis para deixar suas escolhas do dia a dia mais variadas e saborosas.",
    benefitTitles: ["Ingredientes simples", "Ideias práticas", "Mais variedade", "Fácil de acompanhar"],
    benefitTexts: ["Prepare refeições com ingredientes conhecidos e fáceis de encontrar.", "Encontre inspiração para o dia a dia sem etapas complicadas.", "Explore diferentes maneiras de incluir refeições low carb na sua rotina.", "Um guia digital simples para consultar sempre que precisar de uma nova ideia."],
    companion: "Seu companheiro na cozinha", aboutTitle: "Abra espaço para novas possibilidades deliciosas",
    aboutText: "Este guia digital foi pensado como um ponto de partida acessível para quem procura inspiração de receitas low carb. Tenha o material no celular, tablet ou computador e consulte sempre que quiser uma ideia nova.",
    checks: ["Formato digital e prático", "Inspiração para as refeições do dia a dia", "Pagamento único de R$ 9,90"], aboutCta: "Quero meu eBook — R$ 9,90 →",
    offerEyebrow: "Uma boa inspiração faz diferença", offerTitle: "Leve novas ideias para sua cozinha.",
    offerText: "Adquira o guia digital 15 Receitas para Emagrecer com a Dieta Low Carb com um único pagamento. Sem assinatura.",
    oneTime: "Pagamento único", instant: "Quero acessar agora ↗",
    goodToKnow: "Antes de começar", faqTitle: "Perguntas frequentes", faqIntro: "Tire suas dúvidas antes de adquirir.",
    questions: ["O que vou receber?", "É um livro físico?", "Quanto custa?", "As receitas garantem emagrecimento?", "Como consigo ajuda com minha compra?"],
    answers: [
      "Você receberá um eBook digital com 15 receitas para emagrecer com a dieta low carb. Confira os detalhes do produto no checkout para saber o formato exato do arquivo e como será a entrega.",
      "Não. Esta oferta é de um produto digital. Nenhum livro físico será enviado.",
      "O preço anunciado é de R$ 9,90, em pagamento único. Se houver alguma taxa aplicável, ela será informada pelo provedor de pagamento.",
      "Não. Os resultados variam de pessoa para pessoa e não há promessa de emagrecimento específico. Este eBook oferece inspiração de receitas; não é orientação médica e não substitui o acompanhamento de um profissional de saúde.",
      "Para dúvidas sobre pagamento ou entrega, utilize o contato de suporte informado pelo vendedor ou no comprovante da compra. Cadastre seu e-mail real de atendimento antes de publicar esta página."
    ],
    footerLine: "Inspiração simples para sua rotina low carb.", footerFaq: "Dúvidas", privacy: "Política de Privacidade", terms: "Termos e Condições", refund: "Política de Reembolso", contact: "Contato",
    footerMeta: "Produto digital · R$ 9,90", privacyTitle: "Política de Privacidade — texto provisório", termsTitle: "Termos e Condições — texto provisório", refundTitle: "Política de Reembolso — texto provisório",
    privacyText: "Publique uma política de privacidade completa, identificando o vendedor e explicando quais dados pessoais são coletados pelo site e pelo checkout, como são utilizados, por quanto tempo são armazenados, o uso de cookies ou ferramentas de análise e como o cliente pode entrar em contato sobre privacidade. Este texto provisório não é uma política jurídica completa.",
    termsText: "Publique termos que identifiquem o vendedor e expliquem o acesso ao produto digital, direitos de uso, condições de pagamento, limitações, legislação aplicável e dados de contato. Este texto provisório não é um contrato jurídico completo.",
    refundText: "Inclua aqui suas condições reais de reembolso e cancelamento, de acordo com as leis aplicáveis aos seus clientes e as regras do provedor de pagamento. Não publique este texto provisório como política definitiva.",
    disclaimer: "Conteúdo informativo. Este guia de receitas não é orientação médica ou tratamento nutricional. Consulte um profissional qualificado antes de fazer mudanças na alimentação, especialmente se você tiver alguma condição de saúde ou necessidade nutricional específica."
  }
};

function Index() {
  const [language, setLanguage] = useState<"en" | "pt">("en");
  const t = copy[language];
  const checkoutHref = language === "pt" ? CHECKOUT_URL_PT : CHECKOUT_URL_EN;
  const isPortuguese = language === "pt";
  return (
    <main className="ebook-site">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Playfair+Display:wght@600;700;800&display=swap');
        a[href*="lovable.dev"],iframe[src*="lovable.dev"],div[style*="Edit with Lovable"],lovable-badge{display:none!important;opacity:0!important;visibility:hidden!important;pointer-events:none!important;position:absolute!important;z-index:-9999!important}
        :root{color-scheme:light;scroll-behavior:smooth}*{box-sizing:border-box}body{margin:0;background:#fbfaf6}
        .ebook-site{font-family:'DM Sans',sans-serif;color:#202820;overflow:hidden}.ebook-site a{color:inherit}
        .ewrap{width:min(1160px,calc(100% - 44px));margin:auto}.enav{height:82px;display:flex;align-items:center;justify-content:space-between;gap:24px}
        .elogo{font-weight:800;letter-spacing:-.6px;font-size:18px;text-decoration:none;display:flex;align-items:center;gap:10px}.elogo-mark{width:38px;height:38px;border-radius:13px;background:#e6edda;display:grid;place-items:center;font-size:20px}
        .enavlinks{display:flex;align-items:center;gap:28px}.enavlinks a{text-decoration:none;color:#657064;font-size:13px;font-weight:700}.enavlinks a:hover{color:#47734a}
        .ebtn{display:inline-flex;align-items:center;justify-content:center;gap:9px;border:0;border-radius:999px;padding:15px 22px;background:#365f3e;color:#fff!important;text-decoration:none;font-size:14px;font-weight:800;box-shadow:0 8px 22px #365f3e25;transition:.2s}
        .ebtn:hover{background:#294c31;transform:translateY(-2px)}.ebtn-light{background:#fff;color:#365f3e!important;border:1px solid #e4e8dc;box-shadow:none}
        .elanguage{display:flex;align-items:center;gap:4px;padding:4px;border:1px solid #e1e6d9;border-radius:999px;background:#fff}
        .elanguage button{border:0;background:transparent;border-radius:999px;padding:8px 10px;font:700 11px 'DM Sans',sans-serif;color:#657064;cursor:pointer}
        .elanguage button[aria-pressed="true"]{background:#e6edda;color:#294c31}
        .language-switch-wrap{display:flex;justify-content:flex-end;padding:7px 0 0;background:transparent}.language-switch{display:inline-flex;align-items:center;gap:8px;padding:6px 8px;background:#fff;border:1px solid #d6dfcf;border-radius:999px;box-shadow:0 3px 10px #263a2b16;color:#52664c;font-size:10px;font-weight:800}.language-switch .elanguage{display:flex;align-items:center;gap:3px;padding:2px;background:#f1f4ed;border-radius:999px}.language-switch .elanguage button{padding:7px 10px;font-size:10px;font-weight:900;background:transparent;color:#52664c;border:1px solid transparent;border-radius:999px;cursor:pointer;white-space:nowrap}.language-switch .elanguage button[aria-pressed="true"]{background:#365f3e;color:#fff;border-color:#365f3e;box-shadow:0 2px 5px #263a2b20}.language-switch .elanguage button:hover{filter:brightness(.95)}
        .ehero{background:linear-gradient(115deg,#f0f2e8 0%,#f8f5ec 58%,#f3eadb 100%);position:relative}
        .ehero-grid{display:grid;grid-template-columns:1.02fr .98fr;gap:54px;align-items:center;padding:65px 0 78px}
        .ekicker{display:inline-flex;align-items:center;gap:8px;padding:8px 13px;border-radius:999px;background:#e2e9d8;color:#466a43;font-size:11px;letter-spacing:.1em;text-transform:uppercase;font-weight:800}
        .ehero h1{font-family:'Playfair Display',serif;font-size:clamp(42px,5.4vw,68px);line-height:1.06;letter-spacing:-1.8px;margin:20px 0 18px;max-width:640px}.ehero h1 em{font-style:normal;color:#55794e}
        .elead{max-width:550px;color:#667064;line-height:1.8;font-size:16px;margin:0 0 26px}.eactions{display:flex;flex-wrap:wrap;gap:12px}
        .etrust{display:flex;gap:10px;align-items:center;margin-top:25px;color:#6e776b;font-size:12px}.etrust strong{color:#3c5c3c}
        .evisual{min-height:470px;position:relative;display:grid;place-items:center}.ebook-cover{position:relative;z-index:2;width:min(310px,72%);aspect-ratio:.72;background:linear-gradient(155deg,#263f2e,#526e4b 70%,#b6a77c);border:8px solid #fff;border-radius:7px;box-shadow:0 28px 55px #263a2b35;transform:rotate(-5deg);padding:27px 22px;color:white;display:flex;flex-direction:column;justify-content:space-between;text-align:center}
        .ebook-cover:before{content:'';position:absolute;inset:8px;border:1px solid #ffffff65;pointer-events:none}.cover-small{font-size:9px;letter-spacing:.19em;text-transform:uppercase;font-weight:700;color:#e4e7d8}
        .ebook-cover h2{font-family:'Playfair Display',serif;font-size:31px;line-height:1.08;margin:17px 0;text-shadow:0 2px 12px #0003}.ebook-cover p{font-size:11px;line-height:1.5;color:#edf0e7}
        .cover-food{font-size:90px;line-height:1;filter:drop-shadow(0 12px 12px #0004)}.evisual-photo{position:absolute;width:270px;height:355px;object-fit:cover;border-radius:150px 150px 20px 20px;right:0;top:35px;opacity:.85;box-shadow:0 20px 45px #3c483025}
        .efloat{position:absolute;z-index:3;background:#fff;border:1px solid #e9eadf;border-radius:16px;padding:13px 16px;box-shadow:0 12px 30px #25392515;font-size:12px;font-weight:800}.efloat-one{left:0;top:80px}.efloat-two{right:0;bottom:52px}
        .esection{padding:82px 0}.esection-soft{background:#f3f4ec}.ecenter{text-align:center;max-width:690px;margin:0 auto 42px}
        .eyebrow{color:#648052;font-size:11px;text-transform:uppercase;letter-spacing:.16em;font-weight:800}.ecenter h2,.eabout h2{font-family:'Playfair Display',serif;font-size:clamp(32px,4vw,46px);line-height:1.13;letter-spacing:-.8px;margin:13px 0}
        .ecenter p,.eabout p{color:#70796e;line-height:1.8;margin:0;font-size:15px}.erecipe-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
        .erecipe{background:white;border:1px solid #e9ebdf;border-radius:20px;overflow:hidden;box-shadow:0 10px 30px #24332309}.erecipe img{width:100%;height:225px;object-fit:cover;display:block}
        .erecipe-body{padding:21px}.erecipe-meta{font-size:10px;text-transform:uppercase;letter-spacing:.12em;color:#738267;font-weight:800;display:flex;justify-content:space-between}
        .erecipe h3{font-family:'Playfair Display',serif;font-size:22px;margin:11px 0 7px}.erecipe p{font-size:13px;color:#788074;line-height:1.65;margin:0}.e-note{text-align:center;color:#81877b;font-size:12px;margin-top:22px}
        .ebenefits{display:grid;grid-template-columns:repeat(4,1fr);gap:17px}.ebenefit{background:#fff;border:1px solid #e8ebdf;border-radius:18px;padding:24px 21px}
        .ebenefit-icon{font-size:28px;width:52px;height:52px;border-radius:16px;background:#f0f2e8;display:grid;place-items:center;margin-bottom:17px}.ebenefit h3{font-size:16px;margin:0 0 8px}.ebenefit p{font-size:13px;line-height:1.7;color:#788074;margin:0}
        .eabout{display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:65px}.eabout-art{height:390px;position:relative;border-radius:24px;overflow:hidden;background:#e5e9dc}
        .eabout-art img{width:100%;height:100%;object-fit:cover}.eabout-art-label{position:absolute;left:20px;bottom:20px;background:#fff;padding:12px 16px;border-radius:12px;font-size:12px;font-weight:800}
        .echecks{list-style:none;padding:0;margin:23px 0 27px;display:grid;gap:13px}.echecks li{display:flex;gap:10px;color:#5e6a5b;font-size:14px;line-height:1.5}.echecks span{color:#5f8052;font-weight:900}
        .eoffer{background:#263f2e;color:#fff;border-radius:28px;padding:43px;display:grid;grid-template-columns:1fr auto;gap:35px;align-items:center}.eoffer .eyebrow{color:#c4d3ae}
        .eoffer h2{font-family:'Playfair Display',serif;font-size:clamp(31px,4vw,44px);line-height:1.1;margin:12px 0}.eoffer p{color:#d3ddce;line-height:1.7;margin:0;max-width:570px;font-size:14px}
        .eprice{text-align:center;min-width:210px}.eprice small{display:block;color:#d3ddce;font-size:12px}.eprice strong{display:block;font-family:'Playfair Display',serif;font-size:54px;line-height:1.2;margin:5px 0 14px}.eprice .ebtn{background:#e6edda;color:#294b31!important;width:100%}
        .efaq{max-width:780px;margin:auto;display:grid;gap:12px}.efaq details{background:#fff;border:1px solid #e7eadd;border-radius:15px;padding:19px 21px}
        .efaq summary{cursor:pointer;font-weight:800;font-size:14px}.efaq details p{color:#737c70;font-size:13px;line-height:1.7;margin:12px 0 0}
        .efooter{background:#eceedf;padding:34px 0}.efooter-top{display:flex;justify-content:space-between;gap:25px;align-items:center;padding-bottom:23px;border-bottom:1px solid #d9dfd0}
        .efooter p{font-size:12px;color:#737d70;line-height:1.7;margin:7px 0 0}.efooter-links{display:flex;gap:18px;flex-wrap:wrap}.efooter-links a{font-size:12px;color:#596c55;text-decoration:none;font-weight:700}
        .efooter-bottom{display:flex;justify-content:space-between;gap:18px;padding-top:18px;color:#7b8377;font-size:11px}.elegal{max-width:900px;margin:25px auto 0;color:#7c8478;font-size:11px;line-height:1.65}
        .elegal details{margin-top:8px}.elegal summary{cursor:pointer;font-weight:700}
        @media(max-width:850px){.enavlinks{display:none}.ehero-grid{grid-template-columns:1fr;gap:10px;padding:52px 0 40px}.evisual{min-height:420px}.evisual-photo{right:6%}.ebenefits{grid-template-columns:repeat(2,1fr)}.eabout{grid-template-columns:1fr;gap:32px}.eabout-art{height:320px}.eoffer{grid-template-columns:1fr}.eprice{text-align:left;max-width:250px}}
        @media(max-width:560px){.language-switch-wrap{justify-content:flex-end;padding:7px 15px 0}.language-switch{width:auto;justify-content:flex-end;gap:6px;padding:5px 7px}.language-switch .elanguage{width:auto;justify-content:center}.language-switch .elanguage button{flex:0 0 auto;max-width:none;padding:7px 9px;font-size:10px}.ewrap{width:calc(100% - 30px)}.enav{height:70px}.elogo{font-size:15px}.enav>.ebtn{padding:12px 14px;font-size:12px}.elanguage button{padding:7px 8px;font-size:10px}.ehero h1{font-size:43px}.elead{font-size:14px}.evisual{min-height:355px}.ebook-cover{width:220px;padding:20px 16px}.ebook-cover h2{font-size:25px}.cover-food{font-size:67px}.evisual-photo{width:190px;height:270px;right:0;top:40px}.efloat{font-size:10px;padding:10px 12px}.efloat-one{top:40px}.efloat-two{bottom:28px}.esection{padding:60px 0}.erecipe-grid{grid-template-columns:1fr}.erecipe img{height:205px}.ebenefits{grid-template-columns:1fr 1fr;gap:10px}.ebenefit{padding:18px 15px}.eabout-art{height:260px}.eoffer{padding:28px 23px}.eprice strong{font-size:48px}.efooter-top,.efooter-bottom{align-items:flex-start;flex-direction:column}.efooter-links{gap:13px}}
      `}</style>

      <div className="ehero" id="top">
        <header className="ewrap enav">
          <a className="elogo" href="#top"><span className="elogo-mark">🥑</span><span>Simply <span style={{color:"#628052"}}>Low Carb</span></span></a>
          <nav className="enavlinks" aria-label={isPortuguese ? "Navegação principal" : "Main navigation"}><a href="#recipes">{t.navRecipes}</a><a href="#benefits">{t.navInside}</a><a href="#faq">{t.navFaq}</a></nav>
          <a className="ebtn" href={checkoutHref}>{t.getBook} <span>↗</span></a>
        </header>
        <div className="ewrap language-switch-wrap"><div className="language-switch"><span>{isPortuguese ? "Idioma do site:" : "Website language:"}</span><div className="elanguage" aria-label="Choose language"><button type="button" aria-pressed={language==="en"} onClick={()=>setLanguage("en")}>🇺🇸 ENGLISH</button><button type="button" aria-pressed={language==="pt"} onClick={()=>setLanguage("pt")}>🇧🇷 PORTUGUÊS</button></div></div></div>
        <div className="ewrap ehero-grid">
          <div><span className="ekicker">{t.kicker}</span><h1>{t.heroA} <em>{t.heroB}</em></h1><p className="elead">{t.lead}</p>
            <div className="eactions"><a className="ebtn" href={checkoutHref}>{t.heroCta} <span>→</span></a><a className="ebtn ebtn-light" href="#recipes">{t.explore}</a></div>
            <div className="etrust"><span>✓</span><span><strong>{t.trust.split(" · ")[0]}</strong> · {t.trust.split(" · ").slice(1).join(" · ")}</span></div>
          </div>
          <div className="evisual" aria-label={isPortuguese ? "Prévia do eBook de receitas low carb" : "Digital low-carb recipe eBook preview"}>
            <img className="evisual-photo" src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=85" alt={isPortuguese ? "Tigela de refeição saudável" : "Fresh healthy meal bowl"} />
            <div className="ebook-cover"><span className="cover-small">{isPortuguese ? "Uma coleção prática de receitas" : "A simple recipe collection"}</span><div><h2>{isPortuguese ? <>15 Receitas<br/>Deliciosas para<br/>Emagrecer</> : <>15 Delicious<br/>Recipes for<br/>Losing Weight</>}</h2><p>{isPortuguese ? "com a Dieta Low Carb" : "with Low Carb Diets"}</p></div><div className="cover-food">🥑</div><span className="cover-small">{isPortuguese ? "SUA COZINHA, SEM COMPLICAÇÃO" : "YOUR KITCHEN, MADE SIMPLE"}</span></div>
            <div className="efloat efloat-one">{isPortuguese ? "🌿 Inspiração para suas refeições" : "🌿 Simple meal inspiration"}</div><div className="efloat efloat-two">{isPortuguese ? "📘 eBook digital" : "📘 Digital eBook"}</div>
          </div>
        </div>
      </div>

      <section className="esection" id="recipes"><div className="ewrap">
        <div className="ecenter"><span className="eyebrow">{t.taste}</span><h2>{t.recipeTitle}</h2><p>{t.recipeIntro}</p></div>
        <div className="erecipe-grid">{recipes.map((recipe,i)=><article className="erecipe" key={recipe.name}><img src={recipe.image} alt={isPortuguese ? ["Frango cremoso com alho","Salada de ovos com abacate","Tigela de macarrão de abobrinha"][i] : recipe.name} loading="lazy"/><div className="erecipe-body"><div className="erecipe-meta"><span>{t.recipeTypes[i]}</span><span>{recipe.time}</span></div><h3>{isPortuguese ? ["Frango Cremoso com Alho","Salada de Ovos com Abacate","Tigela de Abobrinha"][i] : recipe.name}</h3><p>{t.recipeDescriptions[i]}</p></div></article>)}</div>
        <p className="e-note">{t.recipeNote}</p>
      </div></section>

      <section className="esection esection-soft" id="benefits"><div className="ewrap">
        <div className="ecenter"><span className="eyebrow">{t.realLife}</span><h2>{t.benefitsTitle}</h2><p>{t.benefitsIntro}</p></div>
        <div className="ebenefits">{benefits.map((benefit,i)=><article className="ebenefit" key={benefit.icon}><div className="ebenefit-icon">{benefit.icon}</div><h3>{t.benefitTitles[i]}</h3><p>{t.benefitTexts[i]}</p></article>)}</div>
      </div></section>

      <section className="esection"><div className="ewrap eabout">
        <div className="eabout-art"><img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1400&q=85" alt={isPortuguese ? "Mesa com ingredientes frescos e comida colorida" : "A table filled with fresh ingredients and colorful food"} loading="lazy"/><span className="eabout-art-label">{isPortuguese ? "Ingredientes simples. Inspiração deliciosa." : "Simple ingredients. Delicious inspiration."}</span></div>
        <div><span className="eyebrow">{t.companion}</span><h2>{t.aboutTitle}</h2><p>{t.aboutText}</p><ul className="echecks">{t.checks.map(item=><li key={item}><span>✓</span>{item}</li>)}</ul><a className="ebtn" href={checkoutHref}>{t.aboutCta}</a></div>
      </div></section>

      <section className="esection esection-soft" id="offer"><div className="ewrap"><div className="eoffer">
        <div><span className="eyebrow">{t.offerEyebrow}</span><h2>{t.offerTitle}</h2><p>{t.offerText}</p></div>
        <div className="eprice"><small>{t.oneTime}</small><strong>{isPortuguese ? "R$ 9,90" : "$6.99"}</strong><a className="ebtn" href={checkoutHref}>{t.instant}</a></div>
      </div></div></section>

      <section className="esection" id="faq"><div className="ewrap">
        <div className="ecenter"><span className="eyebrow">{t.goodToKnow}</span><h2>{t.faqTitle}</h2><p>{t.faqIntro}</p></div>
        <div className="efaq">{t.questions.map((question,i)=><details key={question}><summary>{question}</summary><p>{t.answers[i]}</p></details>)}</div>
      </div></section>

      <footer className="efooter"><div className="ewrap">
        <div className="efooter-top"><div><a className="elogo" href="#top"><span className="elogo-mark">🥑</span><span>Simply <span style={{color:"#628052"}}>Low Carb</span></span></a><p>{t.footerLine}</p></div>
          <nav className="efooter-links" aria-label={isPortuguese ? "Navegação do rodapé" : "Footer navigation"}><a href="#faq">{t.footerFaq}</a><a href="#privacy-policy">{t.privacy}</a><a href="#terms">{t.terms}</a><a href="#refund-policy">{t.refund}</a><a href="mailto:support@example.com">{t.contact}</a></nav></div>
        <div className="efooter-bottom"><span>© {new Date().getFullYear()} Simply Low Carb. {isPortuguese ? "Todos os direitos reservados." : "All rights reserved."}</span><span>{t.footerMeta}</span></div>
        <div className="elegal">
          <details id="privacy-policy"><summary>{t.privacyTitle}</summary><p>{t.privacyText}</p></details>
          <details id="terms"><summary>{t.termsTitle}</summary><p>{t.termsText}</p></details>
          <details id="refund-policy"><summary>{t.refundTitle}</summary><p>{t.refundText}</p></details>
          <p>{t.disclaimer}</p>
        </div>
      </div></footer>
    </main>
  );
}
