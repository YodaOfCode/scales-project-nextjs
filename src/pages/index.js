import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner/banner';
import KeyFeature from '../sections/key-feature/key-feature';
import ServiceSection from '../sections/service-section/service-section';
import Feature from '../sections/feature/feature';
import CoreFeature from '../sections/core-feature/core-feature';
import WorkFlow from '../sections/workflow/workflow';
import Package from '../sections/package/package';
import TeamSection from '../sections/team-section/team-section';
import TestimonialCard from '../sections/testimonials/testimonial';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
        <Layout>
          <SEO title="NextJS Landing Page" />
          <Banner />
          <KeyFeature />
          <ServiceSection />
          <Feature />
          <CoreFeature />
          <WorkFlow />
          <Package />
          <TeamSection />
          <TestimonialCard />
        </Layout>
    </ThemeProvider>
  );
}
