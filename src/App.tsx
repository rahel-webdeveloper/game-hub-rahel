import { Grid, GridItem, Show } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <Grid
      gridTemplateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem gridArea="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem bg="pink.300" gridArea="aside">
          aside
        </GridItem>
      </Show>
      <GridItem bg="blue.300" gridArea="main">
        main
      </GridItem>
    </Grid>
  );
}

export default App;
