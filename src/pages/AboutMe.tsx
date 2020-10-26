import * as React from "react";
import { Typography, Tabs, Tab } from "@material-ui/core";
import { SectionContainer } from "../components/SectionContainer";
import { useCallback, useState } from "react";

interface AboutMeProps {}

interface TabPanelProps {
  value: number;
  index: number;
}

const TabPanel: React.FC<TabPanelProps> = ({ value, index, children }) => {
  return (
    <>
      {value === index && (
        <div key={index} style={{ minHeight: "700px" }}>
          {children}
        </div>
      )}
    </>
  );
};

export const AboutMe: React.FC<AboutMeProps> = () => {
  const [value, setValue] = useState(0);

  const handleChangeValue = useCallback(
    (e, newVal) => {
      setValue(newVal);
    },
    [setValue]
  );

  return (
    <>
      <SectionContainer>
        <Typography variant={"h4"} style={{ color: "#3ea98e" }}>
          what im about
        </Typography>
        <Typography variant={"body2"}>
          let me be open with you for a second and say that i'm still working
          out the whole thing about self-identity but i've boiled down my life
          into three core values:
        </Typography>
        <ul id={"list-of-values"}>
          <li id={"ambitious"} key={"ambitious"}>
            <Typography variant={"body2"}> ambition</Typography>
          </li>
          <li id={"confidence"} key={"confidence"}>
            <Typography variant={"body2"}> confidence</Typography>
          </li>
          <li id={"legacy"} key={"legacy"}>
            <Typography variant={"body2"}>and legacy</Typography>
          </li>
        </ul>
        <Typography variant={"body2"}>
          these are the pillars of my decision making, my passion, my drive, and
          my work. as a space nerd i love to understand them like this: to live
          ambitiously is to want to go to the moon. to live confidently is to
          believe in getting to the moon. and to live my legacy is to be on the
          moon. i think it also ties in to the whole start-upy idea of
          'moonshots' too, which is nice
        </Typography>
        <br />
        <Typography variant={"body2"}>
          i think a lot of my close friends share these values, or view life in
          some semblance to the above. i gravitate to these kinds of
          personalities for the opportunity to learn, grow, and gain
          perspective. im always down to have one too many hits and watch the
          ego crumble!
        </Typography>
        <br />
        <Typography variant={"body2"}>
          ultimately i'm here to do good work for the purpose of providing for
          those who i love, those who love me, have made tough sacrifices and
          allowed me space in their lives the peace of mind that we will be
          alright. i also have two lab crosses i need to support the dreams of
        </Typography>
      </SectionContainer>
      <SectionContainer>
        <Typography variant={"h4"} style={{ color: "#0184b7" }}>
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
          my mother likes to recall 'fond' memories of my adolescence and laugh
          about them with friends. one time my she told me to only have half a
          panadol for an elbow pain, but i decided to limit test the whole 30
          pill cartridge. i woke up in a hospital
        </Typography>
        <Typography variant={"body2"}>
          another time i was watching an acrobatics show where they definitely
          tell you "not to try this at home", and somersaulted with grace into a
          steel door frame. i woke up in a hospital
        </Typography>
        <Typography variant={"body2"}>
          there was another time where out of my best judgement as a 10 year old
          i decided to jam my hand into an elevator door and, as it began
          moving, caused quite the scene. you guessed it: hospital.
        </Typography>
        <br />
        <Typography variant={"body2"}>
          she tells a lot of these a lot of the time which makes me question
          their authenticity. i mean, i don't recall my childhood at all. when
          people ask what i did i tell them in all honesty that i dont think
          remember anything until 14 years old. maybe its trauma maybe its brain
          damage! haha, kidding
        </Typography>
        <br />
        <Typography variant={"body2"}>
          being whacky with reckless abandon was fun but its high time to
          appreciate some good old fashioned risk management
        </Typography>
      </SectionContainer>
      <SectionContainer>
        <Typography variant={"h4"} style={{ color: "#ea4e87" }}>
          my career
        </Typography>
        <Typography variant={"body2"}>
          if we're being technical about it, i've already been in industry for 4
          years. i started in aerospace academia back in second year at 19 years
          old - realised it wasn't for me, moved on to tech consulting where i
          also didnt fit at the time, and now im in software engineering. i'll
          summarise the important bits below, followed by a take on whats next.
        </Typography>
        <br />
        <Tabs value={value} onChange={handleChangeValue}>
          <Tab
            label={<span style={{ textTransform: "none" }}>academia</span>}
            value={0}
          />
          <Tab
            label={
              <span style={{ textTransform: "none" }}>software engg.</span>
            }
            value={1}
          />
          <Tab
            label={<span style={{ textTransform: "none" }}>the future</span>}
            value={2}
          />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Typography variant={"body2"}>
            as a young padawan i was keen to see how far the fundamentals of
            thermodynamics and fluid mechanics i sponged up ran in real science
            and asked around the faculty for an opportunity to work in the labs.
            i got involved only because i knew one of the lead researchers from
            a friend's dad who's best friends with their partner (networking!).
            my work was centered about aeroacoustics which is which is the study
            of noise generation under turbulent fluid motion. it doesn't sound
            too interesting, so to put its relevance into perspective consider
            the following truths:
          </Typography>
          <ul id={"aeroacoustics-facts"}>
            <li id={"aero-fact-1"} key={"aero-fact-1"}>
              <Typography variant={"body2"}>
                sound is energy waste from a system (noise from your engine are
                mainly kinetic losses)
              </Typography>
            </li>
            <li id={"aero-fact-2"} key={"aero-fact-2"}>
              <Typography variant={"body2"}>
                most people, and things, dislike loud sounds so they don't like
                to make or be around loud things
              </Typography>
            </li>
            <li id={"aero-fact-3"} key={"aero-fact-3"}>
              <Typography variant={"body2"}>
                and, the faster things go the more sound they produce (rockets
                are louder than jets which are louder than planes which are
                louder than trains, etc)
              </Typography>
            </li>
          </ul>
          <Typography variant={"body2"}>
            if we simplify the total available energy of a object to its
            potential and kinetic energy minus its losses (sound) it follows tht
            the total available energy to move things faster increases if we
            reduce our losses. therefore, by understanding how we can make
            things quieter, we can make things more energy efficient and
            ultimately faster.
          </Typography>
          <br />
          <Typography variant={"body2"}>
            the faster we go, the less time we spend in transit. the less time
            we spend in transit, the more time we can spend doing the things
            that matter. and doing the things that matter has positive effects
            for communities, businesses, and economies. all this while
            simultaneously driving cost down since energy efficiency means
            needing less fuel.
          </Typography>
          <br />
          <Typography variant={"body2"}>
            its all pretty cool stuff. i got my hands involved on some phd and
            thesis projects, reviewed some papers, and helped get some people
            published. but the lifestyle just wasn't for me so i took my leave.
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Typography variant={"body2"}>
            right now i'm a full stack engineer at a fintech start-up. im
            working on a cool product that changes how businesses view supply
            chain finance. there are many exciting developments down the line
            that im excited to get a start on, and momentum is only building. i
            love it a lot.
          </Typography>
          <br />
          <Typography variant={"body2"}>
            some of my previous work in automation and devops from my tech
            consulting days have carried over. but i've had to relearn and
            unlearn a lot of stuff to the point where it all feels like new.
          </Typography>
          <br />
          <Typography variant={"body2"}>
            also, even though im part time while finishing up with uni, my current
            team trusts me with full autonomy and weight to my design decisions.
            its been such a validating experience so far, since programming
            always felt like my sore spot, and has done wonders for my working
            confidence. it also still feels wild having code in production
            that's responsible for piping bucketloads of cash through it each
            quarter.
          </Typography>
          <br />
          <Typography variant={"body2"}>
            to balance workload and learning, my focus has shifted more towards
            front-end work. once more time frees up i'll be looking deeper at
            infrastructure level code. yehaw!
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Typography variant={"body2"}>
            i think i've been pretty lucky with the opportunities i've had. and
            i'm really interested to see how the future pans out. i have a few
            mid-term goals i want to get to by EOFY '21, some of which are
            driven financially - but are nonetheless secondary to my work-life
            satisfaction:
          </Typography>
          <ul id={"midterm-goals"}>
            <li id={"buying a new car"} key={"fact-1"}>
              <Typography variant={"body2"}>
                getting a fresh hot-off-the-assembly-line 4WD (something like a
                jeep defender sport) so i can really gung-ho my outdoor
                adventures, drop me a message if you want to come along
              </Typography>
            </li>
            <li id={"moving out"} key={"fact-2"}>
              <Typography variant={"body2"}>
                finally get around to securing a place for myself - no roomies,
                just me and my dogs.
              </Typography>
            </li>
            <li id={"climbing"} key={"fact-3"}>
              <Typography variant={"body2"}>
                climb a v8 indoor or 23 outdoor
              </Typography>
            </li>
          </ul>
          <Typography variant={"body2"}>
            the name behind a company doesn't really influence my job decision.
            i only care about whether or not i can fully engulf myself in the
            work that needs doing, so long as its ethical. i see myself doing
            the fun, new, and exciting! so by graduation im hoping i'll be
            starting off towards that :)
          </Typography>
        </TabPanel>
      </SectionContainer>
    </>
  );
};
