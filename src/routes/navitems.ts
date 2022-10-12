import type { NavItem } from "src/types"

export const navItems: NavItem[] = [
	{
		label: "Home",
		path: "/",
	},
	{
		label: "Tools",
		path: "/tools",
		subItems: [
			{
				label: "Character Creator",
				path: "/character-creator",
			},
			{
				label: "Dice Roller",
				path: "/dice-roller",
			},
		],
	},
	{
		label: "Resources",
		path: "/resources",
	},
];
