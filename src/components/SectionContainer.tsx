import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Theme } from "@material-ui/core";
import { createStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fullPageContainer: {
      height: "100%",
      maxWidth: "33vw"
    }
  })
);

interface SectionContainerProps {}

export const SectionContainer: React.FC<SectionContainerProps> = ({
  children
}) => {
  const classes = useStyles();

  return (
    <Box className={classes.fullPageContainer} m={2} py={2} maxWidth={400}>
      {children}
    </Box>
  );
};
