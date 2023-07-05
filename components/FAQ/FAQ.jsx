"use client";

import {styled} from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import {AiOutlineArrowRight} from "react-icons/ai";
import {useState} from "react";
// import {useTranslation} from "react-i18next";

const Accordion = styled(props => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({theme}) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled(props => (
  <MuiAccordionSummary
    expandIcon={<AiOutlineArrowRight className="cursor-pointer" size={25} />}
    {...props}
  />
))(({theme}) => ({
  padding: "10px 4px",
  backgroundColor: "#ffc265",
  flexDirection: "row",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({theme}) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const lng = "en";
  //const [t, i18n] = useTranslation();
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <section className=" sm:px-10 md:px-10 lg:px-20 flex flex-col items-center gap-10 mb-20">
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-3xl sm:text-4xl font-bold text-black">FAQ</h2>
        <span className="h-1 sm:h-2 w-40 bg-[#ffc265]" />
      </div>
      <div dir={lng === "en" ? "en" : "rtl"}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <h3 className="text-sm font-bold">
              HOW DO YOU TEACH QURAN ONLINE?
            </h3>
          </AccordionSummary>
          <AccordionDetails>
            <p className="text-sm font-bold">
              We teach Quran online by using Skype or zoom. Skype and zoom are
              used for audio/video communication and screen sharing. The tutor
              shares their screen with the student and both the student and the
              tutor can see the Quran or Qaida page on their computer screens.
              The tutor reads the Quran and the student listens to him/her and
              vice versa. The classes are interactive & engaging.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <h3 className="text-sm font-bold">
              DO YOU OFFER FREE TRIAL CLASSES?
            </h3>
          </AccordionSummary>
          <AccordionDetails>
            <p className="text-sm font-bold">
              Yes. We offer a free trial classes before you sing up for regular
              classes in order to give you an opportunity to see how it works
              and evaluate the tutors and services
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <h3 className="text-sm font-bold">
              HOW DO I GET STARTED WITH THE FREE TRIAL SESSION?
            </h3>
          </AccordionSummary>
          <AccordionDetails>
            <p className="text-sm font-bold">
              You can sign up for the free trial sessions.We will contact you
              either by email or phone and you can confirm the schedule that
              best works for you.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <h3 className="text-sm font-bold">
              DO YOU HAVE FEMALE QURAN TUTORS?
            </h3>
          </AccordionSummary>
          <AccordionDetails>
            <p className="text-sm font-bold">
              Yes. We have female tutors for those who prefer to be taught by
              lady tutors.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <h3 className="text-sm font-bold">
              DO YOU HAVE NATIVE ARAB QURAN TUTORS?
            </h3>
          </AccordionSummary>
          <AccordionDetails>
            <p className="text-sm font-bold">
              Yes, we have a qualified native Arab tutors from Egypt. Those who
              want to be taught by native Arab speakers can opt for them .
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
            <h3 className="text-sm font-bold">HOW DO YOU ACCEPT PAYMENTS?</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p className="text-sm font-bold">
              We accept PayPal which is the most convenient and secure method
              for online payments. We also collect payments through bank
              transfer and Western Union.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel7"}
          onChange={handleChange("panel7")}
        >
          <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
            <h3 className="text-sm font-bold">
              WHAT IF A CLASS IS MISSED DUE TO TEACHER OR STUDENT?
            </h3>
          </AccordionSummary>
          <AccordionDetails>
            <p className="text-sm font-bold">
              We are liable to give you makeup class(s) in case of prior notice
              by the student about the cancellation of a class. You will also
              get makeup classes or refund if the classes are missed due to the
              teacher (the tutor being sick or having technical issues etc.)
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel8"}
          onChange={handleChange("panel8")}
        >
          <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
            <h3 className="text-sm font-bold">
              HOW DO YOU TEACH QURAN ONLINE?
            </h3>
          </AccordionSummary>
          <AccordionDetails>
            <p className="text-sm font-bold">
              {` » Student Lateness:\n1. The student has to attend the class on time,
              and the teacher will leave after the half time of the class.\n2. The
              teacher will not be able to make up the lost minutes.» Class
              Timings and Rescheduling:1. The student should choose his class
              timings according to his needs.2. At two Eid breaks, the student
              can reschedule his classes before Eid to be taken after that.\n3.
              The student can reschedule his class to any other suitable time
              within his teacher shift, and he can do that by at least two hours
              ahead`}
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
    </section>
  );
}
