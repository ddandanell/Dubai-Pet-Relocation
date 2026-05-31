"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Can you move pets into Dubai?",
    answer: "Yes. We specialize in importing dogs and cats into Dubai, including all required permits, health certificates, vaccinations, microchipping, and customs clearance. We handle the entire process or support you with specific parts depending on your needs."
  },
  {
    question: "Can you move pets out of Dubai?",
    answer: "Absolutely. We help with export permits, destination country requirements, airline booking, veterinary appointments, and airport handling for pets leaving Dubai to any destination worldwide."
  },
  {
    question: "Why can't you give one fixed price?",
    answer: "Every relocation is different. The cost depends on the route, destination country, airline options, required vaccines and permits, current documentation status, timeline, crate size, and level of service you need. Instead of misleading 'starting from' prices, we provide a detailed estimate after understanding your specific situation."
  },
  {
    question: "Can I do part of the process myself?",
    answer: "Yes. Some clients prefer to handle certain parts themselves to reduce costs. We're happy to support with just documentation, just vet coordination, just airport handling, or any combination. We explain the options and help you decide what makes sense."
  },
  {
    question: "Can you review a quote from another company?",
    answer: "Yes. If you've received a quote and something feels unclear or too expensive, send it to us. We'll review it honestly and tell you what looks fair, what looks risky, and what questions you should ask before committing."
  },
  {
    question: "Do you work with vets and businesses?",
    answer: "Yes. We have B2B partnerships with veterinary clinics, relocation agencies, airlines, and corporate HR teams. We offer training, process support, documentation guidance, and ongoing cooperation for businesses that need pet logistics expertise."
  },
  {
    question: "How early should I contact you?",
    answer: "The earlier the better. Some destinations require vaccines or waiting periods months in advance. Ideally, contact us 2-3 months before your planned move date. For complex destinations, even earlier is recommended. Even if you're still uncertain, we can help you understand the timeline."
  },
  {
    question: "Can you handle pickup and airport delivery?",
    answer: "Yes. We can collect your pet from your home, transport them safely to the airport, handle all check-in procedures, and coordinate delivery at the destination. This is included in our full door-to-door service or available as a standalone option."
  },
]

export function FAQSection() {
  return (
    <section className="py-16 md:py-28 bg-card">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-balance">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-muted-foreground">
            Common questions from pet owners planning a move.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-border">
              <AccordionTrigger className="text-left text-foreground font-medium hover:text-accent py-4 md:py-6 text-sm md:text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-4 md:pb-6 text-sm md:text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
