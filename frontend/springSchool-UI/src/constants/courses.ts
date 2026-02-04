import { Course } from "../types";

export const COURSES: Course[] = [
    {
        title: "Educational Programs",
        description:
            "Educations programmes covering core concepts of Maths, English, Science.",
        lessons: 43,
        rating: 4.9,
        category: "Education",
        categoryColor: "bg-blue-100 text-blue-800",
        image: "📖",
    },
    {
        title: "Best Meditation Classes",
        description:
            "Special program focusing the meditation to encourage students from early age.",
        lessons: 72,
        rating: 4.6,
        category: "Meditation",
        categoryColor: "bg-green-100 text-green-800",
        image: "🧘",
    },
    {
        title: "Games Program in a Week",
        description:
            "Games program encouraging the children on the physical activities.",
        lessons: 14,
        rating: 5.0,
        category: "Games",
        categoryColor: "bg-orange-100 text-orange-800",
        image: "🎮",
    },
];
