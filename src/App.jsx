import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Industries from './components/Industries'
import CTA from './components/CTA'
import Footer from './components/Footer'
import ClientFeedback from './components/ui/testimonial'
import ReportDownload from './components/ReportDownload'
import Solutions from './pages/Solutions'
import IndustriesPage from './pages/Industries'
import CustomerCompliance from './pages/solutions/CustomerCompliance'
import VendorManagement from './pages/solutions/VendorManagement'
import MerchantMonitoring from './pages/solutions/MerchantMonitoring'
import RiskAssessment from './pages/solutions/RiskAssessment'
import RegulatoryCompliance from './pages/solutions/RegulatoryCompliance'
import Banking from './pages/industries/Banking'
import Fintech from './pages/industries/Fintech'
import NBFCs from './pages/industries/NBFCs'
import PaymentProcessors from './pages/industries/PaymentProcessors'
import DigitalLending from './pages/industries/DigitalLending'
import About from './pages/About'
import Contact from './pages/Contact'
import { Toaster } from 'sonner'
import FraudSignals from './components/FraudSignals'
import ScrollToTop from './components/ScrollToTop'

// Home Page Component
const HomePage = () => (
  <>
    <Hero />
    <Features />
    <FraudSignals />
    <ClientFeedback />
    <ReportDownload />
    <CTA />
  </>
)

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Toaster richColors position="top-right" />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route
            path="/solutions/customer-compliance"
            element={<CustomerCompliance />}
          />
          <Route
            path="/solutions/vendor-management"
            element={<VendorManagement />}
          />
          <Route
            path="/solutions/merchant-monitoring"
            element={<MerchantMonitoring />}
          />
          <Route
            path="/solutions/risk-assessment"
            element={<RiskAssessment />}
          />
          <Route
            path="/solutions/regulatory-compliance"
            element={<RegulatoryCompliance />}
          />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/industries/banking" element={<Banking />} />
          <Route path="/industries/fintech" element={<Fintech />} />
          <Route path="/industries/nbfcs" element={<NBFCs />} />
          <Route
            path="/industries/payment-processors"
            element={<PaymentProcessors />}
          />
          <Route
            path="/industries/digital-lending"
            element={<DigitalLending />}
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
