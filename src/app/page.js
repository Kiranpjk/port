import Image from 'next/image';
import { profile, design, rapidgigs, code, education, skills } from '@/data/site';

function Ext({ href, children, className = 'link' }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children} <span aria-hidden="true">↗</span>
    </a>
  );
}

function SectionHead({ number, title, note }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4 border-b border-ink pb-4">
      <h2 className="font-display text-5xl uppercase leading-none md:text-8xl">
        <span className="mr-3 align-top font-sans text-sm font-semibold tracking-widest text-accent md:text-base">
          {number}
        </span>
        {title}
      </h2>
      <p className="max-w-xs font-serif text-xl italic text-soft">{note}</p>
    </div>
  );
}

function Phone({ src, alt, priority = false, className = '' }) {
  return (
    <div className={`overflow-hidden rounded-[2.2rem] border-[9px] border-ink bg-ink shadow-2xl shadow-ink/25 ${className}`}>
      <Image src={src} alt={alt} width={640} height={1352} priority={priority} className="h-auto w-full rounded-[1.6rem]" />
    </div>
  );
}

function CaseStudy({ item, index }) {
  return (
    <article id={item.id} className="grid gap-10 border-b border-line py-14 md:grid-cols-12 md:py-20">
      <div className="md:col-span-5">
        <p className="eyebrow">
          {String(index + 1).padStart(2, '0')} · {item.year} · {item.kind}
        </p>
        <h3 className="mt-3 break-words font-display text-[clamp(2.75rem,6vw,6rem)] uppercase leading-[0.9]">{item.title}</h3>
        <p className="mt-6 max-w-xl text-lg leading-relaxed">{item.summary}</p>

        <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5">
          {item.stats.map(([value, label]) => (
            <div key={label} className="border-t border-ink pt-2">
              <dt className="font-display text-4xl">{value}</dt>
              <dd className="text-sm text-soft">{label}</dd>
            </div>
          ))}
        </dl>

        <dl className="mt-10">
          {item.steps.map(([name, text]) => (
            <div key={name} className="grid grid-cols-[6.5rem_1fr] gap-4 border-t border-line py-3">
              <dt className="font-serif text-xl italic">{name}</dt>
              <dd className="text-[0.95rem] leading-relaxed text-soft">{text}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-6 text-sm text-soft">Tools: {item.tools}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {item.links.map(([label, href]) => (
            <Ext key={label} href={href} className="btn">
              {label}
            </Ext>
          ))}
        </div>
      </div>

      <div className="md:col-span-7">
        {item.shape === 'phone' ? (
          <div className="grid grid-cols-3 items-start gap-3 md:gap-6">
            {item.images.map(([src, alt], i) => (
              <Phone key={src} src={src} alt={alt} className={i === 1 ? 'md:mt-16' : ''} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 md:gap-5">
            {item.images.map(([src, alt, w, h], i) => (
              <Image
                key={src}
                src={src}
                alt={alt}
                width={w}
                height={h}
                className={`h-auto w-full rounded-2xl ${i === 0 ? 'col-span-2' : ''}`}
              />
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <>
      <header className="shell flex items-center justify-between py-5 text-sm font-semibold">
        <a href="#top">{profile.name}</a>
        <nav aria-label="Sections" className="hidden gap-8 md:flex">
          <a href="#design" className="hover:text-accent">Design</a>
          <a href="#code" className="hover:text-accent">Code</a>
          <a href="#about" className="hover:text-accent">About</a>
          <a href="#contact" className="hover:text-accent">Contact</a>
        </nav>
        <a href={profile.cv} download className="link">
          CV <span aria-hidden="true">↓</span>
        </a>
      </header>

      <main id="top">
        {/* Hero: the work sits where a portrait would normally go */}
        <section className="overflow-hidden pb-16 pt-2 md:pb-24">
          <h1 className="rise select-none whitespace-nowrap text-center font-display text-[21.5vw] uppercase leading-[0.82] tracking-tight">
            <span className="sr-only">{profile.name}, </span>
            <span aria-hidden="true">Jaya Kiran</span>
          </h1>

          <div className="shell grid items-end gap-10 md:grid-cols-[1fr_auto_1fr]">
            <div className="order-2 md:order-1 md:pb-10">
              <p className="font-serif text-4xl italic leading-tight md:text-5xl">{profile.role}.</p>
              <p className="mt-4 max-w-sm text-lg leading-relaxed text-soft">{profile.pitch}</p>
            </div>

            <figure className="rise-late order-1 mx-auto -mt-[4vw] w-[62vw] max-w-[300px] md:order-2 md:-mt-[11vw]">
              <Phone
                src="/work/classcomfort-details.webp"
                alt="ClassComfort app screen showing room 37-807 with its facilities and a book button"
                priority
              />
              <figcaption className="mt-3 text-center text-xs text-soft">
                ClassComfort, room details screen. <a href="#classcomfort" className="link">See the case study</a>
              </figcaption>
            </figure>

            <div className="order-3 md:pb-10 md:text-right">
              <p className="inline-flex items-center gap-2 text-sm font-semibold">
                <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                {profile.status}
              </p>
              <p className="mt-2 text-sm text-soft">{profile.location} · M.Sc. Computer Science, TU Clausthal</p>
              <div className="mt-6 flex flex-wrap gap-3 md:justify-end">
                <a href={`mailto:${profile.email}`} className="btn bg-ink text-paper hover:bg-accent hover:border-accent">
                  Email me
                </a>
                <a href={profile.cv} download className="btn">
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="design" className="shell scroll-mt-6 pt-10">
          <SectionHead number="01" title="Design work" note="Research first, then screens." />
          {design.map((item, i) => (
            <CaseStudy key={item.id} item={item} index={i} />
          ))}
        </section>

        <section id="code" className="shell scroll-mt-6 pt-20 md:pt-28">
          <SectionHead number="02" title="Built in code" note="I can ship what I design." />

          <article className="grid gap-10 border-b border-line py-14 md:grid-cols-12 md:py-20">
            <div className="md:col-span-5">
              <p className="eyebrow">
                {rapidgigs.dates} · {rapidgigs.kind}
              </p>
              <h3 className="mt-3 break-words font-display text-[clamp(2.75rem,6vw,6rem)] uppercase leading-[0.9]">{rapidgigs.title}</h3>
              <p className="mt-6 max-w-xl text-lg leading-relaxed">{rapidgigs.summary}</p>
              <p className="mt-6 border-l-2 border-accent pl-4 font-serif text-xl italic">{rapidgigs.note}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {rapidgigs.links.map(([label, href]) => (
                  <Ext key={label} href={href} className="btn">
                    {label}
                  </Ext>
                ))}
              </div>
            </div>
            <div className="md:col-span-7">
              <Image
                src={rapidgigs.image[0]}
                alt={rapidgigs.image[1]}
                width={1200}
                height={750}
                className="mb-8 h-auto w-full rounded-xl border border-line"
              />
              <dl>
                {rapidgigs.parts.map(([name, text]) => (
                  <div key={name} className="grid gap-2 border-t border-ink py-5 md:grid-cols-[11rem_1fr] md:gap-6">
                    <dt className="font-display text-3xl uppercase">{name}</dt>
                    <dd className="leading-relaxed text-soft">{text}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </article>

          <ol>
            {code.map((item, i) => (
              <li key={item.title} className="grid items-center gap-5 border-b border-line py-8 md:grid-cols-12">
                <p className="font-sans text-sm font-semibold tracking-widest text-accent md:col-span-1">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <div className="md:col-span-6">
                  <h3 className="font-display text-4xl uppercase md:text-5xl">{item.title}</h3>
                  <p className="mt-2 max-w-xl leading-relaxed text-soft">{item.line}</p>
                  <p className="mt-3 text-sm">
                    {item.stack}
                    {item.links.map(([label, href]) => (
                      <span key={label} className="ml-4">
                        <Ext href={href}>{label}</Ext>
                      </span>
                    ))}
                  </p>
                </div>
                <div className="md:col-span-5">
                  {item.image ? (
                    <Image
                      src={item.image[0]}
                      alt={item.image[1]}
                      width={1200}
                      height={750}
                      className="h-auto w-full rounded-xl border border-line"
                    />
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="about" className="shell scroll-mt-6 pt-20 md:pt-28">
          <SectionHead number="03" title="About" note="Designer by choice, engineer by training." />
          <div className="grid gap-12 py-14 md:grid-cols-2">
            <div>
              <h3 className="eyebrow">Education</h3>
              <dl className="mt-4">
                {education.map(([when, what, where]) => (
                  <div key={what} className="grid gap-1 border-t border-line py-4 md:grid-cols-[9.5rem_1fr] md:gap-4">
                    <dt className="text-sm text-soft">{when}</dt>
                    <dd>
                      <p className="font-semibold">{what}</p>
                      <p className="text-sm text-soft">{where}</p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <h3 className="eyebrow">Skills</h3>
              <dl className="mt-4">
                {skills.map(([name, text]) => (
                  <div key={name} className="grid gap-1 border-t border-line py-4 md:grid-cols-[7rem_1fr] md:gap-4">
                    <dt className="font-serif text-xl italic">{name}</dt>
                    <dd className="leading-relaxed text-soft">{text}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section id="contact" className="mt-10 scroll-mt-6 bg-ink py-20 text-paper md:py-28">
          <div className="shell">
            <p className="font-serif text-3xl italic md:text-4xl">Have a Werkstudent role in UI/UX?</p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-4 block break-all font-display text-[7.6vw] uppercase leading-none hover:text-accent md:text-[6.2vw]"
            >
              {profile.email}
            </a>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold">
              <Ext href={profile.linkedin} className="hover:underline">LinkedIn</Ext>
              <Ext href={profile.github} className="hover:underline">GitHub</Ext>
              <a href={profile.cv} download className="hover:underline">
                Download CV <span aria-hidden="true">↓</span>
              </a>
              <span className="text-paper/60">{profile.location}</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
