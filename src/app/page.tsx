import { CareFeatures } from "@/components/CareFeatures";
import { Contact } from "@/components/Contact";
import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Reviews } from "@/components/Reviews";
import { Services } from "@/components/Services";
import { StickyCallBar } from "@/components/StickyCallBar";
import { Team } from "@/components/Team";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import site from "@/content/site.json";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: site.practice.name,
    description: site.practice.tagline,
    telephone: site.practice.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "9550 Dix Ave Suite D",
      addressLocality: "Dearborn",
      addressRegion: "MI",
      postalCode: "48120",
      addressCountry: "US",
    },
    image: site.images.teamInterior,
    sameAs: [site.practice.facebookUrl],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.reviews.rating,
      reviewCount: site.reviews.count,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header
        addressLines={site.practice.addressLines}
        phone={site.practice.phone}
        phoneHref={site.practice.phoneHref}
        navigation={site.navigation}
      />
      <main>
        <Hero
          eyebrow={site.homepage.eyebrow}
          headline={site.homepage.heroHeadline}
          body={site.homepage.heroBody}
          primaryCta={site.homepage.primaryCta}
          secondaryCta={site.homepage.secondaryCta}
          phoneHref={site.practice.phoneHref}
          teamImage={site.images.teamInterior}
          trustChips={site.homepage.trustChips}
          rating={site.reviews.rating}
          reviewCount={site.reviews.count}
          reviewsUrl={site.reviews.profileUrl}
        />
        <Services
          services={site.services}
          eyebrow={site.sections.services.eyebrow}
          title={site.sections.services.title}
          body={site.sections.services.body}
        />
        <CareFeatures
          features={site.careFeatures}
          phoneHref={site.practice.phoneHref}
        />
        <Reviews
          rating={site.reviews.rating}
          count={site.reviews.count}
          profileUrl={site.reviews.profileUrl}
          mentions={site.reviews.mentions}
          highlights={site.reviews.highlights}
          eyebrow={site.sections.reviews.eyebrow}
          title={site.sections.reviews.title}
          body={site.sections.reviews.body}
        />
        <CtaBand
          phone={site.practice.phone}
          phoneHref={site.practice.phoneHref}
          eyebrow={site.sections.midCta.eyebrow}
          title={site.sections.midCta.title}
        />
        <WhyChooseUs
          benefits={site.benefits}
          eyebrow={site.sections.whyUs.eyebrow}
          title={site.sections.whyUs.title}
        />
        <Team
          doctorName={site.practice.primaryDoctor}
          doctorImage={site.images.doctorPortrait}
          teamImage={site.images.teamExterior}
          phoneHref={site.practice.phoneHref}
          eyebrow={site.sections.team.eyebrow}
          title={site.sections.team.title}
          body={site.sections.team.body}
          storyTitle={site.sections.teamStory.title}
          storyBody={site.sections.teamStory.body}
        />
        <Contact
          address={site.practice.address}
          addressLines={site.practice.addressLines}
          mapsUrl={site.practice.mapsUrl}
          phone={site.practice.phone}
          phoneHref={site.practice.phoneHref}
          facebookUrl={site.practice.facebookUrl}
          buildingImage={site.images.buildingTeamWide}
          ctaEyebrow={site.sections.cta.eyebrow}
          ctaTitle={site.sections.cta.title}
          ctaBody={site.sections.cta.body}
          visitEyebrow={site.sections.visit.eyebrow}
          visitTitle={site.sections.visit.title}
          visitBody={site.sections.visit.body}
        />
      </main>
      <Footer
        navigation={site.navigation}
        services={site.services}
        addressLines={site.practice.addressLines}
        phone={site.practice.phone}
        phoneHref={site.practice.phoneHref}
        mapsUrl={site.practice.mapsUrl}
        facebookUrl={site.practice.facebookUrl}
      />
      <StickyCallBar
        phone={site.practice.phone}
        phoneHref={site.practice.phoneHref}
      />
    </>
  );
}
