export interface Recommendation {
  name: string;
  role: string;
  text: string;
  rating: number;
  initials: string;
}

export const recommendations: Recommendation[] = [
  { name: "Maria K.", role: "CEO, TechVentures Ltd", text: "PINECO transformed our project delivery process. Their strategic approach saved us months and significantly improved our outcomes.", rating: 5, initials: "MK" },
  { name: "James T.", role: "Director, Nordic Solutions", text: "The training programmes were exceptional — our team's productivity increased by 40% within the first quarter.", rating: 5, initials: "JT" },
  { name: "Anna L.", role: "COO, GreenBuild Corp", text: "Outstanding project coordination. They kept everything on track and all stakeholders aligned. Truly professional.", rating: 5, initials: "AL" },
  { name: "Peter S.", role: "Managing Director, AutoParts Int.", text: "We've worked with many consultancies, but PINECO stands apart. Their hands-on approach and genuine commitment to our success made all the difference.", rating: 5, initials: "PS" },
  { name: "Elena R.", role: "HR Director, MedTech Solutions", text: "The leadership training programme was exactly what we needed. Our managers are now more confident, more strategic, and more effective.", rating: 5, initials: "ER" },
  { name: "Thomas B.", role: "Project Lead, Municipal Council", text: "PINECO's coordination of our smart city project was exemplary. Complex stakeholder management handled with professionalism and ease.", rating: 5, initials: "TB" },
];
