import { useState } from 'react';
import { Plus, Minus, Headphones } from 'lucide-react';

export default function CoworkingFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Who can join the coworking space in Lahore?",
      answer: "Coworking spaces in Lahore are designed to cater to a diverse range of professionals. This includes freelancers, remote workers, entrepreneurs, startups, and small business owners. By joining our coworking community, these individuals and groups gain access to a dynamic and supportive environment that fosters creativity, collaboration, and business growth."
    },
    {
      question: "How does coworking space work to enhance freelancers' growth?",
      answer: "Our coworking space actively works to enhance the growth of freelancers. It does so by providing an environment that encourages networking with like-minded professionals, access to skill-sharing workshops, and mentorship opportunities. Additionally, the motivational atmosphere created by surrounding entrepreneurs helps to inspire and drive personal and professional development."
    },
    {
      question: "Can I sleep in the coworking space?",
      answer: "Our coworking space actively works to enhance the growth of freelancers. It does so by providing an environment that encourages networking with like-minded professionals, access to skill-sharing workshops, and mentorship opportunities. Additionally, the motivational atmosphere created by surrounding entrepreneurs helps to inspire and drive personal and professional development."
    },
    {
      question: "How much does the coworking space in Lahore cost?",
      answer: "The Value offers a variety of options tailored to different needs and budgets. For those who prefer flexibility, hot desk passes are available starting at PKR 15,000 per month. For those seeking a more permanent spot, dedicated desks are offered from PKR 18,000 per month. For teams or small businesses, private offices can be availed starting at PKR 48,000 per month for a three-member team, and PKR 96,000 for a team of six members, providing a cost-effective solution for various professional requirements.."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-6 lg:p-12">
      {/* Header Section */}

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-4 mb-8">
        <h1 className="text-4xl mb-15 sm:text-5xl md:text-6xl lg:text-9xl font-black tracking-tight flex flex-wrap gap-4">
          <span className="text-white">GET IN</span>
          <span
            className="text-transparent"
            style={{
              WebkitTextStroke: "2px #ffffff",
              textStroke: "2px #ffffff"
            }}
          >
            TOUCH
          </span>
        </h1>


      </div>
      <div className="max-w-7xl mx-auto mb-12 sm:mb-16">
        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-2 border-yellow-400 overflow-hidden">
              {/* Question Header */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full bg-yellow-400 text-black px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between hover:bg-yellow-300 transition-colors"
              >
                <span className="text-left text-base sm:text-lg md:text-xl font-semibold pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 sm:w-7 sm:h-7 font-bold" />
                  ) : (
                    <Plus className="w-6 h-6 sm:w-7 sm:h-7 font-bold" />
                  )}
                </div>
              </button>

              {/* Answer Content */}
              <div
                className={`bg-black border-t-2 border-yellow-400 transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}
              >
                <div className="px-4 sm:px-6 py-4 sm:py-6">
                  <p className="text-white text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}