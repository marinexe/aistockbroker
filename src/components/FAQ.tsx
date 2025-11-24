import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Како функционира AI брокерот?",
    answer:
      "Нашиот AI систем користи напредни машин лернинг алгоритми за да ги анализира глобалните пазари 24/7. Се базира на хиљадници податочни точки вклучувајќи историски трендови, економски индикатори и пазарен сентимент за да креира персонализирани препораки за инвестиции прилагодени на вашите цели и толеранција на ризик.",
  },
  {
    question: "Дали е безбедно да му верувам на AI за мојот портфолио?",
    answer:
      "Апсолутно! Нашата платформа користи стандарди за сигурност од банкарски ниво со енкрипција и ви дава целосна контрола. Вие поставувате ограничувања на ризик, стоп-лос нивоа и други параметри. AI работи како софистициран советник - ви дава препораки врз основа на податоци, но вие останувате одлучувач.",
  },
  {
    question: "Колку пари ми требаат за да почнам?",
    answer:
      "Можете да започнете со само €100 на нашиот Starter план. Ова ви овозможува да ја тестирате платформата и да видите резултати пред да инвестирате поголеми износи. Нема скриени трошоци - плаќате само месечна претплата и процент од вашата добивка.",
  },
  {
    question: "Дали AI брокерот може автоматски да тргува за мене?",
    answer:
      "Да! Нашата функција за автоматско тргување ви овозможува да зададете специфични критериуми (целни цени, нивоа на ризик, временски рамки) и AI ќе реализира трговии автоматски кога условите се исполнети. Можете да го вклучите или исклучите ова било кога и секогаш да ги гледате трансакциите во реално време.",
  },
  {
    question: "Какви видови инвестиции може да управува?",
    answer:
      "Нашата платформа поддржува широк спектар на средства: акции, ETF-ови, криптовалути, деривати и недвижности. AI може да креира диверзифициран портфолио низ овие категории врз основа на вашите преференци и тековните пазарни услови.",
  },
  {
    question: "Што се случува ако сакам да откажам?",
    answer:
      "Можете да ја откажете вашата претплата било кога без договори долгорочни. Ќе задржите пристап до крајот на вашиот платен период. Вашите инвестиции останувете целосно под ваша контрола - едноставно не го користите автоматското тргување или трансферирајте средства назад на вашата банкарска сметка.",
  },
  {
    question: "Како AI се справува со пазарни падови?",
    answer:
      "Нашиот AI е обучен на декади пазарни податоци вклучувајќи рецесии и падови. Тој автоматски ги прилагодува стратегиите врз основа на волатилноста на пазарот и може да активира одбранбени мерки како што се стоп-лос нареди или преместување во побезбедни средства кога ја детектира зголемен ризик.",
  },
  {
    question: "Дали добивам поддршка ако имам прашања?",
    answer:
      "Да! Покрај AI асистентот достапен 24/7 во платформата, имаме тим на експерти за човечка поддршка достапен преку email и live chat. Professional и Enterprise плановите вклучуваат и телефонска поддршка и посветени менаџери на сметки.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 px-4 relative overflow-hidden bg-background">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.15),transparent_50%)]" />
      
      <div className="container relative z-10 max-w-4xl">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Често Поставувани Прашања
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Имате Прашања? Ние имаме Одговори
          </h2>
          <p className="text-muted-foreground text-lg">
            Дознајте повеќе за нашата AI платформа и како функционира
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 bg-card/50 backdrop-blur hover:shadow-glow transition-all duration-300"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold text-lg">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Сè уште имате прашања?
          </p>
          <a
            href="mailto:support@aibroker.mk"
            className="text-primary font-semibold hover:underline"
          >
            Контактирајте не →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
