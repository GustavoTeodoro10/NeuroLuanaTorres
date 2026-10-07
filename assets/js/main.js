/* ==========================================================================
   Luana Torres | Neuropsicóloga em Mauá
   JS mínimo, sem dependências:
   1. Rastreio de cliques nos CTAs (GoatCounter)
   2. Menu móvel
   3. Cabeçalho com borda ao rolar
   4. Revelação ao rolar (cascata por lote)
   5. Estrelas da nota
   6. Faixa de avaliações em loop
   7. Link ativo do menu
   8. Botão flutuante some quando já há botão na tela
   9. Paralaxe leve no hero (somente mouse)
   Nenhum listener de scroll: tudo usa IntersectionObserver ou eventos pontuais.
   ========================================================================== */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var hasIO = 'IntersectionObserver' in window;

  /* 1. Rastreio: cada CTA tem data-gc-event único. O link do WhatsApp abre mesmo se o
        GoatCounter estiver bloqueado (adblock), pois não usamos preventDefault. */
  document.addEventListener('click', function (e) {
    var el = e.target.closest ? e.target.closest('[data-gc-event]') : null;
    if (!el) return;
    var name = el.getAttribute('data-gc-event');
    if (window.goatcounter && window.goatcounter.count) {
      try { window.goatcounter.count({ path: name, title: name, event: true }); } catch (err) { /* ignora */ }
    }
  });

  /* 2. Menu móvel (os dois ícones trocam por CSS, a partir do aria-expanded) */
  var menuBtn = document.getElementById('menu-btn');
  var menu = document.getElementById('mobile-menu');
  function setMenu(open) {
    if (!menuBtn || !menu) return;
    menu.classList.toggle('is-open', open);
    menu.setAttribute('aria-hidden', open ? 'false' : 'true');
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    menuBtn.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    document.body.style.overflow = open ? 'hidden' : '';
    Array.prototype.forEach.call(menu.querySelectorAll('a'), function (a) { a.tabIndex = open ? 0 : -1; });
  }
  if (menuBtn && menu) {
    setMenu(false);
    menuBtn.addEventListener('click', function () { setMenu(!menu.classList.contains('is-open')); });
    menu.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('is-open')) { setMenu(false); menuBtn.focus(); }
    });
    window.matchMedia('(min-width: 1024px)').addEventListener('change', function (m) { if (m.matches) setMenu(false); });
  }

  /* 3. Cabeçalho: borda e sombra após sair do topo */
  var header = document.querySelector('.site-header');
  if (header && hasIO) {
    var sentinel = document.createElement('div');
    sentinel.style.cssText = 'position:absolute;top:0;left:0;width:1px;height:8px;pointer-events:none;';
    sentinel.setAttribute('aria-hidden', 'true');
    document.body.insertBefore(sentinel, document.body.firstChild);
    new IntersectionObserver(function (entries) {
      header.classList.toggle('is-scrolled', !entries[0].isIntersecting);
    }).observe(sentinel);
  }

  /* 4. Revelação ao rolar. O conteúdo é visível por padrão (sem JS). Elementos que entram juntos
        ganham uma cascata de 70ms, na ordem em que aparecem na tela. Depois da entrada, a classe
        de revelação sai para que o hover volte a controlar o transform do elemento. */
  var revealEls = document.querySelectorAll('.reveal');
  function releaseAfter(el, ms) {
    if (el.classList.contains('reveal-thread')) return; /* o fio e as etapas dependem de is-in */
    setTimeout(function () { el.classList.remove('reveal', 'reveal-panel', 'reveal-clip', 'is-in'); }, ms);
  }
  if (hasIO) {
    var io = new IntersectionObserver(function (entries) {
      var batch = entries.filter(function (en) { return en.isIntersecting; }).sort(function (a, b) {
        return a.boundingClientRect.top - b.boundingClientRect.top || a.boundingClientRect.left - b.boundingClientRect.left;
      });
      batch.forEach(function (en, i) {
        var t = en.target._revealEl || en.target;
        if (!t.classList.contains('reveal-thread')) t.style.setProperty('--i', Math.min(i, 6));
        t.classList.add('is-in');
        io.unobserve(en.target);
        releaseAfter(t, 1800);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    revealEls.forEach(function (el) {
      /* Elementos recortados por clip-path não "aparecem" para o observer: observa-se o pai */
      if (el.classList.contains('reveal-clip') && el.parentElement) {
        el.parentElement._revealEl = el;
        io.observe(el.parentElement);
      } else {
        io.observe(el);
      }
    });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* 5. Estrelas da nota: acendem uma vez, quando a seção aparece */
  var popEls = document.querySelectorAll('.pop-on-view');
  if (hasIO) {
    var popIo = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('popped'); popIo.unobserve(en.target); }
      });
    }, { threshold: 0.6 });
    popEls.forEach(function (el) { popIo.observe(el); });
  } else {
    popEls.forEach(function (el) { el.classList.add('popped'); });
  }

  /* 6. Faixa de avaliações: duplica o grupo para o loop contínuo (a cópia fica oculta para leitores de tela) */
  var track = document.querySelector('.marquee-track');
  if (track && track.children.length === 1) {
    var clone = track.children[0].cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    track.appendChild(clone);
  }

  /* 7. Link ativo do menu conforme a seção visível */
  var links = document.querySelectorAll('.nav-link');
  if (hasIO && links.length) {
    var map = {};
    Array.prototype.forEach.call(links, function (a) { map[a.getAttribute('href')] = a; });
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        var link = map['#' + en.target.id];
        if (link && en.isIntersecting) {
          Array.prototype.forEach.call(links, function (l) { l.classList.remove('is-active'); });
          link.classList.add('is-active');
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    ['atendimento', 'sobre', 'planos', 'avaliacoes', 'contato'].forEach(function (id) {
      var s = document.getElementById(id);
      if (s) spy.observe(s);
    });
  }

  /* 8. Botão flutuante: some enquanto o painel de contato ou o rodapé estão visíveis */
  var fab = document.querySelector('.fab');
  if (fab && hasIO) {
    var inView = [];
    var fabIo = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        var i = inView.indexOf(en.target);
        if (en.isIntersecting && i === -1) inView.push(en.target);
        if (!en.isIntersecting && i !== -1) inView.splice(i, 1);
      });
      fab.classList.toggle('is-hidden', inView.length > 0);
    }, { threshold: 0.25 });
    [document.getElementById('contato'), document.querySelector('.site-footer')].forEach(function (el) {
      if (el) fabIo.observe(el);
    });
  }

  /* 9. Paralaxe leve no hero: o círculo laranja e o fio se movem em sentidos opostos ao mouse,
        com suavização (lerp). Decorativo, só em mouse e sem movimento reduzido. */
  var hero = document.querySelector('.hero');
  var disc = document.querySelector('.portrait-disc');
  var squig = document.querySelector('.portrait-squiggle');
  if (hero && disc && squig && canHover && !reduceMotion) {
    var tx = 0, ty = 0, cx = 0, cy = 0, raf = 0;
    function frame() {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      disc.style.translate = (-cx * 26).toFixed(2) + 'px ' + (-cy * 26).toFixed(2) + 'px';
      squig.style.translate = (cx * 16).toFixed(2) + 'px ' + (cy * 16).toFixed(2) + 'px';
      if (Math.abs(tx - cx) > 0.002 || Math.abs(ty - cy) > 0.002) { raf = requestAnimationFrame(frame); } else { raf = 0; }
    }
    function kick() { if (!raf) raf = requestAnimationFrame(frame); }
    hero.addEventListener('pointermove', function (e) {
      var r = hero.getBoundingClientRect();
      tx = (e.clientX - r.left) / r.width - 0.5;
      ty = (e.clientY - r.top) / r.height - 0.5;
      kick();
    });
    hero.addEventListener('pointerleave', function () { tx = 0; ty = 0; kick(); });
  }
})();
