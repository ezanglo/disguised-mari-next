export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Disguised Mari",
	description: "Assisting you as you progress in the game by giving you recommendation and meta builds.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Heroes",
      href: "/heroes",
    },
    {
      label: "Equips",
      href: "/equips",
    },
    {
      label: "Traits",
      href: "/traits",
    },
    {
      label: "Lineups",
      href: "/lineups",
    },
    {
      label: "About",
      href: "/about",
    }
	],
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Team",
			href: "/team",
		},
		{
			label: "Calendar",
			href: "/calendar",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://ko-fi.com/disguisedmari"
	},
};
