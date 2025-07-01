import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import JobExperience from "./JobExperience";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const ExperienceSlider = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={true}
      responsive={responsive}
      infinite
      autoPlay={true}
      autoPlaySpeed={3000}
      centerMode={false}
      itemClass="item"
      //   swipeable={false}
      //   draggable={false}
      //   showDots={true}
      //   keyBoardControl={true}
      //   customTransition="all .5"
      //   transitionDuration={500}
      //   dotListClass="custom-dot-list-style"
    >
      <JobExperience
        image="/images/logo-rimlsports.svg"
        name="Riml Sports"
        role="Rental Staff | Nov. 2024 - Apr. 2025"
        description="Responsible for assisting customers with ski and boot fittings, managing transactions at the cash register, and performing end-of-day closures. The role involves coordinating with other shops to send and request equipment, requiring constant communication and collaboration. This position is fast-paced and high-stress, demanding strong teamwork, customer service, and stress management skills."
      />
      <JobExperience
        image="/images/dunnoagency_logo.jpg"
        name="Dunno"
        role="Full-Stack Developer | Nov. 2023 - Nov. 2024"
        description="Develop and maintain full stack web applications using JavaScript/TypeScript, React/Next.js, and CSS/Tailwind CSS on the frontend, along with Node.js, Express.js, DynamoDB, and PostgreSQL on the backend. Collaboration with cross-functional teams and participation in regular team meetings to ensure efficient and scalable solutions"
      />
      <JobExperience
        image="/images/plannet.jpg"
        name="plannet.cc"
        role="Full-Stack Developer | Aug. 2022 - Aug. 2023"
        description="In my role as a full-stack developer at plannet.cc, I focused on delivering robust software solutions through agile practices. I actively engaged with clients and team members to ensure seamless project coordination. My expertise in JavaScript frameworks and Node.js allowed me to write clean, maintainable code, significantly improving product iteration and client satisfaction."
      />
      <JobExperience
        image="/images/plannet.jpg"
        name="plannet.cc"
        role="Frontend Developer | Oct. 2021 - Aug. 2022"
        description="As a Frontend Developer at plannet.cc, I focused on creating user-centric MVPs and SPAs, transforming Figma designs into interactive web applications. My role involved integrating backend microservices to ensure a smooth data experience, which significantly enhanced user satisfaction and engagement."
      />
      <JobExperience
        image="/images/lengas.png"
        name="Lengas Wear"
        role="Workshop Manager | Aug. 2020 - Apr. 2021"
        description="As Workshop Manager at an artisan-wood wristwatch workshop, I oversaw all production operations, including managing schedules, ensuring quality control, and optimizing processes. Leading a team of skilled artisans, I fostered a collaborative environment focused on high-quality, handcrafted timepieces. My effective leadership and dedication to craftsmanship upheld the workshop's industry reputation for excellence."
      />
      <JobExperience
        image="/images/contagram.svg"
        name="Contagram"
        role="Jr. Sales Agent | Aug. 2019 - Jul. 2020"
        description="Engaged with customers professionally, showcasing product knowledge and highlighting value. Listened to customer needs, provided tailored solutions, and addressed inquiries to build strong relationships and maximize sales. Evaluated client profiles to identify sales opportunities and tailored strategies. Maintained customer info and sales activities in CRM, tracking interactions and monitoring pipelines for effective communication and follow-up."
      />
      <JobExperience
        image="/images/contagram.svg"
        name="Contagram"
        role="Customer Service Associate | Jul.2019"
        description="Provided prompt, courteous customer assistance, resolving inquiries and complaints. Offered accurate information and recommendations with strong product knowledge. Collaborated with Sales, Product Development, and Operations for seamless service. Documented interactions in CRM and prepared VAT entries and monthly invoices."
      />
      <JobExperience
        image="/images/Logo_TECHO.webp"
        name="TECHO"
        role="Volunteer | 2016 - 2019"
        description="As a volunteer, I assisted in assembling pre-built housing for individuals in need. Working with a diverse team, I learned valuable construction skills and helped organize materials to streamline the building process. This experience allowed me to contribute to improving living conditions for many families in need."
      />
    </Carousel>
  );
};

export default ExperienceSlider;
