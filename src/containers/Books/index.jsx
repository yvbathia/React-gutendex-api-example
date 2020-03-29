import React, { useState } from "react";
import PropTypes from "prop-types";
import s from "./Books.module.scss";
import { useEffect } from "react";
import { fetchBooks } from "../../utils/fetchApi";
import Input from "../../components/Input";
import { apiUrl } from "../../constants";
import InView from "react-intersection-observer";
import Book from "../../components/Book";
import { ReactComponent as Back } from "../../Images/Back.svg";

const propTypes = {
  catagory: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

const Books = ({ catagory, onClick }) => {
  const [isNext, setIsNext] = useState(true);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [nextApi, setNextApi] = useState(
    `${apiUrl}?mime_type=image&page=${1}&topic=${encodeURI(
      catagory
    )}&search=${encodeURI(search)}`
  );

  useEffect(() => {
    (async function() {
      const response = await fetchBooks(
        `${apiUrl}?mime_type=image&page=${1}&topic=${encodeURI(
          catagory
        )}&search=${encodeURI(search)}`
      );
      setData(response.results);
      setNextApi(response.next);
      if (response.next === null) {
        setIsNext(false);
      }
    })();
  }, [catagory, search]);

  const fetchMore = async () => {
    if (isNext) {
      const response = await fetchBooks(nextApi);
      const newData = [...data, ...response.results];
      if (response.next === null) {
        setIsNext(false);
      }
      setData(newData);
      setNextApi(response.next);
    }
  };

  return (
    <div className={s.root}>
      <div className={s.search}>
        <div className={s.catagoryContainer}>
          <button onClick={onClick} className={s.btn}>
            <Back />
          </button>

          <h1 className={s.catagory}>{catagory}</h1>
        </div>
        <Input
          onSubmit={value => {
            setSearch(value);
            setNextApi(`${apiUrl}?page=${1}&search=${encodeURI(value)}`);
          }}
        />
      </div>
      <div className={s.booksContainer}>
        <div>
          <div className={s.books}>
            {data.map((element, index) => {
              return <Book key={index} data={element} />;
            })}
          </div>
          {!isNext && (
            <div className={s.noDataContainer}>
              <div>No More Data</div>
            </div>
          )}
          <InView
            threshold={0}
            onChange={visible => {
              if (visible) {
                fetchMore();
              }
            }}
          >
            <div className={s.infiniteLoad}>
              {isNext && (
                <div className={s.loaderContainer}>
                  <div className={s.loader}></div>
                </div>
              )}
            </div>
          </InView>
        </div>
      </div>
    </div>
  );
};

Books.propTypes = propTypes;
export default Books;
