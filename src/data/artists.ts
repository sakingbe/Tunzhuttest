import __authors from "./jsons/__users.json";
import a1 from "./artists/1.jpg";
import a2 from "./artists/2.jpg";
import a3 from "./artists/3.jpg";
import a4 from "./artists/4.jpg";
import a5 from "./artists/12.jpg";
import a6 from "./artists/6.jpg";
import a7 from "./artists/7.jpg";
import a8 from "./artists/8.jpg";
import a9 from "./artists/9.jpg";
import a10 from "./artists/11.jpg";
import { PostAuthorType } from "./types";

let as = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10];

const DEMO_AUTHORS: PostAuthorType[] = __authors.map((item, index) => ({
  ...item,
  artist: as[index],
}));

export { DEMO_AUTHORS };
