import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Dashcard from "./components/Dashcard";
import History from "./components/History";
import Winning from "./components/Winning";
import Ductility from "./components/Deposit";

import Regular from "./games/777/Regular";
import Systematic9 from "./games/777/Systematic9";
import TwiceADayLayout from "./games/777/TwiceADayLayout";
import Systematic8 from "./games/777/Systematic8";
import Game from "./games/123/Game";
import ChanceGame from "./games/chance/ChanceGame";
import ChanceLayout from "./games/chance/ChanceLayout";
import GreatChanceGame from "./games/chance/GreatChanceGame";
import NormalChanceGame from "./games/chance/NormalChance";
import Strong from "./games/lotto/strong/Strong";
import Systematic from "./games/lotto/systematic/Systematic";
import LottoLayout from "./games/lotto/LottoLayout";
import RegularLotto from "./games/lotto/regular/RegularLotto";

import ductilityData from "./components/ductilityData";
// import LayoutDash from "./components/LayoutDash";
import Refund from "./components/Refund";
import ActiveForm from "./components/ActiveForm";
import deposityData from "./components/deposityData";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/123" element={<Game />} />
          <Route path="/chance" element={<ChanceLayout />}>
            <Route index element={<ChanceGame />} />
            <Route path="great" element={<GreatChanceGame />} />
            <Route path="normal" element={<NormalChanceGame />} />
          </Route>
          <Route path="/777" element={<TwiceADayLayout />}>
            <Route index element={<Regular />} />
            <Route path="systematic-8" element={<Systematic8 />} />
            <Route path="systematic-9" element={<Systematic9 />} />
          </Route>
          <Route path="/lotto" element={<LottoLayout />}>
            <Route index element={<Strong />} />
            <Route path="systematic" element={<Systematic />} />
            <Route path="regular" element={<RegularLotto />} />
          </Route>
          <Route path="/dashboard" element={<Dashcard />}>
            <Route index element={<ActiveForm />} />
            <Route path="history" element={<History />} />
            <Route path="winnings" element={<Winning />} />
            <Route
              path="ductility"
              element={<Ductility data={ductilityData} />}
            />
            <Route
              path="deposits"
              element={<Ductility data={deposityData} />}
            />
            <Route path="refund" element={<Refund />} />
          </Route>
          <Route path="history" element={<History />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
