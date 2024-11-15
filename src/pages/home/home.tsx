import { useState } from 'react';

import SwapForm from 'components/forms/swap-from';
import SwapFormLimit from 'components/forms/swap-from-limit';

import useGetTokens from './core/hooks/use-get-tokens';

function Home() {
  const [selectedTab, setSelectedTab] = useState(0);
  const { data } = useGetTokens();
  console.log(data);

  return (
    <div>
      {selectedTab === 0 && <SwapForm setSelectedTab={setSelectedTab} selectedTab={selectedTab} />}
      {selectedTab === 1 && <SwapFormLimit setSelectedTab={setSelectedTab} selectedTab={selectedTab} />}
    </div>
  );
}

export default Home;
