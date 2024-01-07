import { useState } from "react";
import SiderBar from "./components/SiderBar";
import Card from "./components/Card";
import { CiCirclePlus } from "react-icons/ci";
import { messages } from "./utils/messages";
import Header from "./components/Header";


function App() {

  const [addCard, setAddCard] = useState(false)

  return (
    <>
      <Header />
      <SiderBar />

      <div className="w-full h-full flex justify-center items-center gap-[50px] relative">
        {messages?.map((message, i) => {
          return (
            <Card key={i} message={message} />
          )
        })}
        {addCard ? <Card message={messages[0]} /> : <CiCirclePlus className="text-6xl text-[#909090] cursor-pointer hover:text-gray-500" onClick={() => {
          setAddCard(true)
        }} />}
      </div>




    </>

  )
}

export default App
