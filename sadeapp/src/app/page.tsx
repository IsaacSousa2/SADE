import AboutUs from "@/components/AboutUs/about";/*Importando componente do sobre nós*/
import Achievements from "@/components/Achievements/achievements";/*Importando componente do conquistas*/
import Contacts from "@/components/Contacts/contacts";/*Importando componente do contatos*/
import { Differences } from "@/components/differentiators/Component/differences";
import Header from "@/components/Header/header";/*Importando componente do cabeçalho*/



export default function Home() {
  return (

    <div className="mb-36">
      <Header />
      <Contacts />
      <Achievements />
      <Differences />
    </div>

  )
}
