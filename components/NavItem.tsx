/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

interface NavItemsProps {
  route: string;
  label: string;
  chosen: boolean;
}

export default function NavItem(props: NavItemsProps) {
  const { route, label, chosen } = props;
  return (
    <li>
      <a
        class={tw `block px-3 py-2 rounded-md ${chosen ? "bg-pink-700" : "bg-sky-700"} text-white hover:bg-pink-700`}
        href={route}
      >
        {label}
      </a>
    </li>
  );
}