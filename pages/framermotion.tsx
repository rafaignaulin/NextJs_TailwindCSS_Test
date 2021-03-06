import { motion } from "framer-motion";

const NextPage: React.FC = () => {
  return (
    <div className="relative h-20 md:h-40 lg:h-64 bg:gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition">
        <motion.img src={"/img/framermotion.svg"} alt="Framermotion" className="w-full h-full" layoutId={"framermotion-logo"}/>
    </div>
  )
}


export default NextPage;