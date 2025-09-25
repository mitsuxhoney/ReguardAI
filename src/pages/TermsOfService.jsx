import React from "react";

export default function TermsOfService() {
	return (
		<div className="min-h-screen bg-white pt-12 pb-20 px-4 sm:px-8 lg:px-0 flex flex-col items-center">
			<div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-6 sm:p-10 border border-gray-100">
				<h1 className="text-3xl sm:text-4xl font-bold text-reguard-navy mb-2 text-center">Terms of Service</h1>
				<p className="text-sm text-gray-500 text-center mb-8">Last Updated: 28 August, 2025</p>

				<p className="mb-6 text-gray-700">
					Welcome to <span className="font-semibold text-reguard-red">Reguard</span> (<a href="https://www.reguardai.com" className="text-reguard-red underline">www.reguardai.com</a>), the website and services of Reguard, a company incorporated under the Companies Act, 2013, India, with its registered office at 44 IIND FLOOR REGAL BUILDING CONNAUGHT PLACE NEW DELHI - 110001, hereinafter referred to as “Reguard”, “we”, “us”, or “Company”.
				</p>
				<p className="mb-6 text-gray-700">
					By accessing or using the Site, our applications, tools, plugins, extensions, APIs, or any services made available through the Site (collectively, the “Services”), you (“User”, “Customer”, “you”) agree to be bound by these Terms of Service (the “Terms” or “Agreement”).
				</p>
				<p className="mb-6 text-gray-700">
					If you do not agree to these Terms, you should not use our Services. We encourage you to read these Terms carefully and check this page periodically, as we may update it from time to time. Continued use of our Services constitutes acceptance of any updated Terms.
				</p>

				<hr className="my-8 border-gray-200" />

				<section className="mb-8">
					<h2 className="text-xl font-semibold text-reguard-navy mb-2">1. About Our Services</h2>
					<p className="mb-2 text-gray-700">Reguard provides secure, digital, and paperless verification services. Our Services include, but are not limited to:</p>
					<ul className="list-disc ml-6 text-gray-700">
						<li>Electronic signatures</li>
						<li>Secure document storage and sharing</li>
						<li>Identity-based document verification (PAN, Aadhaar, passports, etc.)</li>
						<li>Validation and digitization of official documents</li>
						<li>API integration for businesses</li>
					</ul>
					<p className="mt-2 text-gray-700">We strive to make document handling simple, safe, and efficient for individuals and businesses alike.</p>
				</section>

				<section className="mb-8">
					<h2 className="text-xl font-semibold text-reguard-navy mb-2">2. Ownership of Content</h2>
					<p className="mb-2 text-gray-700">You retain full ownership of any documents, files, or data you submit to our platform. By using our Services, you grant Reguard a limited, non-exclusive license to use your Content only to provide the Services, improve our systems, or for research and development, in accordance with applicable laws and our Privacy Policy.</p>
					<p className="mb-2 text-gray-700">We do not claim ownership of your Content. You are solely responsible for the legality, authenticity, and safety of all Content you submit.</p>
				</section>

				<section className="mb-8">
					<h2 className="text-xl font-semibold text-reguard-navy mb-2">3. User Rights and Responsibilities</h2>
					<div className="mb-2">
						<span className="font-semibold text-reguard-navy">Rights</span>
						<ul className="list-disc ml-6 text-gray-700">
							<li>Subscribe to any of our Services, individually or for your business.</li>
							<li>Cancel or unsubscribe at any time. Fees paid for Services are non-refundable unless explicitly stated.</li>
							<li>Opt-out of promotional communications while continuing to receive essential Service-related notifications.</li>
							<li>Maintain ownership and control over the Content you submit.</li>
						</ul>
					</div>
					<div className="mb-2 mt-4">
						<span className="font-semibold text-reguard-navy">Responsibilities</span>
						<ul className="list-disc ml-6 text-gray-700">
							<li>Ensure your Content is accurate, legal, and free from viruses or malware.</li>
							<li>Protect your account credentials and notify us immediately if you suspect unauthorized access.</li>
							<li>Do not submit confidential information you are not authorized to share.</li>
							<li>Comply with applicable laws and these Terms.</li>
						</ul>
					</div>
					<div className="mb-2 mt-4">
						<span className="font-semibold text-reguard-navy">Prohibited Actions</span>
						<ul className="list-disc ml-6 text-gray-700">
							<li>Upload illegal, harmful, or offensive content</li>
							<li>Impersonate others or misrepresent affiliations</li>
							<li>Violate intellectual property rights</li>
							<li>Disrupt our Services or systems</li>
							<li>Collect personal data of other users without consent</li>
						</ul>
					</div>
				</section>

				<section className="mb-8">
					<h2 className="text-xl font-semibold text-reguard-navy mb-2">4. Company Rights and Responsibilities</h2>
					<div className="mb-2">
						<span className="font-semibold text-reguard-navy">Rights</span>
						<ul className="list-disc ml-6 text-gray-700">
							<li>Discontinue or limit free Services at any time.</li>
							<li>Refuse Services to users who do not comply with registration or verification requirements.</li>
							<li>Automatically renew subscriptions where applicable, without prior notice.</li>
							<li>Send essential and transactional communications required for Service delivery.</li>
						</ul>
					</div>
					<div className="mb-2 mt-4">
						<span className="font-semibold text-reguard-navy">Responsibilities</span>
						<ul className="list-disc ml-6 text-gray-700">
							<li>Maintain secure systems and protect user privacy according to our Privacy Policy.</li>
							<li>Ensure Services are functional, with reasonable uptime and reliability.</li>
							<li>Inform users of scheduled maintenance or downtime.</li>
							<li>Provide invoices or receipts for fees paid.</li>
						</ul>
					</div>
				</section>

				<section className="mb-8">
					<h2 className="text-xl font-semibold text-reguard-navy mb-2">5. Intellectual Property</h2>
					<p className="mb-2 text-gray-700">All intellectual property rights in the Site, Services, and related content belong to Reguard or its licensors. Users are granted a limited license to use the Services for personal or approved business purposes.</p>
					<p className="mb-2 text-gray-700">You may not:</p>
					<ul className="list-disc ml-6 text-gray-700">
						<li>Copy, modify, or create derivative works from our Services</li>
						<li>Reverse engineer, decompile, or attempt to derive source code</li>
						<li>Claim any ownership of Reguard’s intellectual property</li>
						<li>Use third-party intellectual property without authorization</li>
					</ul>
				</section>

				<section className="mb-8">
					<h2 className="text-xl font-semibold text-reguard-navy mb-2">6. License</h2>
					<p className="text-gray-700">Reguard grants you a non-transferable, non-exclusive license to access and use the Services in accordance with these Terms. All other rights are reserved. Any use beyond this scope requires prior written permission from Reguard.</p>
				</section>

				<section className="mb-8">
					<h2 className="text-xl font-semibold text-reguard-navy mb-2">7. Third-Party Links</h2>
					<p className="text-gray-700">Our Services may include links to third-party websites or content. These are provided for convenience only. We are not responsible for the accuracy, quality, or legality of third-party content. You access third-party services at your own risk.</p>
				</section>

				<section className="mb-8">
					<h2 className="text-xl font-semibold text-reguard-navy mb-2">8. Communication Consent</h2>
					<p className="text-gray-700">To use our Services, you may need to consent to receiving communications related to your account, transactions, or Service updates. Essential communications cannot be opted out of, while promotional messages can.</p>
				</section>

				<section className="mb-8">
					<h2 className="text-xl font-semibold text-reguard-navy mb-2">9. Privacy Policy</h2>
					<p className="text-gray-700">Our Privacy Policy governs the collection, use, and protection of your data. Please read it carefully at <a href="/privacy-policy" className="text-reguard-red underline">www.reguardai.com/privacy-policy</a>. By using our Services, you consent to the terms of our Privacy Policy.</p>
				</section>

				<section className="mb-8">
					<h2 className="text-xl font-semibold text-reguard-navy mb-2">10. Feedback</h2>
					<p className="text-gray-700">Any feedback, suggestions, or ideas you share with us may be used by Reguard to improve our Services. By submitting feedback, you grant us a worldwide, royalty-free license to use and modify it.</p>
				</section>

				<section className="mb-8">
					<h2 className="text-xl font-semibold text-reguard-navy mb-2">11. Representations and Warranties</h2>
					<ul className="list-disc ml-6 text-gray-700 mb-2">
						<li>You agree to use the Services only for lawful purposes.</li>
						<li>You will not upload content that infringes others’ rights or violates any laws.</li>
						<li>You are responsible for assisting Reguard in defending claims arising from your violation of these Terms.</li>
					</ul>
				</section>

				<section className="mb-8">
					<h2 className="text-xl font-semibold text-reguard-navy mb-2">12. Disclaimers</h2>
					<p className="text-gray-700">Our Services are provided “as is”. We do not guarantee uninterrupted access or error-free operation. You assume all risk for using the Services.</p>
				</section>

				<section className="mb-8">
					<h2 className="text-xl font-semibold text-reguard-navy mb-2">13. Limitation of Liability</h2>
					<p className="text-gray-700">To the maximum extent allowed by law, Reguard and its partners shall not be liable for any direct, indirect, or consequential damages arising from the use of our Services. Liability is limited to the amount you paid for the Services, if any.</p>
				</section>

				<section className="mb-8">
					<h2 className="text-xl font-semibold text-reguard-navy mb-2">14. Indemnity</h2>
					<p className="text-gray-700">You agree to indemnify and hold Reguard, its affiliates, and employees harmless from claims, damages, or losses resulting from your use of the Services or violation of these Terms.</p>
				</section>

				<section className="mb-8">
					<h2 className="text-xl font-semibold text-reguard-navy mb-2">15. Termination</h2>
					<p className="text-gray-700">This Agreement remains in effect while you use the Services. We may suspend or terminate access for violations of these Terms.</p>
				</section>

				<section className="mb-8">
					<h2 className="text-xl font-semibold text-reguard-navy mb-2">16. Miscellaneous</h2>
					<ul className="list-disc ml-6 text-gray-700 mb-2">
						<li><span className="font-semibold">Force Majeure:</span> Neither party is liable for events beyond control (e.g., natural disasters, strikes, outages).</li>
						<li><span className="font-semibold">Assignment:</span> You may not assign these Terms without prior consent.</li>
						<li><span className="font-semibold">Entire Agreement:</span> This document is the complete agreement between you and Reguard.</li>
						<li><span className="font-semibold">Governing Law & Jurisdiction:</span> Indian law applies. Disputes are subject to Delhi courts exclusively.</li>
						<li><span className="font-semibold">Severability:</span> If a provision is invalid, others remain enforceable.</li>
					</ul>
				</section>

				<section className="mb-8">
					<h2 className="text-xl font-semibold text-reguard-navy mb-2">17. Contact</h2>
					<p className="text-gray-700 mb-1">For questions regarding these Terms, please contact us at <a href="mailto:help@reguard.ai" className="text-reguard-red underline">help@reguard.ai</a></p>
				</section>
			</div>
		</div>
	);
}
