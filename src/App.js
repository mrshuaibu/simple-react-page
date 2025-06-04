import Footer from "./components/Footer";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Gallery from "./components/Gallery";

function App() {

  let title = "Simple React Page";
  let isLoggedIn = false;

  const navLinks = [
    {index: 0, name: 'about', url: 'https://www.components.com/about'},
    {index: 1, name: 'Projects', url: 'https://www.components.com/projects'},
    {index: 2, name: 'Contact', url: 'https://www.components.com/contact'},
    {index: 3, name: 'Blogs', url: 'https://www.components.com/blog'}
  ]

  return (
    <>
      <Header title={title} list={navLinks} isLoggedIn={isLoggedIn}/>
      <main>
        <Banner/>
        <Gallery/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
