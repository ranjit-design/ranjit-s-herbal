import Link from 'next/link'

export default function FAQPage() {
  const faqs = [
    {
      question: "Are your herbal products 100% natural?",
      answer: "Yes! All of our products are made from 100% natural, ethically sourced herbs and botanical ingredients. We do not use any artificial preservatives, synthetic fragrances, or harmful chemicals."
    },
    {
      question: "Are your products cruelty-free?",
      answer: "Absolutely. We are certified cruelty-free. None of our products or raw ingredients are ever tested on animals."
    },
    {
      question: "How long does shipping usually take?",
      answer: "Standard shipping takes 3-5 business days within the country. Expedited shipping options (1-2 business days) are available at checkout. International shipping times vary by destination."
    },
    {
      question: "Do you offer a money-back guarantee?",
      answer: "Yes, we stand behind the quality of our herbal blends. If you are not completely satisfied with your purchase, you can return it within 30 days for a full refund."
    },
    {
      question: "How should I store my herbal oils and extracts?",
      answer: "For maximum potency and shelf life, we recommend storing your herbal products in a cool, dark place away from direct sunlight and extreme temperatures."
    },
    {
      question: "Can I use your products if I have sensitive skin?",
      answer: "Many of our products are formulated specifically for sensitive skin. However, we always recommend doing a small patch test before using any new botanical product to ensure you don't have an allergy to a specific herb."
    }
  ]

  return (
    <div className="min-h-screen bg-[#FDFCF4] py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0A1A0B] mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-600 font-medium max-w-2xl mx-auto">
            Find answers to common questions about our ingredients, shipping, and natural wellness philosophy.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-[#1F4A22] mb-3 flex items-start gap-3">
                <span className="text-green-500 mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </span>
                {faq.question}
              </h3>
              <p className="text-gray-600 leading-relaxed ml-8">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-green-50 rounded-3xl p-8 md:p-12 border border-green-100">
          <h2 className="text-2xl font-bold text-[#1F4A22] mb-4">Still have questions?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Our wellness team is always here to help you find the right natural remedies for your needs.
          </p>
          <Link href="/contact" className="inline-block bg-[#1F4A22] text-[#F0F4C8] px-8 py-3.5 rounded-full font-bold hover:bg-[#153417] transition shadow-xl text-sm">
            Contact Support
          </Link>
        </div>

      </div>
    </div>
  )
}
