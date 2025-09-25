import React from "react";

export default function PrivacyPolicy() {
	return (
		<div className="min-h-screen bg-white pt-12 pb-20 px-4 sm:px-8 lg:px-0 flex flex-col items-center mt-14">
			<div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-6 sm:p-10 border border-gray-100">
				<h1 className="text-3xl sm:text-4xl font-bold text-reguard-navy mb-2 text-center">Privacy Policy</h1>
				<p className="text-sm text-gray-500 text-center mb-8">Last Updated: 28th August 2025</p>

				<p className="mb-6 text-gray-700">
					At <span className="font-semibold text-reguard-red">Reguard</span>, your privacy is our top priority. We understand that when you share your personal information with us, you trust us to protect it. This Privacy Policy explains what information we collect, how we use it, and the choices you have.
				</p>
				<p className="mb-6 text-gray-700">
					By using our website (<a href="https://www.reguardai.com" className="text-reguard-red underline">www.reguardai.com</a>) or our services, you agree to the practices described in this Privacy Policy. If you do not agree, please stop using our services.
				</p>

				<hr className="my-8 border-gray-200" />

				<section className="mb-8">
					<h2 className="text-xl font-semibold text-reguard-navy mb-2">1. Information We Collect</h2>
					<p className="mb-2 text-gray-700">We collect information in two ways:</p>
					<div className="mb-2">
						<span className="font-semibold text-reguard-navy">a) Information You Provide</span>
						<ul className="list-disc ml-6 text-gray-700">
							<li>Full Name</li>
							<li>Email Address</li>
							<li>Mobile Number</li>
							<li>Postal Address</li>
							<li>Identity information (like Aadhaar, PAN, or other IDs if required for verification services)</li>
						</ul>
					</div>
					<div className="mb-2">
						<span className="font-semibold text-reguard-navy">b) Information Collected Automatically</span>
						<ul className="list-disc ml-6 text-gray-700">
							<li>Your IP address</li>
							<li>Browser and device details</li>
							<li>Pages you visit on our site</li>
							<li>Cookies (small files stored on your device to improve your browsing experience)</li>
						</ul>
						<p className="text-xs text-gray-500 mt-1">You can choose to block cookies in your browser settings, but this may affect certain features.</p>
					</div>
				</section>

				<section className="mb-8">
					<h2 className="text-xl font-semibold text-reguard-navy mb-2">2. How We Use Your Information</h2>
					<ul className="list-disc ml-6 text-gray-700 mb-2">
						<li>Provide and improve our services</li>
						<li>Contact you regarding service updates or customer support</li>
						<li>Keep your account secure</li>
						<li>Run analytics to understand how users interact with our website</li>
						<li>Comply with legal and regulatory requirements</li>
					</ul>
					<div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 text-yellow-900 text-sm rounded mb-2">
						<span className="font-semibold">Important:</span> Any sensitive information you provide for identity verification (like Aadhaar/PAN) is only used for the specific service you request. We never sell or misuse your data.
					</div>
				</section>

				<section className="mb-8">
					<h2 className="text-xl font-semibold text-reguard-navy mb-2">3. Sharing of Information</h2>
					<ul className="list-disc ml-6 text-gray-700">
						<li><span className="font-semibold">With Your Consent</span> – When you choose to use a specific service that requires sharing your details with our partners.</li>
						<li><span className="font-semibold">Service Providers</span> – With trusted partners who help us run our services (like cloud hosting, analytics, or payment gateways). They are only allowed to use your information as necessary to perform their services.</li>
						<li><span className="font-semibold">Business Transfers</span> – If Reguard is merged, acquired, or sells assets, user information may be transferred as part of the business.</li>
						<li><span className="font-semibold">Legal Requirements</span> – When required by law, regulation, court order, or government request.</li>
						<li><span className="font-semibold">Safety & Security</span> – When necessary to protect the rights, property, or safety of Reguard, our users, or the public.</li>
					</ul>
				</section>

				<section className="mb-8">
					<h2 className="text-xl font-semibold text-reguard-navy mb-2">4. International Transfers</h2>
					<p className="text-gray-700">Your data may be stored and processed in India or other countries where our partners and servers are located. By using our services, you consent to this transfer.</p>
				</section>

				<section className="mb-8">
					<h2 className="text-xl font-semibold text-reguard-navy mb-2">5. Data Retention</h2>
					<p className="text-gray-700">We retain your data as long as your account is active or as needed to provide our services. Certain information may be stored longer to meet legal, regulatory, or audit requirements.</p>
				</section>

				<section className="mb-8">
					<h2 className="text-xl font-semibold text-reguard-navy mb-2">6. Your Rights & Choices</h2>
					<ul className="list-disc ml-6 text-gray-700 mb-2">
						<li>Access the information we hold about you</li>
						<li>Request corrections to your personal data</li>
						<li>Ask us to delete your data (where legally possible)</li>
						<li>Opt-out of marketing communications at any time</li>
					</ul>
					<p className="text-gray-700">To exercise these rights, contact us at <a href="mailto:help@reguard.ai" className="text-reguard-red underline">help@reguard.ai</a>.</p>
				</section>

				<section className="mb-8">
					<h2 className="text-xl font-semibold text-reguard-navy mb-2">7. Children’s Privacy</h2>
					<p className="text-gray-700">Our services are not directed at individuals under the age of 15. If we learn that we have collected personal information from a child below this age, we will delete it immediately.</p>
				</section>

				<section className="mb-8">
					<h2 className="text-xl font-semibold text-reguard-navy mb-2">8. Security</h2>
					<p className="text-gray-700">We use industry-standard security measures to protect your data from unauthorized access, alteration, disclosure, or destruction. However, no method of online transmission is 100% secure, so we cannot guarantee absolute security.</p>
				</section>

				<section className="mb-8">
					<h2 className="text-xl font-semibold text-reguard-navy mb-2">9. Changes to this Policy</h2>
					<p className="text-gray-700">We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated “Last Updated” date. Please review it regularly to stay informed.</p>
				</section>

				<section className="mb-8">
					<h2 className="text-xl font-semibold text-reguard-navy mb-2">10. Contact Us</h2>
					<p className="text-gray-700 mb-1">If you have any questions or concerns about this Privacy Policy, reach out to us:</p>
					<ul className="ml-6 text-gray-700">
						<li className="mb-1">📧 <span className="font-semibold">Email:</span> <a href="mailto:help@reguard.ai" className="text-reguard-red underline">help@reguard.ai</a></li>
						<li>🏢 <span className="font-semibold">Address:</span> 44 IIND FLOOR REGAL BUILDING CONNAUGHT PLACE NEW DELHI - 110001</li>
					</ul>
				</section>
			</div>
		</div>
	);
}
