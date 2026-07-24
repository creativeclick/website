(function () {
  var POSTS = [
    { slug: 'how-to-build-an-mvp', meta: 'March 1, 2026 · 11 min read', title: 'How to Build an MVP for Your Startup', desc: 'A founder-friendly framework to scope, launch, and improve an MVP without burning months on the wrong features.', url: 'blog-how-to-build-an-mvp.html', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80' },
    { slug: 'cost-of-building-a-startup-app', meta: 'March 8, 2026 · 10 min read', title: 'What Is the Cost of Building a Startup App?', desc: 'A realistic breakdown of what drives startup app costs, where budgets usually go wrong, and how to control spend.', url: 'blog-cost-of-building-a-startup-app.html', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80' },
    { slug: 'best-tech-stack-for-startups', meta: 'March 15, 2026 · 9 min read', title: 'Best Tech Stack for Startups in 2026', desc: 'How to choose a startup stack that helps you ship quickly now without creating long-term maintenance debt.', url: 'blog-best-tech-stack-for-startups.html', image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80' },
    { slug: 'validate-your-startup-idea', meta: 'March 22, 2026 · 10 min read', title: 'How to Validate Your Startup Idea Before Building', desc: 'A practical pre-build validation process that helps founders confirm demand before committing major build budget.', url: 'blog-validate-your-startup-idea.html', image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80' }
  ];

  function cardHtml(p, i) {
    return '<div data-reveal ' + (i % 2 ? 'data-delay="100"' : '') + ' class="bg-white border border-[#DDDDDD]/60 rounded-3xl p-7 md:p-8">' +
      '<div class="overflow-hidden rounded-2xl mb-6 -mx-1"><img src="' + p.image + '" loading="lazy" class="w-full h-44 md:h-52 object-cover hover:scale-105 transition-all duration-700" alt="" /></div>' +
      '<span class="block text-[11px] uppercase tracking-widest font-semibold text-[#111111]/50 mb-3">' + p.meta + '</span>' +
      '<h3 class="text-[#111111] text-xl font-medium leading-snug">' + p.title + '</h3>' +
      '<p class="mt-2 mb-5 text-sm text-[#111111]/70 leading-relaxed">' + p.desc + '</p>' +
      '<a href="' + p.url + '" class="inline-block rounded-full font-medium whitespace-nowrap transition-all duration-300 hover:-translate-y-0.5 px-7 py-3.5 text-xs sm:text-sm uppercase tracking-widest bg-[#DDDDDD] text-[#111111] hover:bg-[#CFCFCF]">Read article</a>' +
    '</div>';
  }

  window.BLOG_POSTS = POSTS;

  window.renderBlogIndex = function () {
    var host = document.getElementById('posts');
    if (!host) return;
    host.innerHTML = POSTS.map(cardHtml).join('');
  };

  window.renderRelatedPosts = function (currentSlug) {
    var host = document.getElementById('related-posts');
    if (!host) return;
    var others = POSTS.filter(function (p) { return p.slug !== currentSlug; }).slice(0, 3);
    host.innerHTML = others.map(cardHtml).join('');
  };
})();
