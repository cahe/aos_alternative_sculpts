/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import NavItem from "../../components/NavItem.tsx";
import { PageProps } from "$fresh/server.ts";

export default function AddPage(props: PageProps) {
  const { chosenAlliance } = props.params;
  const grandAllianceList = ["order", "chaos", "destruction", "death"];
  return (
    <main class={tw`p-4 mx-auto max-w-screen-sm shadow-xl rounded-lg`}>
      <div class={tw`mb-3`}>
        <h1 class={tw`font-bold text-xl`}>Choose Grand Alliance</h1>
      </div>
      <nav>
        <ul class={tw`flex space-x-3 text-sm font-medium`}>
          {grandAllianceList.map((grandAlliance) => (
            <NavItem
              route={"/add/" + grandAlliance}
              label={grandAlliance.charAt(0).toUpperCase() +
                grandAlliance.slice(1)}
              chosen={chosenAlliance == grandAlliance}
            />
          ))}
        </ul>
      </nav>
    </main>
  );
}
