import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Figure from "./Figure";
import WhichH from "./WhichH";
import Pmax from "./Pmax";

function App() {
    return (
        <div className="App">
            <Header />
            <Figure />
            <h3>Which-H</h3>
            <WhichH />
            <h3>P-max</h3>
            <Pmax />
            <Footer />
        </div>
    );
}

export default App;