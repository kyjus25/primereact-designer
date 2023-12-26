export const getOpts = (Astro: any) => {
  return JSON.parse(Astro.url.searchParams.get('opts') || '[["vue","lara"]]');
};

export const getThemes = async (opts: any) => {
  let themes = {};
  for (let i = 0; i < opts.length; i++) {
    switch (opts[i][1]) {
      case 'lara':
        // @ts-ignore
        if (opts[i][0] === 'react')
          themes[opts[i][1]] = await import(`primereact/passthrough/tailwind`).then((i) => (i.default as any).default);
        if (opts[i][0] === 'vue') themes[opts[i][1]] = await import(`primevue/passthrough/tailwind`).then((i) => i.default as any);
        break;
      default:
        // @ts-ignore
        themes[opts[i][1]] = await import(`../themes/${opts[i][1]}.ts`).then((i) => i.default);
        break;
    }
  }
  return themes;
};
