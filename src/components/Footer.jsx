import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-reguard-navy text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <svg width="148" height="35" viewBox="0 0 296 69" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
                <path d="M0 23.8H7.104V55.672H0V23.8ZM18.624 29.88C16.32 29.88 14.336 30.3707 12.672 31.352C11.0507 32.3333 9.74933 33.528 8.768 34.936C7.78667 36.344 7.104 37.7093 6.72 39.032L6.656 35.448C6.69867 34.9787 6.848 34.2747 7.104 33.336C7.36 32.3547 7.744 31.288 8.256 30.136C8.81067 28.984 9.536 27.8747 10.432 26.808C11.3707 25.6987 12.5013 24.8027 13.824 24.12C15.1893 23.4373 16.7893 23.096 18.624 23.096V29.88Z" fill="white"/>
                <path d="M48.064 45.176H54.912C54.5707 47.352 53.7173 49.2933 52.352 51C51.0293 52.664 49.216 53.9867 46.912 54.968C44.608 55.9067 41.856 56.376 38.656 56.376C35.0293 56.376 31.7867 55.7147 28.928 54.392C26.0693 53.0267 23.8293 51.1067 22.208 48.632C20.5867 46.1573 19.776 43.2133 19.776 39.8C19.776 36.4293 20.5653 33.4853 22.144 30.968C23.7227 28.4507 25.8987 26.5093 28.672 25.144C31.488 23.7787 34.7307 23.096 38.4 23.096C42.1973 23.096 45.3547 23.7787 47.872 25.144C50.432 26.4667 52.3307 28.472 53.568 31.16C54.8053 33.8053 55.3173 37.1547 55.104 41.208H27.008C27.2213 43 27.7973 44.6213 28.736 46.072C29.7173 47.48 31.04 48.5893 32.704 49.4C34.368 50.168 36.3093 50.552 38.528 50.552C41.0027 50.552 43.072 50.0613 44.736 49.08C46.4427 48.0987 47.552 46.7973 48.064 45.176ZM38.208 28.856C35.3067 28.856 32.9173 29.5813 31.04 31.032C29.1627 32.44 27.9467 34.2533 27.392 36.472H47.936C47.7653 34.0827 46.8053 32.2267 45.056 30.904C43.3067 29.5387 41.024 28.856 38.208 28.856Z" fill="white"/>
                <path d="M73.088 50.744C70.1013 50.744 67.392 50.2107 64.96 49.144C62.5707 48.0773 60.672 46.52 59.264 44.472C57.8987 42.424 57.216 39.9707 57.216 37.112C57.216 34.2533 57.8773 31.7787 59.2 29.688C60.5653 27.5973 62.4427 25.976 64.832 24.824C67.264 23.672 70.016 23.096 73.088 23.096C73.984 23.096 74.8373 23.16 75.648 23.288C76.5013 23.416 77.312 23.5867 78.08 23.8L92.992 23.864V29.816C90.944 29.8587 88.8747 29.5813 86.784 28.984C84.736 28.344 82.9227 27.6827 81.344 27L81.152 26.616C82.6027 27.3413 83.904 28.2373 85.056 29.304C86.2507 30.328 87.1893 31.5013 87.872 32.824C88.5547 34.1467 88.896 35.64 88.896 37.304C88.896 40.12 88.2133 42.5307 86.848 44.536C85.5253 46.5413 83.6693 48.0773 81.28 49.144C78.9333 50.2107 76.2027 50.744 73.088 50.744ZM83.328 68.664V67.192C83.328 65.1013 82.7093 63.6293 81.472 62.776C80.2347 61.9227 78.5067 61.496 76.288 61.496H67.648C65.9413 61.496 64.4693 61.3467 63.232 61.048C62.0373 60.792 61.0773 60.3867 60.352 59.832C59.6267 59.32 59.0933 58.7013 58.752 57.976C58.4107 57.2933 58.24 56.5253 58.24 55.672C58.24 53.9653 58.752 52.6853 59.776 51.832C60.8427 50.9787 62.2293 50.424 63.936 50.168C65.6853 49.912 67.52 49.8693 69.44 50.04L73.088 50.744C70.5707 50.8293 68.6507 51.064 67.328 51.448C66.048 51.7893 65.408 52.4933 65.408 53.56C65.408 54.2 65.664 54.712 66.176 55.096C66.688 55.48 67.4133 55.672 68.352 55.672H77.44C80.0427 55.672 82.3253 55.9707 84.288 56.568C86.2507 57.208 87.7653 58.2533 88.832 59.704C89.9413 61.1973 90.496 63.224 90.496 65.784V68.664H83.328ZM73.088 45.176C74.7947 45.176 76.3093 44.856 77.632 44.216C78.9547 43.576 80 42.6587 80.768 41.464C81.536 40.2693 81.92 38.8187 81.92 37.112C81.92 35.4053 81.536 33.9333 80.768 32.696C80 31.4587 78.9547 30.52 77.632 29.88C76.3093 29.24 74.7947 28.92 73.088 28.92C71.424 28.92 69.9093 29.24 68.544 29.88C67.2213 30.52 66.176 31.4587 65.408 32.696C64.64 33.8907 64.256 35.3627 64.256 37.112C64.256 38.8187 64.64 40.2693 65.408 41.464C66.176 42.6587 67.2213 43.576 68.544 44.216C69.8667 44.856 71.3813 45.176 73.088 45.176Z" fill="white"/>
                <path d="M129.348 55.672H122.244V23.8H129.348V55.672ZM122.629 40.504L122.693 42.552C122.607 43.1067 122.415 43.9387 122.117 45.048C121.861 46.1573 121.412 47.3733 120.772 48.696C120.175 49.976 119.365 51.2133 118.34 52.408C117.359 53.56 116.122 54.52 114.629 55.288C113.135 56.0133 111.322 56.376 109.188 56.376C107.652 56.376 106.095 56.1627 104.517 55.736C102.98 55.352 101.573 54.6907 100.293 53.752C99.0552 52.8133 98.0525 51.5333 97.2845 49.912C96.5165 48.2907 96.1325 46.2427 96.1325 43.768V23.8H103.237V42.424C103.237 44.4293 103.557 46.008 104.197 47.16C104.879 48.2693 105.818 49.0587 107.012 49.528C108.207 49.9973 109.594 50.232 111.173 50.232C113.434 50.232 115.354 49.72 116.933 48.696C118.511 47.672 119.77 46.4133 120.709 44.92C121.69 43.384 122.33 41.912 122.629 40.504Z" fill="white"/>
                <path d="M147.843 56.376C144.942 56.376 142.275 55.672 139.843 54.264C137.454 52.856 135.534 50.9147 134.083 48.44C132.675 45.9227 131.971 43.0427 131.971 39.8C131.971 36.472 132.696 33.5707 134.147 31.096C135.598 28.5787 137.56 26.616 140.035 25.208C142.51 23.8 145.283 23.096 148.355 23.096C151.768 23.096 154.478 23.8427 156.483 25.336C158.488 26.8293 159.918 28.8347 160.771 31.352C161.624 33.8693 162.051 36.6853 162.051 39.8C162.051 41.5493 161.795 43.4053 161.283 45.368C160.771 47.288 159.96 49.08 158.851 50.744C157.784 52.408 156.334 53.7733 154.499 54.84C152.707 55.864 150.488 56.376 147.843 56.376ZM150.019 50.488C152.408 50.488 154.435 50.04 156.099 49.144C157.806 48.2053 159.086 46.9253 159.939 45.304C160.835 43.6827 161.283 41.848 161.283 39.8C161.283 37.5387 160.835 35.6187 159.939 34.04C159.043 32.4187 157.763 31.1813 156.099 30.328C154.435 29.432 152.408 28.984 150.019 28.984C146.606 28.984 143.96 29.9867 142.083 31.992C140.206 33.9973 139.267 36.6 139.267 39.8C139.267 41.8907 139.715 43.7467 140.611 45.368C141.55 46.9893 142.83 48.248 144.451 49.144C146.072 50.04 147.928 50.488 150.019 50.488ZM161.283 23.8H168.451V55.672H161.795C161.795 55.672 161.752 55.2667 161.667 54.456C161.582 53.6453 161.496 52.664 161.411 51.512C161.326 50.3173 161.283 49.1867 161.283 48.12V11Z" fill="white"/>
                <path d="M172.7 23.8H179.804V55.672H172.7V23.8ZM191.324 29.88C189.02 29.88 187.036 30.3707 185.372 31.352C183.751 32.3333 182.449 33.528 181.468 34.936C180.487 36.344 179.804 37.7093 179.42 39.032L179.356 35.448C179.399 34.9787 179.548 34.2747 179.804 33.336C180.06 32.3547 180.444 31.288 180.956 30.136C181.511 28.984 182.236 27.8747 183.132 26.808C184.071 25.6987 185.201 24.8027 186.524 24.12C187.889 23.4373 189.489 23.096 191.324 23.096V29.88Z" fill="white"/>
                <path d="M208.348 56.376C205.404 56.376 202.716 55.672 200.284 54.264C197.895 52.856 195.996 50.9147 194.588 48.44C193.18 45.9227 192.476 43.0427 192.476 39.8C192.476 36.472 193.159 33.5707 194.524 31.096C195.932 28.5787 197.809 26.616 200.156 25.208C202.545 23.8 205.276 23.096 208.348 23.096C211.036 23.096 213.297 23.544 215.132 24.44C216.967 25.2933 218.417 26.488 219.484 28.024C220.551 29.5173 221.319 31.2667 221.788 33.272C222.3 35.2773 222.556 37.4533 222.556 39.8C222.556 41.5493 222.3 43.4053 221.788 45.368C221.276 47.288 220.465 49.08 219.356 50.744C218.289 52.408 216.839 53.7733 215.004 54.84C213.212 55.864 210.993 56.376 208.348 56.376ZM210.524 50.488C212.913 50.488 214.94 50.04 216.604 49.144C218.311 48.2053 219.591 46.9253 220.444 45.304C221.34 43.6827 221.788 41.848 221.788 39.8C221.788 37.5387 221.34 35.6187 220.444 34.04C219.548 32.4187 218.268 31.16 216.604 30.264C214.94 29.368 212.913 28.92 210.524 28.92C207.111 28.92 204.465 29.944 202.588 31.992C200.711 33.9973 199.772 36.6 199.772 39.8C199.772 41.8907 200.22 43.7467 201.116 45.368C202.055 46.9893 203.335 48.248 204.956 49.144C206.577 50.04 208.433 50.488 210.524 50.488ZM221.788 11H228.956V55.672H222.3C222.215 54.6907 222.108 53.4747 221.98 52.024C221.852 50.5733 221.788 49.272 221.788 48.12V11Z" fill="white"/>
                <path d="M271.353 48.6172L275.372 58H250C249.215 58 248.448 57.9232 247.705 57.7793L251.615 48.6172H271.353ZM284 0C290.627 0 296 5.37258 296 12V46C296 49.6576 294.361 52.9298 291.78 55.1309L276 18H268.888L285.828 57.8604C285.232 57.9515 284.622 58 284 58H283.046L265.266 18H257.655L241.54 54.5098C239.354 52.3363 238 49.3264 238 46V12C238 5.37258 243.373 0 250 0H284ZM268.787 42.6299H254.17L261.463 25.5371L268.787 42.6299Z" fill="#E51636"/>
              </svg>
            </div>
            <p className="text-slate-300 mb-8 leading-relaxed">
              AI-powered post-onboarding compliance solutions for India's financial ecosystem. Protecting institutions from fraud, financial risk, and reputational damage.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/reguard-in" className="text-slate-400 hover:text-reguard-red transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://x.com/reguard_in" className="text-slate-400 hover:text-reguard-red transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/reguard_ai/" className="text-slate-400 hover:text-reguard-red transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/reguard.in/" className="text-slate-400 hover:text-reguard-red transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-8">Solutions</h3>
            <ul className="space-y-4">
              <li><Link to="/solutions/customer-compliance" className="text-slate-400 hover:text-white transition-colors">Customer Compliance</Link></li>
              <li><Link to="/solutions/vendor-management" className="text-slate-400 hover:text-white transition-colors">Vendor Management</Link></li>
              <li><Link to="/solutions/merchant-monitoring" className="text-slate-400 hover:text-white transition-colors">Merchant Monitoring</Link></li>
              <li><Link to="/solutions/risk-assessment" className="text-slate-400 hover:text-white transition-colors">Risk Assessment</Link></li>
              <li><Link to="/solutions/regulatory-compliance" className="text-slate-400 hover:text-white transition-colors">Regulatory Compliance</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-8">Industries</h3>
            <ul className="space-y-4">
              <li><Link to="/industries/banking" className="text-slate-400 hover:text-white transition-colors">Banking</Link></li>
              <li><Link to="/industries/fintech" className="text-slate-400 hover:text-white transition-colors">Fintech</Link></li>
              <li><Link to="/industries/nbfcs" className="text-slate-400 hover:text-white transition-colors">NBFCs</Link></li>
              <li><Link to="/industries/payment-processors" className="text-slate-400 hover:text-white transition-colors">Payment Processors</Link></li>
              <li><Link to="/industries/digital-lending" className="text-slate-400 hover:text-white transition-colors">Digital Lending</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-8">Contact</h3>
            <ul className="space-y-6">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-reguard-red mt-0.5 flex-shrink-0" />
                <span className="text-slate-400">
                  44 IIND FLOOR REGAL BUILDING <br />
                  CONNAUGHT PLACE NEW DELHI - 110001
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-reguard-red flex-shrink-0" />
                <span className="text-slate-400">+91 96546 07040</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-reguard-red flex-shrink-0" />
                <span className="text-slate-400">support@reguardai.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2025 ReguardAI. All rights reserved. | Compliant with RBI, SEBI, and Indian data protection regulations.
            </p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Security</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;