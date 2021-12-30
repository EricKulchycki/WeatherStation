import { useRouter } from "next/router";
import { Button, Sidebar, Nav } from "grommet";
import { Action, BarChart } from "grommet-icons";

function Menu() {
  const router = useRouter();
  return (
    <Sidebar
      background="neutral-2"
      fill="horizontal"
      flex="grow"
      width={{ max: "100px" }}
      header={<div />}
    >
      <Nav gap="small">
        <Button
          icon={<BarChart size="large" />}
          hoverIndicator
          onClick={() => router.push("/")}
        />
      </Nav>
    </Sidebar>
  );
}

export default Menu;
