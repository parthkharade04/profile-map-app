export interface Profile {
  id: number;
  name: string;
  photo: string;
  description: string;
  address: string;
  latitude: number;
  longitude: number;
}

export const profiles: Profile[] = [
  {
    id: 1,
    name: "John Doe",
    photo: "https://randomuser.me/api/portraits/men/1.jpg",
    description: "Software Engineer at Google",
    address: "1600 Amphitheatre Parkway, Mountain View, CA",
    latitude: 37.4221,
    longitude: -122.0841,
  },
  {
    id: 2,
    name: "Jane Smith",
    photo: "https://randomuser.me/api/portraits/women/2.jpg",
    description: "Product Manager at Amazon",
    address: "410 Terry Ave N, Seattle, WA",
    latitude: 47.6221,
    longitude: -122.3361,
  },
];
