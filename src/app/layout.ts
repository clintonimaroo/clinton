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
    <meta name="description" content="Clinton Imaro - Senior Software Engineer specializing in web development and innovative technologies">
    <meta name="theme-color" content="#0a0a0a">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="format-detection" content="telephone=no">
    <title>Clinton Imaro - Senior Software Engineer</title>
    <link rel="icon" href="/favicon.ico" type="image/x-icon">
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="/styles/main.css">
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
