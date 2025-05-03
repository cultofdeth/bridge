import logo from './logo.svg';
import './App.css';
import sol_logo from './Images/solana-sol-logo.png'
import eth_logo from './Images/ethereum-eth-logo.png'
import deth_cult from './Images/dethcult.jpg'
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='h-full flex items-center bg-[#0a0d1c]'>
        <img src={deth_cult} className='h-full'></img>
      </div>
      <div className='w-2/3'>
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a0d1c]">
      <div className='death4 text-2xl text-fuchsia-200 p-6'>From Death, Life Awakens.</div>
      <div className="bg-[#121826] rounded-xl p-6 w-80 shadow-lg">
        {/* Selling Section */}
        <div className="mb-4">
          <label className="text-gray-400 text-sm">Selling</label>
          <div className="flex items-center justify-between bg-[#1c2233] rounded-lg px-4 py-3 mt-1">
            <div className="flex items-center gap-2">
              <img src={eth_logo} alt="eth" className="w-5 h-5" />
              <span className="text-white font-medium">ETH</span>
            </div>
            <div className="text-right">
              <div className="text-white text-lg font-semibold">0.00</div>
              <div className="text-gray-500 text-xs">$0</div>
            </div>
          </div>
        </div>

        {/* Swap Icon */}
        <div className="flex justify-center my-2">
          <button className="bg-[#1c2233] p-2 w-12 h-12 rounded-full hover:bg-[#2a3045]">
            <span className="text-gray-400 text-xl">&#8645;</span>
          </button>
        </div>

        {/* Buying Section */}
        <div className="mb-4">
          <label className="text-gray-400 text-sm">Buying</label>
          <div className="flex items-center justify-between bg-[#1c2233] rounded-lg px-4 py-3 mt-1">
            <div className="flex items-center gap-2">
              <img src={sol_logo} alt="SOL" className="w-5 h-5" />
              <span className="text-white font-medium">DETH</span>
            </div>
            <div className="text-right">
              <div className="text-white text-lg font-semibold">0.00</div>
              <div className="text-gray-500 text-xs">$0</div>
            </div>
          </div>
        </div>

        {/* Connect Button */}
        <button className="bg-fuchsia-400 text-black w-full py-3 rounded-lg font-semibold hover:bg-fuchsia-300">
          Coming soon
        </button>
      </div>
    </div>
      </div>
    </div>
  );
}

export default App;
