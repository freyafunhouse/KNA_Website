export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  company?: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "ashley-black",
    quote:
      "Kris is the person we call when a site has a problem nobody else can solve.",
    name: "Ashley Black",
    role: "Director",
    company: "Crystalise 360",
  },
  {
    id: "dean-irvine",
    quote:
      "His individual expertise is that strong, that's why we subcontract him directly.",
    name: "Dean Irvine",
    role: "Business Development Manager",
    company: "Maintenance Systems Solutions (MSS)",
  },
  {
    id: "andrew-stanton",
    quote:
      "Kris brought structure to our planning and SAP work that the site could actually use day to day.",
    name: "Andrew Stanton",
    role: "Asset Reliability Manager",
    company: "Nyrstar Hobart Smelter",
  },
  {
    id: "christopher-boylan",
    quote:
      "Reliable, hands-on planning support across complex wind assets. Kris knows how to keep crews aligned.",
    name: "Christopher Boylan",
    role: "Cathedral Rocks WF Site Supervisor",
    company: "Vestas Wind Systems",
  },
  {
    id: "stephen-schlink",
    quote:
      "Practical maintenance thinking with the systems depth you need when assets cannot afford downtime.",
    name: "Stephen Schlink",
    role: "Renewables Operations Consultant",
    company: "Ace Renewables",
  },
];
