import React from "react";

const experienceContent = [
  {
    year: "April 2025 — Present",
    position: "Product Lead (Product Manager & Product Owner)",
    compnayName: "Trustscomply",
    details: `Spearheading product leadership by owning the product vision, strategy, and delivery roadmap across key compliance automation initiatives. \n
    Doubling as Product Manager and Product Owner, aligning business goals with agile execution, driving cross-functional collaboration across engineering, design, and compliance. \n
    Leading backlog grooming, sprint planning, and stakeholder reviews to ensure seamless feature delivery. \n
    Conducting user research, regulatory analysis, and product discovery to define solutions that simplify trust and compliance workflows. \n
    Leveraging analytics to define KPIs and monitor product performance, iterating to optimize outcomes. \n
    Partnering with the executive team to influence go-to-market and scale product-market fit. \n
    `,
  },
  {
    year: "April 2024 — March 2025",
    position: "Product Manager",
    compnayName: "Wovenremit",
    details: `Defined and communicated product vision and roadmap for global payment solutions, aligning deliverables with business goals. \n
    Conducted market research and user interviews, integrating new features that improved user satisfaction by 20%. \n
    Collaborated with engineering, design, and marketing to launch an FX app on the App Store, achieving 95% on-time delivery. \n
    Authored PRDs, user stories, and acceptance criteria to ensure clear development requirements. \n
    Monitored KPIs post-launch, iterating features based on analytics and feedback. \n
    `,
  },
  {
    year: "May, 2023 — Present",
    position: "Product Manager",
    compnayName: "Automagic",
    details: `Led the development and launch of five MVPs  (Tennis Love , Korre, Dope, Onthejob, Asset) and corporate website (www.atmgc.xyz). \n
    Conducted competitive analysis to prioritize features, balancing short-term goals and long-term strategy. \n
    Partnered with design, development, and QA teams to deliver high-quality products that met rigorous standards. \n
    Defined and tracked product performance metrics, leveraging data insights for continuous improvement. \n
    Executed user and A/B testing to validate decisions and enhance UX. \n
    `,
  },
  {
    year: "November, 2023 — March 2024",
    position: "Product Manager",
    compnayName: "Fipay",
    details: `Developed product roadmaps and feature prioritization based on stakeholders feedback and business goals. \n
    Collaborating with designers and developers to ensure timely delivery of features (fipay.io). \n
    Created well detailed Product Requirement documents, user stories and acceptance criteria for product features which helped the development team in understanding the features. \n
    Conducted user testing and gathering feedback to inform product improvements. \n
    Analyzed product performance metrics and making data-driven decisions for future iterations. \n
    `,
  },
  {
    year: "April, 2023 — December, 2023",
    position: "Product Manager",
    compnayName: "Nexascale",
    details: `Evaluated strategies based on product objectives, market research, and other user-related factors. \n
    Leading the development of a new B2C product; a travel app. \n
    Identified gaps through competitive analysis across the areas of design and engineering that have boosted the projected launch date. \n
    Proposed solutions to resolve potential customer pain points and completed tasks timely. \n
    Collaborated with team members in the development of product strategies, marketing campaigns, and roadmaps. \n
    Initiated user interviews with potential consumers using surveys, observation, and interactions which resulted in the implementation of innovative features to better serve users’ needs.
    `,
  },
  {
    year: "March. 2023 — January, 2024",
    position: "Product Manager",
    compnayName: "Kommerce",
    details: `Conducted a comprehensive evaluation of product objectives, market research, and user-related factors to formulate effective strategies. \n
    Negotiated with key stakeholders and potential investors to secure support for the upcoming venture. \n
    Assumed leadership of the development of a new B2B and B2C product, a cutting-edge livestream marketplace that facilitates seamless exchange of goods between buyers and sellers. \n
    Conducted a meticulous competitive analysis in design and engineering to identify gaps and opportunities that have expedited the projected launch date. \n
    Devised ingenious solutions to address potential customer pain points and meticulously executed tasks within the desired timeline. \n
    Collaborated closely with team members in the formulation of product strategies, marketing campaigns, and roadmaps that align with the company's vision. \n
    Conducted extensive user interviews with potential consumers using surveys, observation, and interactions to gain insights that have informed the integration of innovative features that cater to users' needs.
    `,
  },
  {
    year: "Feb 2022 — Sept 2022",
    position: "Product Manager",
    compnayName: "Metarri",
    details: `Analyzed product objectives, market research, and user-related factors to assess strategies. \n
    Spearheaded the creation of a new product for both B2B and B2C markets, which provides seamless access to the metaverse for users and web3 developers. \n
    Presented solutions to address customer pain points and completed tasks promptly. \n
    Worked closely with team members to develop product strategies, marketing campaigns, and roadmaps. \n
    Conducted user interviews with potential consumers through surveys, observation, and interactions, leading to the integration of innovative features that better meet users' needs.
    `,
  },
  {
    year: "Jan 2020 — Present",
    position: "Operations Manager",
    compnayName: "Chrism Oil Nig. LTD",
    details: `Partnered with stakeholders to define operational goals, growing the business from one to three branches and increasing profit margins by 40%. \n
    Analyzed performance data to optimize processes, reducing errors by 15% through monthly operational reviews. \n
    Led cross-functional teams to implement strategic initiatives, fostering collaboration and alignment. \n
    `,
  },
  {
    year: "Jan. 2016 —June. 2020",
    position: "Account Relationship Manager",
    compnayName: "Keystone Bank LTD",
    details: `Discussed financial options with clients, and kept them informed about transactions. \n
    Determined customers’ financial service needs and prepared proposals accordingly. \n
    Contacted perspective to present information and explain available services. \n
    Offering advice or sales on particular services. \n
    Managed customer relationships through regular calls and strategic check-ups and inventories. \n
    Marketing and bringing new customers to the bank. \n
    Proper documentation of account records. \n
    Actively involved in negotiations and using technologies and other proposals to sustain customer alliances. \n
    Advised customers on services that are best suited to them. \n
    Negotiated prices and contracts for commodity sales and purchases & kept accurate reports and records of transactions.
    `,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">
            {val.details.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
