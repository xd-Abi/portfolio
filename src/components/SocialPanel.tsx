import { Social, Socials } from "@/content/socials";

export default function SocialPanel() {
  return (
    <div className="hidden lg:block">
      <div className="fixed left-10 top-0 h-screen flex flex-col justify-center items-center gap-8">
        {Socials.map((social: Social, index: number) => (
          <a key={index} href={social.url} aria-label={social.name}>
            <social.icon className="stroke-gray-main transition-all group-hover:scale-105 group-hover:stroke-gray-300" />
          </a>
        ))}
      </div>
    </div>
  );
}
