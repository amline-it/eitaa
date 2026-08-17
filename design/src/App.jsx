import Header from './components/Header'
import HeroBanner from './components/HeroBanner'
import Stepper from './components/Stepper'
import ServiceGrid from './components/ServiceGrid'
import DraftCard from './components/DraftCard'
import BottomNav from './components/BottomNav'
import { getMockDraft } from './data/mockDraft'

export default function App() {
  const draft = getMockDraft()

  return (
    <div className="app-shell">
      <div className="app-content">
        <Header />
        <main>
          <HeroBanner />
          <Stepper />
          <ServiceGrid />
          {draft && <DraftCard draft={draft} />}
        </main>
      </div>
      <BottomNav />
    </div>
  )
}
