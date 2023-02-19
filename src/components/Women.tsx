import Pageanimation from "../common/PageAnimation";
import Adidas from "./Women/adidas";
import Ck from "./Women/ck";
import Puma from "./Women/puma";
import Zara from "./Women/zara";

const Women = () => {
  return (
    <div className="min-h-screen px-4">
      <Pageanimation>
        <Adidas />
        <Ck />
        <Puma />
        <Zara />
      </Pageanimation>
    </div>
  );
};

export default Women;
