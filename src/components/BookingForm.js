import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addbook, updateBook } from "../redux/booking/actions";

const BookingForm = ({ isUpdate, singledata, setIsUpdate, setSingleData }) => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const author = e.target.author.value;
    const thumbnail = e.target.thumbnail.value;
    const price = e.target.price.value;
    const rating = e.target.rating.value;
    const featured = e.target.featured.checked;

    const data = {
      name,
      author,
      thumbnail,
      price,
      rating,
      featured,
    };
    if (isUpdate === true) {
      const data = {
        id: singledata.id,
        name,
        author,
        thumbnail,
        price,
        rating,
        featured,
      };
      dispatch(updateBook(data));
      setIsUpdate(false);
      setSingleData(false);
    } else {
      dispatch(addbook(data));
    }
    e.target.reset();
  };

  return (
    <>
      <div>
        <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
          <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
          <form className="book-form text-left" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label htmlFor="name">Book Name</label>
              <input
                required
                className="text-input"
                type="text"
                defaultValue={singledata?.name}
                id="input-Bookname"
                name="name"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="category">Author</label>
              <input
                required
                className="text-input"
                defaultValue={singledata?.author}
                type="text"
                id="input-Bookauthor"
                name="author"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="image">Image Url</label>
              <input
                required
                className="text-input"
                defaultValue={singledata?.thumbnail}
                type="text"
                id="input-Bookthumbnail"
                name="thumbnail"
              />
            </div>

            <div className="grid grid-cols-2 gap-8 pb-4">
              <div className="space-y-2">
                <label htmlFor="price">Price</label>
                <input
                  required
                  className="text-input"
                  type="number"
                  defaultValue={singledata?.price}
                  id="input-Bookprice"
                  name="price"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="quantity">Rating</label>
                <input
                  required
                  className="text-input"
                  type="number"
                  id="input-Bookrating"
                  name="rating"
                  defaultValue={singledata?.rating}
                  min="1"
                  max="5"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="input-Bookfeatured"
                type="checkbox"
                defaultChecked={singledata?.featured}
                name="featured"
                className="w-4 h-4"
              />
              <label htmlFor="featured" className="ml-2 text-sm">
                {" "}
                This is a featured book{" "}
              </label>
            </div>

            <button type="submit" className="submit" id="submit">
              {isUpdate === true ? "Edit Book" : "Add Book"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingForm;
