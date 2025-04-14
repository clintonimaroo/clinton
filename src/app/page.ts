import { Injectable } from '@nestjs/common';
import { Layout } from './layout';

@Injectable()
export class Page {
  constructor(private readonly layout: Layout) {}

  render(): string {
    const content = `<section>
  <p>I'm a senior software engineer passionate about user interfaces and innovative technologies. Exploring design and crafting thoughtful interactions. Obsessed with the small details, while mastering the web one step at a time.</p>
</section>

<section>
  <h2 id="experiments">experiments</h2>
  <p>Interactive experiments and projects exploring the intersection of design and technology.</p>
  
  <div class="project">
    <h3>
      <a href="#" aria-label="Portfolio project">Portfolio</a>
      <span class="year">2025</span>
    </h3>
    <p>A minimalist personal website built with NestJS, showcasing my work and expertise as a software engineer.</p>
  </div>
  
  <div class="project">
    <h3>
      <a href="#" aria-label="AI Chat Interface project">AI Chat Interface</a>
      <span class="year">2025</span>
    </h3>
    <p>A mini version of a conversational AI interface. Built with React and modern language models.</p>
  </div>
</section>

<section>
  <h2 id="blog">blog</h2>
  <p>I blog about things I'm learning, my experiences and thoughts on design and technology.</p>
  
  <div class="blog-post">
    <a href="#" aria-label="Read blog post: Modern Web Development">Modern Web Development</a>
    <span class="views">139 views · Mar 31, 2025</span>
  </div>
  
  <div class="blog-post">
    <a href="#" aria-label="Read blog post: Building with NestJS">Building with NestJS</a>
    <span class="views">1059 views · Mar 21, 2025</span>
  </div>
  
  <div class="blog-post">
    <a href="#" aria-label="Read blog post: begin">begin.</a>
    <span class="views">411 views · Jan 16, 2025</span>
  </div>
</section>

<section>
  <h2 id="notes">notes</h2>
  <p>Quick thoughts, ideas, and snippets I want to remember.</p>
  
  <div class="note">
    <h3>minimalism</h3>
    <p>Sometimes less is more. The elegance of minimalism in design speaks volumes.</p>
    <p class="date">Mar 21, 2025</p>
  </div>
</section>

<section>
  <h2 id="connect">connect</h2>
  <div class="contact">
    <p>contact me on 
      <a href="#" aria-label="Clinton's X profile">X</a> 
      <a href="#" aria-label="Clinton's GitHub profile">GitHub</a> 
      <a href="#" aria-label="Clinton's LinkedIn profile">LinkedIn</a> 
      - or send me an email at 
      <a href="mailto:contact@clintonimaro.com">contact@clintonimaro.com</a>
    </p>
  </div>
</section>`;

    return this.layout.render(content);
  }
}
