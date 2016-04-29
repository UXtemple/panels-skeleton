import { Horizontal, Image, Text } from 'usepages-blocks-basic';
import { Panel } from 'panels-ui';
import React from 'react';

export default function TeleportTest(props) {
  return (
    <Panel style={{backgroundColor: "",
        borderRadius: 5,
        fontFamily: "'Open Sans', sans-serif",
        fontWeight: 400,
        height: "100vh",
        width: props.width}}>
    {(props.dishes && props.dishes.length) && (
props.dishes.map((item, i) => (
      <Horizontal key={i}
          style={{alignItems: "center",
            alignSelf: "center",
            backgroundColor: "salmon",
            color: "white",
            flexDirection: "row",
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 14,
            fontWeight: 700,
            justifyContent: "space-between",
            marginTop: 5,
            padding: "25px 20px 25px 25px",
            textDecoration: "none",
            textTransform: "uppercase",
            transition: "all 0.1s linear",
            width: "100%"}}
          styleActive={{backgroundColor: "#0083ef"}}
          styleHover={{backgroundColor: "#31d0e1"}}
          teleportTo={item.name}>
        <Text text={item.label} />

        <Image src="https://files.usepages.today/usepages.today/CardCustom/LikeIcon.svg"
            style={{marginRight: 20}} />
      </Horizontal>
    )))}
  </Panel>
);
}
