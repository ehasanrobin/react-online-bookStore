import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filter } from "../redux/filter/actions";
import BookCard from "./BookCard";
import BookingForm from "./BookingForm";

const BookList = ({ search }) => {
  const books = useSelector((state) => state.books);
  const filterStatus = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const [isUpdate, setIsUpdate] = useState(false);
  const [singledata, setSingleData] = useState(false);
  const handleUpdate = (todoId) => {};
  const handleEdit = (bookId) => {
    setIsUpdate(true);
    const singleBook = books.find((book) => book.id === bookId);
    setSingleData(singleBook);
  };

  const handleStatus = (status) => {
    dispatch(filter(status));
  };
  return (
    <>
      <main className="py-12 2xl:px-6">
        <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
          <div className="order-2 xl:-order-1">
            <div className="flex items-center justify-between mb-12">
              <h4 className="mt-2 text-xl font-bold">Book List</h4>

              <div className="flex items-center space-x-4">
                <button
                  className={`filter-btn ${
                    filterStatus.status === "All" && "active-filter"
                  }`}
                  id="lws-filterAll"
                  onClick={() => handleStatus("All")}
                >
                  All
                </button>
                <button
                  className={`filter-btn ${
                    filterStatus.status === "Featured" && "active-filter"
                  }`}
                  id="lws-filterFeatured"
                  onClick={() => handleStatus("Featured")}
                >
                  Featured
                </button>
              </div>
            </div>
            <div className="lws-bookContainer">
              {/* <!-- Card 1 --> */}
              {books
                .filter((item) => {
                  switch (filterStatus.status) {
                    case "All":
                      return item;
                    case "Featured":
                      return item.featured;

                    default:
                      break;
                  }
                })
                .filter((item) =>
                  search.toLowerCase() === ""
                    ? item
                    : item.bookName.toLowerCase().includes(search)
                )
                .map((book) => (
                  <BookCard
                    key={book.id}
                    book={book}
                    setIsUpdate={setIsUpdate}
                    handleUpdate={handleUpdate}
                    handleEdit={handleEdit}
                  ></BookCard>
                ))}
            </div>
          </div>
          <BookingForm
            isUpdate={isUpdate}
            setIsUpdate={setIsUpdate}
            singledata={singledata}
            setSingleData={setSingleData}
          ></BookingForm>
        </div>
      </main>
    </>
  );
};

export default BookList;
