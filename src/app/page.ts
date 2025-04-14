import { Injectable } from '@nestjs/common';
import { Layout } from './layout';

@Injectable()
export class Page {
  constructor(private readonly layout: Layout) {}

  render(): string {
    const content = `<section>
  <p class="bio">I'm a senior software engineer based in San Francisco Bay Area, passionate about user interfaces and innovative technologies. Self-motivated, resilient, and highly talented technology professional with expertise in software engineering, web development, and tech leadership. I enjoy bringing ideas to life with coding and I'm always on the lookout for new skills to pick up.</p>
</section>

<section>
  <h2 id="experience">experience</h2>
  <p>Software Engineer & Global Speaker with a track record of building impactful tech solutions.</p>
  
  <div class="project">
    <h3>
      <a href="#" aria-label="Code Space role">Code Space</a>
      <span class="year">2023-Present</span>
    </h3>
    <p>Leading software engineering initiatives and mentoring junior developers in web technologies and architecture design.</p>
  </div>
  
  <div class="project">
    <h3>
      <a href="#" aria-label="Previous tech company">Tech Innovations Inc</a>
      <span class="year">2020-2023</span>
    </h3>
    <p>Developed full-stack solutions using modern frameworks and contributed to open source projects.</p>
  </div>
</section>

<section>
  <h2 id="projects">projects</h2>
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
  <h2 id="speaking">speaking</h2>
  <p>Sharing knowledge and insights at tech conferences and events worldwide.</p>
  
  <div class="blog-post">
    <a href="#" aria-label="Conference talk: Modern Web Development">Modern Web Development: Best Practices</a>
    <span class="views">TechConf 2025 · San Francisco</span>
  </div>
  
  <div class="blog-post">
    <a href="#" aria-label="Conference talk: Building with NestJS">Building Enterprise Applications with NestJS</a>
    <span class="views">WebDevCon · New York, 2024</span>
  </div>
  
  <div class="blog-post">
    <a href="#" aria-label="Conference talk: Getting Started">Getting Started in Tech: A Journey</a>
    <span class="views">NextGen Tech Summit · Virtual, 2023</span>
  </div>
</section>

<section>
  <h2 id="education">education</h2>
  <p>Academic background that forms the foundation of my technical expertise.</p>
  
  <div class="note">
    <h3>Morgan State University</h3>
    <p>Bachelor of Science in Computer Science with focus on Software Engineering</p>
    <p class="date">2016-2020</p>
  </div>
</section>

<section>
  <h2 id="connect">connect</h2>
  <div class="contact">
    <p>contact me on 
      <a href="https://twitter.com/clintimaro" aria-label="Clinton's Twitter profile" rel="noopener">Twitter</a> 
      <a href="https://github.com/clintonimaroo" aria-label="Clinton's GitHub profile" rel="noopener">GitHub</a> 
      <a href="https://linkedin.com/in/clintonimaro" aria-label="Clinton's LinkedIn profile" rel="noopener">LinkedIn</a> 
      - or send me an email at 
      <a href="mailto:contact@clintonimaro.com">contact@clintonimaro.com</a>
    </p>
  </div>
</section>`;

    return this.layout.render(content);
  }
}
