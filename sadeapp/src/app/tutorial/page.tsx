import { Header } from "@/components/Header/header";
import Tutorial from "@/components/tutorial";
import Image from "../../../public/images/tutorial/base.png"

export default function tutorial() {

    return(

        <>  
            <Header/>

            <div className="flex flex-col gap-5 items-center pt-40">

                <Tutorial number={1} text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente id totam dignissimos nulla aperiam assumenda dolore harum. Et delectus minima corrupti sit, quo placeat a ad temporibus molestiae odio quidem?" imageUrl={Image}/>
                <Tutorial number={2} text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente id totam dignissimos nulla aperiam assumenda dolore harum. Et delectus minima corrupti sit, quo placeat a ad temporibus molestiae odio quidem?" imageUrl={Image}/>
                <Tutorial number={3} text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente id totam dignissimos nulla aperiam assumenda dolore harum. Et delectus minima corrupti sit, quo placeat a ad temporibus molestiae odio quidem?" imageUrl={Image}/>
                <Tutorial number={4} text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente id totam dignissimos nulla aperiam assumenda dolore harum. Et delectus minima corrupti sit, quo placeat a ad temporibus molestiae odio quidem?" imageUrl={Image}/>
                
            </div>
        </>
    );
};
