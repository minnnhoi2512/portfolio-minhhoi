export interface Testimonial {
  name: string;
  quote: string;
  company: string;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "John Doe",
    quote: "Minh Hoi's backend expertise and clean code elevated our project quality significantly.",
    company: "FPT Software",
    image: "/assets/johndoe.jpg",
  },
  {
    name: "Jane Smith",
    quote: "His ability to deliver robust APIs under tight deadlines is impressive.",
    company: "Zalo",
    image: "/assets/janesmith.jpg",
  },
]; 