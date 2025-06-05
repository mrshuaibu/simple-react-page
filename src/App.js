import Footer from "./components/Footer";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Gallery from "./components/Gallery";
import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';
import img4 from './img/img4.jpg';

function App() {

  let title = "Simple React Page";
  let isLoggedIn = false;

  const navLinks = [
    {index: 0, name: 'About', url: 'https://www.components.com/about'},
    {index: 1, name: 'Projects', url: 'https://www.components.com/projects'},
    {index: 2, name: 'Contact', url: 'https://www.components.com/contact'},
    {index: 3, name: 'Blogs', url: 'https://www.components.com/blog'}
  ]

const socialLinks = [
  { index: 0, icon: 'fa-brands fa-linkedin', url: 'https://linkedin.com' },
  { index: 1, icon: 'fa-brands fa-instagram', url: 'https://instagram.com' },
  { index: 2, icon: 'fa-brands fa-github', url: 'https://github.com' }
]

const imageUrls = [img1, img2, img3, img4];

  return (
    <>
      <Header title={title} list={navLinks} isLoggedIn={isLoggedIn}/>
      <main>
        <Banner 
          title="Just a simple page"
          text="This is a simple React page built to improve my skills and 
          practice building components, styling layouts, and working with 
          props for the first time using React."
          primaryBtnText="Explore Services"
          primaryBtnType="primary"
          secondaryBtnText="Get Started"
          secondaryBtnType="secondary"
        />
        <Gallery images={imageUrls} />
      </main>
      <Footer socialLinks={socialLinks}/>
    </>
  );
}

export default App;
