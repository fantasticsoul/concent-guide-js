import React from "react";
import BookItem from "../../components/biz-dumb/BookItem";
import Button from "../../components/dumb/Button";

export default ({ loading, getBooks, books, renderBy }) => {
  return (
    <>
      {loading ? (
        <progress className="progress is-small is-primary" max="100">
          60%
        </progress>
      ) : (
        ""
      )}
      <div>
        <Button bulmaIs={["small", "primary"]} onClick={getBooks}>
          refresh
        </Button>
        <span className="tag is-info is-light" style={{ float: "right" }}>
          current component is rendered by &nbsp;&nbsp;
          <span className="tag is-danger">{renderBy} </span>
          &nbsp;&nbsp; -- book total: {books.length}
        </span>
      </div>
      {books.map((v, idx) => (
        <BookItem key={idx} {...v} />
      ))}
    </>
  );
};
