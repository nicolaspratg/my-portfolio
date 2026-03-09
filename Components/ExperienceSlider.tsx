import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import JobExperience from "./JobExperience";

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1, slidesToSlide: 1 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1, slidesToSlide: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1, slidesToSlide: 1 },
};

const ExperienceSlider = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      responsive={responsive}
      infinite
      autoPlay
      autoPlaySpeed={3200}
      centerMode={false}
      itemClass="item px-4 py-4"
    >
      <JobExperience
        image="/images/nuela.svg"
        name="Nuela"
        role="Full-Stack Developer | Jul. 2025 - Dec. 2025 | Madrid"
        description="Delivered complex academic scheduling and timetabling workflows, built responsive multilingual interfaces for admins and teachers, and optimized educational data flows for scalability and strong data integrity."
      />
      <JobExperience
        image="/images/logo-rimlsports.svg"
        name="Riml Sports"
        role="Rental Staff | Nov. 2024 - Apr. 2025"
        description="Responsible for assisting customers with ski and boot fittings, managing transactions at the cash register, and coordinating inventory flow across shops in a fast-paced environment."
      />
      <JobExperience
        image="/images/dunnoagency_logo.jpg"
        name="Dunno"
        role="Full-Stack Developer | Nov. 2023 - Nov. 2024"
        description="Developed and maintained full-stack applications with React/Next.js, Node.js, Express.js, PostgreSQL, and DynamoDB while collaborating with cross-functional teams."
      />
      <JobExperience
        image="/images/plannet.jpg"
        name="plannet.cc"
        role="Full-Stack Developer | Aug. 2022 - Aug. 2023"
        description="Delivered robust software solutions through agile workflows, collaborating with clients and teams while improving product quality and iteration speed."
      />
      <JobExperience
        image="/images/plannet.jpg"
        name="plannet.cc"
        role="Frontend Developer | Oct. 2021 - Aug. 2022"
        description="Built user-centered MVPs and SPAs from Figma designs, integrating backend microservices to provide smooth data-driven user experiences."
      />
      <JobExperience
        image="/images/lengas.png"
        name="Lengas Wear"
        role="Workshop Manager | Aug. 2020 - Apr. 2021"
        description="Managed production operations, team scheduling, and quality standards in an artisan wood-watch workshop focused on handcrafted precision."
      />
      <JobExperience
        image="/images/contagram.svg"
        name="Contagram"
        role="Jr. Sales Agent | Aug. 2019 - Jul. 2020"
        description="Engaged clients with tailored solutions, maintained CRM pipelines, and supported sales growth through clear communication and customer focus."
      />
      <JobExperience
        image="/images/contagram.svg"
        name="Contagram"
        role="Customer Service Associate | Jul. 2019"
        description="Handled customer inquiries and issue resolution while coordinating across teams and maintaining operational records in CRM and billing workflows."
      />
      <JobExperience
        image="/images/Logo_TECHO.webp"
        name="TECHO"
        role="Volunteer | 2016 - 2019"
        description="Supported volunteer teams assembling housing solutions for families in need, helping improve living conditions through hands-on collaboration."
      />
    </Carousel>
  );
};

export default ExperienceSlider;

