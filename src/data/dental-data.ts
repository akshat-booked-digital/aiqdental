export const COLORS = {
  navy: "#1B2A4A",
  navyLight: "#243558",
  teal: "#2B8C96",
  tealLight: "#E6F4F6",
  tealDark: "#1F7A83",
  white: "#FFFFFF",
  offWhite: "#F8FAFB",
  gray50: "#F4F6F8",
  gray100: "#E9ECF0",
  gray200: "#D1D5DB",
  gray400: "#9CA3AF",
  gray600: "#6B7280",
  gray800: "#374151",
  text: "#1F2937",
  textLight: "#6B7280",
  accent: "#D4A84B",
  accentLight: "#FDF6E8",
};

export const PRACTICE = {
  name: "AIQ Dental",
  address: "109-111 Fulham Palace Road",
  city: "London",
  postcode: "W6 8JA",
  phone: "07930 327 445",
  email: "hello@aiqdental.co.uk",
  hours: { weekday: "9:00 AM – 5:00 PM", weekend: "Closed" },
};

export interface TeamMember {
  name: string;
  role: string;
  initials: string;
  bio: string;
  specialisms: string;
}

export const TEAM: TeamMember[] = [
  { name: "Callan Krause", role: "Dentist", initials: "CK", bio: "Callan graduated from King's College London in 2012 and has over a decade of experience in restorative and cosmetic dentistry. He has a particular interest in minimally invasive techniques and digital smile design. Outside the practice, Callan is an avid cyclist and volunteers at community dental outreach programmes.", specialisms: "Cosmetic Dentistry, Smile Makeovers, Composite Bonding" },
  { name: "Roy Clay", role: "Dentist", initials: "RC", bio: "Roy brings 15 years of general dental experience, having worked across both NHS and private settings. He is known for his calm, methodical approach and is particularly skilled with anxious patients. Roy completed advanced training in implantology at the Eastman Dental Institute.", specialisms: "Implant Dentistry, Nervous Patients, Oral Surgery" },
  { name: "Giovanni Bradshaw", role: "Dentist", initials: "GB", bio: "Giovanni trained at the University of Bristol and spent three years working in hospital maxillofacial units before joining AIQ Dental. He leads our oral surgery services and has a passion for complex extraction cases. Giovanni speaks fluent Italian and Portuguese.", specialisms: "Oral Surgery, Wisdom Teeth, Complex Extractions" },
  { name: "Hajra Castaneda", role: "Dentist", initials: "HC", bio: "Hajra is our orthodontic lead, having completed her postgraduate diploma in orthodontics at the Royal College of Surgeons. She is certified in both Invisalign and fixed brace systems and takes pride in creating beautiful, functional smiles for patients of all ages.", specialisms: "Orthodontics, Invisalign, Fixed Braces" },
  { name: "Jack Harvey", role: "Dentist", initials: "JH", bio: "Jack joined AIQ Dental after five years in a busy central London practice. He has completed extensive postgraduate training in endodontics and is our root canal specialist. Jack is passionate about saving teeth that others might consider extracting.", specialisms: "Endodontics, Root Canal, Restorative Dentistry" },
  { name: "Miriam Strickland", role: "Hygienist", initials: "MS", bio: "Miriam graduated from the University of Portsmouth with a diploma in dental hygiene and has been practicing for over eight years. She is known for her gentle technique and thorough approach to periodontal health. Miriam runs our gum disease prevention programme.", specialisms: "Periodontal Treatment, Airflow Polishing, Patient Education" },
  { name: "Joe Odonnell", role: "Hygienist", initials: "JO", bio: "Joe is a dual-qualified dental hygienist and therapist with a passion for preventive care. He spent two years working in a specialist periodontal practice before joining our team. Joe takes a holistic approach and works closely with patients on long-term oral health plans.", specialisms: "Deep Cleaning, Gum Health, Preventive Care" },
  { name: "Marc Clements", role: "Hygienist", initials: "MC", bio: "Marc has been with AIQ Dental since its founding. With over twelve years of experience, he is our most senior hygienist and mentors junior team members. Marc has a special interest in managing patients with complex medical histories.", specialisms: "Complex Medical Cases, Scaling & Polish, Oral Health Plans" },
  { name: "Esha Moon", role: "Hygienist", initials: "EM", bio: "Esha qualified from the University of Birmingham and brings a warm, reassuring approach that makes even the most anxious patients feel at ease. She is trained in advanced periodontal therapies and is our go-to clinician for sensitive teeth management.", specialisms: "Sensitive Teeth, Anxious Patients, Periodontal Therapy" },
  { name: "Hafsa Schneider", role: "Hygienist", initials: "HS", bio: "Hafsa completed her training at the Eastman Dental Hospital and has a strong background in paediatric oral health. She runs our children's hygiene programme and is passionate about establishing good habits from a young age.", specialisms: "Children's Dentistry, Fluoride Treatments, Early Prevention" },
  { name: "Ioan Willis", role: "Therapist", initials: "IW", bio: "Ioan graduated from Cardiff University and has built a reputation for his exceptional chairside manner. He handles a wide range of restorative treatments and is particularly skilled with composite fillings and fissure sealants for younger patients.", specialisms: "Composite Fillings, Children's Treatment, Fissure Sealants" },
  { name: "Nate Bird", role: "Therapist", initials: "NB", bio: "Nate has seven years of experience working across mixed NHS and private practices. He is passionate about making dental care accessible and takes time to explain every procedure to patients. Nate completed additional training in paediatric dentistry.", specialisms: "Paediatric Dentistry, Fillings, Patient Communication" },
  { name: "Humaira Sosa", role: "Therapist", initials: "HS", bio: "Humaira trained at the University of Leeds and joined AIQ Dental to focus on preventive and minimally invasive treatments. She has a calming presence that makes her especially popular with nervous patients and children.", specialisms: "Nervous Patients, Preventive Treatment, Minimally Invasive Care" },
  { name: "Beatriz Greene", role: "Therapist", initials: "BG", bio: "Beatriz brings international experience, having practiced in both Portugal and the UK. She is fluent in Portuguese and English and specialises in restorative therapy. Beatriz is currently pursuing further qualifications in dental photography.", specialisms: "Restorative Therapy, Multilingual Care, Dental Photography" },
  { name: "Priya Griffin", role: "Therapist", initials: "PG", bio: "Priya is our newest therapist, bringing fresh perspectives from her recent training at the University of Manchester. She has a particular interest in digital dentistry and has already implemented improved patient communication workflows within the team.", specialisms: "Digital Dentistry, Patient Workflows, Modern Techniques" },
];

export interface ServiceSection {
  title: string;
  text: string;
}

export interface Service {
  id: string;
  title: string;
  icon: string;
  color: string;
  tagline: string;
  shortDesc: string;
  heroDesc: string;
  sections: ServiceSection[];
  treatments: string[];
}

export const SERVICES: Service[] = [
  { id: "general", title: "General Dentistry", icon: "🦷", color: COLORS.teal, tagline: "The foundation of your oral health", shortDesc: "Examinations, fillings, crowns, bridges, and extractions delivered by our experienced dentists.",
    heroDesc: "General dentistry forms the cornerstone of everything we do at AIQ Dental. Our team of five experienced dentists provides comprehensive care — from your very first examination through to complex restorative work. We believe that prevention is always better than cure, which is why every visit starts with a thorough assessment of your oral health.",
    sections: [
      { title: "What's Included", text: "Our general dentistry services cover new patient examinations, routine check-ups, digital X-rays, fillings (composite and amalgam), crown and bridge work, porcelain veneers, tooth extractions, and emergency dental care. We use the latest digital imaging technology to diagnose issues early and plan treatments with precision." },
      { title: "Who Is It For", text: "Everyone. Whether you're registering with a dentist for the first time, maintaining regular six-monthly check-ups, or dealing with a sudden toothache, our general dentistry team is your first port of call. We see patients of all ages, from young children to elderly patients with complex dental histories." },
      { title: "Our Approach", text: "We take a conservative, minimally invasive approach wherever possible. Modern materials and techniques mean we can often repair teeth with tooth-coloured composites that are virtually invisible. For more extensive work, we offer porcelain crowns and bridges crafted by leading UK dental laboratories." },
      { title: "Nervous Patients", text: "We understand that visiting the dentist can be daunting. Our dentists are trained in anxiety management techniques and will always explain what they're doing at every stage. We offer longer appointments for anxious patients so you never feel rushed, and sedation options are available for more complex procedures." },
    ],
    treatments: ["New Patient Examination", "Periodic Examination", "Composite Filling", "Amalgam Filling", "Porcelain Crown", "Emax Crown", "Zirconia Crown", "Extraction", "Surgical Extraction", "Emergency Assessment", "Digital X-Rays", "Temporary Filling"]
  },
  { id: "hygiene", title: "Hygiene & Prevention", icon: "✨", color: "#4A7BA7", tagline: "Protecting your smile for the long term", shortDesc: "Professional cleaning, periodontal care, and tailored hygiene plans from our dedicated hygienists.",
    heroDesc: "Prevention is the most important investment you can make in your oral health. Our team of five qualified dental hygienists provides professional cleaning, gum disease treatment, and personalised oral hygiene programmes designed to keep your teeth and gums healthy for life.",
    sections: [
      { title: "Why Hygiene Matters", text: "Even with the best brushing and flossing routine, plaque and tartar build up in areas that are difficult to reach at home. Left untreated, this leads to gum disease — the leading cause of tooth loss in adults. Regular hygiene visits remove these deposits and allow us to monitor your gum health over time." },
      { title: "What to Expect", text: "A typical hygiene appointment lasts between 20 and 45 minutes depending on your needs. Your hygienist will scale away tartar deposits, polish your teeth to remove surface staining, and apply fluoride varnish if appropriate. You'll also receive tailored advice on brushing technique, interdental cleaning, and any products that might benefit you." },
      { title: "Periodontal Treatment", text: "For patients with gum disease, we offer deep cleaning (root surface debridement), subgingival irrigation, and ongoing periodontal maintenance programmes. Our hygienists work closely with our dentists to manage even complex periodontal cases, and we monitor your progress with detailed charting at every visit." },
      { title: "Airflow & Advanced Cleaning", text: "We use the latest EMS Airflow technology for a thorough yet gentle clean. This uses a fine powder and warm water jet to remove biofilm, staining, and soft deposits without the discomfort of traditional scaling instruments. It's particularly effective for patients with implants, braces, or sensitive teeth." },
    ],
    treatments: ["Scale & Polish", "Deep Cleaning", "Periodontal Maintenance", "Fluoride Varnish", "Air Polish", "Root Surface Debridement", "Gum Health Assessment", "Oral Hygiene Plan"]
  },
  { id: "therapy", title: "Dental Therapy", icon: "🔧", color: COLORS.accent, tagline: "Skilled, gentle restorative care", shortDesc: "Fillings, sealants, and preventive treatments from our qualified dental therapists.",
    heroDesc: "Our five dental therapists provide a wide range of treatments that complement our dentists' work. From routine fillings to fissure sealants and paediatric care, therapists are an integral part of our team — often with shorter waiting times and longer appointment slots for a more relaxed experience.",
    sections: [
      { title: "What Therapists Do", text: "Dental therapists are dually qualified in both dental hygiene and dental therapy. They can carry out many treatments that were traditionally only performed by dentists, including fillings, extractions of baby teeth, pulp therapy, and placement of preformed crowns. This means faster access to treatment for our patients." },
      { title: "Children's Dentistry", text: "Our therapists are particularly experienced with younger patients. They provide fissure sealants to protect children's back teeth from decay, fluoride varnish applications, and gentle fillings using the latest tooth-coloured materials. We create a fun, relaxed environment that helps children feel comfortable and builds positive associations with dental visits." },
      { title: "Preventive Focus", text: "Therapists spend more time per appointment than a typical dentist visit, allowing for thorough preventive care and patient education. They'll take time to show you exactly how to brush and floss effectively, discuss dietary factors affecting your teeth, and create a personalised plan to reduce your risk of future dental problems." },
      { title: "Working With Your Dentist", text: "Our therapists work under the prescription of our dental team, ensuring seamless continuity of care. After your dentist creates your treatment plan, your therapist can carry out many of the procedures — often with shorter wait times and a more relaxed pace. It's collaborative care at its best." },
    ],
    treatments: ["Composite Fillings", "Fissure Sealants", "Fluoride Applications", "Pulp Therapy", "Baby Tooth Extractions", "Preventive Resin Restorations", "Diet Advice", "Oral Health Education"]
  },
  { id: "implants", title: "Dental Implants", icon: "🏗️", color: "#2D7D46", tagline: "Permanent solutions for missing teeth", shortDesc: "Single implants, bridges, and full-arch restorations to rebuild your smile with confidence.",
    heroDesc: "Missing teeth affect more than just your appearance — they impact your ability to eat, speak, and smile with confidence. Dental implants are the gold standard for replacing missing teeth, providing a permanent, natural-looking solution that can last a lifetime with proper care.",
    sections: [
      { title: "What Are Dental Implants", text: "A dental implant is a small titanium post that is surgically placed into your jawbone, where it acts as an artificial tooth root. Once healed, a custom-made crown, bridge, or denture is attached to the implant, creating a restoration that looks, feels, and functions like a natural tooth. Titanium is biocompatible, meaning your bone grows around it to create an incredibly strong foundation." },
      { title: "Who Can Have Implants", text: "Most adults with good general health are suitable candidates for dental implants. During your consultation, we'll take 3D CBCT scans to assess your bone density and plan the precise placement of each implant. If your bone has receded, we can often build it back up with bone grafting or sinus lift procedures before placing the implant." },
      { title: "The Treatment Process", text: "Implant treatment typically takes 3-6 months from start to finish. After the initial placement, a healing period of 8-16 weeks allows the implant to integrate with your jawbone. During this time, you'll wear a temporary restoration so you're never without teeth. Once healed, your final crown is fitted — crafted from premium ceramics to match your natural teeth perfectly." },
      { title: "Full Arch Solutions", text: "For patients missing all their teeth, we offer implant-retained dentures and full-arch bridges. These can often be supported by as few as four implants per arch, providing a fixed, permanent set of teeth that eliminates the need for removable dentures. The transformation in quality of life is remarkable." },
    ],
    treatments: ["Implant Placement", "Implant Crown", "Implant Bridge", "Implant Denture", "Bone Grafting", "Sinus Lift", "Implant Assessment", "Implant Review"]
  },
  { id: "orthodontics", title: "Orthodontics", icon: "😁", color: "#8B5CF6", tagline: "Straighter teeth, confident smiles", shortDesc: "Fixed braces, Invisalign, and removable appliances for children and adults.",
    heroDesc: "A straighter smile isn't just about aesthetics — properly aligned teeth are easier to clean, less prone to wear, and can resolve jaw pain and bite issues. At AIQ Dental, we offer the full spectrum of orthodontic treatments for patients of all ages, from traditional fixed braces to virtually invisible aligners.",
    sections: [
      { title: "Invisalign Clear Aligners", text: "Invisalign uses a series of custom-made, virtually invisible aligners to gradually straighten your teeth. Each aligner is worn for 1-2 weeks before moving to the next in the series. Most adults can achieve their ideal smile in 6-18 months. The aligners are removable, so you can eat, drink, and clean your teeth as normal — making them a popular choice for busy professionals." },
      { title: "Fixed Braces", text: "For more complex cases, traditional fixed braces remain the most effective option. We offer both metal and ceramic (tooth-coloured) brackets that work around the clock to move your teeth into their ideal position. Modern brackets are smaller and more comfortable than ever, and treatment times are typically 12-24 months." },
      { title: "Children's Orthodontics", text: "We recommend children have an orthodontic assessment around age 7-8, when a mix of baby and adult teeth allows us to identify potential issues early. Early intervention can guide jaw growth, create space for adult teeth, and sometimes avoid the need for more complex treatment later on." },
      { title: "Retention", text: "Keeping your teeth straight after treatment is just as important as the treatment itself. We fit bonded retainers — a thin wire behind your front teeth that holds them in place permanently — and provide removable retainers for nighttime wear. Regular reviews ensure your results last a lifetime." },
    ],
    treatments: ["Invisalign Full", "Invisalign Lite", "Fixed Braces Upper", "Fixed Braces Lower", "Ceramic Brackets", "Removable Appliance", "Retainers", "Orthodontic Review"]
  },
  { id: "diagnostics", title: "Diagnostics & Imaging", icon: "🔬", color: "#DC6B2F", tagline: "Seeing the full picture", shortDesc: "Digital X-rays, CBCT scans, and advanced diagnostics for precise treatment planning.",
    heroDesc: "Accurate diagnosis is the foundation of effective treatment. At AIQ Dental, we invest in the latest digital imaging technology to detect problems early, plan treatments with precision, and show you exactly what's happening inside your mouth. Better diagnostics mean fewer surprises and better outcomes.",
    sections: [
      { title: "Digital X-Rays", text: "Our digital X-ray systems produce high-resolution images at a fraction of the radiation dose of traditional film X-rays. Bitewing radiographs detect decay between teeth, periapical X-rays show the roots and surrounding bone, and full-mouth series provide a comprehensive overview for new patients or complex cases." },
      { title: "CBCT 3D Scanning", text: "Our Cone Beam CT scanner produces detailed 3D images of your teeth, jawbone, nerves, and sinuses. This technology is essential for implant planning, wisdom tooth assessments, and complex surgical cases. The scan takes just 15 seconds and provides information that traditional X-rays simply cannot." },
      { title: "Intraoral Photography", text: "We use high-definition intraoral cameras to photograph individual teeth and areas of concern. These images are displayed on a screen beside you so you can see exactly what your dentist sees — helping you understand your treatment options and make informed decisions about your care." },
      { title: "Oral Cancer Screening", text: "Every examination at AIQ Dental includes a thorough soft tissue check for any signs of oral cancer. Early detection dramatically improves outcomes, which is why we take this screening seriously at every appointment. If we find anything unusual, we have established referral pathways to specialist oral medicine consultants." },
    ],
    treatments: ["Digital X-Rays", "OPG Panoramic", "CBCT Scan", "Intraoral Photos", "Oral Cancer Screening", "Cephalometric Analysis", "Study Models", "CAD/CAM Scanning"]
  },
];

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  category: string;
  readTime: string;
  excerpt: string;
  content: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  { id: "nervous-patients", title: "How We Help Nervous Patients Feel at Ease", date: "28 March 2026", category: "Patient Care", readTime: "5 min read",
    excerpt: "Dental anxiety affects up to 36% of the UK population. At AIQ Dental, we've developed a comprehensive approach to making every patient feel comfortable and in control.",
    content: [
      "Dental phobia is one of the most common fears in the UK, and we want you to know that you are absolutely not alone. Studies suggest that up to 36% of the population experiences some level of dental anxiety, with around 12% suffering from extreme dental phobia that prevents them from seeking treatment entirely.",
      "At AIQ Dental, every member of our team — from our receptionists to our clinicians — is trained in anxiety management. We understand that fear often stems from past negative experiences, loss of control, or simply the unfamiliar sounds and sensations of dental treatment.",
      "Our approach starts before you even sit in the chair. When you book your first appointment, we'll ask about any concerns so we can prepare accordingly. We offer early morning and late afternoon appointments when the practice is quieter, longer appointment slots so you never feel rushed, and a calm, modern environment designed to feel more like a wellness clinic than a clinical setting.",
      "During treatment, our clinicians use a 'stop signal' system — raise your hand at any time and we'll immediately pause. We explain every step before we do it, use gentle techniques, and offer noise-cancelling headphones if the sounds of treatment bother you. For patients who need additional support, we offer conscious sedation with our trained sedation practitioners.",
      "Many of our most loyal patients today started as severely phobic patients. It's one of the most rewarding parts of our work — helping someone go from avoiding the dentist for years to attending happily every six months. If you've been putting off dental care, we'd love to help you take that first step."
    ]
  },
  { id: "invisalign-guide", title: "Invisalign: Everything You Need to Know Before Starting", date: "22 March 2026", category: "Orthodontics", readTime: "7 min read",
    excerpt: "Thinking about straightening your teeth with clear aligners? Here's our comprehensive guide to what Invisalign involves, how long it takes, and what results you can expect.",
    content: [
      "Invisalign has transformed orthodontics for adults and teens who want straighter teeth without the look of traditional metal braces. Using a series of custom-made, virtually invisible plastic aligners, Invisalign gradually moves your teeth into their ideal position over a period of months.",
      "The process begins with a digital scan of your teeth — no messy impressions needed. Our orthodontic team uses this scan to create a 3D treatment plan that shows exactly how your teeth will move at each stage, and what your final result will look like. You'll see the end result before you even start treatment.",
      "Each set of aligners is worn for 1-2 weeks, 22 hours per day, before moving to the next set. You remove them to eat, drink anything other than water, and to brush your teeth. Most adults complete treatment in 6-18 months depending on complexity, with check-ups every 6-8 weeks to monitor progress.",
      "One of the biggest advantages of Invisalign is the minimal lifestyle impact. The aligners are virtually invisible — most people won't notice you're wearing them. There are no dietary restrictions since you remove them to eat, and oral hygiene is straightforward since you brush and floss as normal.",
      "At AIQ Dental, our orthodontic lead Hajra Castaneda is a certified Invisalign provider with extensive experience in clear aligner therapy. During your free consultation, she'll assess whether Invisalign is the right option for you and outline the expected treatment timeline and cost.",
      "After treatment, retention is crucial. We fit a thin bonded wire retainer behind your front teeth and provide a set of removable night retainers to ensure your beautiful new smile stays in place for years to come."
    ]
  },
  { id: "gum-disease", title: "The Silent Threat: Understanding Gum Disease", date: "15 March 2026", category: "Hygiene", readTime: "6 min read",
    excerpt: "Gum disease affects over half of UK adults, yet many don't realise they have it. Learn the warning signs, risk factors, and how professional treatment can save your teeth.",
    content: [
      "Gum disease — known clinically as periodontal disease — is the single biggest cause of tooth loss in adults in the UK. What makes it particularly dangerous is that it often progresses painlessly, meaning many people don't realise they have it until significant damage has already occurred.",
      "The earliest stage, gingivitis, causes red, swollen gums that may bleed when you brush. At this stage, the condition is entirely reversible with professional cleaning and improved home care. However, if left untreated, gingivitis can progress to periodontitis, where the bone supporting your teeth begins to break down irreversibly.",
      "Several factors increase your risk of gum disease. Smoking is the single biggest risk factor, reducing blood flow to the gums and impairing healing. Diabetes, stress, certain medications, and genetic factors also play a role. Poor oral hygiene is the primary cause, as bacterial plaque accumulates along and below the gumline.",
      "At AIQ Dental, our hygiene team provides comprehensive periodontal assessment and treatment. We use detailed charting to measure the depth of the pockets around each tooth, track changes over time, and tailor treatment accordingly. Deep cleaning, root surface debridement, and ongoing maintenance programmes can stabilise even advanced cases.",
      "The connection between gum disease and general health is increasingly well-established. Research links periodontal disease to increased risk of heart disease, stroke, diabetes complications, and adverse pregnancy outcomes. Looking after your gums isn't just about keeping your teeth — it's about protecting your overall health.",
      "If you notice bleeding gums, persistent bad breath, or teeth that feel loose, please don't ignore these warning signs. Book a hygiene assessment with our team and let us help you get your gum health back on track."
    ]
  },
  { id: "first-visit", title: "What to Expect at Your First Visit to AIQ Dental", date: "8 March 2026", category: "New Patients", readTime: "4 min read",
    excerpt: "Joining a new dental practice can feel daunting. Here's a step-by-step guide to what happens at your first appointment with us.",
    content: [
      "We know that visiting a new dental practice for the first time can be nerve-wracking, especially if it's been a while since your last check-up. We want you to know that there's absolutely no judgement here — only a genuine desire to help you achieve and maintain great oral health.",
      "Your first appointment will typically last around 45-60 minutes. You'll be greeted by our reception team who'll help you complete a brief medical history form. This is important because certain medical conditions and medications can affect your dental treatment, and we want to ensure everything we do is safe for you.",
      "Your dentist will then carry out a comprehensive examination. This includes checking every tooth for decay, assessing your gum health, examining the soft tissues of your mouth for any abnormalities, and reviewing your bite and jaw function. We'll take any X-rays necessary to see what's happening below the surface.",
      "After the examination, your dentist will sit down with you and explain their findings clearly, using intraoral photographs and X-ray images so you can see exactly what they're describing. If any treatment is needed, they'll outline all your options — including doing nothing — along with the benefits, risks, and costs of each approach.",
      "There's never any pressure to proceed with treatment on the day. We want you to take your findings home, think about your options, and make decisions that feel right for you. Our treatment coordinators are always available to answer questions and help you plan your care at a pace that suits you."
    ]
  },
  { id: "dental-implants-myths", title: "5 Common Myths About Dental Implants — Debunked", date: "1 March 2026", category: "Implants", readTime: "5 min read",
    excerpt: "Dental implants have a 98% success rate, yet misconceptions still prevent many patients from considering them. Let's separate fact from fiction.",
    content: [
      "Dental implants have been used successfully for over 40 years, and with modern techniques, they boast success rates above 98%. Yet we still encounter patients who've been put off by myths and misconceptions. Let's address the most common ones.",
      "Myth 1: Implants are painful. The reality is that most patients report less discomfort from implant placement than from a tooth extraction. The procedure is carried out under local anaesthetic, and sedation is available for anxious patients. Post-operative discomfort is typically managed with over-the-counter painkillers for a few days.",
      "Myth 2: I'm too old for implants. Age alone is not a barrier to implant treatment. We've successfully placed implants in patients in their 80s. What matters is your general health and the quality of your jawbone — both of which we assess thoroughly during your consultation.",
      "Myth 3: Implants take forever. While the full process does take 3-6 months due to the healing period, you're never without teeth. We provide temporary restorations during the integration phase, and the actual surgical appointment typically takes under an hour per implant.",
      "Myth 4: Implants are obvious. Modern implant crowns are custom-made from premium ceramics that are colour-matched to your natural teeth. They're designed to be completely indistinguishable from your own teeth. Even other dentists often can't tell the difference.",
      "Myth 5: Implants need special maintenance. Once healed, implants are maintained just like natural teeth — with regular brushing, flossing, and professional cleaning. They can't get cavities, and with proper care, they can last a lifetime. We do recommend slightly more frequent hygiene visits (every 4 months) to keep the gum tissue around implants healthy."
    ]
  },
];

export const roleColor = (role: string) =>
  role === "Dentist"
    ? `linear-gradient(135deg,${COLORS.teal},${COLORS.tealDark})`
    : role === "Hygienist"
    ? "linear-gradient(135deg,#4A6FA7,#3A5F97)"
    : `linear-gradient(135deg,${COLORS.accent},#B4922B)`;

export const today = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][new Date().getDay()];
