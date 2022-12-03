import { Search } from "components/home";
import { List } from "components/shared";
import heros from "mocks/heros.mock.json";

export default function Home() {
  return (
    <>
      <List type="hero" title="Select your super hero" items={heros} />

      <Search />
    </>
  );
}
