import { Injectable } from '@nestjs/common';

@Injectable()
export class Footer {
  render(): string {
    return `<footer>
  <div class="footer-content">
    <p class="colophon">This site is built with NestJS, TypeScript, and SCSS. Designed with minimalism and performance in mind.</p>
    <p class="copyright">© ${new Date().getFullYear()} Clinton Imaro</p>
  </div>
</footer>`;
  }
}
