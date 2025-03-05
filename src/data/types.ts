export type SiteConfig = {
	author: string
	title: string
	description: string
	lang: string
  ogImage: {
    src: string
    alt: string
  }
	ogLocale: string
	date: {
		locale: string | string[] | undefined
		options: Intl.DateTimeFormatOptions
	}
}

export type PaginationLink = {
	url: string
	text?: string
	srLabel?: string
}

export type SiteMeta = {
	title: string
	description?: string
	ogImage?: string | undefined
	articleDate?: string | undefined
}
export type NavLink = {
  title: string; 
  url: string;
  external?: boolean;
};

export type NavLinks = {
  [key: string]: NavLink;
};

export type SocialLink = {
  title: string;
  url: string;
  icon: string;
};

export type SocialLinks = {
  [key: string]: SocialLink;
};

export interface GithubInfo {
  username: string;
  repo: string;
  readonly editUrl: string;

}
