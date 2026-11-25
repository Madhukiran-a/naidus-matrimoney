export interface MatrimonyProfile {
  id: number;
  name: string;
  age: number;
  gender: string;
  location: string;
  education: string;
  profession: string;
  language: string;
  compatibility: number;
  verified: boolean;
  image: string;
}

export const MATRIMONY_PROFILES: MatrimonyProfile[] = [
  {
    id: 1,
    name: 'Vishnu Priya',
    age: 30,
    gender: 'Female',
    location: 'Hyderabad, Telangana',
    education: 'MBA',
    profession: 'Software Professional',
    language: 'Telugu',
    compatibility: 92,
    verified: true,
    image: '/images/profile-ananya.png'
  },
  {
    id: 2,
    name: 'Roja',
    age: 50,
    gender: 'Female',
    location: 'Vijayawada, Andhra Pradesh',
    education: 'B.Tech',
    profession: 'Software Engineer',
    language: 'Telugu',
    compatibility: 89,
    verified: true,
    image: '/images/profile-arjun.png'
  },
  {
    id: 3,
    name: 'Sree',
    age: 22,
    gender: 'Female',
    location: 'Visakhapatnam, Andhra Pradesh',
    education: 'M.Tech',
    profession: 'IT Professional',
    language: 'Telugu',
    compatibility: 94,
    verified: true,
    image: '/images/profile-sravani.png'
  },
  {
    id: 4,
    name: 'Leela',
    age: 25,
    gender: 'Female',
    location: 'Guntur, Andhra Pradesh',
    education: 'MBA',
    profession: 'Business',
    language: 'Telugu',
    compatibility: 91,
    verified: true,
    image: '/images/profile-vamsi.png'
  }
];
