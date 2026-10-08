/**
 * Brand marks from Simple Icons (CC0). Each company's own logo, drawn in the
 * surrounding text colour so it reads in both themes.
 */
const MARKS: Record<string, React.ReactNode> = {
  Apple: (
    <svg
      className="brand-mark"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
    </svg>
  ),
  Threads: (
    <svg
      className="brand-mark"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.263 11.097c-.03-3.486-1.92-5.586-5.111-5.586-2.13 0-3.922.963-4.863 2.499l2.062 1.438c.535-.843 1.272-1.543 2.628-1.543 1.528 0 2.318.85 2.544 2.431a15 15 0 0 0-2.236-.173c-4.125 0-6.068 1.867-6.068 4.336s1.943 3.99 4.804 3.99c3.139 0 5.013-2.115 5.781-4.735.798.361 1.348 1.204 1.348 2.47 0 3.387-3.907 5.232-7.22 5.232-4.885 0-8.077-3.207-8.077-8.424 0-6.392 4.223-10.487 9.9-10.487 3.808 0 5.69 1.671 6.97 3.914l2.108-1.475C21.44 2.078 18.331 0 13.663 0 6.227 0 1.168 5.277 1.168 12.934c0 7 4.953 11.066 10.856 11.066 4.878 0 9.809-2.846 9.809-7.716 0-2.545-1.46-4.231-3.569-5.187m-6.33 4.855c-1.077 0-2.026-.512-2.026-1.453 0-1.483 1.822-1.934 3.606-1.934.678 0 1.34.045 1.927.173-.422 1.927-1.671 3.215-3.508 3.214Z" />
    </svg>
  ),
  Meta: (
    <svg
      className="brand-mark"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z" />
    </svg>
  ),
  Snap: (
    <svg
      className="brand-mark"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.391.074-.54.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.389-.135-.567-.046-.181-.105-.494-.166-.57-1.918-.222-2.95-.642-3.189-1.226-.031-.063-.052-.15-.055-.225-.015-.243.165-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-1.107-.435-1.257-.93-1.197-1.273.09-.479.674-.793 1.168-.793.146 0 .27.029.383.074.42.194.789.3 1.104.3.234 0 .384-.06.465-.105l-.046-.569c-.098-1.626-.225-3.651.307-4.837C7.392 1.077 10.739.807 11.727.807l.419-.015h.06z" />
    </svg>
  ),
  OpenAI: (
    <svg
      className="brand-mark"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
    </svg>
  ),
};

function Company({
  brand,
  children,
}: {
  brand: string;
  children: React.ReactNode;
}) {
  return (
    <span className={`company brand-${brand.toLowerCase()}`}>
      {MARKS[brand]}
      {children}
    </span>
  );
}

export default function FathomPage() {
  return (
    <main className="container essay-page">
      <header>
        <h1>fathom vision</h1>
      </header>

      <section className="essay-body">
        <p>My name is Clinton. I&apos;m one of three co-founders of Fathom.</p>

        <p>I will spare you a cringe manifesto. The facts:</p>

        <p>
          We&apos;re building Fathom - voice-first AI for engineers whose first
          language isn&apos;t English. Engineers converse naturally with their
          codebase, infrastructure, and workflows in their working language and
          hear an answer back, grounded in their actual code, in under 3
          seconds.
        </p>

        <p>
          It is a wonderful form factor and starting point. The product has been
          in closed beta for a few months and in that time has become extremely
          powerful. 284 active engineers are using Fathom in closed beta, with a
          couple of design partners across the United States and Lithuania, and
          1000+ person on the waitlist. 2nd place at OpenAI&apos;s GPT-5 Startup
          Hackathon in NYC.
        </p>

        <p>These numbers aren&apos;t massive, but they are not small either.</p>

        <p>
          It&apos;s still early. But I think the current version is a glimpse of
          where engineering is heading - where most of the world&apos;s
          engineers will interact with code by voice, in their own language,
          with grounded retrieval. Not by typing English prompts into a chat
          box.
        </p>

        <p>
          That&apos;s the vision I want to build this company around, with a
          focus on engineering teams whose working language isn&apos;t English.
        </p>

        <p>
          When I was 17, I moved across the country alone from Benin City,
          somewhere in the southern side of Nigeria, to Belgium to study, then
          to the U.S to study computer science at Morgan State University. Every
          codebase I touched was English. Every variable, every comment, every
          Stack Overflow answer, every Cursor autocomplete. My English is good.
          But my closest friends back home, back in belgium - engineers as sharp
          as anyone I know in SF - they think in Dutch, French, Yoruba, in Igbo,
          in Hausa, then translate to English to type. That&apos;s a tax.
          Multiply it by every engineer in Korea, Japan, China, Brazil, France,
          Germany. That&apos;s hundreds of millions of people paying a cognitive
          tax every day to use tools that weren&apos;t built for them.
        </p>

        <p>Tech Twitter does not reflect the real world.</p>

        <p>
          In reality, the 24-year-old fintech engineer in Seoul maintaining a
          US-built monorepo doesn&apos;t have a tool that meets her where she
          works. The fresh grad in Sao Paulo onboarding into a Python service
          her senior in Berlin wrote 3 years ago doesn&apos;t have a tool that
          speaks her language. The engineering manager in Tokyo trying to
          understand a legacy API doesn&apos;t have a tool that respects how her
          brain works.
        </p>

        <p>
          We all have access to the same models. Very few of us have tools built
          for how we actually think.
        </p>

        <p>And, I just believe it&apos;s an interface problem.</p>

        <p>
          The English-first typing interface took the same chips and the same
          models and made them 100x harder to use for the half of the
          world&apos;s engineers who don&apos;t think in English. We want to
          take the same frontier models everyone else is using and make it so
          the power of this technology can break out of English-typing chat
          boxes and into the hands of every engineer who reads code their senior
          wrote in a language not their own.
        </p>

        <p>
          Much of this is early. We&apos;re 3 founders. We came out of{' '}
          <Company brand="Apple">Apple Camera ML</Company>,{' '}
          <Company brand="Apple">Apple Siri ML</Company>,{' '}
          <Company brand="Threads">Meta Threads</Company>, and{' '}
          <Company brand="Snap">Snap Spotlight</Company>. The three of us hold
          full-time offers from <Company brand="OpenAI">OpenAI</Company> and{' '}
          <Company brand="Meta">Meta</Company> for fall 2026. We&apos;re
          prepared to rescind them. And go all in on this.
        </p>

        <p>
          If you&apos;re an investor interested in seeing how this plays out,
          I&apos;d love to talk.
          <br />
          If you&apos;re an engineer who works in a non-English-first team and
          you want early access, join the waitlist at{' '}
          <a href="https://heyfathom.com" target="_blank" rel="noopener">
            heyfathom.com
          </a>
          .
          <br />
          If you&apos;re a non-English-first engineer who wants to work on this
          with us, reach out.
        </p>

        <p>This is the bet I&apos;m making. I think it&apos;s the right one.</p>

        <p className="essay-signoff">- Clinton</p>
      </section>
    </main>
  );
}
