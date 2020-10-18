import * as React from "react";
import { Grid, Typography } from "@material-ui/core";
import { SectionContainer } from "../components/SectionContainer";

interface AboutMeProps {}

export const AboutMe: React.FC<AboutMeProps> = () => {
  return (
    <>
      <SectionContainer>
        <Typography variant={"h4"} style={{color : '#3ea98e'}}>
          what im about
        </Typography>
        <Typography variant={"body2"}>
          i love the title of this section because it feels so hip, what am i
          about? its a question i've been asking myself for a long time, and
          something i (think) i'm getting better at articulating
        </Typography>
        <br />
        <Typography variant={"body2"}>
          to give you an overview of where i'm at, i'll tell you that i've
          divined my life values into three buckets:
        </Typography>
        <ul id={"list-of-values"}>
          <li id={"ambitious"} key={"ambitious"}>
            <Typography variant={"body2"}> to live ambitiously</Typography>
          </li>
          <li id={"confidence"} key={"confidence"}>
            <Typography variant={"body2"}>to live with confidence</Typography>
          </li>
          <li id={"legacy"} key={"legacy"}>
            <Typography variant={"body2"}>to live my legacy</Typography>
          </li>
        </ul>
        <Typography variant={"body2"}>
          this all came after reading Brené Brown's book Dare to Lead, which is
          more of a leadership book than anything. i definitely found myself
          reflecting on my previous roles and began to see the holes in my
          leadership and character - but the themes explored in this book target
          a shared experience that anyone looking to be more courageous can
          relate to
        </Typography>
        <br />
        <Typography variant={"body2"}>
          the point of me bringing this up is that in this book she makes
          mention of how we only have one true set of values; that the
          compartmentalisation of values in professional and personal contexts
          is misguided and that we should make an effort to define our core
          values so that we can understand our decision making and thought
          processes better (it makes more sense when she says it). the reason i
          want to mention this is literally because i think this is so important
          and i want to share with you my north star in life
        </Typography>
        <br />

        <Typography variant={"subtitle1"} color={"textSecondary"}>
          ... anyway, to put it simply
        </Typography>
        <Typography variant={"body2"} align={"right"}>
          i would like to go to the moon
        </Typography>
      </SectionContainer>
      <SectionContainer>
        <Typography variant={"h4"} style={{color : '#0184b7'}}>
          growing up
        </Typography>
        <Typography variant={"body2"}>
          i grew up on the northern coastline in new zealand alongside my
          faithful companion and first ever dog, juju
        </Typography>
        <br />
        <Typography variant={"body2"}>
          my older brother and i used to venture out into the jungle of our
          backyard for hours to catch insects. we made an encyclopedia for them,
          which had a disproportionate number of pages dedicated to cicadas
          (because they were my favourite) and tried keeping them as pets (rip)
        </Typography>
        <br />
        <Typography variant={"body2"}>
          we moved around a lot. my father was involved in the desalination
          plant solution to the millennial droughts of australia, so we skipped
          states and countries every two years. it was hard as a kid having to
          always leave your friends, so i had to find other ways to spend my
          time - my favourite pastimes were cardboard boxes, tree climbing, and
          books about space
        </Typography>
        <br />
        <Typography variant={"body2"}>
          my mother often recalls fond memories of me being a handful. one time
          my she told me to only have half a panadol for an elbow injury, but i
          decided to limit test that and have the whole 30 pill cartridge. i
          woke up in a hospital
        </Typography>
        <Typography variant={"body2"}>
          another time i was watching an acrobatics show where they definitely
          tell you "not to try this at home", and somersaulted (with grace) into
          a door frame. i woke up in a hospital
        </Typography>
        <Typography variant={"body2"}>
          and another time, out of my best judgement as a 10 year old , i
          decided to jam my hand into an elevator door. and as it began moving,
          caused quite the scene. i did not wake up in a hospital on this
          occasion mainly because mother was so humiliated she just wanted me to
          shut up
        </Typography>
        <br />
        <Typography variant={"body2"}>
          there are a tonne of stories like that been been stockpiled over the
          last few years too (a recent one involves making a plasma cutter with
          graphite and AA batteries). core to them all is poor risk assessment,
          but beneath that: experimentation! i love doing things, sometimes new
          sometimes dumb
        </Typography>
      </SectionContainer>
      <SectionContainer>
        <Typography variant={"h4"} style={{color: '#ea4e87'}}>
          my career
        </Typography>
        <Typography variant={"h6"}>
          : academia
        </Typography>
        <Typography variant={"body2"}>
          i saw working in the labs as an extension of course work and
          wanted to see how far the foundational concepts taught in university actually ran in
          real science (turns out its surprisingly deep!). my work at the Flow Noise Group looked at aeroacoustics
          (how sound is generated, propagated, and manipulated). the reason i
          found this work interesting is that by understanding ways to manage
          sound (from jets, airplanes, trains, etc) we can make them faster,
          more efficient, and ultimately more economic. consider these truths:
        </Typography>
        <ul id={"aeroacoustics-facts"}>
          <li id={"aero-fact-1"} key={"aero-fact-1"}>
            <Typography variant={"body2"}>
              sound is energy waste from a system (think of an engine, turbine,
              or even a kite)
            </Typography>
          </li>
          <li id={"aero-fact-2"} key={"aero-fact-2"}>
            <Typography variant={"body2"}>
              people, and things, hate loud sounds
            </Typography>
          </li>
          <li id={"aero-fact-3"} key={"aero-fact-3"}>
            <Typography variant={"body2"}>
              if loud enough, sound can be damaging (shock waves can burst ear
              drums, induce nausea, burst organs, etc.)
            </Typography>
          </li>
        </ul>
        <Typography variant={"body2"}>
          it then follows that if we mitigate sound losses we can introduce
          faster, more efficient, and less disturbing commercial vehicles into
          our transport networks. a famous example of this was the Concorde
          which at its peak flew at 1.2x the speed of sound (the Concorde
          ultimately died off because of insane operating costs - but i'd gander
          to say technology has evolved enough to support something like it
          again).
        </Typography>
        <br />

        <Typography variant={"body2"} color={"textSecondary"}>
          the faster we go, the less time we spend in transit. the less time
          we spend in transit, the more time we can spend doing the things
          that matter. the more time spent on doing the things that matter, the
          stronger communities, businesses, and economies become.
        </Typography>
        <Typography variant={"body2"}>

        </Typography>
        <br />
        <Typography variant={"body2"} align={"right"}>
          i think i've been pretty lucky with the opportunities i've had. but
          i'm conscious of the hard work, dedication, and sacrifices behind that
          luck too.
        </Typography>
        <br />
      </SectionContainer>
    </>
  );
};
