import React from "react";
import PropsTypes from "prop-types";
import s from "./Book.module.scss";

const propTypes = {
  data: PropsTypes.object.isRequired
};

const Book = ({ data }) => {
  const genrateUrlForZip = (url, type) => {
    let urlArray = url.split("/");
    if (url.includes("zip")) {
      const temp = urlArray[urlArray.length - 1].replace(".zip", "");
      urlArray.pop();
      urlArray.push(temp);
      urlArray.push(`${temp}.${type}`);
    }
    return urlArray.join("/");
  };
  const handleOnClick = () => {
    let url;
    let htmlUrl;
    let pdfUrl;
    let textUrl;

    Object.keys(data.formats).forEach(element => {
      let url = data.formats[element];
      if (element.includes("html")) {
        htmlUrl = url;
      } else if (element.includes("pdf")) {
        pdfUrl = url;
      } else if (element.includes("plain")) {
        textUrl = url;
      }
    });

    if (htmlUrl) {
      url = genrateUrlForZip(htmlUrl, "htm");
    } else
     if (pdfUrl) {
      url = genrateUrlForZip(pdfUrl, "pdf");
    } else if (textUrl) {
      url = genrateUrlForZip(textUrl, "txt");
    }
    const win = window.open(url, "_blank");
    win.focus();
  };
  return (
    <div className={s.root} onClick={handleOnClick}>
      <div className={s.imgContainer}>
        <img
          className={s.img}
          src={data.formats["image/jpeg"]}
          alt={data.title}
        />
      </div>
      <div className={s.title}>
        <span>{data.title}</span>
      </div>
      <div className={s.author}>
        {data.authors.length > 0 && <span>{data.authors[0].name}</span>}
      </div>
    </div>
  );
};

Book.propTypes = propTypes;
export default Book;
