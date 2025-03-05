import type { NavLinks, SiteConfig, SocialLinks, GithubInfo} from '@/types'


export const siteConfig: SiteConfig = {
	// Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
	author: 'Nick Stull',
	// Meta property used to construct the meta title property, found in src/components/BaseHead.astro L:11
	title: 'TinkerNerd',
	// Meta property used as the default description meta property
	description: 'Welcome, come tinker with me.',
  // OG Image
  ogImage: {
    src: 'https://tinkerverse.tech/og-image.png',
    alt: 'TinkerVerse',
  },
	// HTML lang property, found in src/layouts/Base.astro L:18
	lang: 'en',
	// Meta property, found in src/components/BaseHead.astro L:42
	ogLocale: 'en_US',
	// Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
	date: {
		locale: 'en-US',
		options: {
			day: 'numeric',
			month: 'short',
			year: 'numeric'
		}
	}
}

export const GithubRepo: GithubInfo = {
  username: 'tinkernerd',
  repo: 'aviation-notebook',
  get editUrl() {
    return `https://github.com/${this.username}/${this.repo}/tree/main`;
  }
};


export const COMMUNITY_INVITE_URL = `https://astro.build/chat`

export const MenuLinks: NavLinks = {
	home: {
		title: 'Home',
		url: '/'
	},
  projects: {
    title: 'Projects',
    url: '/projects',
  },
  resume: {
    title: 'Resume',
    url: 'https://resume.tinkernerd.dev',
    external: true // Add this flag for external links
  },
  contact: {
    title: 'Contact',
    url: 'https://contact.tinkernerd.dev',
    external: true
  },
  photography: {
    title: 'Photography',
    url: 'https://photos.tinkernerd.dev',
    external: true
  }
}

export const socialLinks: SocialLinks = {
  github: {
    title: 'GitHub',
    url: 'https://github.com/tinkernerd/',
    icon: 'tabler:brand-github',
  },
  linkedin: {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/nicholasp-stull/',
    icon: 'tabler:brand-linkedin',
  },
  instagram: {
    title: 'Instagram',
    url: 'https://www.instagram.com/therealnicholasstull/',
    icon: 'tabler:brand-instagram',
  },
  email: {
    title: 'Email',
    url: 'mailto:nick@tinkernerd.dev',
    icon: 'tabler:brand-mailgun',
  },
  portfolio: {
    title: 'Portfolio',
    url: 'https://photos.tinkernerd.com',
    icon: 'material-symbols:camera',
  }
};


