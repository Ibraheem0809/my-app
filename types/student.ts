export type Student = {
    _id: string;
    name: string;
    className: string;
    board: "CBSE" | "ICSE" | "UP Board";
    location: string;
    mentor: string;
    subject: string[];
    photo: string;
  };