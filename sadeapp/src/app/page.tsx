import Introducao from "@/components/Introducao";
import AboutUs from "@/components/AboutUs/page";/*Importando componente do sobre nós*/
import { Achievements } from "@/components/Achievements/page";;/*Importando componente do conquistas*/
import Contacts from "@/components/Contacts/page";/*Importando componente do contatos*/
import { Differences } from "@/components/Differentials/Component/page";
import Footer from "@/components/Footer/footer";
import Header from "@/components/Header/header";/*Importando componente do cabeçalho*/
import { Benefits } from "@/components/Benefits/Component/page"



export default function Home() {
  return (

    <div className="gap-y-24">
       <Header />
       <Introducao/>
       <Differences/>
       <Contacts />
       <Benefits/>
       <Achievements />
       <Footer />
    </div>

  )
}
