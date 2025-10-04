const navLinks = [
  { id: "collections", title: "Collections" },
  { id: "all-rangers", title: "All Rangers" },
  { id: "features", title: "Features" },
  { id: "about", title: "About Us" },
  { id: "contact", title: "Contact" },
];
const socials = [
  { name: "Instagram", icon: "/insta.png", url: "#" },
  { name: "X (Twitter)", icon: "/x.png", url: "#" },
  { name: "Facebook", icon: "/fb.png", url: "#" },
];

const allRengers = [
  {
    id: 1,
    name: "Red Ranger",
    title: "Captain Marvelous",
    description:
      "Role: Team Leader, Captain of the Gokaigers Weapon: Gokai Saber & Gokai Gun (dual-wield) Powers:Super agility, combat skill, fearless leadership. Can transform into past Red Rangers using Ranger Keys. Finishing attack: Final Wave Slash with his saber. Personality: Bold, daring, values freedom.",
    image: "Red.jpeg",
    color: "red",
  },
  {
    id: 2,
    name: "Blue Ranger",
    title: "Joe Gibken",
    description:
      "Role: The swordsman of the team Weapon: Dual Gokai Sabers (expert fencer) Powers: Master swordsman, unmatched in close combat. Uses Blue Ranger Keys to transform into past Blue Rangers. Very skilled in defensive maneuvers. Personality: Calm, disciplined, loyal to Marvelous.",
    image: "Blue.jpeg",
    color: "blue-600",
  },
  {
    id: 3,
    name: "Pink Ranger",
    title: "Casual Crossbody",
    description:
      "Lightweight and versatile crossbody bag with adjustable straps. Ideal for hands-free comfort.",
    image: "Pink.jpeg",
    color: "pink-600",
  },
  {
    id: 4,
    name: "Yellow Ranger",
    title: "Ahim de Famille",
    description:
      "Role: The graceful and noble warrior (Princess turned Pirate) Weapon: Gokai Gun (marksman) Powers: Expert in ranged combat. Uses Pink Ranger Keys to transform into past Pink Rangers. Strong willpower, often underestimated because of her elegance. Personality: Kind-hearted, gentle, but incredibly strong-willed.",
    image: "Yellow.jpeg",
    color: "yellow-600",
  },
  {
    id: 5,
    name: "Green Ranger",
    title: "Don Dogoier aka “Doc” ",
    description:
      "Role: The engineer & mechanic of the team Weapon: Gokai Gun (blaster-style) Powers: Tech genius – maintains the Gokai Galleon (their ship). Uses Green Ranger Keys to transform into past Green Rangers.Not the strongest fighter, but incredibly creative and supportive. Personality: Comic relief, clumsy but very intelligent and caring.",
    image: "Green.jpeg",
    color: "green-600",
  },
];

const counterItems = [
  { value: 20, suffix: "+", label: "Years of Experience" },
  { value: 120, suffix: "+", label: "Shipping Countries" },
  { value: 32, suffix: "+", label: "Completed Projects" },
  { value: 100, suffix: "%", label: "Customer Satisfaction" },
];

export { navLinks, socials, allRengers, counterItems };