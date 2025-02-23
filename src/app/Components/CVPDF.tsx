"use client";

import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
// Define styles using react-pdf's StyleSheet
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    lineHeight: 1.5,
  },
  header: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    paddingBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    color: '#444',
    marginBottom: 5,
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#2c3e50',
  },
  experienceItem: {
    marginBottom: 10,
  },
  contactItem: {
    marginBottom: 5,
  }
});

const CVPDF: React.FC = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.name}>Mahab Rizwan</Text>
        <Text style={styles.title}>Front-End Developer</Text>
        <Text>Karachi, Pakistan | Freelance: Available</Text>
      </View>

      {/* Professional Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Summary</Text>
        <Text>
          Front-End Developer specializing in modern web technologies with expertise in Next.js, Tailwind CSS, and TypeScript. 
          Experienced in building responsive e-commerce solutions and dynamic web applications with seamless CMS integration.
        </Text>
      </View>

      {/* Technical Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Technical Skills</Text>
        <Text>• Frontend: HTML5, CSS3, JavaScript (ES6+), TypeScript</Text>
        <Text>• Frameworks: Next.js, React.js</Text>
        <Text>• Styling: Tailwind CSS, CSS Modules, SASS</Text>
        <Text>• Tools: Figma, Sanity CMS, Git, Stripe API</Text>
      </View>

      {/* Professional Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Experience</Text>
        <View style={styles.experienceItem}>
          <Text>E-commerce Developer | Freelance</Text>
          <Text>2022-Present</Text>
          <Text>
            • Developed 10+ custom e-commerce stores using Next.js and Tailwind CSS{"\n"}
            • Integrated Stripe payment gateway and Sanity CMS for content management{"\n"}
            • Optimized web performance achieving 95+ Lighthouse scores{"\n"}
            • Implemented responsive designs with mobile-first approach
          </Text>
        </View>
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        <View style={styles.experienceItem}>
          <Text>Governor Sindh Initiative</Text>
          <Text>AI, Web 3.0 & Metaverse Certification | 2023</Text>
        </View>
        <View style={styles.experienceItem}>
          <Text>KMA College</Text>
          <Text>Intermediate in Computer Science | 2020</Text>
        </View>
      </View>

      {/* Contact */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact</Text>
        <Text style={styles.contactItem}>LinkedIn: linkedin.com/in/mahab-rizwan</Text>
        <Text style={styles.contactItem}>Portfolio: mahabrizwan.com</Text>
        <Text style={styles.contactItem}>GitHub: github.com/mahabdev</Text>
      </View>
    </Page>
  </Document>
);
export default CVPDF;
