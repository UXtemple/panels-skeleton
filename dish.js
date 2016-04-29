import { Horizontal, Image, Text,  } from 'usepages-blocks-basic';
import { Panel } from 'panels-ui';
import React from 'react';

export default function TeleportTestButton1(props) {
  return (
    <Panel style={{backgroundColor: "",
        fontFamily: "'Open Sans', sans-serif",
        fontWeight: 400,
        height: "100vh",
        width: props.width}}>
    <Image src={props.src}
        style={{height: 250}} />

    <Text style={{fontFamily: "'Montserrat', sans-serif",
          fontSize: 30,
          fontWeight: "700",
          marginLeft: 20,
          marginTop: 20}}
        text={props.name} />

    <Text style={{fontSize: 15,
          lineHeight: "1.7",
          marginLeft: 22,
          marginRight: 20,
          marginTop: 10}}
        text={props.info} />

    <Horizontal style={{border: "1px solid blue",
          borderRadius: 5,
          color: "#25d4d4",
          flexDirection: "row",
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 14,
          fontWeight: "700",
          height: 40,
          justifyContent: "center",
          margin: "20px 20px 150px 20px",
          paddingLeft: 15,
          paddingRight: 15,
          paddingTop: 10,
          textDecoration: "none",
          textTransform: "uppercase",
          transition: "all 0.1s linear"}}
        styleActive={{backgroundColor: "blue",
          color: "#3d3d3d"}}
        styleHover={{backgroundColor: "#25d4d4",
          color: "#3d3d3d"}}
        teleportTo="">
      <undefined text="Gimme this Soup!" />
    </Horizontal>
  </Panel>
);
}
