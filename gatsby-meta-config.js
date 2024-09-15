module.exports = {
  siteUrl: "https://publdaze.github.io/test",
  meta: {
    title: `__의 블로그`,
    description: `__의 블로그입니다.`,
    author: `__`,
  },
  author: {
    name: `__`,
    social: {
      resume: ``, // `https://__.github.io/resume`,
      github: ``, // `https://github.com/__`,
      email: ``, // `__@example.com`,
    },
  },
  introduction: {
    sub: `안녕하세요!`,
    main: {
      start: `항상`,
      highlight: `"왜?"`,
      end: `를 고민하고 싶은 개발자 김은지입니다.`,
    },
  },
  categories: [
    {
      name: "Category1",
      subCategories: [
        {
          name: "Subcategory1",
          href: "/?category=clean_code",
        },
        {
          name: "Subcategory2",
          href: "/?category=effective_java",
        },
      ],
    },
    { name: "Category2" },
    {
      name: "Category3",
      subCategories: [
        {
          name: "Subcategory3",
          href: "/?category=Git",
        },
      ],
    },
  ],
  comments: {
    utterances: {
      repo: "publdaze.github.io/test",
    },
  },
};
