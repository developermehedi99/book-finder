import { FaStar } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

const BookItem = ({ books, setBooks }) => {
  const onFavorite = (bookId) => {
    const bookIndex = books.findIndex((book) => book.id === bookId);
    const newBooks = [...books];
    newBooks[bookIndex].isFavorite = !newBooks[bookIndex].isFavorite;
    setBooks(newBooks);
  };
  return (
    <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((book) => (
        <div key={book.id} className="space-y-3">
          <div className="flex items-center justify-center rounded-md border border-[#324251]/30 bg-white p-4">
            <img className="max-w-[144px]" src={book.image} alt="book name" />
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <h4 className="text-lg font-bold lg:text-xl">{book.title}</h4>
              <h2>({book.publishedYear})</h2>
            </div>
            <p className="text-xs lg:text-sm">
              By : <span>{book.author_name}</span>
            </p>
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-bold lg:text-xl">${book.price}</h4>

              <div className="flex items-center text-yellow-500 space-x-1">
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>

                <span className="text-xs text-black lg:text-sm">
                  ({book.rating} Star)
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs lg:text-sm">
              <button className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336] py-1.5 text-white transition-all hover:opacity-80 lg:py-1.5">
                <MdOutlineShoppingCart></MdOutlineShoppingCart>
                Add to Cart
              </button>
              <button onClick={() => onFavorite(book.id)}>
                {" "}
                {book.isFavorite ? (
                  <button className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#DC2954]/[14%] py-1.5 text-[#DC2954] transition-all hover:bg-[#DC2954]/[24%] lg:py-1.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      />
                    </svg>
                    Favourite
                  </button>
                ) : (
                  <button className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#636e72]/[14%] py-1.5 text-black transition-all hover:bg-[#34495e]/[24%] lg:py-1.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      />
                    </svg>
                    Favourite
                  </button>
                )}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookItem;
