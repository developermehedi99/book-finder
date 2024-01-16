// import { useState } from "react";
// import BookItem from "./BookItem";
// import SearchBook from "./SearchBook";
// import SelectSort from "./SelectSort";

// const bookings = [
//   {
//     id: 1,
//     image: "https://i.ibb.co/K2Sfpd3/book.png",
//     title: "Javascript and Jquery",
//     author_name: "John Coder",
//     publishedYear: 2020,
//     price: 29.99,
//     rating: 4,
//     addToCart: true,
//     isFavorite: false,
//   },
//   {
//     id: 2,
//     image:
//       "https://images.pexels.com/photos/14381576/pexels-photo-14381576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     title: "Pithon and Go",
//     author_name: "Alice Analyst",
//     publishedYear: 2021,
//     price: 39.99,
//     rating: 4,
//     addToCart: false,
//     isFavorite: true,
//   },
//   {
//     id: 3,
//     image:
//       "https://images.pexels.com/photos/14823486/pexels-photo-14823486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     title: "History of Civilization",
//     author_name: "Jane Historian",
//     publishedYear: 2022,
//     price: 24.99,
//     rating: 4,
//     addToCart: true,
//     isFavorite: true,
//   },
//   {
//     id: 4,
//     image:
//       "https://images.pexels.com/photos/14454202/pexels-photo-14454202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     title: "Javascript and React",
//     author_name: "Bob Novelist",
//     publishedYear: 2023,
//     price: 19.99,
//     rating: 4,
//     addToCart: false,
//     isFavorite: false,
//   },
//   {
//     id: 5,
//     image:
//       "https://images.pexels.com/photos/7171398/pexels-photo-7171398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     title: "Php and Laraval",
//     author_name: "Eva Mathematician",
//     publishedYear: 2019,
//     price: 34.99,
//     rating: 4,
//     addToCart: true,
//     isFavorite: true,
//   },
//   {
//     id: 6,
//     image:
//       "https://images.pexels.com/photos/4996868/pexels-photo-4996868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     title: "Rubi and Python",
//     author_name: "Carl Scientist",
//     publishedYear: 2017,
//     price: 49.99,
//     rating: 4,
//     addToCart: true,
//     isFavorite: false,
//   },
//   {
//     id: 7,
//     image:
//       "https://images.pexels.com/photos/14454202/pexels-photo-14454202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     title: "Php and Laraval",
//     author_name: "Gordon Chef",
//     publishedYear: 2016,
//     price: 44.99,
//     rating: 4,
//     addToCart: false,
//     isFavorite: true,
//   },
//   {
//     id: 8,
//     image: "https://images.pexels.com/photos/4153146/pexels-photo-4153146.jpeg",
//     title: "HTML and CSS",
//     author_name: "Mia Meditator",
//     publishedYear: 2020,
//     price: 29.99,
//     rating: 4,
//     addToCart: true,
//     isFavorite: false,
//   },
// ];

// const ListBook = () => {
//   const [books, setBooks] = useState(bookings);
//   const [sortCriteria, setSortCriteria] = useState("");

//   const handleSearch = (search) => {
//     const filtered = books.filter((book) =>
//       book.title.toLowerCase().includes(search.toLowerCase())
//     );
//     setBooks([...filtered]);
//   };

//   const handleSortDownChange = (selectedChangeOption) => {
//     setSortCriteria(selectedChangeOption);
//   };
//   const sortBooks = () => {
//     return [...books].sort((a, b) => {
//       const nameA = a.title;
//       const nameB = b.title;

//       switch (sortCriteria) {
//         case "name_asc":
//           return nameA.localeCompare(nameB);
//         case "name_desc":
//           return nameB.localeCompare(nameA);
//         case "year_asc":
//           return a.publishedYear - b.publishedYear;
//         case "year_desc":
//           return b.publishedYear - a.publishedYear;
//         default:
//           return 0;
//       }
//     });
//   };

//   return (
//     <div>
//       <main className="my-10 lg:my-14">
//         <header className="mb-8 pb-10 lg:mb-10 mx-auto max-w-7xl">
//           <div className="mx-auto flex items-end justify-between max-md:max-w-[95%] max-md:flex-col max-md:items-start max-md:space-y-4">
//             <div>
//               <h6 className="mb-2 text-base lg:text-xl">Trending on 2021</h6>
//               <h2 className="mb-6 font-['Playfair_Display'] text-3xl font-bold lg:text-4xl">
//                 Trending Books of the Year
//               </h2>

//               <SearchBook onSearch={handleSearch}></SearchBook>
//             </div>

//             <div>
//               <SelectSort onDropDownChange={handleSortDownChange}></SelectSort>
//             </div>
//           </div>
//         </header>
//         <div>
//           <BookItem books={books} setBooks={setBooks}></BookItem>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default ListBook;
