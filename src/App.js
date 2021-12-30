import React, {useState} from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import NewPost from "./components/NewPost";
import TopPosts from "./components/TopPosts";
import MainPosts from "./components/MainPosts";
import Footer from "./components/Footer";
import SearchItems from "./components/SearchItems";
import Post from "./components/Post";

const posts = [
  {id: 1, image: '/img/table-img.png', date: 'Feb 23 · 8 min read', header: 'Plant pot secrets', text: 'Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can damage...'},
  {id: 2, image: '/img/plants-img.png', date: 'Feb 23 · 8 min read', header: 'Professional Repot', text: 'Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can damage...'},
  {id: 3, image: '/img/can-img.png', date: 'Feb 23 · 8 min read', header: 'Watering mastery', text: 'Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can damage...'},
  {id: 4, image: '/img/plants-img.png', date: 'Feb 23 · 8 min read', header: 'Professional Repot', text: 'Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can damage...'},
  {id: 5, image: '/img/can-img.png', date: 'Feb 23 · 8 min read', header: 'Watering mastery', text: 'Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can damage...'},
  {id: 6, image: '/img/table-img.png', date: 'Feb 23 · 8 min read', header: 'Plant pot secrets', text: 'Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can damage...'},
  {id: 7, image: '/img/table-img.png', date: 'Feb 23 · 8 min read', header: 'Plant pot secrets', text: 'Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can damage...'},
  {id: 8, image: '/img/plants-img.png', date: 'Feb 23 · 8 min read', header: 'Professional Repot', text: 'Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can damage...'},
  {id: 9, image: '/img/can-img.png', date: 'Feb 23 · 8 min read', header: 'Watering mastery', text: 'Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can damage...'},
  {id: 10, image: '/img/plants-img.png', date: 'Feb 23 · 8 min read', header: 'Professional Repot', text: 'Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can damage...'},
  {id: 11, image: '/img/can-img.png', date: 'Feb 23 · 8 min read', header: 'Watering mastery', text: 'Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can damage...'},
  {id: 12, image: '/img/table-img.png', date: 'Feb 23 · 8 min read', header: 'Plant pot secrets', text: 'Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can damage...'}
];

function App() {
  const [searchValue, setSearchValue] = useState('');

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }

  const getValue = () => {
    if(searchValue === ''){
      return null;
    } else {
      return searchValue.toLowerCase();
    }
  }

  const renderItems = () => {
    const filtredItems = posts.filter((item) => item.header.toLowerCase().includes(getValue()));
    if (filtredItems.length > 0) {
      return filtredItems.map((item) => (
        <Post
          key={item.id}
          image={item.image}
          date={item.date}
          header={item.header}
          text={item.text}
        />
      ));
    } else {
      return <div>
        <NewPost />
        <TopPosts />
        <MainPosts posts={posts} />
      </div>
    }
  }

  return (
    <div>
      <Header />
      <div className="container">
        <ul className="breadcrumb">
          <li className="breadcrumb-item"><a href="#">Home</a></li>
          <li className="breadcrumb-item breadcrumb-adapt"><a href="#">Blog</a></li>
        </ul>
        <Search
          onChangeSearchInput={onChangeSearchInput}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <SearchItems renderItems={renderItems} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
