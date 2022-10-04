import { useEffect } from "react";
import "./App.css";
import "@rainbow-me/rainbowkit/styles.css";
import {
  ConnectButton,
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
  useSigner,
} from "wagmi";
import { publicProvider } from "wagmi/providers/public";
const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  [publicProvider()]
);
import { useSetWallet, useLaunch, Intercom, Window } from "@relaycc/receiver";

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function App() {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Receiver />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

function Receiver() {
  const { data: signer } = useSigner();
  const launch = useLaunch();
  const setWallet = useSetWallet();

  useEffect(() => {
    setWallet(signer || null);
  }, [signer, setWallet]);

  return (
    <div className="relay-receiver-wrapper">
      <h3>
        Check out Relay on <a href="https://github.com/relaycc">GitHub</a>
      </h3>
      <h1>
        Relay Receiver with <a href="https://vitejs.dev/guide/">Vite</a> and
        React
      </h1>
      <ConnectButton />
      <button className="relay-receiver-launcher" onClick={() => launch()}>
        Launch Receiver
      </button>
      <Intercom>
        <Window />
      </Intercom>
    </div>
  );
}

export default App;
