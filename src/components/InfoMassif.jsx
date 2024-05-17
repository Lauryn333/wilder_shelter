import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "../styles/InfoMassif.css";
import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

function InfoMassif({ pyrenees, jura, alpes, massifCentral }) {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <section className="info-massif">
      <h2>Refuges</h2>
      <div>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>
              <h3 className="mountain-title">Pyrénées</h3>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {pyrenees.map((unRefuge) => (
                <NavLink
                  key={unRefuge.id}
                  to={`/refuge/${unRefuge.id}`}
                  state={{ unRefuge }}
                  className="accordion-link"
                >
                  {unRefuge.properties.nom} | Altitude :{" "}
                  {unRefuge.properties.coord.alt} m
                </NavLink>
              ))}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>
              <h3 className="mountain-title">Alpes</h3>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {alpes.map((unRefuge) => (
                <NavLink
                  key={unRefuge.id}
                  to={`/refuge/${unRefuge.id}`}
                  state={{ unRefuge }}
                  className="accordion-link"
                >
                  {unRefuge.properties.nom} | Altitude :{" "}
                  {unRefuge.properties.coord.alt} m
                </NavLink>
              ))}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>
              <h3 className="mountain-title">Jura</h3>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {jura.map((unRefuge) => (
                <NavLink
                  key={unRefuge.id}
                  to={`/refuge/${unRefuge.id}`}
                  state={{ unRefuge }}
                  className="accordion-link"
                >
                  {unRefuge.properties.nom} | Altitude :{" "}
                  {unRefuge.properties.coord.alt} m
                </NavLink>
              ))}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>
              <h3 className="mountain-title">Massif Central</h3>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {massifCentral.map((unRefuge) => (
                <NavLink
                  key={unRefuge.id}
                  to={`/refuge/${unRefuge.id}`}
                  state={{ unRefuge }}
                  className="accordion-link"
                >
                  {unRefuge.properties.nom} | Altitude :{" "}
                  {unRefuge.properties.coord.alt} m
                </NavLink>
              ))}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </section>
  );
}

InfoMassif.propTypes = {
  pyrenees: PropTypes.array.isRequired,
  alpes: PropTypes.array.isRequired,
  jura: PropTypes.array.isRequired,
  massifCentral: PropTypes.array.isRequired,
};

export default InfoMassif;
