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
        image="/images/contagram.svg"
        name="Contagram"
        role="Jr. Sales Agent | 2019 - 2020"
        description="Engaged with customers professionally, showcasing product knowledge and highlighting value. Listened to customer needs, provided tailored solutions, and addressed inquiries to build strong relationships and maximize sales. Evaluated client profiles to identify sales opportunities and tailored strategies. Maintained customer info and sales activities in CRM, tracking interactions and monitoring pipelines for effective communication and follow-up."
      />
      <JobExperience
        image="/images/contagram.svg"
        name="Contagram"
        role="Customer Service Associate | 2019"
        description="Provided prompt, courteous customer assistance, resolving inquiries and complaints. Offered accurate information and recommendations with strong product knowledge. Collaborated with Sales, Product Development, and Operations for seamless service. Documented interactions in CRM and prepared VAT entries and monthly invoices."
      />
      <JobExperience
        image="/images/lengas.png"
        name="Lengas Wear"
        role="Workshop Manager | 2020 - 2021"
        description="As Workshop Manager at an artisan-wood wristwatch workshop, I oversaw all production operations, including managing schedules, ensuring quality control, and optimizing processes. Leading a team of skilled artisans, I fostered a collaborative environment focused on high-quality, handcrafted timepieces. My effective leadership and dedication to craftsmanship upheld the workshop's industry reputation for excellence."
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
