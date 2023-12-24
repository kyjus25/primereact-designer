export const getOpts = (Astro: any) => {
  return JSON.parse(Astro.url.searchParams.get('opts') || '[["vue","lara"]]');
};

export const getThemes = async (opts: any) => {
  let themes = {};
  for (let i = 0; i < opts.length; i++) {
    switch (opts[i][1]) {
      case 'lara':
        // @ts-ignore
        themes[opts[i][1]] = await import(`primereact/passthrough/tailwind`).then((i) => (i.default as any).default);
        break;
      default:
        // @ts-ignore
        themes[opts[i][1]] = await import(`../themes/${opts[i][1]}.js`).then((i) => i.default);
        break;
    }
  }
  return themes;
};
