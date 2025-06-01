<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import ProblemsSection from "@/components/ProblemsSection.vue";
import FeaturesSection from "@/components/FeaturesSection.vue";
import ProductSection from "@/components/ProductSection.vue";
import ContactSection from "@/components/ContactSection.vue";
import HowItWorksSection from "@/components/HowItWorksSection.vue";
import FooterSection from "@/components/FooterSection.vue";
import AboutSection from "@/components/AboutSection.vue";
import DescriptionProjectSection from "@/components/DescriptionProjectSection.vue";
import TeamProjectComponent  from "@/components/TeamProjectComponent.vue";
</script>

<template>
  <TheWelcome/>
  <AboutSection/>
  <!--  <FeaturesSection/>-->
  <HowItWorksSection/>
  <ProblemsSection/>
  <!--  <ProductSection/>-->
  <TeamProjectComponent/>
  <DescriptionProjectSection/>
  <ContactSection/>
  <FooterSection/>
</template>
