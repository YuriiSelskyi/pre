import * as React from "react";
import { isMobile } from "react-device-detect";
import { Dialog, DialogContent, DialogContentText, Slide } from "@mui/material";
import { BackgroundWrapper } from "./components/BackgroundWrapper";
import { Paper } from "@mui/material";
import present from "./photos/present.png";
import me from "./photos/me.PNG";
import kate from "./photos/kate.jpg";
import "./App.css";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function App() {
  const [open, setOpen] = React.useState(false);
  const [clickNumber, setClickNumber] = React.useState(0);
  const [hideTemplate, setHideTemplate] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    setClickNumber((prev) => prev + 1);
  };

  const handleClose = () => {
    setOpen(false);
    if (clickNumber >= 2) {
      setHideTemplate(true);
    }
  };

  return (
    <BackgroundWrapper>
      {!hideTemplate ? (
        <div className="container">
          <Paper elevation={0} variant="elevation" className="wrapper">
            <h1 className="title">
              ❤️ Привіт Катрусь, вітаю тебе з 14 лютого, кохана ❤️
            </h1>
          </Paper>

          <Paper elevation={0} variant="elevation" className="wrapper">
            <div className="content">
              Ти можеш вибрати один з двох подарунків (лише один), вибирай
              уважно
            </div>
            <div className="presents">
              {clickNumber === 0 ? (
                <img
                  alt="present1"
                  className="present-img"
                  style={{ width: isMobile ? "150px" : "200px" }}
                  src={present}
                  onClick={handleClickOpen}
                />
              ) : null}
              {clickNumber <= 1 ? (
                <img
                  alt="present2"
                  className="present-img"
                  style={{ width: isMobile ? "150px" : "200px" }}
                  src={present}
                  onClick={handleClickOpen}
                />
              ) : null}
            </div>
            <Dialog
              open={open}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClose}
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                  {clickNumber <= 1 ? (
                    <div style={{ position: "relative" }}>
                      <img alt="me" className="me" src={me} />
                      <div className="img-text">
                        Що може бути кращим подарунком за такого бравового
                        легеня?
                      </div>
                    </div>
                  ) : null}
                  {clickNumber >= 2 ? (
                    <div style={{ position: "relative" }}>
                      <img alt="kate" className="me" src={kate} />
                      <div
                        className="img-text"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          top: isMobile ? "10px" : "40px",
                        }}
                      >
                        Я так і знав що ти подивишся і в другий подарунок😁,
                        тому тут презент для накращої, найрозумнішої і
                        найкрасивішої дівчини на світі!
                        <Paper
                          elevation={0}
                          variant="elevation"
                          className="wrapper"
                          style={{ marginTop: isMobile ? "20px" : "150px" }}
                        >
                          😊Сертифікат на терпеливий шопінг на 300$😊
                        </Paper>
                      </div>
                    </div>
                  ) : null}
                </DialogContentText>
              </DialogContent>
            </Dialog>
          </Paper>
        </div>
      ) : null}
    </BackgroundWrapper>
  );
}

export default App;
