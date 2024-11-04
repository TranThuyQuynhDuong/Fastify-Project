import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouterSite from "./router";
import LayoutSite from "./layouts/LayoutSite";
import AuthProvider from "./component/Provider/AuthProvider";
import { CartProvider } from "react-use-cart"; // Import CartProvider
import ProductItems from "./pages/frontend/ProductAtHome/ProductsItems";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider> {/* Add CartProvider */}
          <Routes>
            <Route path="/" element={<LayoutSite />}>
              {/* Render public routes */}
              {RouterSite.RouterPublic.map(function (route, index) {
                const Page = route.component;
                return <Route key={index} path={route.path} element={<Page />} />;
              })}
            </Route>
            <Route path="/products" element={<ProductItems />} />
          </Routes>
        </CartProvider> {/* Close CartProvider */}
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
