import { Injectable } from '@nestjs/common';

@Injectable()
export class Footer {
  render(): string {
    return `<footer>
  <div class="footer-content">
    <div class="footer-info">
      <p class="colophon">This site is built with NestJS, TypeScript, and SCSS. Designed with minimalism and performance in mind.</p>
      <p class="copyright">© ${new Date().getFullYear()} Clinton Imaro | Software Engineer at Code Space</p>
    </div>
    <div class="footer-links">
      <a href="https://github.com/clintonimaroo" rel="noopener">GitHub</a>
      <a href="https://linkedin.com/in/clintonimaro" rel="noopener">LinkedIn</a>
      <a href="https://twitter.com/clintimaro" rel="noopener">Twitter</a>
    </div>
    <div class="site-info">
      <p><span itemscope itemtype="http://schema.org/Person"><span itemprop="name">Clinton Imaro</span></span> | <span itemscope itemtype="http://schema.org/Organization"><span itemprop="name">Code Space</span></span> | San Francisco Bay Area</p>
    </div>
  </div>
</footer>`;
  }
}
