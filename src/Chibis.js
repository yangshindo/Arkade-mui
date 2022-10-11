import { motion } from "framer-motion";

function Chibis() {
    return (
        <div>
            <motion.img drag={true} whileDrag={{scale: 1.1}} dragMomentum={false} src="https://imgur.com/bGe28Dy.png" alt="chibi-potemkin-img" className="chibi-potemkin-img" />
            <motion.img drag={true} whileDrag={{scale: 1.1}} dragMomentum={false} src="https://imgur.com/Ur6zf1d.png" alt="chibi-ram-img" className="chibi-ram-img"/>
            <motion.img drag={true} whileDrag={{scale: 1.1}} dragMomentum={false} src="https://imgur.com/p4ktzAw.png" alt="chibi-jacko-img" className="chibi-jacko-img"/>
        </div>
    )
}

export default Chibis