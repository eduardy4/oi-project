import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

const services = [
  { icon: "🩺", title: "Consultas veterinárias", text: "Acompanhamento preventivo e cuidado individual para cada fase da vida." },
  { icon: "✂️", title: "Banho e tosa", text: "Higiene, conforto e carinho em cada detalhe." },
  { icon: "🐾", title: "Loja pet", text: "Acessórios, brinquedos e itens essenciais para a rotina." },
  { icon: "💚", title: "Orientação de cuidados", text: "Dicas para manter seu companheiro saudável, ativo e feliz." },
];

const products = [
  { emoji: "🦴", name: "Petiscos e snacks", category: "Para recompensar com carinho" },
  { emoji: "🎾", name: "Brinquedos divertidos", category: "Mais movimento e diversão" },
  { emoji: "🧴", name: "Higiene e cuidado", category: "Bem-estar todos os dias" },
];

function Index() {
  return (
    <main className="pet-site">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Nunito:wght@400;600;700;800;900&display=swap');
        :root { color-scheme: light; }
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; background: #fffdf8; }
        .pet-site { color: #20352d; font-family: 'DM Sans', sans-serif; overflow: hidden; }
        .pet-site h1,.pet-site h2,.pet-site h3 { font-family: 'Nunito', sans-serif; letter-spacing: -0.035em; }
        .pet-wrap { width: min(1120px, calc(100% - 40px)); margin: 0 auto; }
        .pet-nav { display:flex; align-items:center; justify-content:space-between; min-height:78px; gap:20px; }
        .pet-brand { display:flex; align-items:center; gap:10px; color:#20352d; text-decoration:none; font-weight:900; font-size:21px; letter-spacing:-.7px; }
        .pet-brand-mark { display:grid; place-items:center; width:42px; height:42px; background:#d8f0c8; border-radius:15px; font-size:23px; }
        .pet-links { display:flex; gap:28px; align-items:center; }
        .pet-links a { color:#53645a; text-decoration:none; font-size:14px; font-weight:700; }
        .pet-links a:hover { color:#387b4e; }
        .pet-btn { display:inline-flex; justify-content:center; align-items:center; gap:8px; background:#287346; color:white!important; padding:13px 19px; border-radius:999px; text-decoration:none; font-size:14px; font-weight:800; box-shadow:0 8px 20px #28734620; transition:transform .2s,background .2s; }
        .pet-btn:hover { background:#1f5e39; transform:translateY(-2px); }
        .pet-btn-light { background:#fff; color:#287346!important; box-shadow:none; border:1px solid #e1e9dc; }
        .pet-hero { background:linear-gradient(120deg,#f2f8e9 0%,#fff8eb 100%); position:relative; }
        .pet-hero-grid { display:grid; grid-template-columns:1.05fr .95fr; align-items:center; gap:52px; padding:64px 0 78px; }
        .pet-kicker { display:inline-flex; align-items:center; gap:8px; color:#34734a; background:#e2f1d8; padding:8px 13px; border-radius:999px; font-size:12px; font-weight:900; letter-spacing:.06em; text-transform:uppercase; }
        .pet-hero h1 { font-size:clamp(42px,5.3vw,66px); line-height:1.04; margin:20px 0; max-width:620px; }
        .pet-hero h1 span { color:#39804e; }
        .pet-lead { font-size:17px; line-height:1.8; color:#637269; max-width:520px; margin:0 0 27px; }
        .pet-actions { display:flex; flex-wrap:wrap; gap:12px; }
        .pet-proof { display:flex; align-items:center; gap:12px; margin-top:28px; color:#66736a; font-size:13px; }
        .pet-proof-icons { letter-spacing:-4px; font-size:23px; padding-right:5px; }
        .pet-hero-art { min-height:410px; position:relative; display:grid; place-items:center; }
        .pet-art-circle { width:min(100%,420px); aspect-ratio:1; background:#d9edc9; border-radius:48% 52% 44% 56% / 51% 44% 56% 49%; display:grid; place-items:center; position:relative; transform:rotate(-4deg); }
        .pet-art-circle:before { content:''; position:absolute; inset:22px; border:1px dashed #7fb184; border-radius:inherit; }
        .pet-dog { font-size:clamp(145px,21vw,240px); transform:rotate(4deg); filter:drop-shadow(0 16px 10px #284e2c18); }
        .pet-float { position:absolute; z-index:2; background:white; border-radius:18px; padding:13px 16px; box-shadow:0 12px 35px #254b2b17; font-size:13px; font-weight:800; }
        .pet-float-one { left:-5px; top:55px; transform:rotate(-5deg); }
        .pet-float-two { right:-4px; bottom:58px; transform:rotate(4deg); }
        .pet-section { padding:82px 0; }
        .pet-section-soft { background:#f8faf3; }
        .pet-center { text-align:center; max-width:650px; margin:0 auto 42px; }
        .pet-eyebrow { color:#39804e; font-size:12px; font-weight:900; text-transform:uppercase; letter-spacing:.12em; }
        .pet-center h2,.pet-about h2 { font-size:clamp(31px,4vw,44px); line-height:1.12; margin:12px 0; }
        .pet-center p,.pet-about p { color:#68766d; line-height:1.8; margin:0; }
        .pet-cards { display:grid; grid-template-columns:repeat(4,1fr); gap:17px; }
        .pet-card { padding:25px 22px; background:white; border:1px solid #edf0e8; border-radius:22px; box-shadow:0 8px 28px #263e2810; }
        .pet-card-icon { display:grid; place-items:center; width:54px; height:54px; border-radius:17px; background:#edf6e7; font-size:28px; margin-bottom:18px; }
        .pet-card h3 { font-size:19px; margin:0 0 9px; }
        .pet-card p { color:#6d7a70; font-size:14px; line-height:1.7; margin:0; }
        .pet-products { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
        .pet-product { background:#fff; border:1px solid #edf0e8; border-radius:22px; overflow:hidden; }
        .pet-product-art { height:180px; display:grid; place-items:center; font-size:76px; background:linear-gradient(135deg,#f1f7e9,#fff3e4); }
        .pet-product:nth-child(2) .pet-product-art { background:linear-gradient(135deg,#fcebdc,#f7f5e8); }
        .pet-product:nth-child(3) .pet-product-art { background:linear-gradient(135deg,#e5f2eb,#f1f6ff); }
        .pet-product-info { padding:20px; }
        .pet-product h3 { margin:0 0 6px; font-size:19px; }
        .pet-product p { margin:0; font-size:14px; color:#738076; }
        .pet-about { display:grid; grid-template-columns:.9fr 1.1fr; align-items:center; gap:60px; }
        .pet-about-art { min-height:330px; border-radius:28px; background:#e7f2dd; display:grid; place-items:center; font-size:140px; position:relative; overflow:hidden; }
        .pet-about-art:after { content:'CARINHO EM CADA PATINHA'; position:absolute; bottom:20px; background:#fff; padding:10px 15px; border-radius:999px; color:#39804e; font-size:11px; font-weight:900; letter-spacing:.08em; }
        .pet-checks { list-style:none; padding:0; display:grid; gap:12px; margin:23px 0 27px; }
        .pet-checks li { display:flex; gap:10px; align-items:flex-start; color:#4e6054; font-size:14px; }
        .pet-checks li span { color:#39804e; font-weight:900; }
        .pet-cta { padding:0 0 82px; }
        .pet-cta-box { border-radius:28px; background:#244f35; color:white; padding:42px 48px; display:flex; justify-content:space-between; align-items:center; gap:30px; }
        .pet-cta-box h2 { font-size:clamp(28px,3.5vw,40px); line-height:1.1; margin:0 0 10px; }
        .pet-cta-box p { color:#d1e2d2; margin:0; line-height:1.7; }
        .pet-cta-box .pet-btn { background:#d9efc8; color:#244f35!important; white-space:nowrap; }
        .pet-offer-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:18px; } .pet-offer { background:#fff; border:1px solid #e7eddf; border-radius:22px; padding:25px; display:flex; flex-direction:column; align-items:flex-start; box-shadow:0 8px 28px #263e2809; } .pet-offer-tag { background:#e7f3dd; color:#34734a; border-radius:999px; padding:7px 10px; font-size:11px; font-weight:900; text-transform:uppercase; letter-spacing:.06em; } .pet-offer h3 { font-size:22px; margin:16px 0 8px; } .pet-offer p { color:#6d7a70; font-size:14px; line-height:1.7; margin:0 0 20px; } .pet-offer .pet-btn { margin-top:auto; } .pet-faq { max-width:760px; margin:auto; display:grid; gap:12px; }
        .pet-faq details { background:white; border:1px solid #e9eee4; border-radius:16px; padding:18px 20px; }
        .pet-faq summary { cursor:pointer; font-weight:800; }
        .pet-faq details p { color:#6d7a70; line-height:1.7; font-size:14px; margin-bottom:0; }
        .pet-footer { background:#f2f6ec; padding:30px 0; }
        .pet-footer-inner { display:flex; justify-content:space-between; align-items:center; gap:20px; color:#69786c; font-size:13px; }
        .pet-footer p { margin:6px 0 0; }
        .pet-footer a { color:#34734a; text-decoration:none; font-weight:800; }
        @media(max-width:850px) { .pet-links { gap:14px; } .pet-links a:not(.pet-btn) { display:none; } .pet-hero-grid { grid-template-columns:1fr; gap:15px; padding:52px 0 48px; } .pet-hero-art { min-height:340px; } .pet-art-circle { width:min(82%,370px); } .pet-cards { grid-template-columns:repeat(2,1fr); } .pet-about { grid-template-columns:1fr; gap:30px; } .pet-about-art { min-height:270px; } }
        @media(max-width:560px) { .pet-wrap { width:calc(100% - 30px); } .pet-nav { min-height:68px; } .pet-brand { font-size:18px; } .pet-brand-mark { width:37px;height:37px; } .pet-nav > .pet-btn { padding:11px 13px; font-size:12px; } .pet-hero h1 { font-size:43px; } .pet-lead { font-size:15px; } .pet-hero-art { min-height:300px; } .pet-float-one { left:0;top:35px; } .pet-float-two { right:0;bottom:32px; } .pet-section { padding:60px 0; } .pet-cards,.pet-products { grid-template-columns:1fr; } .pet-offer-grid { grid-template-columns:1fr; } .pet-card { padding:22px; } .pet-product-art { height:150px; } .pet-cta { padding-bottom:60px; } .pet-cta-box { padding:30px 24px; align-items:flex-start; flex-direction:column; } .pet-footer-inner { align-items:flex-start; flex-direction:column; } }
      `}</style>

      <header className="pet-wrap pet-nav">
        <a className="pet-brand" href="#inicio" aria-label="Pata e Companhia, início">
          <span className="pet-brand-mark">🐾</span><span>Pata <span style={{ color: "#39804e" }}>&</span> Companhia</span>
        </a>
        <nav className="pet-links" aria-label="Navegação principal">
          <a href="#servicos">Serviços</a><a href="#loja">Loja pet</a><a href="#sobre">Sobre nós</a><a href="#duvidas">Dúvidas</a>
        </nav>
        <a className="pet-btn" href="#contato">Fale com a gente <span aria-hidden="true">↗</span></a>
      </header>

      <section className="pet-hero" id="inicio">
        <div className="pet-wrap pet-hero-grid">
          <div>
            <span className="pet-kicker">🐾 Amor que faz bem</span>
            <h1>Tudo para seu pet viver <span>mais feliz.</span></h1>
            <p className="pet-lead">Encontre cuidados, produtos e serviços pensados para o bem-estar do seu melhor amigo. Fale com a nossa equipe, tire suas dúvidas e descubra as melhores opções para o seu pet.</p>
            <div className="pet-actions"><a className="pet-btn" href="#ofertas">Ver opções para meu pet <span aria-hidden="true">→</span></a><a className="pet-btn pet-btn-light" href="#contato">Consultar disponibilidade</a></div>
            <div className="pet-proof"><span className="pet-proof-icons" aria-hidden="true">🐶 🐱</span><span>Um cuidado especial para cada personalidade.</span></div>
          </div>
          <div className="pet-hero-art" aria-label="Ilustração decorativa de um cachorro feliz">
            <div className="pet-art-circle"><span className="pet-dog">🐕</span></div>
            <div className="pet-float pet-float-one">💚 Muito carinho</div>
            <div className="pet-float pet-float-two">✨ Bem-estar em primeiro lugar</div>
          </div>
        </div>
      </section>

      <section className="pet-section" id="servicos">
        <div className="pet-wrap">
          <div className="pet-center"><span className="pet-eyebrow">O que fazemos</span><h2>Cuidado completo para quem você ama</h2><p>Do cuidado diário aos momentos de diversão, estamos aqui para deixar a rotina do seu pet ainda melhor.</p></div>
          <div className="pet-cards">{services.map((service) => <article className="pet-card" key={service.title}><div className="pet-card-icon">{service.icon}</div><h3>{service.title}</h3><p>{service.text}</p></article>)}</div>
        </div>
      </section>

      <section className="pet-section pet-section-soft" id="loja">
        <div className="pet-wrap">
          <div className="pet-center"><span className="pet-eyebrow">Cantinho pet</span><h2>Pequenos mimos, grandes alegrias</h2><p>Uma seleção de itens para cuidar, brincar e compartilhar bons momentos com seu companheiro.</p></div>
          <div className="pet-products">{products.map((product) => <article className="pet-product" key={product.name}><div className="pet-product-art" aria-hidden="true">{product.emoji}</div><div className="pet-product-info"><h3>{product.name}</h3><p>{product.category}</p><a className="pet-btn" style={{ marginTop: 16 }} href="#contato">Consultar opções <span aria-hidden="true">→</span></a></div></article>)}</div>
        </div>
      </section>

      <section className="pet-section" id="sobre">
        <div className="pet-wrap pet-about">
          <div className="pet-about-art" aria-hidden="true">🐕‍🦺</div>
          <div><span className="pet-eyebrow">Nossa essência</span><h2>Mais que cuidado. Uma relação de confiança.</h2><p>A Pata & Companhia nasceu da ideia de que cada pet merece atenção, respeito e muito amor. Queremos que você se sinta acolhido e que seu companheiro receba um cuidado feito com carinho.</p><ul className="pet-checks"><li><span>✓</span> Atendimento acolhedor para pets e tutores</li><li><span>✓</span> Atenção ao conforto e ao bem-estar</li><li><span>✓</span> Orientações claras para o dia a dia</li></ul><a className="pet-btn" href="#contato">Vamos conversar <span aria-hidden="true">→</span></a></div>
        </div>
      </section>


      <section className="pet-section" id="ofertas">
        <div className="pet-wrap">
          <div className="pet-center"><span className="pet-eyebrow">Encontre o que precisa</span><h2>O cuidado ideal começa aqui</h2><p>Escolha por onde quer começar e fale com a equipe para conhecer as opções disponíveis para seu companheiro.</p></div>
          <div className="pet-offer-grid">
            <article className="pet-offer"><span className="pet-offer-tag">Bem-estar</span><h3>Cuidados para o dia a dia</h3><p>Converse com a equipe sobre higiene, rotina de cuidados e serviços que combinam com as necessidades do seu pet.</p><a className="pet-btn" href="#contato">Consultar serviços →</a></article>
            <article className="pet-offer"><span className="pet-offer-tag">Diversão</span><h3>Produtos e acessórios</h3><p>Descubra opções de brinquedos, petiscos e acessórios para deixar a rotina mais divertida e confortável.</p><a className="pet-btn" href="#loja">Ver categorias →</a></article>
            <article className="pet-offer"><span className="pet-offer-tag">Atendimento</span><h3>Ajuda para escolher</h3><p>Não sabe por onde começar? Conte o que seu pet precisa e tire suas dúvidas antes de decidir.</p><a className="pet-btn" href="#contato">Falar com a equipe →</a></article>
          </div>
        </div>
      </section>

      <section className="pet-section pet-section-soft" id="duvidas">
        <div className="pet-wrap">
          <div className="pet-center"><span className="pet-eyebrow">Perguntas frequentes</span><h2>Ficou com alguma dúvida?</h2><p>Confira algumas informações úteis antes de entrar em contato.</p></div>
          <div className="pet-faq">
            <details><summary>Como posso saber quais serviços estão disponíveis?</summary><p>Entre em contato com nossa equipe para confirmar os serviços, horários e disponibilidade.</p></details>
            <details><summary>Preciso agendar antes de visitar?</summary><p>Recomendamos falar com a equipe antes da visita para combinar o melhor horário para você e seu pet.</p></details>
            <details><summary>Posso perguntar sobre produtos para meu pet?</summary><p>Claro! Conte um pouco sobre seu companheiro e nossa equipe poderá orientar você sobre as opções disponíveis.</p></details>
          </div>
        </div>
      </section>

      <section className="pet-cta" id="contato">
        <div className="pet-wrap pet-cta-box">
          <div><h2>Pronto para cuidar ainda melhor do seu melhor amigo?</h2><p>Consulte opções, disponibilidade e valores com a nossa equipe.</p></div>
          <a className="pet-btn" href="mailto:contato@pataecompanhia.com?subject=Ol%C3%A1%2C%20quero%20saber%20mais">Quero saber mais <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <footer className="pet-footer">
        <div className="pet-wrap pet-footer-inner"><div><a className="pet-brand" href="#inicio"><span className="pet-brand-mark">🐾</span><span>Pata <span style={{ color: "#39804e" }}>&</span> Companhia</span></a><p>Feito com carinho para os melhores amigos.</p></div><span>© {new Date().getFullYear()} Pata & Companhia. Projeto demonstrativo.</span></div>
      </footer>
    </main>
  );
}
