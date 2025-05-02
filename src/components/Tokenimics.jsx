import { motion } from 'framer-motion';

const tokenomics = [
  {
    title: "TOTAL SUPPLY",
    value: "1BN",
    subtitle: "TOTAL SUPPLY",
    bg: "border border-green-400",
    glow: "text-green-400",
  },
  {
    title: "BUY/SELL TAX",
    value: "10%",
    subtitle: "TAX ON ALL TRADES",
    bg: "border border-green-400",
    glow: "text-green-400",
  },
  {
    title: "TOKEN DISTRIBUTION",
    value: "5%",
    subtitle: "DISTRIBUTED TO HOLDERS",
    bg: "border border-green-400",
    glow: "text-green-400",
  },
];

export default function Tokenomics() {
  return (
    <div className="relative  text-white  font-vina min-h-screen">
      {/* Background Image with Overlay */}
      <motion.img
        src="/images/done.png"
        alt="Tokenomics Background"
        className="absolute inset-0opacity-30 mx-auto left-0 right-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
      />
      <div className="absolute inset-0 bg-[#00000058]  bg-opacity-60 left-0 right-0 mx-auto" />

      {/* Content */}
      <div className="relative pt-20 z-10">
        <div className="text-center text-6xl text-green-400 py-8 tracking-widest">TOKENOMICS</div>
        <div className="flex justify-center gap-6 flex-wrap">
          {tokenomics.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className={`w-84 rounded-lg shadow-lg border-2 border-white ${item.bg} p-5 backdrop-blur-sm`}
            >
              <div className="text-3xl text-white font-bold mb-2">{item.title}</div>
              <div className="text-6xl font-extrabold">{item.value}</div>
              <div className={`mt-2 text-3xl ${item.glow} tracking-wide`}>
                {item.subtitle}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center text-white mt-8 font-bold text-xl">
          Blockchain: <span className="text-green-400">SOLANA</span>
        </div>
      </div>
    </div>
  );
}