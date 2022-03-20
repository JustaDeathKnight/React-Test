import React from "react";
import Card from "./Card";

const Cards = () => {
  const data = [
    {
      lang: "Python",
      url: "https://cdn.svgporn.com/logos/python.svg",
      link: "https://www.python.org/",
      fcolor: "#00c3ff",
      scolor: "#ffff1c",
    },
    {
      lang: "Java",
      url: "https://cdn.svgporn.com/logos/java.svg",
      link: "https://www.java.com/es/",
      fcolor: "#0449b8",
      scolor: "#e6560e",
    },
    {
      lang: "React",
      url: "https://cdn.svgporn.com/logos/react.svg",
      link: "https://es.reactjs.org/",
      fcolor: "#000428",
      scolor: "#004e92",
    },
    {
      lang: "Perl",
      url: "https://cdn.svgporn.com/logos/perl.svg",
      link: "https://www.perl.org/",
      fcolor: "#cc2b5e",
      scolor: "#753a88",
    },
  ];

  return (
    <>
      {data.map(({ lang, url, link, fcolor, scolor }) => {
        return (
          <Card
            key={lang}
            lang={lang}
            img={url}
            link={link}
            fcolor={fcolor}
            scolor={scolor}
          />
        );
      })}
    </>
  );
};

export default Cards;
