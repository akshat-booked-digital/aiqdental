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
  name: "Amazing Smiles",
  address: "109-111 Fulham Palace Road",
  city: "London",
  postcode: "W6 8JA",
  phone: "07930 327 445",
  email: "hello@amazingsmiles.co.uk",
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
  { name: "Giovanni Bradshaw", role: "Dentist", initials: "GB", bio: "Giovanni trained at the University of Bristol and spent three years working in hospital maxillofacial units before joining Amazing Smiles. He leads our oral surgery services and has a passion for complex extraction cases. Giovanni speaks fluent Italian and Portuguese.", specialisms: "Oral Surgery, Wisdom Teeth, Complex Extractions" },
  { name: "Hajra Castaneda", role: "Dentist", initials: "HC", bio: "Hajra is our orthodontic lead, having completed her postgraduate diploma in orthodontics at the Royal College of Surgeons. She is certified in both Invisalign and fixed brace systems and takes pride in creating beautiful, functional smiles for patients of all ages.", specialisms: "Orthodontics, Invisalign, Fixed Braces" },
  { name: "Jack Harvey", role: "Dentist", initials: "JH", bio: "Jack joined Amazing Smiles after five years in a busy central London practice. He has completed extensive postgraduate training in endodontics and is our root canal specialist. Jack is passionate about saving teeth that others might consider extracting.", specialisms: "Endodontics, Root Canal, Restorative Dentistry" },
  { name: "Miriam Strickland", role: "Hygienist", initials: "MS", bio: "Miriam graduated from the University of Portsmouth with a diploma in dental hygiene and has been practicing for over eight years. She is known for her gentle technique and thorough approach to periodontal health. Miriam runs our gum disease prevention programme.", specialisms: "Periodontal Treatment, Airflow Polishing, Patient Education" },
  { name: "Joe Odonnell", role: "Hygienist", initials: "JO", bio: "Joe is a dual-qualified dental hygienist and therapist with a passion for preventive care. He spent two years working in a specialist periodontal practice before joining our team. Joe takes a holistic approach and works closely with patients on long-term oral health plans.", specialisms: "Deep Cleaning, Gum Health, Preventive Care" },
  { name: "Marc Clements", role: "Hygienist", initials: "MC", bio: "Marc has been with Amazing Smiles since its founding. With over twelve years of experience, he is our most senior hygienist and mentors junior team members. Marc has a special interest in managing patients with complex medical histories.", specialisms: "Complex Medical Cases, Scaling & Polish, Oral Health Plans" },
  { name: "Esha Moon", role: "Hygienist", initials: "EM", bio: "Esha qualified from the University of Birmingham and brings a warm, reassuring approach that makes even the most anxious patients feel at ease. She is trained in advanced periodontal therapies and is our go-to clinician for sensitive teeth management.", specialisms: "Sensitive Teeth, Anxious Patients, Periodontal Therapy" },
  { name: "Hafsa Schneider", role: "Hygienist", initials: "HS", bio: "Hafsa completed her training at the Eastman Dental Hospital and has a strong background in paediatric oral health. She runs our children's hygiene programme and is passionate about establishing good habits from a young age.", specialisms: "Children's Dentistry, Fluoride Treatments, Early Prevention" },
  { name: "Ioan Willis", role: "Therapist", initials: "IW", bio: "Ioan graduated from Cardiff University and has built a reputation for his exceptional chairside manner. He handles a wide range of restorative treatments and is particularly skilled with composite fillings and fissure sealants for younger patients.", specialisms: "Composite Fillings, Children's Treatment, Fissure Sealants" },
  { name: "Nate Bird", role: "Therapist", initials: "NB", bio: "Nate has seven years of experience working across mixed NHS and private practices. He is passionate about making dental care accessible and takes time to explain every procedure to patients. Nate completed additional training in paediatric dentistry.", specialisms: "Paediatric Dentistry, Fillings, Patient Communication" },
  { name: "Humaira Sosa", role: "Therapist", initials: "HS", bio: "Humaira trained at the University of Leeds and joined Amazing Smiles to focus on preventive and minimally invasive treatments. She has a calming presence that makes her especially popular with nervous patients and children.", specialisms: "Nervous Patients, Preventive Treatment, Minimally Invasive Care" },
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
    heroDesc: "General dentistry forms the cornerstone of everything we do at Amazing Smiles. Our team of five experienced dentists provides comprehensive care — from your very first examination through to complex restorative work. We believe that prevention is always better than cure, which is why every visit starts with a thorough assessment of your oral health.",
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
    heroDesc: "A straighter smile isn't just about aesthetics — properly aligned teeth are easier to clean, less prone to wear, and can resolve jaw pain and bite issues. At Amazing Smiles, we offer the full spectrum of orthodontic treatments for patients of all ages, from traditional fixed braces to virtually invisible aligners.",
    sections: [
      { title: "Invisalign Clear Aligners", text: "Invisalign uses a series of custom-made, virtually invisible aligners to gradually straighten your teeth. Each aligner is worn for 1-2 weeks before moving to the next in the series. Most adults can achieve their ideal smile in 6-18 months. The aligners are removable, so you can eat, drink, and clean your teeth as normal — making them a popular choice for busy professionals." },
      { title: "Fixed Braces", text: "For more complex cases, traditional fixed braces remain the most effective option. We offer both metal and ceramic (tooth-coloured) brackets that work around the clock to move your teeth into their ideal position. Modern brackets are smaller and more comfortable than ever, and treatment times are typically 12-24 months." },
      { title: "Children's Orthodontics", text: "We recommend children have an orthodontic assessment around age 7-8, when a mix of baby and adult teeth allows us to identify potential issues early. Early intervention can guide jaw growth, create space for adult teeth, and sometimes avoid the need for more complex treatment later on." },
      { title: "Retention", text: "Keeping your teeth straight after treatment is just as important as the treatment itself. We fit bonded retainers — a thin wire behind your front teeth that holds them in place permanently — and provide removable retainers for nighttime wear. Regular reviews ensure your results last a lifetime." },
    ],
    treatments: ["Invisalign Full", "Invisalign Lite", "Fixed Braces Upper", "Fixed Braces Lower", "Ceramic Brackets", "Removable Appliance", "Retainers", "Orthodontic Review"]
  },
  { id: "diagnostics", title: "Diagnostics & Imaging", icon: "🔬", color: "#DC6B2F", tagline: "Seeing the full picture", shortDesc: "Digital X-rays, CBCT scans, and advanced diagnostics for precise treatment planning.",
    heroDesc: "Accurate diagnosis is the foundation of effective treatment. At Amazing Smiles, we invest in the latest digital imaging technology to detect problems early, plan treatments with precision, and show you exactly what's happening inside your mouth. Better diagnostics mean fewer surprises and better outcomes.",
    sections: [
      { title: "CBCT Scanning", text: "Our state-of-the-art CBCT (Cone Beam Computed Tomography) scanner takes high-resolution 3D images of your teeth, jaw, and surrounding structures. This allows us to assess bone density, locate nerves, and plan implant placements with millimetre precision. The results are available immediately, and radiation exposure is minimal — the lowest in the industry." },
      { title: "Digital X-Rays", text: "We use digital radiography rather than traditional film, which means up to 90% less radiation exposure for you. Digital X-rays appear instantly on screen, allowing us to zoom, enhance, and share images with specialists if needed. They also provide better resolution, helping us spot tiny cavities and bone changes before they become serious." },
      { title: "Intraoral Scanning", text: "Gone are the days of messy dental impressions. Our digital intraoral scanner captures a detailed 3D model of your entire mouth in minutes. This creates a perfect replica that we use for treatment planning, custom appliance design, and monitoring changes over time. It also helps you understand your treatment by showing you exactly what we see." },
      { title: "Oral Cancer Screening", text: "Every examination includes a thorough visual check for signs of oral cancer — it's one of the reasons regular dental visits are so important. We use advanced diagnostic lighting that enhances tissue appearance and helps detect abnormalities at the earliest possible stage. Early detection saves lives." },
    ],
    treatments: ["CBCT Scan", "Panoramic X-Ray", "Bitewing X-Ray", "Intraoral Scan", "Photography Exam", "Oral Cancer Screening", "3D Treatment Planning", "Diagnostic Report"]
  },
];

export const TESTIMONIELS = [
  { name: "Sarah M.", treatment: "Invisalign", rating: 5, text: "I was nervous about braces at my age, but Invisalign was so easy. The team explained everything clearly and I love my new smile!" },
  { name: "James K.", treatment: "Implants", rating: 5, text: "I lost a front tooth in an accident and thought I'd never smile confidently again. The implant looks identical to my other teeth — nobody can tell the difference." },
  { name: "Priya T.", treatment: "Hygienist", rating: 5, text: "I've always been embarrassed about my gums. After seeing Miriam for deep cleaning, they've never looked or felt better. She's so gentle and thorough." },
  { name: "David L.", treatment: "General Dentistry", rating: 5, text: "Finally found a dentist who listens. Callan didn't rush me and explained all my options. The filling was painless and you can't even see it." },
  { name: "Emma W.", treatment: "Children's Dentistry", rating: 5, text: "My kids used to cry at the dentist, but they actually look forward to coming here now. Joe makes it fun and they're learning to look after their teeth properly." },
];

export const NAV_LINKS = [
  { name: "Services", href: "#services" },
  { name: "Team", href: "#team" },
  { name: "Why Choose Us", href: "#why" },
  { name: "Contact", href: "#contact" },
];

export const FAQS = [
  { q: "Do you accept NHS patients?", a: "Yes, we accept NHS patients for all standard treatments. Contact us to register or book an appointment." },
  { q: "What are your opening hours?", a: "We're open Monday to Friday, 9:00 AM to 5:00 PM. We close on weekends, but emergency appointments are available through our out-of-hours service." },
  { q: "How do I book an appointment?", a: "You can call us directly, send an email, or use the callback widget in the bottom right corner of this page." },
  { q: "Do you offer payment plans?", a: "Yes, we offer interest-free payment plans for treatments over £500. Speak to our reception team for details." },
  { q: "Is parking available nearby?", a: "There is limited street parking on Fulham Palace Road. The nearest public car park is a 5-minute walk away." },
  { q: "What should I do in a dental emergency?", a: "Call our main number immediately. We reserve slots daily for emergencies. Outside hours, you'll be directed to our on-call dentist." },
];

// Blog posts for site content
export interface BlogPost {
  id: string;
  category: string;
  title: string;
  excerpt: string;
}

export const BLOG_POSTS: BlogPost[] = [
  { id: "prevention", category: "Prevention", title: "How to avoid tooth decay", excerpt: "Simple daily habits that can save you from costly dental treatments." },
  { id: "invisalign", category: "Orthodontics", title: "Is Invisalign right for you?", excerpt: "Everything you need to know before starting clear aligner treatment." },
  { id: "anxiety", category: "Patient Care", title: "Overcoming dental anxiety", excerpt: "Tips and techniques for a stress-free visit to the dentist." },
  { id: "whitening", category: "Cosmetic", title: "Professional vs at-home whitening", excerpt: "Understanding the difference between options for a brighter smile." },
  { id: "implants", category: "Implants", title: "The dental implant journey", excerpt: "What to expect from consultation to final crown placement." },
  { id: "children", category: "Paediatric", title: "Your child's first dental visit", excerpt: "How to prepare your little one for a positive experience." },
];

// Utility function for role colors
export function roleColor(role: string): string {
  switch (role) {
    case "Dentist": return COLORS.navy;
    case "Hygienist": return COLORS.teal;
    case "Therapist": return COLORS.accent;
    default: return COLORS.gray400;
  }
}

// Today's day name for hours display
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
export const today = days[new Date().getDay()];
