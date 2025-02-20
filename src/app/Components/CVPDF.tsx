import { Document, Page, Text, View } from '@react-pdf/renderer';

const CVPDF: React.FC = () => (
  <Document>
    <Page size="A4">
      <View>
        <Text>Mahab Rizwan</Text>
        <Text>Front-End Developer</Text>
        <Text>Karachi, Pakistan | Freelance: Available</Text>
      </View>

      <View>
        <Text>Professional Summary</Text>
        <Text>
          Front-End Developer specializing in modern web technologies with expertise in Next.js, Tailwind CSS, and TypeScript. 
          Experienced in building responsive e-commerce solutions and dynamic web applications with seamless CMS integration.
        </Text>
      </View>

      <View>
        <Text>Technical Skills</Text>
        <Text>• Frontend: HTML5, CSS3, JavaScript (ES6+), TypeScript</Text>
        <Text>• Frameworks: Next.js, React.js</Text>
        <Text>• Styling: Tailwind CSS, CSS Modules, SASS</Text>
        <Text>• Tools: Figma, Sanity CMS, Git, Stripe API</Text>
      </View>

      <View>
        <Text>Professional Experience</Text>
        <View>
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

      <View>
        <Text>Education</Text>
        <Text>Governor Sindh Initiative</Text>
        <Text>AI, Web 3.0 & Metaverse Certification | 2023</Text>
        
        <Text>KMA College</Text>
        <Text>Intermediate in Computer Science | 2020</Text>
      </View>

      <View>
        <Text>Contact</Text>
        <Text>LinkedIn: linkedin.com/in/mahab-rizwan</Text>
        <Text>Portfolio: mahabrizwan.com</Text>
        <Text>GitHub: github.com/mahabdev</Text>
      </View>
    </Page>
  </Document>
);

export default CVPDF;