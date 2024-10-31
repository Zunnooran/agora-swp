import { useState } from 'react';

import SwapForm from 'components/forms/swap-from';
import SwapFormLimit from 'components/forms/swap-from-limit';

function Home() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div>
      {selectedTab === 0 && <SwapForm setSelectedTab={setSelectedTab} selectedTab={selectedTab} />}
      {selectedTab === 1 && <SwapFormLimit setSelectedTab={setSelectedTab} selectedTab={selectedTab} />}
    </div>
  );
}

export default Home;
