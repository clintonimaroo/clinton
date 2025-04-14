import { Injectable } from '@nestjs/common';
import { Footer } from './components/Footer';

@Injectable()
export class Layout {
  constructor(private readonly footer: Footer) {}

  render(content: string): string {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
    <meta name="description" content="Clinton Imaro - Senior Software Engineer specializing in web development, tech leadership, and innovative solutions. Based in San Francisco Bay Area.">
    <meta name="keywords" content="Clinton Imaro, Software Engineer, Web Developer, Tech Speaker, Code Space, Technology Professional, San Francisco">
    <meta name="author" content="Clinton Imaro">
    <meta property="og:title" content="Clinton Imaro - Senior Software Engineer">
    <meta property="og:description" content="A self-motivated, resilient, highly talented technology professional with expertise in web development and innovative solutions">
    <meta property="og:image" content="https://clintonimaro.com/profile.jpg">
    <meta property="og:url" content="https://clintonimaro.com">
    <meta property="og:type" content="website">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:creator" content="@clintimaro">
    <meta name="theme-color" content="#0a0a0a">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="format-detection" content="telephone=no">
    <title>Clinton Imaro - Senior Software Engineer | Code Space</title>
    <link rel="icon" href="/favicon.ico" type="image/x-icon">
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="/styles/main.css">
    <link rel="canonical" href="https://clintonimaro.com">
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Clinton Imaro",
      "url": "https://clintonimaro.com",
      "image": "https://clintonimaro.com/profile.jpg",
      "sameAs": [
        "https://github.com/clintonimaroo",
        "https://linkedin.com/in/clintonimaro"
      ],
      "jobTitle": "Senior Software Engineer",
      "worksFor": {
        "@type": "Organization",
        "name": "Code Space"
      },
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "Morgan State University"
      },
      "description": "A self-motivated, resilient, highly talented technology professional specializing in software engineering and web development."
    }
    </script>
</head>
<body>
    <div class="container">
        <header>
            <h1>Clinton Imaro</h1>
            <p class="subtitle">@clintimaro · dev</p>
        </header>

        ${content}

        ${this.footer.render()}
    </div>

    <script>
        // Simple touch optimization 
        document.addEventListener('DOMContentLoaded', function() {
            // Add active state for touch devices
            const links = document.querySelectorAll('a');
            links.forEach(link => {
                link.addEventListener('touchstart', function() {
                    this.classList.add('active-touch');
                }, {passive: true});
                
                link.addEventListener('touchend', function() {
                    this.classList.remove('active-touch');
                }, {passive: true});
            });
        });
    </script>
</body>
</html>`;
  }
}
