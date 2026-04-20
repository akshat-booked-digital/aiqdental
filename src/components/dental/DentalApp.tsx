import React, { useState, useRef } from "react";
import { COLORS, TEAM, SERVICES, BLOG_POSTS, roleColor, today, type TeamMember, type Service, type BlogPost } from "@/data/dental-data";
import CallWidget from "./CallWidget";
import "@/styles/dental.css";

// ── NAV ITEMS ────────────────────────────────────────────────────
const navItems = [
  {id:"home",label:"Home"},{id:"about",label:"About"},{id:"team",label:"Team"},
  {id:"services",label:"Services"},{id:"nhs",label:"NHS"},{id:"private",label:"Private"},{id:"fees",label:"Fees"},{id:"testimonials",label:"Reviews"},{id:"blog",label:"Blog"},{id:"contact",label:"Contact"},
];

// ── CTA BAR ──────────────────────────────────────────────────────
function CTABar({nav}: {nav: (p: string) => void}) {
  return (
    <section className="cta-bar">
      <div className="container">
        <h2>Ready to book your appointment?</h2>
        <p>Our team is here for you — from routine check-ups to specialist treatment.</p>
        <button className="btn btn-primary" style={{fontSize:"1rem",padding:"16px 36px"}} onClick={()=>nav("contact")}>Book Now →</button>
      </div>
    </section>
  );
}

// ── HOME PAGE ────────────────────────────────────────────────────
function HomePage({nav}: {nav: (p: string) => void}) {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <div className="hero-badge"><div className="hero-dot"/> Accepting New Patients</div>
              <h1>Your smile deserves <em>exceptional</em> care</h1>
              <p className="hero-text">A trusted dental practice in Hammersmith, offering comprehensive private and NHS dentistry with a team of 15 dedicated professionals.</p>
              <div className="hero-btns">
                <button className="btn btn-primary" onClick={()=>nav("contact")}>Book Appointment →</button>
                <button className="btn btn-outline" onClick={()=>nav("team")}>Meet Our Team</button>
              </div>
            </div>
            <div className="hero-stats">
              <div className="stat-box"><div className="stat-num">15</div><div className="stat-lbl">Practitioners</div></div>
              <div className="stat-box"><div className="stat-num">277</div><div className="stat-lbl">Treatments</div></div>
              <div className="stat-box"><div className="stat-num">5</div><div className="stat-lbl">Days a Week</div></div>
              <div className="stat-box"><div className="stat-num">9–5</div><div className="stat-lbl">Mon – Fri</div></div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-alt">
        <div className="container">
          <div className="section-label">Our Services</div>
          <div className="section-title">Comprehensive dental care</div>
          <div className="section-sub">From routine check-ups to advanced restorative work, our multi-disciplinary team covers every aspect of your dental health.</div>
          <div className="card-grid card-grid-3">
            {SERVICES.map(s=>(
              <div key={s.id} className="card" onClick={()=>nav(`service-${s.id}`)}>
                <div className="card-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.shortDesc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-label">From Our Blog</div>
          <div className="section-title">Latest articles</div>
          <div className="card-grid card-grid-3" style={{marginTop:28}}>
            {BLOG_POSTS.slice(0,3).map(b=>(
              <div key={b.id} className="blog-card" onClick={()=>nav(`blog-${b.id}`)}>
                <div className="blog-header">{b.category}</div>
                <div className="blog-body">
                  <h3>{b.title}</h3>
                  <p>{b.excerpt}</p>
                  <div className="blog-meta">{b.date} · {b.readTime}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABar nav={nav}/>
    </>
  );
}

// ── ABOUT PAGE ───────────────────────────────────────────────────
function AboutPage({nav}: {nav: (p: string) => void}) {
  return (
    <>
      <section className="hero" style={{paddingBottom:48}}>
        <div className="container">
          <div className="section-label">About Us</div>
          <h1 style={{fontFamily:"'Lora',serif",fontSize:"2.8rem",color:COLORS.navy,marginBottom:12}}>A modern practice with <em style={{color:COLORS.teal,fontStyle:"italic"}}>traditional values</em></h1>
          <p className="hero-text" style={{maxWidth:640}}>Amazing Smiles Dental was founded in 2018 with a simple belief: everyone deserves access to high-quality, compassionate dental care in an environment that feels welcoming, not clinical.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <p>Situated on Fulham Palace Road in the heart of Hammersmith, Amazing Smiles Dental has grown from a small two-surgery practice into one of West London's most comprehensive dental centres. Today, our team of 15 practitioners — five dentists, five hygienists, and five therapists — provides the full spectrum of dental care under one roof.</p>
              <p>Our founding principal, together with our clinical director, spent two years designing the practice from scratch. Every detail was considered: the calming colour palette, the natural light flooding through floor-to-ceiling windows, the private treatment rooms with ceiling-mounted screens so patients can watch something relaxing during procedures.</p>
              <p>We invested heavily in technology from day one. Our practice runs on Dentally, a cloud-based dental software platform that allows us to manage appointments, patient records, and treatment plans seamlessly. We use digital X-rays, intraoral scanners, and CBCT 3D imaging — not because technology is fashionable, but because it delivers measurably better outcomes for our patients.</p>
              <p>What sets Amazing Smiles Dental apart, though, is our people. We recruit clinicians not just for their technical skills but for their empathy, their communication, and their genuine desire to make patients feel at ease. Many of our patients initially came to us because they'd had negative experiences elsewhere. Helping them rebuild their confidence and relationship with dental care is the most rewarding part of what we do.</p>
              <p>We're proud to be an NHS practice that also offers a comprehensive range of private treatments. We believe that financial circumstances should never be a barrier to basic dental care, while also providing premium options for patients who want them.</p>
            </div>
            <div>
              <div className="value-card"><h4>🤝 Patient-First</h4><p>Every decision we make — from equipment purchases to appointment scheduling — starts with the question: what's best for the patient?</p></div>
              <div className="value-card"><h4>🔬 Evidence-Based</h4><p>We follow the latest clinical evidence and guidelines, investing in continuous professional development for every team member.</p></div>
              <div className="value-card"><h4>💛 Compassionate</h4><p>We specialise in treating anxious and phobic patients. No judgement, no rushing, just gentle care at your pace.</p></div>
              <div className="value-card"><h4>🌱 Sustainable</h4><p>From our digital-first records to our reduced-plastic consumables, we're committed to minimising our environmental footprint.</p></div>
              <div className="value-card"><h4>📱 Modern</h4><p>Online booking, digital treatment plans, and cloud-based records mean your dental care fits seamlessly into your life.</p></div>
            </div>
          </div>
        </div>
      </section>
      <CTABar nav={nav}/>
    </>
  );
}

// ── TEAM PAGE ────────────────────────────────────────────────────
function TeamPage({nav,filter,setFilter,setModal}: {nav: (p: string) => void; filter: string; setFilter: (f: string) => void; setModal: (t: TeamMember) => void}) {
  const filters = ["all","Dentist","Hygienist","Therapist"];
  const filtered = filter==="all" ? TEAM : TEAM.filter(t=>t.role===filter);
  return (
    <>
      <section className="hero" style={{paddingBottom:20}}>
        <div className="container">
          <div className="section-label">Our People</div>
          <h1 style={{fontFamily:"'Lora',serif",fontSize:"2.8rem",color:COLORS.navy,marginBottom:12}}>Meet the team</h1>
          <p className="hero-text">15 dedicated professionals committed to your oral health. Click any team member to learn more about their background and specialisms.</p>
        </div>
      </section>
      <section className="section" style={{paddingTop:24}}>
        <div className="container">
          <div style={{display:"flex",gap:8,marginBottom:28,flexWrap:"wrap"}}>
            {filters.map(f=>(
              <button key={f} className={`nav-link ${filter===f?"active":""}`} style={{border:`1.5px solid ${filter===f?COLORS.teal:COLORS.gray200}`,borderRadius:100}} onClick={()=>setFilter(f)}>
                {f==="all"?"All (15)":f==="Dentist"?"Dentists (5)":f==="Hygienist"?"Hygienists (5)":"Therapists (5)"}
              </button>
            ))}
          </div>
          <div className="team-grid">
            {filtered.map(t=>(
              <div key={t.name} className="team-card" onClick={()=>setModal(t)}>
                <div className="team-avatar" style={{background:roleColor(t.role)}}>{t.initials}</div>
                <div className="team-card-info">
                  <h4>{t.name}</h4>
                  <span className={`role-badge role-${t.role}`}>{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABar nav={nav}/>
    </>
  );
}

// ── SERVICES PAGE ────────────────────────────────────────────────
function ServicesPage({nav}: {nav: (p: string) => void}) {
  return (
    <>
      <section className="hero" style={{paddingBottom:20}}>
        <div className="container">
          <div className="section-label">Our Services</div>
          <h1 style={{fontFamily:"'Lora',serif",fontSize:"2.8rem",color:COLORS.navy,marginBottom:12}}>Everything your smile needs</h1>
          <p className="hero-text">277 treatments across six specialist areas, delivered by our multi-disciplinary team.</p>
        </div>
      </section>
      <section className="section" style={{paddingTop:24}}>
        <div className="container">
          <div className="card-grid card-grid-2">
            {SERVICES.map(s=>(
              <div key={s.id} className="card" onClick={()=>nav(`service-${s.id}`)}>
                <div style={{display:"flex",alignItems:"center",gap:14,marginBottom:14}}>
                  <div style={{fontSize:"2rem"}}>{s.icon}</div>
                  <div>
                    <h3 style={{marginBottom:2}}>{s.title}</h3>
                    <div style={{fontSize:"0.82rem",color:COLORS.textLight}}>{s.tagline}</div>
                  </div>
                </div>
                <p>{s.shortDesc}</p>
                <div style={{marginTop:14,fontSize:"0.82rem",color:COLORS.teal,fontWeight:600}}>Learn more →</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABar nav={nav}/>
    </>
  );
}

// ── SERVICE DETAIL ───────────────────────────────────────────────
function ServiceDetail({service:s,nav}: {service: Service; nav: (p: string) => void}) {
  return (
    <>
      <section className="service-hero" style={{background:`linear-gradient(170deg, ${COLORS.tealLight} 0%, ${COLORS.white} 100%)`}}>
        <div className="container">
          <button className="back-link" onClick={()=>nav("services")}>← Back to Services</button>
          <div style={{fontSize:"2.8rem",marginBottom:12}}>{s.icon}</div>
          <h1>{s.title}</h1>
          <p style={{fontSize:"0.9rem",color:COLORS.teal,fontWeight:600,marginBottom:16}}>{s.tagline}</p>
          <p className="service-hero-text">{s.heroDesc}</p>
        </div>
      </section>
      <div className="container" style={{paddingBottom:60}}>
        {s.sections.map((sec,i)=>(
          <div key={i} className="service-section">
            <h2>{sec.title}</h2>
            <p>{sec.text}</p>
          </div>
        ))}
        <div className="service-section">
          <h2>Available Treatments</h2>
          <div className="treat-tags">
            {s.treatments.map((t,i)=><span key={i} className="treat-tag">{t}</span>)}
          </div>
        </div>
      </div>
      <CTABar nav={nav}/>
    </>
  );
}

// ── BLOG PAGE ────────────────────────────────────────────────────
function BlogPage({nav}: {nav: (p: string) => void}) {
  return (
    <>
      <section className="hero" style={{paddingBottom:20}}>
        <div className="container">
          <div className="section-label">Our Blog</div>
          <h1 style={{fontFamily:"'Lora',serif",fontSize:"2.8rem",color:COLORS.navy,marginBottom:12}}>Dental health insights</h1>
          <p className="hero-text">Expert advice, treatment guides, and practice news from the Amazing Smiles Dental team.</p>
        </div>
      </section>
      <section className="section" style={{paddingTop:24}}>
        <div className="container">
          <div className="card-grid card-grid-2">
            {BLOG_POSTS.map(b=>(
              <div key={b.id} className="blog-card" onClick={()=>nav(`blog-${b.id}`)}>
                <div className="blog-header">{b.category}</div>
                <div className="blog-body">
                  <h3>{b.title}</h3>
                  <p>{b.excerpt}</p>
                  <div className="blog-meta">{b.date} · {b.readTime}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// ── BLOG ARTICLE ─────────────────────────────────────────────────
function BlogArticle({post:b,nav}: {post: BlogPost; nav: (p: string) => void}) {
  return (
    <>
      <section className="article-hero">
        <div className="container">
          <button className="back-link" onClick={()=>nav("blog")}>← Back to Blog</button>
          <div className="article-category">{b.category}</div>
          <h1 className="article-title">{b.title}</h1>
          <div className="article-meta">{b.date} · {b.readTime}</div>
        </div>
      </section>
      <div className="article-content" dangerouslySetInnerHTML={{__html: b.content}} />
      <CTABar nav={nav}/>
    </>
  );
}

// ── CONTACT PAGE ─────────────────────────────────────────────────
function ContactPage() {
  const days = [
    {d:"Monday",h:"9:00 AM – 5:00 PM"},{d:"Tuesday",h:"9:00 AM – 5:00 PM"},
    {d:"Wednesday",h:"9:00 AM – 5:00 PM"},{d:"Thursday",h:"9:00 AM – 5:00 PM"},
    {d:"Friday",h:"9:00 AM – 5:00 PM"},{d:"Saturday",h:"Closed"},{d:"Sunday",h:"Closed"},
  ];
  return (
    <>
      <section className="hero" style={{paddingBottom:20}}>
        <div className="container">
          <div className="section-label">Get in Touch</div>
          <h1 style={{fontFamily:"'Lora',serif",fontSize:"2.8rem",color:COLORS.navy,marginBottom:12}}>Book your appointment</h1>
          <p className="hero-text">Whether it's a routine check-up or an emergency, our friendly team is here to help.</p>
        </div>
      </section>
      <section className="section" style={{paddingTop:24}}>
        <div className="container">
          <div className="contact-grid">
            <div>
              <h3 style={{fontFamily:"'Lora',serif",fontSize:"1.3rem",color:COLORS.navy,marginBottom:20}}>Opening Hours</h3>
              <table className="hours-table">
                <tbody>
                  {days.map(d=>(
                    <tr key={d.d} className={d.d===today?"today-row":""}><td>{d.d}</td><td>{d.h}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="contact-box">
              <div className="contact-item">
                <div className="contact-icon-box">📍</div>
                <div><div className="contact-label">Address</div><div className="contact-value">109-111 Fulham Palace Road<br/>London W6 8JA</div></div>
              </div>
              <div className="contact-item">
                <div className="contact-icon-box">📞</div>
                <div><div className="contact-label">Phone</div><div className="contact-value">07930 327 445</div></div>
              </div>
              <div className="contact-item">
                <div className="contact-icon-box">✉️</div>
                <div><div className="contact-label">Email</div><div className="contact-value">hello@aiqdental.co.uk</div></div>
              </div>
              <div className="contact-item">
                <div className="contact-icon-box">🏥</div>
                <div><div className="contact-label">NHS & Private</div><div className="contact-value">Accepting new patients</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// ── PRIVATE DENTISTRY PAGE ────────────────────────────────────────
function PrivatePage({nav}: {nav: (p: string) => void}) {
  const benefits = [
    { icon:"⏱️", title:"Longer Appointments", text:"Private appointments are never rushed. We allocate more time per visit so your clinician can be thorough, answer every question, and ensure you're completely comfortable throughout." },
    { icon:"🎨", title:"Premium Materials", text:"Choose from the latest tooth-coloured composites, porcelain, emax, and zirconia ceramics. Private care gives you access to the most aesthetically pleasing and durable materials available in modern dentistry." },
    { icon:"🔬", title:"Advanced Technology", text:"CBCT 3D scanning, digital smile design, intraoral scanning, and CAD/CAM same-day restorations. Private dentistry unlocks the full range of diagnostic and treatment technology our practice offers." },
    { icon:"📋", title:"Wider Treatment Options", text:"From dental implants and Invisalign to cosmetic bonding and professional whitening — many of the treatments that can truly transform your smile are only available privately." },
    { icon:"📅", title:"Flexible Scheduling", text:"Private patients benefit from shorter waiting times and more flexibility when booking appointments, including access to early morning and lunchtime slots that fit around your working day." },
    { icon:"🤝", title:"Continuity of Care", text:"See the same clinician at every visit. Build a relationship with a dentist who knows your history, understands your preferences, and can plan your care with a long-term view." },
  ];

  const comparison = [
    { nhs:"Treatment limited to what is clinically necessary", pvt:"Full range of treatments including cosmetic and elective options" },
    { nhs:"Standard materials (e.g. amalgam fillings on back teeth)", pvt:"Premium materials chosen for aesthetics and longevity" },
    { nhs:"Appointment length determined by NHS contract", pvt:"Longer appointments with no time pressure" },
    { nhs:"Waiting times can vary based on demand", pvt:"Shorter wait times with flexible scheduling" },
    { nhs:"Limited to NHS-approved procedures", pvt:"Access to implants, Invisalign, whitening, veneers, bonding" },
    { nhs:"Clinician may vary between appointments", pvt:"See the same dentist or hygienist every time" },
    { nhs:"Fixed NHS recall intervals", pvt:"Personalised recall intervals based on your needs" },
    { nhs:"Standard diagnostic imaging", pvt:"Full access to CBCT 3D scanning and digital diagnostics" },
  ];

  return (
    <>
      <section className="hero" style={{paddingBottom:48}}>
        <div className="container">
          <div className="section-label">Private Dentistry</div>
          <h1 style={{fontFamily:"'Lora',serif",fontSize:"2.8rem",color:COLORS.navy,marginBottom:12}}>Dental care on <em style={{color:COLORS.teal,fontStyle:"italic"}}>your terms</em></h1>
          <p className="hero-text" style={{maxWidth:640}}>Private dentistry at Amazing Smiles Dental gives you access to the full breadth of modern treatments, premium materials, and the time and attention you deserve — all at transparent, affordable prices with flexible ways to pay.</p>
        </div>
      </section>

      <section className="section" style={{paddingTop:0}}>
        <div className="container">
          <div className="section-label">Why Choose Private</div>
          <div className="section-title">The Amazing Smiles Dental private experience</div>
          <div className="section-sub">Private care isn't about luxury — it's about having the full range of options available to you, delivered without compromise.</div>
          <div className="pvt-benefit-grid">
            {benefits.map((b,i)=>(
              <div key={i} className="pvt-benefit">
                <div className="pvt-benefit-icon">{b.icon}</div>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-label">Side by Side</div>
          <div className="section-title">NHS vs Private — what's the difference?</div>
          <div className="section-sub">Both NHS and private dentistry provide safe, effective care. The difference lies in the range of options, materials, and the level of personalisation available to you.</div>
          <div className="pvt-comparison">
            <div className="pvt-col pvt-col-nhs">
              <h3>NHS Dentistry</h3>
              {comparison.map((c,i)=>(
                <div key={i} className="pvt-row"><span className="pvt-icon">○</span><span style={{color:COLORS.gray600}}>{c.nhs}</span></div>
              ))}
            </div>
            <div className="pvt-col pvt-col-private">
              <h3>Private Dentistry</h3>
              {comparison.map((c,i)=>(
                <div key={i} className="pvt-row"><span className="pvt-icon" style={{color:COLORS.teal}}>●</span><span style={{color:COLORS.navy}}>{c.pvt}</span></div>
              ))}
            </div>
          </div>
          <p style={{marginTop:20,fontSize:"0.88rem",color:COLORS.textLight,lineHeight:1.7}}>
            We proudly offer both NHS and private care at Amazing Smiles Dental. Your dentist will always explain both options where applicable, so you can make an informed choice that's right for your situation and budget. There's never any pressure to go private — the best treatment is the one that works for you.
          </p>
        </div>
      </section>

      <section className="section" style={{paddingBottom:0}}>
        <div className="container">
          <div className="pvt-quote">
            <blockquote>"I switched from NHS to the Denplan Care plan and honestly wish I'd done it years ago. The difference in the time they spend with you and the options available is night and day. Plus the monthly payment means I never worry about a surprise bill."</blockquote>
            <cite>— Sarah T., patient since 2021</cite>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-label">Making It Affordable</div>
          <div className="section-title">Private care doesn't have to break the bank</div>
          <div className="section-sub">We've built multiple ways for you to access private dental care at a price that works for you. No one should have to delay treatment because of cost.</div>
          <div className="pvt-afford-grid">
            <div className="pvt-afford-card">
              <div className="pvt-afford-icon">📆</div>
              <div>
                <h4>Denplan Monthly Plans from £12.50/month</h4>
                <p>Spread the cost of routine care with a fixed monthly direct debit. Your examinations, hygiene visits, and X-rays are covered — plus you get 10–15% off all other treatments and worldwide emergency cover.</p>
              </div>
            </div>
            <div className="pvt-afford-card">
              <div className="pvt-afford-icon">💳</div>
              <div>
                <h4>0% Interest-Free Finance</h4>
                <p>For treatments over £500, spread the cost across 6 or 12 monthly payments with zero interest. A small deposit gets you started, with the rest split into manageable instalments by direct debit.</p>
              </div>
            </div>
            <div className="pvt-afford-card">
              <div className="pvt-afford-icon">🏦</div>
              <div>
                <h4>Extended Finance (up to 36 months)</h4>
                <p>For larger treatment plans — implants, full smile makeovers, orthodontics — spread the cost over 24 or 36 months at competitive rates. Makes even comprehensive treatment accessible.</p>
              </div>
            </div>
            <div className="pvt-afford-card">
              <div className="pvt-afford-icon">🤝</div>
              <div>
                <h4>In-House Payment Plans</h4>
                <p>No credit checks, no third parties. For treatments over £300, agree a payment schedule directly with our team — typically 50% deposit with the balance split over 2–4 monthly payments.</p>
              </div>
            </div>
          </div>

          <div className="nhs-cta-card" style={{marginTop:36}}>
            <div>
              <h3>See our full fee guide and plan details</h3>
              <p>Every treatment price, all three Denplan tiers, and finance options explained — all in one place.</p>
            </div>
            <button className="btn btn-primary" onClick={()=>nav("fees")}>View Fees & Plans →</button>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-label">Popular Private Treatments</div>
          <div className="section-title">Treatments our patients love</div>
          <div className="card-grid card-grid-3" style={{marginTop:28}}>
            <div className="card" onClick={()=>nav("service-orthodontics")}>
              <div className="card-icon">😁</div>
              <h3>Invisalign</h3>
              <p>Virtually invisible aligners that straighten your teeth in 6–18 months. Removable, comfortable, and no lifestyle impact. Free consultation available.</p>
              <div style={{marginTop:12,fontSize:"0.85rem",color:COLORS.teal,fontWeight:600}}>From £2,750 →</div>
            </div>
            <div className="card" onClick={()=>nav("service-implants")}>
              <div className="card-icon">🏗️</div>
              <h3>Dental Implants</h3>
              <p>The gold standard for replacing missing teeth. A permanent, natural-looking solution that can last a lifetime with proper care.</p>
              <div style={{marginTop:12,fontSize:"0.85rem",color:COLORS.teal,fontWeight:600}}>From £2,850 →</div>
            </div>
            <div className="card" onClick={()=>nav("service-general")}>
              <div className="card-icon">✨</div>
              <h3>Composite Bonding</h3>
              <p>Reshape, repair, and rejuvenate your smile in a single appointment. A minimally invasive cosmetic treatment with stunning results.</p>
              <div style={{marginTop:12,fontSize:"0.85rem",color:COLORS.teal,fontWeight:600}}>From £295 per tooth →</div>
            </div>
          </div>
        </div>
      </section>

      <CTABar nav={nav}/>
    </>
  );
}

// ── FEES PAGE ─────────────────────────────────────────────────────
function FeesPage({nav}: {nav: (p: string) => void}) {
  const fees = [
    { cat: "Consultations & Diagnostics", items: [["New Patient Consultation", "£65"],["Routine Examination", "£50"],["Emergency Appointment", "£75"],["Small Digital X-Ray", "£15"],["OPG Panoramic X-Ray", "£65"],["CBCT 3D Scan (single arch)", "£150"],["CBCT 3D Scan (both arches)", "£250"]] },
    { cat: "Hygiene & Prevention", items: [["20-Minute Hygiene Visit", "£65"],["30-Minute Hygiene Visit", "£85"],["45-Minute Hygiene Visit", "£110"],["Intensive Periodontal Clean", "£145"],["Airflow Treatment (add-on)", "£35"],["Fluoride Varnish Application", "£25"],["Fissure Sealant (per tooth)", "£40"]] },
    { cat: "Fillings & Restorations", items: [["Composite Filling (small)", "£95"],["Composite Filling (medium)", "£135"],["Composite Filling (large)", "£175"],["Inlay / Onlay (porcelain)", "£450"],["Temporary Filling", "£65"],["Core Build-Up", "£120"]] },
    { cat: "Crowns, Veneers & Bridges", items: [["Porcelain Crown", "£595"],["Emax Crown", "£695"],["Zirconia Crown", "£750"],["Gold Crown", "£725"],["Porcelain Veneer", "£695"],["Composite Bonding Veneer", "£295"],["Bridge (per unit)", "£595 – £750"],["Temporary Crown", "£95"]] },
    { cat: "Root Canal Treatment", items: [["Root Canal — Anterior Tooth", "£395"],["Root Canal — Premolar", "£495"],["Root Canal — Molar", "£650"],["Root Canal Retreatment", "£695"]] },
    { cat: "Extractions & Oral Surgery", items: [["Simple Extraction", "£120"],["Surgical Extraction", "£225"],["Wisdom Tooth Removal", "£295"],["Coronectomy", "£350"]] },
    { cat: "Dental Implants", items: [["Implant Consultation (inc. CBCT)", "£95"],["Single Implant Placement", "£1,950"],["Implant Crown (per unit)", "£995"],["Implant + Crown (complete)", "£2,850"],["Bone Graft", "£495"],["Sinus Lift", "£895"],["Implant-Retained Denture (per arch)", "from £4,500"],["Full Arch (All-on-4)", "from £9,950"]] },
    { cat: "Orthodontics", items: [["Orthodontic Consultation", "Free"],["Invisalign Lite (up to 14 aligners)", "£2,750"],["Invisalign Full", "£4,250"],["Fixed Braces (metal, per arch)", "£1,850"],["Fixed Braces (ceramic, per arch)", "£2,250"],["Bonded Retainer (per arch)", "£295"],["Removable Retainer (per arch)", "£150"]] },
    { cat: "Cosmetic Dentistry", items: [["Teeth Whitening (home kit)", "£295"],["Teeth Whitening (in-office)", "£450"],["Composite Bonding (per tooth)", "£295"],["Smile Makeover Consultation", "Free"]] },
    { cat: "Dentures", items: [["Full Denture (acrylic)", "£695"],["Full Denture (chrome cobalt)", "£1,100"],["Partial Denture (acrylic)", "£495"],["Partial Denture (chrome cobalt)", "£850"],["Flexible Partial Denture", "£750"],["Denture Reline", "£195"],["Denture Repair", "£95"]] },
  ];

  return (
    <>
      <section className="hero" style={{paddingBottom:48}}>
        <div className="container">
          <div className="section-label">Private Fees</div>
          <h1 style={{fontFamily:"'Lora',serif",fontSize:"2.8rem",color:COLORS.navy,marginBottom:12}}>Transparent pricing, <em style={{color:COLORS.teal,fontStyle:"italic"}}>no surprises</em></h1>
          <p className="hero-text" style={{maxWidth:640}}>We believe you should always know what your treatment will cost before you commit. Below is our private fee guide — your dentist will always provide a written treatment plan with exact costs before any work begins.</p>
        </div>
      </section>

      <section className="section" style={{paddingTop:0}}>
        <div className="container">
          <table className="fee-table">
            <thead><tr><th>Treatment</th><th>Fee</th></tr></thead>
            <tbody>
              {fees.map((group,gi)=>(
                <React.Fragment key={gi}>
                  <tr className="fee-cat-row"><td colSpan={2}>{group.cat}</td></tr>
                  {group.items.map(([name,price],i)=>(
                    <tr key={i}><td>{name}</td><td>{price}</td></tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
          <p style={{marginTop:16,fontSize:"0.85rem",color:COLORS.textLight,fontStyle:"italic"}}>All fees are inclusive of VAT where applicable. Fees are correct as of April 2026 and are subject to review. Complex cases may require a detailed treatment plan with a bespoke quotation. A full written estimate will always be provided before treatment begins.</p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-label">Payment Plans</div>
          <div className="section-title">Affordable ways to pay</div>
          <div className="section-sub">We don't believe cost should be a barrier to great dental care. We offer several ways to spread the cost or budget monthly for your routine care.</div>

          <div className="plan-grid">
            <div className="plan-card">
              <div className="plan-header">
                <h3>Denplan Essentials</h3>
                <div className="plan-price">£12.50 <span>/month</span></div>
                <div className="plan-sub">Supplementary insurance cover</div>
              </div>
              <div className="plan-body">
                <ul className="plan-includes">
                  <li><span className="band-check">✓</span>Worldwide dental injury & dental emergency cover</li>
                  <li><span className="band-check">✓</span>Up to £10,000 of cover for dental injuries</li>
                  <li><span className="band-check">✓</span>Up to £750 emergency call-out cover</li>
                  <li><span className="band-check">✓</span>Access to a 24/7 dental emergency helpline</li>
                  <li><span className="band-check">✓</span>No clinical assessment required to join</li>
                </ul>
              </div>
            </div>

            <div className="plan-card featured">
              <div className="plan-featured-badge">MOST POPULAR</div>
              <div className="plan-header">
                <h3>Denplan Care</h3>
                <div className="plan-price">£28.50 <span>/month</span></div>
                <div className="plan-sub">Complete preventive care plan</div>
              </div>
              <div className="plan-body">
                <ul className="plan-includes">
                  <li><span className="band-check">✓</span>Two dental examinations per year</li>
                  <li><span className="band-check">✓</span>Two hygiene appointments per year</li>
                  <li><span className="band-check">✓</span>All routine X-rays included</li>
                  <li><span className="band-check">✓</span>10% discount on all private treatments</li>
                  <li><span className="band-check">✓</span>Worldwide dental injury cover (up to £10,000)</li>
                  <li><span className="band-check">✓</span>Emergency call-out cover (up to £750)</li>
                  <li><span className="band-check">✓</span>24/7 emergency helpline access</li>
                </ul>
              </div>
            </div>

            <div className="plan-card">
              <div className="plan-header">
                <h3>Denplan Care Plus</h3>
                <div className="plan-price">£42.00 <span>/month</span></div>
                <div className="plan-sub">Enhanced care for complex needs</div>
              </div>
              <div className="plan-body">
                <ul className="plan-includes">
                  <li><span className="band-check">✓</span>Everything in Denplan Care</li>
                  <li><span className="band-check">✓</span>Three hygiene appointments per year</li>
                  <li><span className="band-check">✓</span>Fluoride treatments included</li>
                  <li><span className="band-check">✓</span>15% discount on all private treatments</li>
                  <li><span className="band-check">✓</span>Priority booking for appointments</li>
                  <li><span className="band-check">✓</span>Extended emergency cover (up to £15,000)</li>
                  <li><span className="band-check">✓</span>Ideal for patients with gum disease or ongoing treatment</li>
                </ul>
              </div>
            </div>
          </div>

          <div style={{background:"white",border:"1px solid #E9ECF0",borderRadius:14,padding:"24px 28px",marginTop:24}}>
            <p style={{fontSize:"0.9rem",color:COLORS.gray600,lineHeight:1.7}}>
              <strong style={{color:COLORS.navy}}>How Denplan works:</strong> Denplan is the UK's leading dental payment plan provider, part of Simplyhealth. You pay a fixed monthly amount by direct debit, spreading the cost of your routine care evenly throughout the year. Your monthly fee is assessed by your dentist based on your individual oral health — the prices above are our standard starting rates. There are no claims to make, no excess to pay, and you're covered worldwide for dental emergencies.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-label">Financing</div>
          <div className="section-title">Interest-free finance for larger treatments</div>
          <div className="section-sub">For treatments like implants, orthodontics, and cosmetic work, we offer flexible payment options so you can get the care you need now and pay over time.</div>

          <div className="finance-grid">
            <div className="finance-card">
              <h3>💳 0% Interest-Free Finance</h3>
              <p>Spread the cost of treatments over £500 across 6 or 12 monthly payments with absolutely no interest. A 10% deposit is required at the start of treatment, with the remainder split into equal monthly instalments collected by direct debit.</p>
              <p style={{marginTop:12,fontSize:"0.85rem"}}><strong style={{color:COLORS.navy}}>Example:</strong> A single dental implant with crown at £2,850 — pay a £285 deposit, then 12 monthly payments of just £213.75.</p>
            </div>
            <div className="finance-card">
              <h3>📅 Extended Finance (12–36 months)</h3>
              <p>For larger treatment plans, we offer extended finance over 24 or 36 months at competitive rates through our finance partner. This is ideal for full smile makeovers, multiple implants, or comprehensive orthodontic treatment where the total exceeds £3,000.</p>
              <p style={{marginTop:12,fontSize:"0.85rem"}}><strong style={{color:COLORS.navy}}>Representative example:</strong> Invisalign Full at £4,250 over 24 months — £177.08/month at 9.9% APR representative. Total payable £4,612.50. Subject to status and credit approval.</p>
            </div>
            <div className="finance-card">
              <h3>🤝 Practice Payment Plans</h3>
              <p>For patients who prefer not to use external finance, we offer our own in-house payment plans for treatment courses over £300. Agree a schedule directly with our treatment coordinator — typically a 50% deposit with the balance split over 2–4 monthly payments before or during treatment. No credit checks, no interest, no third parties.</p>
            </div>
            <div className="finance-card">
              <h3>💡 Why Spread the Cost?</h3>
              <p>Delaying dental treatment often leads to more complex — and expensive — problems down the line. A small filling today prevents a root canal tomorrow. Our payment options exist so that finances never have to be the reason you postpone the care you need. Every consultation includes a full treatment plan with all costs clearly outlined, so there are never any surprises.</p>
            </div>
          </div>

          <div className="nhs-cta-card" style={{marginTop:40}}>
            <div>
              <h3>Not sure which option is right for you?</h3>
              <p>Our treatment coordinators are here to talk through costs and help you find the most comfortable way to pay. No obligation, no pressure.</p>
            </div>
            <button className="btn btn-primary" onClick={()=>nav("contact")}>Get in Touch →</button>
          </div>
        </div>
      </section>

      <CTABar nav={nav}/>
    </>
  );
}

// ── TESTIMONIALS PAGE ─────────────────────────────────────────────
function TestimonialsPage({nav}: {nav: (p: string) => void}) {
  const testimonials = [
    { name:"Sarah Thompson", initials:"ST", detail:"Patient since 2019 · Invisalign", tag:"Invisalign", color:"#2B8C96", featured:true,
      text:"I'd wanted straighter teeth for years but the thought of metal braces in my 30s put me off. Hajra made the whole Invisalign process so easy — from the 3D scan showing me the end result before I even started, to the regular check-ins where she genuinely celebrated every bit of progress. 14 months later and I can't stop smiling. The 0% finance option made it completely manageable too. Best investment I've ever made in myself." },
    { name:"David Okafor", initials:"DO", detail:"Patient since 2020 · Implant", tag:"Dental Implant", color:"#4A7BA7",
      text:"I lost a front tooth in a cycling accident and was devastated. Roy talked me through the implant process with so much patience — I must have asked a hundred questions. The end result is incredible, genuinely can't tell which one is the implant. The whole team made what could have been a really distressing experience feel completely manageable." },
    { name:"Patricia Williams", initials:"PW", detail:"Patient since 2018 · Nervous Patient", tag:"Nervous Patient", color:COLORS.accent,
      text:"I hadn't been to a dentist in 11 years. The shame and fear had built up to the point where I'd have panic attacks just thinking about it. Esha was my first point of contact and she was so gentle and understanding. They let me come in just to sit in the chair and chat before any treatment. Six months later I've had all my work done and I actually look forward to my hygiene appointments now. Changed my life, no exaggeration." },
    { name:"James Chen", initials:"JC", detail:"Patient since 2021 · Cosmetic Bonding", tag:"Composite Bonding", color:"#2D7D46",
      text:"Had composite bonding on my front six teeth with Callan. The man is an artist. Went from being self-conscious about my smile to grinning in every photo. The whole thing took one appointment — walked in with chipped, uneven teeth and walked out with a Hollywood smile. Absolutely worth every penny." },
    { name:"Amira Hassan", initials:"AH", detail:"Patient since 2022 · Family Care", tag:"Family Dentistry", color:"#8B5CF6",
      text:"We bring our three kids here and they actually ask when their next dentist appointment is. Hafsa is brilliant with children — she explains everything using terms they understand and makes it feel like an adventure rather than something scary. Both my eldest now brush without being asked. That alone is worth five stars." },
    { name:"Robert Marsh", initials:"RM", detail:"Patient since 2019 · Root Canal", tag:"Root Canal", color:"#DC6B2F",
      text:"I was terrified of needing a root canal — everything you read online makes it sound horrific. Jack was incredible. He explained every single step, checked in constantly, and honestly I felt less discomfort than during a regular filling. The tooth has been perfect ever since. If you're putting off a root canal out of fear, please just come here." },
    { name:"Fatima Begum", initials:"FB", detail:"Patient since 2023 · Denplan Care", tag:"Denplan", color:"#2B8C96",
      text:"Switched from NHS to the Denplan Care plan and the difference is remarkable. Miriam spends so much more time with me during hygiene appointments, my gums have never been healthier, and the monthly payment means I never have to worry about unexpected costs. The 10% discount on treatments has already paid for itself." },
    { name:"Thomas Gallagher", initials:"TG", detail:"Patient since 2020 · Emergency Care", tag:"Emergency", color:COLORS.navy,
      text:"Cracked a tooth on a Saturday evening and called in a panic. They got me in first thing Monday morning — the receptionist even called me back that evening to check I was managing the pain. Giovanni sorted the whole thing in one visit. That kind of care and responsiveness is why I've stayed with AIQ Dental and recommended them to half my office." },
    { name:"Linda Pearson", initials:"LP", detail:"Patient since 2018 · Dentures", tag:"Dentures", color:"#4A7BA7",
      text:"After years with ill-fitting dentures from another practice, I came to AIQ Dental at my daughter's suggestion. The difference is night and day. Marc took such care over the fit, and they didn't rest until I was completely happy. I can eat properly for the first time in years. I actually smile in photos again." },
    { name:"Marcus Wright", initials:"MW", detail:"Patient since 2021 · Whitening", tag:"Teeth Whitening", color:COLORS.accent,
      text:"Got the home whitening kit before my wedding. Simple process — custom trays, wore them for a couple of weeks, and the results were amazing. My teeth went about five shades lighter and the photos from the wedding day are proof. Callan was great at managing my expectations and the result was exactly what he predicted." },
    { name:"Sofia Nowak", initials:"SN", detail:"Patient since 2022 · Hygiene", tag:"Hygiene", color:"#2D7D46",
      text:"Joe is hands down the best hygienist I've ever seen. He uses the Airflow machine which is so much more comfortable than traditional scaling, and he always takes time to show me where I'm missing with my brushing. My gum bleeding has completely stopped since I started regular visits. He makes something I used to dread actually quite pleasant." },
    { name:"Graham Holt", initials:"GH", detail:"Patient since 2019 · Crown", tag:"Crown & Bridge", color:"#8B5CF6",
      text:"Needed a crown on a molar that had been patched up too many times. Giovanni recommended a zirconia crown and the thing is bombproof — two years in and it feels better than the original tooth ever did. The whole process from impression to fit took two appointments. Professional, efficient, painless." },
  ];

  const [filter, setFilter] = useState("all");
  const tags = ["all",...[...new Set(testimonials.map(t=>t.tag))]];
  const filtered = filter === "all" ? testimonials : testimonials.filter(t=>t.tag===filter);

  return (
    <>
      <section className="hero" style={{paddingBottom:48}}>
        <div className="container">
          <div className="section-label">Patient Stories</div>
          <h1 style={{fontFamily:"'Lora',serif",fontSize:"2.8rem",color:COLORS.navy,marginBottom:12}}>Don't take our word for it — <em style={{color:COLORS.teal,fontStyle:"italic"}}>hear from our patients</em></h1>
          <p className="hero-text" style={{maxWidth:640}}>Nothing means more to us than the trust our patients place in our team. Here are some of their stories — real experiences from real people across every treatment we offer.</p>
          <div className="testi-hero-stats">
            <div className="testi-hero-stat"><div className="testi-num">4.9</div><div className="testi-lbl">Average rating (Google)</div></div>
            <div className="testi-hero-stat"><div className="testi-num">500+</div><div className="testi-lbl">5-star reviews</div></div>
            <div className="testi-hero-stat"><div className="testi-num">98%</div><div className="testi-lbl">Would recommend us</div></div>
            <div className="testi-hero-stat"><div className="testi-num">8 yrs</div><div className="testi-lbl">Serving West London</div></div>
          </div>
        </div>
      </section>

      <section className="section" style={{paddingTop:0}}>
        <div className="container">
          <div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:28}}>
            {tags.map(t=>(
              <button key={t} className={`nav-link ${filter===t?"active":""}`} style={{border:`1.5px solid ${filter===t?COLORS.teal:COLORS.gray200}`,borderRadius:100,fontSize:"0.78rem"}} onClick={()=>setFilter(t)}>
                {t==="all"?"All Reviews":t}
              </button>
            ))}
          </div>
          <div className="testi-grid">
            {filtered.map((t,i)=>(
              <div key={i} className={`testi-card ${t.featured && filter==="all" ? "testi-featured":""}`}>
                <div className="testi-treatment-tag">{t.tag}</div>
                <div className="testi-stars">★★★★★</div>
                <p className="testi-text">"{t.text}"</p>
                <div className="testi-author">
                  <div className="testi-avatar" style={{background:t.color}}>{t.initials}</div>
                  <div>
                    <div className="testi-author-name">{t.name}</div>
                    <div className="testi-author-detail">{t.detail}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-label">Our Community</div>
          <div className="section-title">More than just a dental practice</div>
          <div className="section-sub">Since 2018, AIQ Dental has been woven into the fabric of the Hammersmith community. We don't just treat teeth — we invest in the health and wellbeing of the people around us.</div>
          <div className="community-grid">
            <div className="community-card">
              <div className="comm-icon">🏫</div>
              <h3>Schools Outreach Programme</h3>
              <p>Every term, our hygienists visit local primary schools in W6 and W14 to deliver interactive oral health workshops. We've reached over 2,000 children since 2019, teaching brushing techniques through games, demonstrations, and free toothbrush packs.</p>
            </div>
            <div className="community-card">
              <div className="comm-icon">❤️</div>
              <h3>Free Emergency Clinics</h3>
              <p>Twice a year we open our doors on a Saturday morning for a free emergency dental clinic, offering examinations, X-rays, pain relief, and extractions at no charge to patients who cannot access NHS dental care.</p>
            </div>
            <div className="community-card">
              <div className="comm-icon">🏃</div>
              <h3>Hammersmith Half Marathon Sponsor</h3>
              <p>AIQ Dental has been a proud sponsor of the annual Hammersmith Half Marathon since 2021. Our team runs a hydration and first-aid station at the 8-mile mark.</p>
            </div>
            <div className="community-card">
              <div className="comm-icon">🌱</div>
              <h3>Sustainability Commitment</h3>
              <p>We transitioned to fully digital patient records in 2019, eliminating paper charts entirely. We use biodegradable suction tips and have reduced single-use plastic by 60%.</p>
            </div>
            <div className="community-card">
              <div className="comm-icon">🎓</div>
              <h3>Training & Development Hub</h3>
              <p>We host dental foundation trainees each year, providing newly qualified dentists with mentored, supervised experience in a supportive environment.</p>
            </div>
            <div className="community-card">
              <div className="comm-icon">🤝</div>
              <h3>Local Business Partnerships</h3>
              <p>We partner with over 20 local businesses in the Fulham Palace Road and King Street area, offering their employees discounted Denplan membership.</p>
            </div>
          </div>

          <div className="community-stat-bar">
            <div className="community-stat"><div className="cs-num">2,000+</div><div className="cs-lbl">Children educated through school visits</div></div>
            <div className="community-stat"><div className="cs-num">320+</div><div className="cs-lbl">Free emergency appointments provided</div></div>
            <div className="community-stat"><div className="cs-num">£12,000+</div><div className="cs-lbl">Raised for charity since 2019</div></div>
            <div className="community-stat"><div className="cs-num">60%</div><div className="cs-lbl">Reduction in single-use plastic</div></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{textAlign:"center"}}>
          <div style={{fontSize:"3rem",marginBottom:16}}>⭐</div>
          <div className="section-title" style={{maxWidth:500,margin:"0 auto 12px"}}>Are you an AIQ Dental patient?</div>
          <p style={{fontSize:"1rem",color:COLORS.textLight,maxWidth:480,margin:"0 auto 28px",lineHeight:1.7}}>If you've had a positive experience with us, we'd be incredibly grateful if you could leave us a Google review. Your feedback helps other patients find us and gives our team a huge morale boost.</p>
          <button className="btn btn-primary" style={{fontSize:"0.95rem",padding:"14px 32px"}}>Leave a Google Review →</button>
          <p style={{fontSize:"0.82rem",color:COLORS.gray400,marginTop:12}}>You'll be redirected to our Google Business listing</p>
        </div>
      </section>

      <CTABar nav={nav}/>
    </>
  );
}

// ── NHS PAGE ──────────────────────────────────────────────────────
function NHSPage({nav}: {nav: (p: string) => void}) {
  const bands = [
    { band:"Band 1", price:"£27.90", color:COLORS.teal, desc:"Covers your initial examination, diagnosis, and preventive care. This is your routine check-up band.",
      includes:["Comprehensive dental examination","Diagnosis and treatment planning","X-rays (if clinically needed)","Scale and polish (if clinically needed)","Fluoride varnish application","Advice on preventing future problems"]
    },
    { band:"Band 2", price:"£76.60", color:"#4A7BA7", desc:"Covers everything in Band 1, plus any additional treatment such as fillings, root canal work, or extractions.",
      includes:["Everything included in Band 1","Fillings (amalgam or composite)","Root canal treatment","Tooth extractions","Fissure sealants","Gum disease treatment (non-surgical)","Any number of treatments within the same course"]
    },
    { band:"Band 3", price:"£332.10", color:COLORS.navy, desc:"Covers everything in Bands 1 and 2, plus more complex procedures that require laboratory work.",
      includes:["Everything included in Bands 1 and 2","Crowns (metal or porcelain)","Dentures (full or partial)","Bridges","Veneers (where clinically appropriate)","Mouthguards","Laboratory-fabricated appliances"]
    },
    { band:"Urgent", price:"£27.90", color:"#DC6B2F", desc:"For emergency treatment that cannot wait for a regular appointment. Covers care to relieve pain or prevent a condition from worsening.",
      includes:["Emergency examination","Pain relief treatment","Temporary fillings","Extraction if urgently required","Prescription for antibiotics or painkillers","Drainage of dental abscesses","Recementing a crown (emergency)"]
    },
  ];

  return (
    <>
      <section className="hero" style={{paddingBottom:48}}>
        <div className="container">
          <div className="section-label">NHS Dentistry</div>
          <h1 style={{fontFamily:"'Lora',serif",fontSize:"2.8rem",color:COLORS.navy,marginBottom:12}}>NHS dental care at <em style={{color:COLORS.teal,fontStyle:"italic"}}>AIQ Dental</em></h1>
          <p className="hero-text" style={{maxWidth:640}}>We are proud to offer NHS dental services alongside our private treatments. NHS dentistry provides high-quality, subsidised care through a simple banding system — you pay one charge per course of treatment, no matter how many appointments it takes to complete.</p>
        </div>
      </section>

      <section className="section" style={{paddingTop:0,paddingBottom:40}}>
        <div className="container">
          <div className="nhs-cta-card">
            <div>
              <h3>🟢 We are accepting new NHS patients</h3>
              <p>Registering is simple — call us or pop in and our reception team will get you booked in for your first appointment. No referral needed.</p>
            </div>
            <button className="btn btn-primary" onClick={()=>nav("contact")}>Register Now →</button>
          </div>
        </div>
      </section>

      <section className="section section-alt" style={{paddingTop:48}}>
        <div className="container">
          <div className="section-label">NHS Charges from April 2026</div>
          <div className="section-title">Understanding the band system</div>
          <div className="section-sub">NHS dental charges in England use a simple banding system. You only pay one charge per course of treatment, even if you need multiple appointments or procedures within that band.</div>
          <div className="band-grid">
            {bands.map((b,i)=>(
              <div key={i} className="band-card">
                <div className="band-header" style={{background:b.color}}>
                  <h3>{b.band}</h3>
                  <div className="band-price">{b.price}</div>
                </div>
                <div className="band-body">
                  <p>{b.desc}</p>
                  <ul className="band-includes">
                    {b.includes.map((item,j)=>(
                      <li key={j}><span className="band-check">✓</span>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div style={{background:"white",border:"1px solid #E9ECF0",borderRadius:14,padding:"24px 28px",marginTop:24}}>
            <p style={{fontSize:"0.9rem",color:COLORS.gray600,lineHeight:1.7}}>
              <strong style={{color:COLORS.navy}}>Important:</strong> You pay only once per course of treatment. If your dentist finds you need a filling during a Band 1 check-up, you pay the difference to upgrade to Band 2 — not both charges separately.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="nhs-info-grid">
            <div className="nhs-info-card">
              <h3>💛 Who qualifies for free NHS dental care?</h3>
              <p>Many patients are entitled to free NHS dental treatment. You qualify if you are:</p>
              <ul>
                <li>Under 18 years old (or under 19 and in full-time education)</li>
                <li>Pregnant or have had a baby in the past 12 months</li>
                <li>Receiving Income Support or income-based JSA</li>
                <li>Receiving Universal Credit (meeting the criteria)</li>
                <li>Receiving Pension Credit (Guarantee Credit)</li>
                <li>Receiving income-related Employment and Support Allowance</li>
                <li>Named on a valid NHS Tax Credit Exemption Certificate</li>
                <li>Named on a valid HC2 certificate (NHS Low Income Scheme)</li>
              </ul>
              <p style={{marginTop:14,fontSize:"0.85rem",fontStyle:"italic"}}>If you're unsure whether you qualify, ask our reception team — we're happy to help you check.</p>
            </div>

            <div className="nhs-info-card">
              <h3>⚠️ What's NOT covered on the NHS?</h3>
              <p style={{marginBottom:14}}>The NHS provides clinically necessary treatment to keep your mouth healthy. Some treatments are not routinely available:</p>
              <div className="not-covered-item"><span className="not-covered-x">✕</span><p><strong>Cosmetic treatments</strong> — Tooth whitening, purely cosmetic veneers, and smile makeovers are not available on the NHS.</p></div>
              <div className="not-covered-item"><span className="not-covered-x">✕</span><p><strong>Dental implants</strong> — Only available in rare cases involving severe medical conditions, cancer treatment, or significant facial trauma.</p></div>
              <div className="not-covered-item"><span className="not-covered-x">✕</span><p><strong>Adult orthodontics (braces)</strong> — Only available where there is a clinical need. Most adult teeth straightening is private.</p></div>
              <div className="not-covered-item"><span className="not-covered-x">✕</span><p><strong>Premium materials</strong> — The NHS provides the most clinically appropriate treatment. Private upgrades may be offered.</p></div>
              <div className="not-covered-item"><span className="not-covered-x">✕</span><p><strong>Purely cosmetic tooth-coloured fillings</strong> — White fillings on back teeth are only provided on the NHS when clinically appropriate.</p></div>
              <div className="not-covered-item"><span className="not-covered-x">✕</span><p><strong>Sedation for routine treatment</strong> — NHS sedation is available for complex surgical cases, but not generally for routine anxiety management.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="nhs-info-grid">
            <div className="nhs-info-card">
              <h3>🔄 The 2-Month Rule</h3>
              <p>If you complete a course of NHS treatment and need more work within two months, you may not have to pay again — provided the new treatment is in the same band or lower.</p>
            </div>
            <div className="nhs-info-card">
              <h3>🛡️ 12-Month Guarantee</h3>
              <p>If a crown, bridge, or denture fitted on the NHS fails within 12 months, your dentist should repair or replace it free of charge — as long as you return to the same practice.</p>
            </div>
            <div className="nhs-info-card">
              <h3>🤝 NHS & Private Together</h3>
              <p>At AIQ Dental, you can combine NHS and private care. For example, you might have your routine examinations and fillings on the NHS, while choosing private treatment for cosmetic work, implants, or orthodontics.</p>
            </div>
            <div className="nhs-info-card">
              <h3>📋 How to Register</h3>
              <p>Registering as an NHS patient at AIQ Dental is straightforward. Simply call us on 07930 327 445 or visit the practice in person. We'll book you in for a new patient examination (Band 1, £27.90).</p>
            </div>
          </div>
        </div>
      </section>

      <CTABar nav={nav}/>
    </>
  );
}

// ── MAIN APP ─────────────────────────────────────────────────────
export default function DentalApp() {
  const [page, setPage] = useState("home");
  const [teamModal, setTeamModal] = useState<TeamMember | null>(null);
  const [teamFilter, setTeamFilter] = useState("all");
  const topRef = useRef<HTMLDivElement>(null);

  const nav = (p: string) => { setPage(p); window.scrollTo({top:0,behavior:'instant' as ScrollBehavior}); };

  return (
    <div className="dental-app" ref={topRef}>
      {/* TOP BAR */}
      <div className="top-bar">
        <div className="top-bar-dot"/>
        <div className="top-bar-text">
          <strong>24/7 Phone Line</strong> — Call us anytime to book, reschedule, or ask a question
        </div>
      </div>

      {/* NAV */}
      <nav className="dental-nav">
        <div className="nav-inner">
          <div className="nav-logo" onClick={()=>nav("home")}>AIQ <span>Dental</span></div>
          <div className="nav-links">
            {navItems.map(n=>(
              <button key={n.id} className={`nav-link ${page===n.id||(page.startsWith("service-")&&n.id==="services")||(page.startsWith("blog-")&&n.id==="blog")?"active":""}`} onClick={()=>nav(n.id)}>{n.label}</button>
            ))}
            <button className="nav-cta" onClick={()=>nav("contact")}>Book Now</button>
          </div>
        </div>
      </nav>

      {/* PAGES */}
      <div className="page-transition" key={page}>
        {page==="home" && <HomePage nav={nav}/>}
        {page==="about" && <AboutPage nav={nav}/>}
        {page==="team" && <TeamPage nav={nav} filter={teamFilter} setFilter={setTeamFilter} setModal={setTeamModal}/>}
        {page==="services" && <ServicesPage nav={nav}/>}
        {page==="nhs" && <NHSPage nav={nav}/>}
        {page==="private" && <PrivatePage nav={nav}/>}
        {page==="fees" && <FeesPage nav={nav}/>}
        {page==="testimonials" && <TestimonialsPage nav={nav}/>}
        {page==="blog" && <BlogPage nav={nav}/>}
        {page==="contact" && <ContactPage/>}
        {SERVICES.map(s=> page===`service-${s.id}` ? <ServiceDetail key={s.id} service={s} nav={nav}/> : null)}
        {BLOG_POSTS.map(b=> page===`blog-${b.id}` ? <BlogArticle key={b.id} post={b} nav={nav}/> : null)}
      </div>

      {/* TEAM MODAL */}
      {teamModal && (
        <div className="modal-overlay" onClick={()=>setTeamModal(null)}>
          <div className="modal" onClick={e=>e.stopPropagation()}>
            <button className="modal-close" onClick={()=>setTeamModal(null)}>✕</button>
            <div className="modal-avatar" style={{background:roleColor(teamModal.role)}}>{teamModal.initials}</div>
            <h2>{teamModal.name}</h2>
            <div className="modal-role">{teamModal.role}</div>
            <p className="modal-bio">{teamModal.bio}</p>
            <div className="modal-spec-label">Specialisms</div>
            <div className="modal-specs">
              {teamModal.specialisms.split(", ").map((s,i)=><span key={i} className="spec-tag">{s}</span>)}
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="dental-footer">
        <div className="container">
          <p>© 2026 AIQ Dental · 109-111 Fulham Palace Road, London W6 8JA · 07930 327 445</p>
          <p style={{marginTop:6}}>Powered by <a href="#">Booked.</a></p>
        </div>
      </footer>

      {/* CALL WIDGET */}
      <CallWidget />
    </div>
  );
}
