import React from 'react';
import { BookOpen, Award, CheckCircle } from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const courses = [
    {
        title: "Introduction to Beekeeping",
        description: "Learn the basics of starting your own bee farm, including setting up your first hive and caring for bees. Perfect for absolute beginners.",
        icon: <BookOpen className="w-12 h-12 text-honey-gold" />
    },
    {
        title: "Advanced Beekeeping Techniques",
        description: "Dive deeper into hive management, disease prevention, and honey harvesting methods to maximize your apiary's health and productivity.",
        icon: <BookOpen className="w-12 h-12 text-honey-gold" />
    },
    {
        title: "Sustainable Beekeeping Practices",
        description: "Explore organic and treatment-free beekeeping, focusing on creating a resilient, self-sustaining apiary that works in harmony with nature.",
        icon: <BookOpen className="w-12 h-12 text-honey-gold" />
    }
];

const TrainingPage: React.FC = () => {
  return (
    <div className="bg-off-white min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-playfair text-dark-amber mb-4">Beekeeping Training & Certification</h1>
            <p className="max-w-3xl mx-auto text-light-amber">
                Join our expert beekeepers and learn the art and science of beekeeping. Whether you're a hobbyist or an aspiring professional, we have a course for you.
            </p>
        </div>

        {/* Courses Section */}
        <section className="mb-16">
            <h2 className="text-3xl font-playfair text-dark-amber text-center mb-8">Our Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses.map((course, index) => (
                    <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center flex flex-col items-center">
                        <div className="mb-4">{course.icon}</div>
                        <h3 className="text-2xl font-playfair text-dark-amber mb-3">{course.title}</h3>
                        <p className="text-light-amber flex-grow">{course.description}</p>
                        <Button variant="primary" className="mt-6">Learn More</Button>
                    </div>
                ))}
            </div>
        </section>

        {/* Certification Section */}
        <section className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="text-center md:text-left">
                    <Award className="w-20 h-20 text-honey-gold mx-auto md:mx-0 mb-4" />
                    <h2 className="text-3xl font-playfair text-dark-amber mb-4">Become a Certified Beekeeper</h2>
                    <p className="text-light-amber mb-6">
                        Upon completion of our comprehensive courses, you’ll receive a Certificate in Beekeeping, recognized by professionals in the industry. Start your own honey farm with confidence!
                    </p>
                    <ul className="space-y-3 text-left mb-6 text-dark-amber">
                        <li className="flex items-center gap-3"><CheckCircle className="text-green-500" /><span>Hands-on experience</span></li>
                        <li className="flex items-center gap-3"><CheckCircle className="text-green-500" /><span>Expert-led instruction</span></li>
                        <li className="flex items-center gap-3"><CheckCircle className="text-green-500" /><span>Valuable industry credential</span></li>
                    </ul>
                    <Link to="/contact"><Button variant="secondary">Enroll Now</Button></Link>
                </div>
                <div>
                    <img src="https://picsum.photos/seed/certificate/600/400" alt="Beekeeper with certificate" className="rounded-lg shadow-md w-full h-auto object-cover" />
                </div>
            </div>
        </section>

      </div>
    </div>
  );
};

export default TrainingPage;