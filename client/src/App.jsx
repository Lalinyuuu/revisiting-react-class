import {
  BeakerIcon,
  HomeIcon,
  ShoppingCartIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  MusicalNoteIcon,
  ShoppingBagIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/solid";

// 🛠️ Todo 1 / Step 3: ให้ Import ตัว Component Navbar เพื่อจะนำไป Render ลงใน Component App ด้านล่าง

//     ==== ตัวอย่าง ====

//     import Navbar from "./components/Navbar.jsx"

import Navbar from "./components/Navbar";
import ProductCategory from "./components/ProductCategory";
import ProductHighlight from "./components/ProductHighlight";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* 🛠️ Todo 1: ให้สร้าง Component Navbar แล้วนำมา Render */}
      <Navbar />
      {/* 🛠️ Todo 2: ให้สร้าง Component ProductHighlight แล้วนำมา Render */}
      <ProductHighlight />
      {/* 🛠️ Todo 3: ให้สร้าง Component ProductCategory แล้วนำมา Render */}
      <ProductCategory />
      {/* 🛠️ Todo 4: ให้สร้าง Component Footer แล้วนำมา Render */}
      <Footer />
    </>
  );
}

export default App;
