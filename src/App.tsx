/* eslint-disable @typescript-eslint/no-unused-vars */
import { Grid, GridItem, Show } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import { GameGrid } from "./components/GameGrid";
import { GenreList } from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";

function App() {
  const [seletedGenre, setSeletedGenre] = useState<Genre | null>(null);

  return (
    <Grid
      gridTemplateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem gridArea="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem gridArea="aside" paddingX={5}>
          <GenreList onSelectGenre={(genre) => setSeletedGenre(genre)} />
        </GridItem>
      </Show>
      <GridItem gridArea="main">
        <GameGrid selectedGenre={seletedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
