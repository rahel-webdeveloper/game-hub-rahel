import { Grid, Show, GridItem, Box, Flex } from "@chakra-ui/react";
import { GameGrid } from "../components/GameGrid";
import { GameHeading } from "../components/GameHeading";
import { GenreList } from "../components/GenreList";
import { PlatformSelector } from "../components/PlatformSelector";
import { SortSelector } from "../components/SortSelector";

const HomePage = () => {
  return (
    <Grid
      gridTemplateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem gridArea="aside" paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem gridArea="main">
        <Box paddingLeft={2}>
          <GameHeading />
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector />
            </Box>
            <SortSelector />
          </Flex>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
