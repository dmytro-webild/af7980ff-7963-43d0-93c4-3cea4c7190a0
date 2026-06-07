"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import TeamCardFive from '@/components/sections/team/TeamCardFive';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import { Linkedin, Mail, Sparkles, Twitter } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="smallMedium"
        sizing="mediumLarge"
        background="noise"
        cardStyle="glass-elevated"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="solid"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Work",          id: "#work"},
        {
          name: "Services",          id: "#services"},
        {
          name: "About",          id: "#about"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      brandName="ARKONEX"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboard
      background={{
        variant: "plain"}}
      title="We Build AI\\\nSystems That\\\nWork While\\\nYou Sleep."
      description="Your leads get replied instantly.\\\nFollow-ups run automatically.\\\nYour team focuses only on growth."
      tag="AI AUTOMATION AGENCY · INDIA · EST. 2025"
      tagAnimation="slide-up"
      buttons={[
        {
          text: "Book Free Audit →",          href: "#contact"},
        {
          text: "See Our Work",          href: "#real-result"},
      ]}
      buttonAnimation="slide-up"
      imageSrc="http://img.b2bpic.net/free-photo/black-background-water-texture-frame_53876-142892.jpg"
      imageAlt="Floating 3D glass card with live stats showing 0s response time, 24/7 active, and zero leads missed for Shelar Academy, against a dark, atmospheric AI background with radial glow and dot grid."
      mediaAnimation="opacity"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/upbeat-saleswoman-hired-explain-vehicle-pricing-options-clients_482257-118422.jpg",          alt: "Satisfied client avatar"},
        {
          src: "http://img.b2bpic.net/free-photo/young-businesswoman-portrait-office_1262-1506.jpg",          alt: "Happy customer avatar"},
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-smiley-man-work_23-2149097924.jpg",          alt: "Business partner avatar"},
        {
          src: "http://img.b2bpic.net/free-photo/user-sign-icon-front-side_187299-47522.jpg",          alt: "Successful entrepreneur avatar"},
        {
          src: "http://img.b2bpic.net/free-photo/portrait-bald-senior-dressed-stylish-suit-posing-against-dark-background_613910-17578.jpg",          alt: "Client testimonial avatar"},
      ]}
      avatarText="Trusted by leading institutes across India."
      marqueeItems={[
        {
          type: "text",          text: "AI Automation"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/view-puzzle-pieces-blue-background_23-2149299057.jpg",          alt: "Automation gear icon"},
        {
          type: "text",          text: "Instant Response"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/bright-neon-colors-illuminated-arrow_23-2151204944.jpg",          alt: "Lightning bolt icon"},
        {
          type: "text",          text: "24/7 Operations"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-vector/service-day-icons-set-arrow-style_1017-30334.jpg",          alt: "Clock icon"},
        {
          type: "text",          text: "Smart Follow-ups"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-vector/colorful-speech-balloons-set_1025-424.jpg",          alt: "Chat bubble icon"},
        {
          type: "text",          text: "Zero Missed Leads"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/green-check-mark-symbol-icon-sign-correct-right-approve-concept-confirm-illustration-isolated-green-background-3d-rendering_56104-1220.jpg",          alt: "Checkmark icon"},
      ]}
      marqueeSpeed={40}
      showMarqueeCard={true}
    />
  </div>

  <div id="problems" data-section="problems">
      <FeatureCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Leads After Hours",          description: "A student enquires at 10pm.\\\nNo reply. By morning —\\\nthey've joined your competitor.",          imageSrc: "http://img.b2bpic.net/free-vector/gamification-motivation-flat-elements-set_1284-24974.jpg",          imageAlt: "Abstract icon representing leads after hours"},
        {
          title: "Staff Doing Robot Work",          description: "Answering the same question\\\n100 times a day.\\\nThat's a machine's job — not theirs.",          imageSrc: "http://img.b2bpic.net/free-vector/set-business-teamwork-strategy-information_24640-45214.jpg",          imageAlt: "Abstract icon representing repetitive staff work"},
        {
          title: "Fee Reminders Forgotten",          description: "Manual follow-ups get missed.\\\nParents don't pay on time.\\\nCash flow suffers every month.",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-black-friday-sales-elements-composition_23-2148665629.jpg",          imageAlt: "Abstract icon representing forgotten fee reminders"},
      ]}
      title="Sound Familiar?"
      tag="THE PROBLEM"
      description="Many coaching institutes face similar automation challenges that hinder growth and productivity, leading to lost revenue and inefficient operations."
    />
  </div>

  <div id="what-we-do" data-section="what-we-do">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="We Fix This. Permanently."
      tag="THE SOLUTION"
      metrics={[
        {
          id: "solution-1",          value: "01",          description: "Instant Lead Response: Every enquiry gets a reply in seconds — day or night. No lead left behind. Ever."},
        {
          id: "solution-2",          value: "02",          description: "Automated Follow-Ups: Students get the right message at the right time — automatically. Without anyone pressing send."},
        {
          id: "solution-3",          value: "03",          description: "Smart Fee Reminders: Reminders go out on schedule. Collections improve. Your team stays focused."},
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="how-it-works" data-section="how-it-works">
      <BlogCardOne
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      title="Simple Process.\\\nPowerful Results."
      tag="THE PROCESS"
      blogs={[
        {
          id: "step-1",          category: "Step 01",          title: "Free Audit",          excerpt: "We study your workflow. Find exactly where you're losing leads and time.",          imageSrc: "http://img.b2bpic.net/free-vector/technology-infographic_23-2147490790.jpg",          imageAlt: "Abstract icon representing a free audit",          authorName: "Arkonex",          authorAvatar: "http://img.b2bpic.net/free-photo/abstract-cube-futuristic-cyberpunk-style_187299-48040.jpg",          date: "2025-01-01"},
        {
          id: "step-2",          category: "Step 02",          title: "Custom Design",          excerpt: "We design a system built for your institute — not a generic template.",          imageSrc: "http://img.b2bpic.net/free-vector/design-thinking-25-blue-color-icon-pack-including-drawing-light-geometry-compass_1142-24706.jpg",          imageAlt: "Abstract icon representing custom design",          authorName: "Arkonex",          authorAvatar: "http://img.b2bpic.net/free-photo/smartphone-displayed-within-geometric-wireframe_187299-46683.jpg",          date: "2025-01-02"},
        {
          id: "step-3",          category: "Step 03",          title: "We Build It",          excerpt: "You don't touch anything. We build, test, and keep you updated.",          imageSrc: "http://img.b2bpic.net/free-vector/modern-productivity-concept-with-flat-design_23-2147968944.jpg",          imageAlt: "Abstract icon representing building and testing",          authorName: "Arkonex",          authorAvatar: "http://img.b2bpic.net/free-photo/premium-shadow-style-typography-black-background_53876-104955.jpg",          date: "2025-01-03"},
        {
          id: "step-4",          category: "Step 04",          title: "You Go Live",          excerpt: "System launches. Leads handled. Follow-ups running. You just watch it work.",          imageSrc: "http://img.b2bpic.net/free-vector/creative-information-technology-25-glyph-solid-black-icon-pack-such-as-connection-interfaces-telecommunication-data-management_1142-22460.jpg",          imageAlt: "Abstract icon representing going live and results",          authorName: "Arkonex",          authorAvatar: "http://img.b2bpic.net/free-vector/bikers-gear-badge_23-2147504357.jpg",          date: "2025-01-04"},
      ]}
      description="Our streamlined process ensures a smooth transition to intelligent automation, delivering tangible results quickly and efficiently for your institute."
    />
  </div>

  <div id="real-result" data-section="real-result">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="REAL RESULT"
      title="Not Promises. Proof."
      description="Shelar Academy was losing leads every evening after office hours. Students enquired — no one replied. We built an intelligent system that replies instantly, detects serious students automatically, and captures every lead — even at 2am."
      subdescription="[0s Response] [24/7 Active] [Zero Leads Missed]"
      icon={Sparkles}
      imageSrc="http://img.b2bpic.net/free-photo/minimal-style-device-screen_23-2151913280.jpg"
      imageAlt="Dark glass box with white play button labeled 'Watch how it works →' against a black background."
      mediaAnimation="opacity"
    />
  </div>

  <div id="services" data-section="services">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "service-audit",          title: "Free AI Audit",          content: "20 minutes. We study your institute and show you exactly what can be automated. Zero cost. Zero obligation."},
        {
          id: "service-starter",          title: "Starter AI System",          content: "Your first intelligent system — built and delivered. Lead capture, instant replies, automatic follow-ups. Ready in days."},
        {
          id: "service-suite",          title: "Complete AI Suite",          content: "Everything automated. Leads, follow-ups, fee reminders — all running without your team lifting a finger."},
      ]}
      title="What We Offer"
      description="We don't sell packages. We solve specific problems. Our AI solutions are tailored to integrate seamlessly with your existing workflow."
      tag="SERVICES"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="founder" data-section="founder">
      <TeamCardFive
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      team={[
        {
          id: "piyush",          name: "Piyush",          role: "AI Systems Architect",          imageSrc: "http://img.b2bpic.net/free-photo/young-man-works-computer-night_169016-64050.jpg",          imageAlt: "Professional portrait of Piyush, AI Systems Architect"},
      ]}
      title="Built by a Specialist.\\\nNot an Agency Factory."
      description="I don't manage 50 clients. I take on a few coaching institutes at a time — and I go deep. Every system I build is custom, tested, and built to actually work — not just look good in a proposal. I ensure measurable ROI."
      tag="WHO BUILDS THIS"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Ready to Stop\\\nLosing Leads?"
      description="Free 30-minute AI audit. We reply within one business day with honest next steps — even if we're not the right fit."
      inputs={[
        {
          name: "name",          type: "text",          placeholder: "Your Name",          required: true,
        },
        {
          name: "email",          type: "email",          placeholder: "Your Email",          required: true,
        },
        {
          name: "phone",          type: "tel",          placeholder: "Your Phone Number",          required: false,
        },
      ]}
      mediaAnimation="none"
      mediaPosition="right"
      buttonText="Book Your Free Audit →"
      textarea={{
        name: "message",        placeholder: "Tell us about your institute and challenges...",        rows: 4,
        required: false,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/blurred-night-lights_23-2148139245.jpg"
      imageAlt="Minimalist AI systems interface on a dark background showing data flow and automation."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="ARKONEX."
      copyrightText="© 2025 Arkonex · Built by Piyush · Durgapur, India · Built with AI in India 🇮🇳"
      socialLinks={[
        {
          icon: Linkedin,
          href: "https://linkedin.com/arkonex",          ariaLabel: "LinkedIn"},
        {
          icon: Twitter,
          href: "https://twitter.com/arkonex",          ariaLabel: "Twitter"},
        {
          icon: Mail,
          href: "mailto:info@arkonex.com",          ariaLabel: "Email"},
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
