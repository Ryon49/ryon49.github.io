export interface Blog {
  title: string,
  tagline: string,
}

export interface Social {
  type: string,
  icon: string,
  link: string,
  blank: Boolean | undefined,
}
