import { LiquidFile } from './types';

export const THEME_LIQUID: string = `<!doctype html>
<html class="no-js" lang="{{ request.locale.iso_code }}">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="theme-color" content="#050505">
    <link rel="canonical" href="{{ canonical_url }}">
    
    <title>{{ page_title }}{% if current_tags %} &ndash; tagged "{{ current_tags | join: ', ' }}"{% endif %}{% if current_page != 1 %} &ndash; Page {{ current_page }}{% endif %}{% unless page_title contains shop.name %} &ndash; {{ shop.name }}{% endunless %}</title>

    {% if page_description %}
      <meta name="description" content="{{ page_description | escape }}">
    {% endif %}

    {{ content_for_header }}

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Manrope:wght@300;400;500&display=swap" rel="stylesheet">

    <style>
      :root {
        --color-bg: #050505;
        --color-text: #FFFFFF;
        --color-accent: #C0C0C0;
        
        --font-heading: 'Cinzel', serif;
        --font-body: 'Manrope', sans-serif;
      }

      body {
        background-color: var(--color-bg);
        color: var(--color-text);
        font-family: var(--font-body);
        margin: 0;
        line-height: 1.6;
      }

      h1, h2, h3, h4, h5, h6 {
        font-family: var(--font-heading);
        font-weight: 400;
        letter-spacing: 0.05em;
      }

      a {
        text-decoration: none;
        color: inherit;
        transition: color 0.3s ease;
      }

      a:hover {
        color: var(--color-accent);
      }
      
      /* Utility Classes */
      .container {
        max-width: 1400px;
        margin: 0 auto;
        padding: 0 2rem;
      }
    </style>
  </head>

  <body>
    {% section 'header' %}

    <main id="MainContent" role="main" tabindex="-1">
      {{ content_for_layout }}
    </main>

    {% section 'footer' %}

    <script>
      document.documentElement.className = document.documentElement.className.replace('no-js', 'js');
    </script>
  </body>
</html>`;

export const HEADER_LIQUID: string = `<header class="site-header" style="border-bottom: 1px solid #1a1a1a; background: var(--color-bg); position: sticky; top: 0; z-index: 50;">
  <div class="container" style="display: flex; justify-content: space-between; align-items: center; height: 80px;">
    
    <!-- Logo -->
    <div class="header__logo">
      <a href="{{ routes.root_url }}" class="header__logo-link">
        {%- if section.settings.logo != blank -%}
          <img src="{{ section.settings.logo | image_url: width: 200 }}" alt="{{ shop.name }}" width="{{ section.settings.logo_width }}" height="{{ section.settings.logo.height }}">
        {%- else -%}
          <span style="font-family: var(--font-heading); font-size: 1.5rem; letter-spacing: 0.1em;">{{ shop.name }}</span>
        {%- endif -%}
      </a>
    </div>

    <!-- Navigation -->
    <nav class="header__nav" role="navigation">
      <ul style="display: flex; gap: 2rem; list-style: none; margin: 0; padding: 0;">
        {%- for link in section.settings.menu.links -%}
          <li class="header__menu-item group" style="position: relative;">
            <a href="{{ link.url }}" style="text-transform: uppercase; font-size: 0.875rem; letter-spacing: 0.1em;">
              {{ link.title }}
            </a>

            <!-- Mega Menu Logic -->
            {% if link.title == 'NOS MONTRES' %}
              <div class="mega-menu" style="position: absolute; top: 100%; left: 50%; transform: translateX(-50%); width: 100vw; background: var(--color-bg); border-bottom: 1px solid #1a1a1a; padding: 4rem 0; opacity: 0; visibility: hidden; transition: all 0.3s ease;">
                <div class="container" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;">
                  <!-- Seiko Mod -->
                  <a href="/collections/seiko-mod" class="mega-menu__item" style="display: block;">
                    <div style="aspect-ratio: 1; background: #111; margin-bottom: 1rem;">
                      <!-- Placeholder for collection image -->
                    </div>
                    <h3 style="font-size: 1.25rem;">Seiko Mod</h3>
                    <span style="color: var(--color-accent); font-size: 0.8rem;">Personnalisation Unique</span>
                  </a>
                  
                  <!-- Vintage -->
                  <a href="/collections/vintage" class="mega-menu__item" style="display: block;">
                    <div style="aspect-ratio: 1; background: #111; margin-bottom: 1rem;"></div>
                    <h3 style="font-size: 1.25rem;">Vintage</h3>
                    <span style="color: var(--color-accent); font-size: 0.8rem;">L'Histoire au Poignet</span>
                  </a>
                  
                  <!-- Luxe -->
                  <a href="/collections/luxe" class="mega-menu__item" style="display: block;">
                    <div style="aspect-ratio: 1; background: #111; margin-bottom: 1rem;"></div>
                    <h3 style="font-size: 1.25rem;">Luxe</h3>
                    <span style="color: var(--color-accent); font-size: 0.8rem;">Élégance Absolue</span>
                  </a>
                </div>
              </div>
            {% endif %}
          </li>
        {%- endfor -%}
      </ul>
    </nav>

    <!-- Icons -->
    <div class="header__icons" style="display: flex; gap: 1.5rem;">
      <a href="{{ routes.search_url }}">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </a>
      <a href="{{ routes.cart_url }}">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      </a>
    </div>
  </div>
</header>

<style>
  .header__menu-item:hover .mega-menu {
    opacity: 1;
    visibility: visible;
    top: 40px; /* Adjust based on padding */
  }
</style>

{% schema %}
{
  "name": "Header",
  "settings": [
    {
      "type": "image_picker",
      "id": "logo",
      "label": "Logo Image"
    },
    {
      "type": "range",
      "id": "logo_width",
      "min": 50,
      "max": 300,
      "step": 10,
      "default": 150,
      "unit": "px",
      "label": "Logo Width"
    },
    {
      "type": "link_list",
      "id": "menu",
      "default": "main-menu",
      "label": "Menu"
    }
  ]
}
{% endschema %}`;

export const HERO_LIQUID: string = `<section class="hero-cinematic" style="height: 100vh; width: 100%; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
  
  <!-- Background Media -->
  <div class="hero__media" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1;">
    {% if section.settings.video_url != blank %}
      <video autoplay muted loop playsinline style="width: 100%; height: 100%; object-fit: cover; opacity: 0.6;">
        <source src="{{ section.settings.video_url }}" type="video/mp4">
      </video>
    {% else %}
      {% if section.settings.image != blank %}
        <img src="{{ section.settings.image | image_url: width: 2000 }}" alt="{{ section.settings.heading }}" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.6;">
      {% else %}
        <div style="width: 100%; height: 100%; background: #111;"></div>
      {% endif %}
    {% endif %}
    <!-- Overlay Gradient -->
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(to top, #050505 0%, transparent 50%, #050505 100%);"></div>
  </div>

  <!-- Content -->
  <div class="hero__content container" style="position: relative; z-index: 2; text-align: center; max-width: 800px;">
    <h2 style="font-family: var(--font-heading); font-size: clamp(2rem, 5vw, 4rem); line-height: 1.2; margin-bottom: 2rem; color: #fff;">
      {{ section.settings.heading | default: "L'ABSENCE DE BRUIT.<br>LA PRÉSENCE DU TEMPS." }}
    </h2>
    
    <a href="{{ section.settings.button_link }}" class="btn-hero" style="display: inline-block; padding: 1rem 3rem; border: 1px solid #fff; color: #fff; text-transform: uppercase; letter-spacing: 0.2em; font-size: 0.875rem; transition: all 0.3s ease;">
      {{ section.settings.button_label | default: "Explorer la Collection" }}
    </a>
  </div>
  
  <style>
    .btn-hero:hover {
      background: #fff;
      color: #050505;
    }
  </style>
</section>

{% schema %}
{
  "name": "Cinematic Hero",
  "settings": [
    {
      "type": "image_picker",
      "id": "image",
      "label": "Background Image"
    },
    {
      "type": "url",
      "id": "video_url",
      "label": "Video URL (MP4)",
      "info": "Direct link to MP4 file for background video"
    },
    {
      "type": "textarea",
      "id": "heading",
      "label": "Heading Text",
      "default": "L'ABSENCE DE BRUIT.<br>LA PRÉSENCE DU TEMPS."
    },
    {
      "type": "text",
      "id": "button_label",
      "label": "Button Label",
      "default": "Explorer la Collection"
    },
    {
      "type": "url",
      "id": "button_link",
      "label": "Button Link"
    }
  ],
  "presets": [
    {
      "name": "Cinematic Hero"
    }
  ]
}
{% endschema %}`;

export const FEATURED_COLLECTION_LIQUID: string = `<section class="featured-collections" style="padding: 6rem 0; background-color: var(--color-bg);">
  <div class="container">
    <div class="grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
      
      <!-- Block Logic -->
      {% for block in section.blocks %}
        {% assign collection = collections[block.settings.collection] %}
        <a href="{{ collection.url }}" class="collection-card group" style="display: block; position: relative; overflow: hidden;">
          <div class="media-container" style="position: relative; aspect-ratio: 3/4; overflow: hidden; margin-bottom: 1.5rem;">
            {% if collection.image %}
              <img src="{{ collection.image | image_url: width: 800 }}" alt="{{ collection.title }}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease;">
            {% else %}
               <div style="width: 100%; height: 100%; background-color: #111; display: flex; align-items: center; justify-content: center; color: #333;">NO IMAGE</div>
            {% endif %}
          </div>
          
          <div class="content" style="text-align: center;">
            <h3 style="font-size: 1.5rem; margin: 0 0 0.5rem 0; font-family: var(--font-heading);">{{ collection.title | default: block.settings.title_override }}</h3>
            <span style="font-size: 0.875rem; color: var(--color-accent); text-transform: uppercase; letter-spacing: 0.1em; border-bottom: 1px solid transparent; transition: border-color 0.3s ease;" class="view-link">Voir la collection</span>
          </div>
        </a>
      {% endfor %}
      
    </div>
  </div>
  
  <style>
    .collection-card:hover img {
      transform: scale(1.05);
    }
    .collection-card:hover .view-link {
      border-color: var(--color-accent);
    }
  </style>
</section>

{% schema %}
{
  "name": "Featured Collections",
  "max_blocks": 3,
  "blocks": [
    {
      "type": "collection",
      "name": "Collection",
      "settings": [
        {
          "type": "collection",
          "id": "collection",
          "label": "Select Collection"
        },
        {
          "type": "text",
          "id": "title_override",
          "label": "Title Override"
        }
      ]
    }
  ],
  "presets": [
    {
      "name": "3 Column Collections",
      "blocks": [
        { "type": "collection" },
        { "type": "collection" },
        { "type": "collection" }
      ]
    }
  ]
}
{% endschema %}`;

export const BLOG_LIQUID: string = `<section class="main-blog" style="padding: 6rem 0;">
  <div class="container">
    <header style="margin-bottom: 4rem; text-align: left;">
      <h1 style="font-size: 3rem; margin: 0;">{{ blog.title }}</h1>
    </header>

    <div class="blog-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 4rem 2rem;">
      {% for article in blog.articles %}
        <article class="article-card" itemscope itemtype="http://schema.org/BlogPosting">
          <a href="{{ article.url }}" class="article__link">
            <div class="article__image" style="aspect-ratio: 16/9; margin-bottom: 1.5rem; background: #111; overflow: hidden;">
              {% if article.image %}
                <img src="{{ article.image | image_url: width: 600 }}" alt="{{ article.title }}" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.9; transition: opacity 0.3s;">
              {% endif %}
            </div>
            
            <div class="article__content">
              <time datetime="{{ article.published_at | date: '%Y-%m-%d' }}" style="color: var(--color-accent); font-size: 0.75rem; letter-spacing: 0.1em; text-transform: uppercase;">
                {{ article.published_at | date: "%d %B %Y" }}
              </time>
              
              <h2 class="h3" style="margin: 0.5rem 0 1rem; font-size: 1.5rem; line-height: 1.3;" itemprop="headline">
                {{ article.title }}
              </h2>
              
              {% if article.excerpt.size > 0 %}
                <p style="color: #999; font-size: 0.95rem; margin: 0;">
                  {{ article.excerpt | strip_html | truncatewords: 20 }}
                </p>
              {% else %}
                 <p style="color: #999; font-size: 0.95rem; margin: 0;">
                  {{ article.content | strip_html | truncatewords: 20 }}
                </p>
              {% endif %}
            </div>
          </a>
        </article>
      {% endfor %}
    </div>
  </div>
  
  <style>
    .article-card:hover img {
      opacity: 1;
    }
    .article-card:hover h2 {
      text-decoration: underline;
      text-decoration-color: var(--color-accent);
      text-underline-offset: 4px;
    }
  </style>
</section>

{% schema %}
{
  "name": "Blog Posts",
  "settings": [
    {
      "type": "checkbox",
      "id": "show_date",
      "default": true,
      "label": "Show date"
    },
    {
      "type": "checkbox",
      "id": "show_author",
      "default": false,
      "label": "Show author"
    }
  ]
}
{% endschema %}`;

export const FILES: LiquidFile[] = [
  {
    path: 'layout/theme.liquid',
    title: 'Theme Layout',
    description: 'The main skeleton file containing the <head>, font imports, and base CSS variables.',
    code: THEME_LIQUID
  },
  {
    path: 'sections/header.liquid',
    title: 'Header Section',
    description: 'Includes the logo, navigation with Mega Menu logic, and utility icons.',
    code: HEADER_LIQUID
  },
  {
    path: 'sections/hero-cinematic.liquid',
    title: 'Hero Cinematic',
    description: 'Full-screen hero section with video/image support and overlay text.',
    code: HERO_LIQUID
  },
  {
    path: 'sections/featured-collections.liquid',
    title: 'Featured Collections',
    description: 'Grid layout displaying the 3 core collections with hover effects.',
    code: FEATURED_COLLECTION_LIQUID
  },
  {
    path: 'sections/main-blog.liquid',
    title: 'Main Blog',
    description: 'Blog listing template with semantic HTML and article cards.',
    code: BLOG_LIQUID
  }
];
