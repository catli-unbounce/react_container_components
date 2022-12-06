import { CurrentUserLoader } from "./CurrentUserLoader";

import { UserInfo } from "./UserInfo";
import { ProductInfo } from "./ProductInfo";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";
import WithCounter from "./withCounter";
function App() {
  return (
    <>
      <HoverCounter></HoverCounter>
      <WithCounter OriginalComponent={ClickCounter}></WithCounter>
    </>
  );
}

export default App;
