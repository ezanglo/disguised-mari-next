import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { DiscordIcon, GithubIcon, HeartFilledIcon } from "@/components/icons";

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block text-center justify-center">
				<h1 className={title()}>Time to add&nbsp;</h1>
				<h1 className={title({ color: "violet" })}>Disguised Mari&nbsp;</h1>
				<br />
				<h1 className={title()}>
					to your server.
				</h1>
				<h2 className={subtitle({ class: "mt-4" })}>
					Mari will assist you as you progress in the game by giving you recommendation and meta builds.
				</h2>
			</div>

			<div className="flex gap-3">
				<Link
					isExternal
					as={NextLink}
					href={siteConfig.links.discord}
					className={buttonStyles({ variant: "flat", radius: "full" })}
				>
					<DiscordIcon size={20} />
					Add to Discord
				</Link>
				<Link
					isExternal
					as={NextLink}
					className={buttonStyles({ variant: "bordered", radius: "full" })}
					href={siteConfig.links.sponsor}
				>
					<HeartFilledIcon size={20} />
					Support Us
				</Link>
			</div>

			<div className="mt-8">
				<Snippet hideSymbol hideCopyButton variant="flat">
					<span>
						Get started by editing <Code color="primary">app/page.tsx</Code>
					</span>
				</Snippet>
			</div>
		</section>
	);
}
