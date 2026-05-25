export type Tutor = {
    id: string;
    name: string;
    subjects: string[];
    experience: string;
    qualification: string;
    timings: string;
    areas: string[];
    rating: number;
    classes: string[];
    boards: string[];
    availability: "Morning" | "Evening" | "Both";
    photo: string;
    bio: string;
  };
  
  export const tutors: Tutor[] = [
    {
      id: "t1",
      name: "Anjali Mishra",
      subjects: ["Mathematics", "Physics"],
      experience: "8 years",
      qualification: "M.Sc. Physics, B.Ed.",
      timings: "4:00 PM – 8:00 PM",
      areas: ["Civil Lines", "Georgetown", "Tagore Town"],
      rating: 4.9,
      classes: ["9", "10", "11", "12"],
      boards: ["CBSE", "ICSE"],
      availability: "Evening",
      photo: "/tutors/t1.png",
      bio: "Specializes in board-exam preparation with a focus on conceptual clarity and problem-solving speed.",
    },
  
    {
      id: "t2",
      name: "Rohit Verma",
      subjects: ["Chemistry", "Biology"],
      experience: "6 years",
      qualification: "M.Sc. Chemistry",
      timings: "5:00 PM – 9:00 PM",
      areas: ["Allenganj", "Katra", "Civil Lines"],
      rating: 4.8,
      classes: ["9", "10", "11", "12"],
      boards: ["CBSE", "UP Board"],
      availability: "Evening",
      photo: "/tutors/t2.png",
      bio: "Friendly approach to science with weekly mock tests and doubt-clearing sessions.",
    },
  
    {
      id: "t3",
      name: "Priya Singh",
      subjects: ["English", "Social Studies"],
      experience: "5 years",
      qualification: "M.A. English, B.Ed.",
      timings: "7:00 AM – 11:00 AM",
      areas: ["Mumfordganj", "Tagore Town"],
      rating: 4.7,
      classes: ["6", "7", "8", "9", "10"],
      boards: ["CBSE", "ICSE", "UP Board"],
      availability: "Morning",
      photo: "/tutors/t3.png",
      bio: "Builds strong reading and writing fundamentals through interactive lessons.",
    },
  
    {
      id: "t4",
      name: "Sandeep Yadav",
      subjects: ["Mathematics"],
      experience: "10 years",
      qualification: "M.Sc. Maths",
      timings: "3:00 PM – 9:00 PM",
      areas: ["Jhunsi", "Naini", "Civil Lines"],
      rating: 4.9,
      classes: ["8", "9", "10", "11", "12"],
      boards: ["CBSE", "UP Board"],
      availability: "Both",
      photo: "/tutors/t4.png",
      bio: "A decade of helping students crack JEE foundation and board mathematics.",
    },
  
    {
      id: "t5",
      name: "Neha Tripathi",
      subjects: ["Hindi", "Sanskrit"],
      experience: "7 years",
      qualification: "M.A. Hindi",
      timings: "10:00 AM – 2:00 PM",
      areas: ["Rajapur", "Allenganj"],
      rating: 4.8,
      classes: ["1", "2", "3", "4", "5", "6", "7", "8"],
      boards: ["CBSE", "UP Board"],
      availability: "Morning",
      photo: "/tutors/t5.png",
      bio: "Gentle, patient mentor for younger students with a love for literature.",
    },
  
    {
      id: "t6",
      name: "Aakash Pandey",
      subjects: ["Computer Science", "Mathematics"],
      experience: "4 years",
      qualification: "B.Tech CSE",
      timings: "6:00 PM – 10:00 PM",
      areas: ["Civil Lines", "Georgetown"],
      rating: 4.6,
      classes: ["9", "10", "11", "12"],
      boards: ["CBSE", "ICSE"],
      availability: "Evening",
      photo: "/tutors/t6.png",
      bio: "Hands-on coding sessions alongside the school curriculum.",
    },
  
    {
      id: "t7",
      name: "Megha Srivastava",
      subjects: ["All Subjects"],
      experience: "9 years",
      qualification: "M.A., B.Ed.",
      timings: "8:00 AM – 1:00 PM",
      areas: ["Katra", "Allenganj", "Mumfordganj"],
      rating: 4.9,
      classes: ["1", "2", "3", "4", "5"],
      boards: ["CBSE", "ICSE", "UP Board"],
      availability: "Morning",
      photo: "/tutors/t7.png",
      bio: "Holistic primary-class mentor focused on foundation and habits.",
    },
  
    {
      id: "t8",
      name: "Vikas Tiwari",
      subjects: ["Physics", "Mathematics"],
      experience: "12 years",
      qualification: "M.Sc., M.Ed.",
      timings: "5:00 PM – 9:00 PM",
      areas: ["Jhunsi", "Phaphamau", "Civil Lines"],
      rating: 5.0,
      classes: ["11", "12"],
      boards: ["CBSE", "ICSE"],
      availability: "Evening",
      photo: "/tutors/t8.png",
      bio: "Senior mentor for Class 11–12 with deep board and entrance-exam expertise.",
    },
  ];