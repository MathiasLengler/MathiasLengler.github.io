export interface Links {
  github: string;
  demo?: string;
}

export interface Project {
  title: string;
  links: Links;
  teaserImgSrc: string;
}

export const projects: Array<Project> = [
  {
    title: "TimesTableWebGL",
    links: {
      github: "https://github.com/MathiasLengler/TimesTableWebGL",
      demo: "/TimesTableWebGL/"
    },
    teaserImgSrc: "res/img/timestable-teaser.png"
  },
  {
    title: "dictcc-rust",
    links: {
      github: "https://github.com/kedeggel/dictcc-rust"
    },
    teaserImgSrc: "res/img/dictcc-teaser.PNG"
  },
  {
    title: "MinesweeperSoEn",
    links: {
      github: "https://github.com/MathiasLengler/MinesweeperSoEn"
    },
    teaserImgSrc: "res/img/minesweeper-teaser.png"
  },
  {
    title: "SolveService",
    links: {
      github: "https://github.com/MathiasLengler/SolveService"
    },
    teaserImgSrc: "res/img/solveservice-teaser.png"
  },

];