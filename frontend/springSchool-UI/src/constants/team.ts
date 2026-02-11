export interface Teacher {
  name: string;
  image: string; // Emoji placeholder for now
  social: {
    facebook: string;
    twitter: string;
    linkedin: string;
  };
}

export const TEACHERS: Teacher[] = [
  {
    name: 'Emma Watson',
    image: '👩‍🏫',
    social: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Enrique Lal',
    image: '👨‍🏫',
    social: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Smith Ker',
    image: '👨‍💼',
    social: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Forkler Lee',
    image: '👩‍💼',
    social: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
    },
  },
];
