import React from "react";

interface StandardCardType {
  mode?: "dark" | "light";
  image?: string;
  title?: string;
  text?: string;
  type?:"default"|"wide"
}

const StandardCard = ({ mode, image, title, text,type }: StandardCardType) => {
  return (
    <div
      style={{ ...baseStyle.container[type??'default'],...styles.container[mode ?? "light"], flexDirection: type==='wide'?"row":'column' }}
    >
      <img
        style={baseStyle.image[type??'default']}
        src={
          image ??
          "https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6.jpg?w=1436&h=1078"
        }
      />
      <div style={{ ...baseStyle.textContainer, flexDirection: "column" }}>
        <h2 style={styles.text[mode ?? "light"]}>{title ?? "Title"}</h2>
        <p style={styles.text[mode ?? "light"]}>{text ?? "Test description test"}</p>
      </div>
    </div>
  );
};

const baseStyle = {
  container: {
    default:{
      borderRadius: "1rem",
    borderStyle: "solid",
    borderWidth: "0.01rem",
    minHeight: "10vh",
    minWidth: "10vw",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    },
    wide:{
      borderRadius: "1rem",
    borderStyle: "solid",
    borderWidth: "0.01rem",
    minHeight: "10vh",
    minWidth: "30vw",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    }
    
  },
  textContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: ".8rem .5rem",
    gap:'.2rem',
    width:'-webkit-fill-available'
  },
  image: {default:{
    height: "20vh",
    width: "100%",
    borderTopLeftRadius: "1rem",
    borderTopRightRadius: "1rem",
  },wide:{
    height: "15vh",
    width: "10vw",
    borderTopLeftRadius: "1rem",
    borderBottomLeftRadius: "1rem",
  }},
text:{
    margin:'0rem'

}
};

const styles = {
  container: {
      light: {
        backgroundColor: "#fff",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      },
      dark: {
        backgroundColor: "#222425",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      },
  },
  text: {
    light: {
        ...baseStyle.text,
      color: "#000",
    },
    dark: {
        ...baseStyle.text,
        color: "#fff",
    },
  },
};

export default StandardCard;
