import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "What is BIMA and what services do you offer?",
      answer: "BIMA is a leading healthcare and insurance provider in Sri Lanka. We offer comprehensive health insurance, life insurance, accident coverage, telemedicine services, and our flagship B-Care package that combines all these services into one affordable solution.",
    },
    {
      question: "How do I sign up for BIMA insurance?",
      answer: "You can sign up online through our website, call our customer service hotline at +94 11 234 5678, or visit any of our service centers across Sri Lanka. The process is simple and can be completed within 24 hours.",
    },
    {
      question: "What documents do I need to enroll?",
      answer: "You'll need a valid National Identity Card (NIC), proof of address, and basic medical information. For family plans, you'll also need NICs and birth certificates for all family members to be covered.",
    },
    {
      question: "How does the cashless claim process work?",
      answer: "Simply present your BIMA card at any of our 500+ network hospitals. The hospital will verify your coverage and process the claim directly with us. You won't need to pay upfront for covered services.",
    },
    {
      question: "What is the claim settlement time?",
      answer: "For cashless claims at network hospitals, approval is instant. For reimbursement claims, we process and settle within 48 hours of receiving all required documents.",
    },
    {
      question: "Can I add family members to my plan?",
      answer: "Yes! You can add your spouse, children, and dependent parents to your plan. Our Family Premium plan covers up to 5 family members at a discounted rate.",
    },
    {
      question: "What is telemedicine and how do I use it?",
      answer: "Telemedicine allows you to consult with qualified doctors through video or audio calls via our mobile app or website. Simply log in to your BIMA account, select 'Consult a Doctor,' and connect with an available physician 24/7.",
    },
    {
      question: "Are pre-existing conditions covered?",
      answer: "Pre-existing conditions are covered after a waiting period of 12 months for most plans. However, emergency treatments related to pre-existing conditions are covered immediately.",
    },
    {
      question: "Can I cancel my policy?",
      answer: "Yes, you can cancel your policy at any time. If you cancel within 30 days of purchase, you'll receive a full refund. After 30 days, refunds are processed on a pro-rata basis minus any claims made.",
    },
    {
      question: "What happens if I miss a premium payment?",
      answer: "We provide a 30-day grace period for missed payments. Your coverage continues during this period. If payment is not received within 30 days, the policy will be suspended until payment is made.",
    },
    {
      question: "Do you offer corporate or group insurance?",
      answer: "Yes, we offer special corporate and group insurance packages for businesses. Please contact our corporate sales team for customized solutions and special pricing.",
    },
    {
      question: "How can I check my coverage details?",
      answer: "You can log in to your BIMA account on our website or mobile app to view your coverage details, claim history, and policy documents anytime, anywhere.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground">
              Find answers to common questions about BIMA's insurance products and services
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-2 rounded-lg px-6 hover:border-primary/30 transition-colors"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-2">
            <CardContent className="p-12 text-center">
              <MessageCircle className="w-16 h-16 mx-auto mb-6 text-primary" />
              <h2 className="text-3xl font-display font-bold mb-4">
                Still Have Questions?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our customer support team is here to help you 24/7
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90">
                  <Link to="/contact">Contact Us</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="tel:+94112345678">Call: +94 11 234 5678</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
