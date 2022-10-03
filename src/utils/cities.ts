export interface CityInfo {
  slug: string;
  name: string;
}

export const brazilInfo: CityInfo = {
  slug: "BR",
  name: "Brasil",
};

export const citiesRaw: CityInfo[] = [
  {
    slug: "AC",
    name: "ACRE",
  },
  {
    slug: "AL",
    name: "ALAGOAS",
  },
  {
    slug: "AP",
    name: "AMAPÁ",
  },
  {
    slug: "AM",
    name: "AMAZONAS",
  },
  {
    slug: "BA",
    name: "BAHIA",
  },
  {
    slug: "CE",
    name: "CEARÁ",
  },
  {
    slug: "DF",
    name: "DISTRITO FEDERAL",
  },
  {
    slug: "ES",
    name: "ESPÍRITO SANTO",
  },
  {
    slug: "ZZ",
    name: "EXTERIOR",
  },
  {
    slug: "GO",
    name: "GOIÁS",
  },
  {
    slug: "MA",
    name: "MARANHÃO",
  },
  {
    slug: "MT",
    name: "MATO GROSSO",
  },
  {
    slug: "MS",
    name: "MATO GROSSO DO SUL",
  },
  {
    slug: "MG",
    name: "MINAS GERAIS",
  },
  {
    slug: "PR",
    name: "PARANÁ",
  },
  {
    slug: "PB",
    name: "PARAÍBA",
  },
  {
    slug: "PA",
    name: "PARÁ",
  },
  {
    slug: "PE",
    name: "PERNAMBUCO",
  },
  {
    slug: "PI",
    name: "PIAUÍ",
  },
  {
    slug: "RJ",
    name: "RIO DE JANEIRO",
  },
  {
    slug: "RN",
    name: "RIO GRANDE DO NORTE",
  },
  {
    slug: "RS",
    name: "RIO GRANDE DO SUL",
  },
  {
    slug: "RO",
    name: "RONDÔNIA",
  },
  {
    slug: "RR",
    name: "RORAIMA",
  },
  {
    slug: "SC",
    name: "SANTA CATARINA",
  },
  {
    slug: "SE",
    name: "SERGIPE",
  },
  {
    slug: "SP",
    name: "SÃO PAULO",
  },
  {
    slug: "TO",
    name: "TOCANTINS",
  },
];

export function findDistrictByName(name: string): CityInfo | null {
  const arr = citiesRaw.filter((info) => info.name === name);
  if (arr.length === 0) {
    return null;
  }
  return arr[0];
}

export function findDistrictBySlug(slug: string): CityInfo | undefined {
  if(slug.toUpperCase() === "BR") return brazilInfo;
  const arr = citiesRaw.filter((info) => info.slug === slug);
  if (arr.length === 0) {
    return undefined;
  }
  return arr[0];
}

export function getVoteInfoByInfo(info?: CityInfo): string | null {
  if (info === undefined) {
    return null;
  }
  const uf = info.slug.toLowerCase();
  return `https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/${uf}/${uf}-c0001-e000544-r.json`;
}
