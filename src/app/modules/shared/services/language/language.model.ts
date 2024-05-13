enum LangugesE {
  itly = 'Italian',
  EN = 'English',
  GER = 'German',
}

type LanguagesT = {
  code: keyof typeof LangugesE;
  name: LangugesE;
  picture: string;
  id: number;
};

export const languages: LanguagesT[] = [
  {
    code: 'EN',
    name: LangugesE.EN,
    picture: '/assets/images/lang/EN.png',
    id: 0,
  },
  {
    code: 'itly',
    name: LangugesE.itly,
    picture: '/assets/images/lang/itly.png',
    id: 1,
  },
  {
    code: 'GER',
    name: LangugesE.GER,
    picture: '/assets/images/lang/GER.png',
    id: 2,
  },
];
