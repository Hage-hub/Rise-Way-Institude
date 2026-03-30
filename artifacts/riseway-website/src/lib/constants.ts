const BASE_URL = import.meta.env.BASE_URL.replace(/\/$/, "");

export const IMAGES = {
  hero: `${BASE_URL}/84518805-efde-44ee-a139-77fa0a21feac_1774484255904.jpg`,
  creativeDept: `${BASE_URL}/595a69cb-e9c2-45e1-ab1c-555276772c3a_1774484255900.jpg`,
  techDept1: `${BASE_URL}/5312c130-df7b-4a55-9ef8-bd301802fbf9_(1)_1774484255901.jpg`,
  techDept2: `${BASE_URL}/5312c130-df7b-4a55-9ef8-bd301802fbf9_1774484255902.jpg`,
  interiorDeco: `${BASE_URL}/65612192-e94c-47b6-ad2e-e8c855d4c79a_1774484255903.jpg`,
  director: `${BASE_URL}/a4c549a3-4360-41d9-9b63-b114d034e39a_1774484255905.jpg`,
  review: `${BASE_URL}/c661beaa-bc0b-4387-933a-e1000bd616fb_1774484255905.jpg`,
  catering: `${BASE_URL}/c790cfb8-e7a0-41bc-8dcb-8ffc544f95b2_1774484255906.jpg`,
  classroom: `${BASE_URL}/d1e31b7e-fba7-4f00-924f-2dfd00b1535c_1774484256065.jpg`,
  dstv1: `${BASE_URL}/d29b82c2-767f-42f8-b946-4b6fcdb9074e_1774484256130.jpg`,
  plumbing: `${BASE_URL}/dfd72fe5-80bb-4a8e-acee-7e05c320dc1f_1774484256131.jpg`,
  shirt: `${BASE_URL}/e19b85a7-8dfb-478f-8b8a-24eee1d441e8_1774484256132.jpg`,
  dstv2: `${BASE_URL}/e681fa8e-5052-402e-9784-6f5589d4d34b_1774484256133.jpg`,
  electric: `${BASE_URL}/ed840186-1099-4766-a03b-c21284bfe735_1774484256134.jpg`,
  orientation: `${BASE_URL}/f18a95bf-60cd-40ae-b22a-6b45019d4bac_1774484256135.jpg`,
  speaker: `${BASE_URL}/fd96c48e-458a-4376-8085-2d91896367fb_1774484256136.jpg`,
  secretary: `${BASE_URL}/secretary.jpg`,
  galleryNew1: `${BASE_URL}/gallery_new1.jpg`,
  galleryNew2: `${BASE_URL}/gallery_new2.jpg`,
  galleryNew3: `${BASE_URL}/gallery_new3.jpg`,
  galleryNew4: `${BASE_URL}/gallery_new4.jpg`,
  galleryNew5: `${BASE_URL}/gallery_new5.jpg`,
  galleryNew6: `${BASE_URL}/gallery_new6.jpg`,
  galleryNew7: `${BASE_URL}/gallery_new7.jpg`,
  galleryNew8: `${BASE_URL}/gallery_new8.jpg`,
  galleryNew9: `${BASE_URL}/gallery_new9.jpg`,
  galleryNew10: `${BASE_URL}/gallery_new10.jpg`,
};

export const SITE_INFO = {
  name: "RISE-WAY Technical And Professional Institute",
  shortName: "RISE-WAY",
  motto: "Equipping Hands and Uplifting Lives",
  location: "Gotumo Town, Kakata City, Margibi County, Liberia - Moses Ndorbor Building",
  director: "Stephen Tw Mulbah III",
  phone1: "088-912-0448",
  phone2: "0778-444-308",
  email: "risewaytechpro@gmail.com",
};

export const DEPARTMENTS = [
  {
    id: "creative",
    name: "Creative Department",
    description: "Unleash your imagination and turn your passion into a profitable career with our hands-on creative courses.",
    image: IMAGES.creativeDept,
    programs: [
      "Cake Decoration",
      "Interior Decoration & Event Planning",
      "Pastry",
      "Catering",
      "Tie & Dye",
      "Ice Cream Making"
    ]
  },
  {
    id: "technical",
    name: "Technical Department",
    description: "Master hard skills that are in high demand. Learn to build, repair, and maintain the infrastructure of tomorrow.",
    image: IMAGES.techDept1,
    programs: [
      "POP (Plaster of Paris)",
      "Electronics & Gadget Repair",
      "Electrical Installation",
      "Plumbing",
      "Satellite & DSTV Installation",
      "Air Conditioning & Refrigeration"
    ]
  },
  {
    id: "professional",
    name: "Professional Department",
    description: "Develop the cognitive and digital skills necessary to thrive in modern office and business environments.",
    image: IMAGES.classroom,
    programs: [
      "Computer Literacy",
      "Graphic Design",
      "Business & Entrepreneurship",
      "Financial Management"
    ]
  }
];
