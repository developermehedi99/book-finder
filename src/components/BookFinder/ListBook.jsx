import { useState } from "react";
import BookItem from "./BookItem";
import SearchBook from "./SearchBook";
import SelectSort from "./SelectSort";

const bookings = [
  {
    id: 1,
    image: "https://i.ibb.co/K2Sfpd3/book.png",
    title: "Javascript and Jquery",
    author_name: "John Coder",
    publishedYear: 2020,
    price: 29.99,
    rating: 4,
    addToCart: true,
    isFavorite: false,
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/14381576/pexels-photo-14381576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Pithon and Go",
    author_name: "Alice Analyst",
    publishedYear: 2021,
    price: 39.99,
    rating: 4,
    addToCart: false,
    isFavorite: true,
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/14823486/pexels-photo-14823486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "History of Civilization",
    author_name: "Jane Historian",
    publishedYear: 2022,
    price: 24.99,
    rating: 4,
    addToCart: true,
    isFavorite: true,
  },
  {
    id: 4,
    image:
      "https://images.pexels.com/photos/14454202/pexels-photo-14454202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Javascript and React",
    author_name: "Bob Novelist",
    publishedYear: 2023,
    price: 19.99,
    rating: 4,
    addToCart: false,
    isFavorite: false,
  },
  {
    id: 5,
    image:
      "https://images.pexels.com/photos/7171398/pexels-photo-7171398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Php and Laraval",
    author_name: "Eva Mathematician",
    publishedYear: 2019,
    price: 34.99,
    rating: 4,
    addToCart: true,
    isFavorite: true,
  },
  {
    id: 6,
    image:
      "https://images.pexels.com/photos/4996868/pexels-photo-4996868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Rubi and Python",
    author_name: "Carl Scientist",
    publishedYear: 2017,
    price: 49.99,
    rating: 4,
    addToCart: true,
    isFavorite: false,
  },
  {
    id: 7,
    image:
      "https://images.pexels.com/photos/14454202/pexels-photo-14454202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Php and Laraval",
    author_name: "Gordon Chef",
    publishedYear: 2016,
    price: 44.99,
    rating: 4,
    addToCart: false,
    isFavorite: true,
  },
  {
    id: 8,
    image: "https://images.pexels.com/photos/4153146/pexels-photo-4153146.jpeg",
    title: "HTML and CSS",
    author_name: "Mia Meditator",
    publishedYear: 2020,
    price: 29.99,
    rating: 4,
    addToCart: true,
    isFavorite: false,
  },
  {
    id: 9,
    image:
      "https://img.freepik.com/free-photo/back-school-accessories_169016-1504.jpg?w=360&t=st=1705466798~exp=1705467398~hmac=7c225598b2b1a967928e5ae058fd698071166845ad62d5b3b8e231f3cf21b85d",
    title: "Management learning",
    author_name: "Mehedi hasan",
    publishedYear: 2013,
    price: 33.81,
    rating: 4,
    addToCart: true,
    isFavorite: true,
  },
  {
    id: 10,
    image:
      "https://img.freepik.com/free-photo/front-view-stacked-books-graduation-cap-ladders-education-day_23-2149241014.jpg?w=360&t=st=1705466548~exp=1705467148~hmac=66ab2b1091118f8dbb1bd6068f8465c49012edfd9797428ba2aad57f70cc53d0",
    title: "Web development",
    author_name: "Marlon samius",
    publishedYear: 2017,
    price: 40.0,
    rating: 4,
    addToCart: true,
    isFavorite: true,
  },
  {
    id: 11,
    image:
      "https://img.freepik.com/free-photo/from-opened-books_23-2147779265.jpg?w=360&t=st=1705466845~exp=1705467445~hmac=e454586d5c6de919d39289c4ddfb1093a756c6dd91f6abf2b5e73a5dd0125b16",
    title: "C programming",
    author_name: "Umran malik",
    publishedYear: 2006,
    price: 54.0,
    rating: 4,
    addToCart: false,
    isFavorite: true,
  },
  {
    id: 12,
    image:
      "https://img.freepik.com/premium-photo/front-view-books-with-copy-space-education-day_23-2149241022.jpg?w=360",
    title: "Android development",
    author_name: "Zunaid ahamed",
    publishedYear: 2010,
    price: 14.99,
    rating: 4,
    addToCart: true,
    isFavorite: true,
  },
];

const ListBook = () => {
  const [books, setBooks] = useState(bookings);
  const [sortCriteria, setSortCriteria] = useState("");

  const handleSearch = (search) => {
    const filtered = bookings.filter((book) =>
      book.title.toLowerCase().includes(search.toLowerCase())
    );
    setBooks([...filtered]);
  };

  const handleSortDownChange = (selectedChangeOption) => {
    setSortCriteria(selectedChangeOption);
  };

  const sortBooks = () => {
    return [...books].sort((a, b) => {
      const nameA = a.title.toLowerCase();
      const nameB = b.title.toLowerCase();

      switch (sortCriteria) {
        case "name_asc":
          return nameA.localeCompare(nameB);
        case "name_desc":
          return nameB.localeCompare(nameA);
        case "year_asc":
          return a.publishedYear - b.publishedYear;
        case "year_desc":
          return b.publishedYear - a.publishedYear;
        default:
          return 0;
      }
    });
  };

  return (
    <div>
      <main className="my-10 lg:my-14">
        <header className="mb-8 lg:mb-10 mx-auto max-w-7xl">
          <div className="mx-auto flex items-end justify-between max-md:max-w-[95%] max-md:flex-col max-md:items-start max-md:space-y-4">
            <div>
              <h6 className="mb-2 text-base lg:text-xl">Trending on 2021</h6>
              <h2 className="mb-6 font-['Playfair_Display'] text-3xl font-bold lg:text-4xl">
                Trending Books of the Year
              </h2>

              <SearchBook onSearch={handleSearch}></SearchBook>
            </div>

            <div>
              <SelectSort onDropDownChange={handleSortDownChange}></SelectSort>
            </div>
          </div>
        </header>
        <div>
          <BookItem books={sortBooks()} setBooks={setBooks}></BookItem>
        </div>
      </main>
    </div>
  );
};

export default ListBook;
