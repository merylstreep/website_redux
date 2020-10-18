import * as React from "react";
import { SectionContainer } from "../components/SectionContainer";
import { Grid, Typography } from "@material-ui/core";

interface HighlightsProps {}

export const Highlights: React.FC<HighlightsProps> = () => {
  return (
    <Grid container direction={"row"} alignItems={"stretch"}>
      <SectionContainer>
        <Typography variant={"h4"} color={"textSecondary"}>hyperloop</Typography>
        <Typography variant={"body2"}>
          imagine this, being able to go from one side of the country to the
          other at the speed of sound, the newest mode of high speed transport
          ideated by elon musk set to hit our landscapes mid 2020s...
        </Typography>
        <Typography variant={"body2"}>
          that was part of the usual pitch i would give as co-founder and
          project manager of unsw hyperloop - australia’s first real attempt at
          designing a feasible hyperloop vehicle (scientifically termed: pods)
        </Typography>
        <br />
        <Typography variant={"body2"}>
          i originally started this project with my good friend{" "}
          <a href={"https://www.linkedin.com/in/yasminzaman/"}>yasmin</a>.
          beyond being an incredible space engineer she is also a confident
          activist, inclusivity champion, and my rock. we came together after
          being dissatisfied with the projects the university had on
          offer to extend our learning. we had no care for solar cars (been there done
          that), no interest in F1, and we didn’t have the time to learn
          about projects from other schools (although very cool, like a
          project focused on sustainably sourcing chemical energy from rice
          husks) - so we decided to do something wild, which eventually led to
          shaking hands with elon musk
        </Typography>
        <br />
        <Typography variant={"body2"}>
          the spacex hyperloop pod competition had been running for two years
          prior, and we thought we’d give it a crack.
        </Typography>
      </SectionContainer>
      <SectionContainer>
        <Typography>what else about me</Typography>
        <Typography>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Typography>
      </SectionContainer>
      <SectionContainer>
        <Typography>what am i doing here lol</Typography>
        <Typography>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Typography>
      </SectionContainer>
    </Grid>
  );
};
