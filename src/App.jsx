import { Logo } from "./img/Logo";

import { Header } from "./components/Header";
import { ListenNow } from "./components/ListenNow";

export const App = () => {
    return (
        <div>
            {/* <Logo color="black" width="300px" /> */}
            <Header />
            <ListenNow />
        </div>
    );
};
