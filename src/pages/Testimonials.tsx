import React from 'react';
import { StarIcon, Quote } from 'lucide-react';
const TestimonialsPage = () => {
  return <div className="w-full">
      {/* Hero Section */}
      <section className="bg-purple-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Client Testimonials</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Hear what our clients have to say about their experience working
            with Yeuclidean Hill Management
          </p>
        </div>
      </section>
      {/* Featured Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => <TestimonialCard key={index} testimonial={testimonial} />)}
          </div>
        </div>
      </section>
      {/* Video Testimonial */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Video Testimonials
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Watch our clients share their experiences with our consulting
              services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-md flex items-center justify-center">
                <p className="text-gray-500">Video Testimonial 1</p>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  Transform Automotive Inc.
                </h3>
                <p className="text-gray-600">
                  How we improved their aftermarket operations
                </p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-md flex items-center justify-center">
                <p className="text-gray-500">Video Testimonial 2</p>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  Global Fleet Solutions
                </h3>
                <p className="text-gray-600">
                  A depot management success story
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Case Studies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Client Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Detailed case studies showcasing our impact across different
              industries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CaseStudyCard image="https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" title="Automotive Supply Chain Optimization" client="AutoParts Global" result="35% reduction in operational costs" />
            <CaseStudyCard image="https://images.unsplash.com/photo-1565043666747-69f6646db940?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" title="Fleet Management Transformation" client="Metro Transit Authority" result="28% improvement in fleet utilization" />
            <CaseStudyCard image="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" title="Technical Design Process Overhaul" client="InnoTech Manufacturing" result="40% faster product development cycle" />
          </div>
        </div>
      </section>
      {/* Client Logos */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Clients
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trusted by leading companies across various industries
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {[1, 2, 3, 4, 5, 6].map(i => <div key={i} className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-20">
                <div className="text-gray-400 font-semibold">
                  Client Logo {i}
                </div>
              </div>)}
          </div>
        </div>
      </section>
    </div>;
};
const TestimonialCard = ({
  testimonial
}) => <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition duration-300 flex flex-col h-full">
    <div className="mb-4 flex">
      {[...Array(5)].map((_, i) => <StarIcon key={i} size={20} className="text-amber-500 fill-current" />)}
    </div>
    <div className="mb-6 flex-grow">
      <p className="text-gray-600 italic">"{testimonial.quote}"</p>
    </div>
    <div className="flex items-center">
      <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover mr-4" />
      <div>
        <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
        <p className="text-gray-500 text-sm">
          {testimonial.position}, {testimonial.company}
        </p>
      </div>
    </div>
  </div>;
const CaseStudyCard = ({
  image,
  title,
  client,
  result
}) => <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition duration-300">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">Client: {client}</p>
      <div className="bg-purple-50 border-l-4 border-purple-500 p-3">
        <p className="text-purple-800 font-medium">Result: {result}</p>
      </div>
    </div>
  </div>;
// Sample testimonial data
const testimonials = [{
  quote: 'Working with Yeuclidean Hill Management transformed our aftermarket operations. Their expertise and tailored solutions led to significant improvements in efficiency and customer satisfaction.',
  name: 'Jennifer Smith',
  position: 'Operations Director',
  company: 'AutoTech Solutions',
  image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80'
}, {
  quote: 'The team at Yeuclidean Hill Management provided invaluable insights for our depot management challenges. Their strategic recommendations helped us streamline operations and reduce costs significantly.',
  name: 'Robert Johnson',
  position: 'Fleet Manager',
  company: 'Global Transit Inc.',
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
}, {
  quote: 'Their technical design expertise was instrumental in revamping our product development process. The results exceeded our expectations, with faster time-to-market and improved product quality.',
  name: 'Michelle Wong',
  position: 'Chief Technology Officer',
  company: 'InnoDesign Technologies',
  image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
}, {
  quote: "Yeuclidean Hill's work system analysis identified inefficiencies we hadn't recognized. Their recommendations led to a 25% increase in productivity within just three months.",
  name: 'David Thompson',
  position: 'CEO',
  company: 'Precision Manufacturing Co.',
  image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
}, {
  quote: 'The strategic planning guidance we received was exceptional. Their team took the time to understand our unique challenges and delivered a roadmap that has been transformative for our business.',
  name: 'Sarah Martinez',
  position: 'Strategic Director',
  company: 'Advance Logistics',
  image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
}, {
  quote: 'From day one, the team demonstrated a deep understanding of our industry challenges. Their operational excellence program has become the foundation of our continuous improvement culture.',
  name: 'James Wilson',
  position: 'Operations Manager',
  company: 'Elite Transport Systems',
  image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
}];
export default TestimonialsPage;