export type Student = {
    id: string;
    name: string;
    className: string;
    board: "CBSE" | "ICSE" | "UP Board";
    location: string;
    mentor: string;
    subjects: string[];
    photo: string;
  };
  
  export const students: Student[] = [
    { id: "s1", name: "Aarav Sharma", className: "3", board: "CBSE", location: "Civil Lines", mentor: "Megha Srivastava", subjects: ["EVS", "Maths", "English"], photo: "/tutors/t1.png" },
    { id: "s2", name: "Ishita Gupta", className: "5", board: "ICSE", location: "Tagore Town", mentor: "Megha Srivastava", subjects: ["Maths", "Science"], photo: "/tutors/t2.png" },
    { id: "s3", name: "Vivaan Kumar", className: "4", board: "UP Board", location: "Rajapur", mentor: "Neha Tripathi", subjects: ["Hindi", "Maths"], photo: "/tutors/t3.png" },
    { id: "s4", name: "Anaya Pandey", className: "2", board: "CBSE", location: "Allenganj", mentor: "Megha Srivastava", subjects: ["English", "Maths"], photo: "/tutors/t4.png" },
  
    { id: "s5", name: "Kabir Singh", className: "7", board: "CBSE", location: "Georgetown", mentor: "Priya Singh", subjects: ["English", "SST"], photo: "/tutors/t5.png" },
    { id: "s6", name: "Saanvi Mishra", className: "8", board: "ICSE", location: "Mumfordganj", mentor: "Priya Singh", subjects: ["English", "Science"], photo: "/tutors/t6.png" },
    { id: "s7", name: "Aditya Tiwari", className: "6", board: "UP Board", location: "Katra", mentor: "Neha Tripathi", subjects: ["Hindi", "Sanskrit"], photo: "/tutors/t7.png" },
    { id: "s8", name: "Myra Verma", className: "8", board: "CBSE", location: "Civil Lines", mentor: "Sandeep Yadav", subjects: ["Maths"], photo: "/tutors/t8.png" },
  
    { id: "s9", name: "Arjun Yadav", className: "10", board: "CBSE", location: "Jhunsi", mentor: "Sandeep Yadav", subjects: ["Maths", "Science"], photo: "/tutors/t9.png" },
    { id: "s10", name: "Riya Srivastava", className: "10", board: "ICSE", location: "Civil Lines", mentor: "Anjali Mishra", subjects: ["Physics", "Maths"], photo: "/tutors/t10.png" },
    { id: "s11", name: "Dev Pandey", className: "9", board: "CBSE", location: "Naini", mentor: "Rohit Verma", subjects: ["Chemistry", "Biology"], photo: "/tutors/t11.png" },
    { id: "s12", name: "Tanvi Joshi", className: "9", board: "UP Board", location: "Allenganj", mentor: "Aakash Pandey", subjects: ["Computer Sci.", "Maths"], photo: "/tutors/t12.png" },
  
    { id: "s13", name: "Aryan Mishra", className: "12", board: "CBSE", location: "Civil Lines", mentor: "Vikas Tiwari", subjects: ["Physics", "Maths"], photo: "/tutors/t13.png" },
    { id: "s14", name: "Diya Agrawal", className: "11", board: "CBSE", location: "Georgetown", mentor: "Anjali Mishra", subjects: ["Physics", "Chemistry"], photo: "/tutors/t14.png" },
    { id: "s15", name: "Yash Tripathi", className: "12", board: "ICSE", location: "Tagore Town", mentor: "Vikas Tiwari", subjects: ["Maths", "Physics"], photo: "/tutors/t15.png" },
    { id: "s16", name: "Khushi Singh", className: "11", board: "UP Board", location: "Phaphamau", mentor: "Rohit Verma", subjects: ["Biology", "Chemistry"], photo: "/tutors/t16.png" },
  ];