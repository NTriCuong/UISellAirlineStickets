import ComponentBanner from "./Component/ComponentBanner";
import ComponentHeader from "./Component/ComponentHeader";
import ComponentInformation from "./Component/ComponentInformation";

function HomePage (){
    return(
    <div id="main">
        <ComponentHeader/>
        <ComponentBanner/>
        <ComponentInformation/>
    </div>
);
}
export default HomePage;