import { BenefitType, SelectedPage } from "@/shared/types";
import { 
  HomeModernIcon, 
  UserGroupIcon, 
  AcademicCapIcon 
} from "@heroicons/react/24/solid"
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphics from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h6 w-6" />,
    title: "State of the Art Facilities",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est corrupti laboriosam vero praesentium, at molestiae vitae earum expedita optio reprehenderit itaque. Voluptatum molestiae accusamus aperiam dolorem consectetur perferendis esse vero."
  },
  {
    icon: <UserGroupIcon className="h6 w-6" />,
    title: "100's of Diverse Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est corrupti laboriosam vero praesentium, at molestiae vitae earum expedita optio reprehenderit itaque. Voluptatum molestiae accusamus aperiam dolorem consectetur perferendis esse vero."
  },
  {
    icon: <AcademicCapIcon className="h6 w-6" />,
    title: "State of the Art Facilities",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est corrupti laboriosam vero praesentium, at molestiae vitae earum expedita optio reprehenderit itaque. Voluptatum molestiae accusamus aperiam dolorem consectetur perferendis esse vero."
  }
]

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2}
  }
}

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({ setSelectedPage }: Props) => {
return (
    <section
      id="benefits" className="mx-auto min-h-full w-5/6 py-20">
        <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        >
          {/* Header */}
          <motion.div 
            className="md:my-5 md:3/5"
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.05, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -100},
              visible: { opacity: 1, x: 0}
            }}
          >
            <HText>MORE THAN JUST GYM.</HText>
            <p className="my-5 text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, laboriosam quasi ipsam ab non delectus dolore, at beatae nostrum aspernatur maxime quidem quo similique soluta hic totam numquam consequatur iure?
            </p>
          </motion.div>

          {/* Benefits */}
          <motion.div 
            className="mt-5 items-center justify-between gap-8 md:flex"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount:0.5 }}
            variants={container}
          >
            {benefits.map((benefit: BenefitType) => (
              <Benefit 
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                setSelectedPage={setSelectedPage}
              />
            ))}
          </motion.div>

          {/* graphics and description */}
          <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
            {/* graphic */}
            <img className="mx-auto" src={BenefitsPageGraphics} alt="benefits-page-graphic" />

            {/* description */}
            <div>
              {/* title */}
              <div className="relative">
                <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                  <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.05, duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, x: -100 },
                      visible: { opacity: 1, x: 0}
                    }}
                  >  
                    <HText>
                      MILLIONS OF HAPPY MEMBERS GETTING{" "}
                      <span className="text-primary-500">FIT</span>
                    </HText>
                  </motion.div>
                </div>
              </div>

              {/* descript */}
              <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.05, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -100},
                  visible: { opacity: 1, x: 0}
                }}
              >
                <p className="my-5">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint officiis recusandae repellat asperiores ipsa. Saepe, aliquam porro autem beatae, ad repellat illum culpa blanditiis deserunt atque, repudiandae labore. Ipsum, sint.
                </p>
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, excepturi? Ratione iusto tempore similique labore accusamus maiores molestiae. Reiciendis fugiat, aperiam ad iste esse mollitia error molestias repellat culpa tempore.
                </p>
              </motion.div>

              {/* button */}
              <div className="relative mt-16">
                <div className="before:absolute before:-bottom-20 before:right-40 before:z-[1] before:content-sparkles">
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Join Now
                  </ActionButton>

                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
  )
}

export default Benefits; 