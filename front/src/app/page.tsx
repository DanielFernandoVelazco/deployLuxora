import React from "react";
import HomeView from "@/views/HomeView";
<<<<<<< HEAD
import Slidebar from "@/components/sliderbar/slidebar";


export const Home: React.FC = ()=>{


return(
  <div>
  <div className="mt-4 mb-8"> 
    <Slidebar />
  </div>
  <div>
    <HomeView />
  </div>
</div>
)



}
=======
import Slidebar from "@/components/slidebar/slidebar";

export const Home: React.FC = () => {
  return (
    <div>
      <div className="mt-4 mb-8"> 
        <Slidebar />
      </div>
      <div>
        <HomeView />
      </div>
    </div>
  );
};
>>>>>>> develop


export default Home ;