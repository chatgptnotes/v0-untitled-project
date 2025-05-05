"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Facebook, Search, Twitter, Upload, Download, MapPin, Phone, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function YellowFeverVaccinationSite() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activePage, setActivePage] = useState("Yellow Fever")
  const [openFAQSections, setOpenFAQSections] = useState({
    general: false,
    beforeVaccination: false,
    afterVaccination: false,
    travelRequirements: false,
    sideEffects: false,
    specialCases: false,
  })

  const toggleFAQSection = (section) => {
    setOpenFAQSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const handleNavClick = (item) => {
    setActivePage(item)
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top blue bar */}
      <div className="bg-blue-600 text-white py-2 px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Image src="/diverse-flags.png" alt="Flag" width={36} height={24} className="mr-2" />
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <Upload size={16} className="mr-1" />
            <span className="text-sm">Screen Access Reader</span>
          </div>
          <div className="flex items-center space-x-2">
            <Twitter size={16} />
            <Facebook size={16} />
          </div>
        </div>
      </div>

      {/* Header with logo and search */}
      <header className="bg-white py-4 px-6 border-b">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center">
            <Image src="/placeholder.svg?key=qquml" alt="Hope Hospital Logo" width={200} height={60} className="mr-4" />
            <div className="text-sm max-w-xs">
              <p className="font-semibold">Hope International Medical Institute</p>
              <p>Center for Tropical Disease Prevention</p>
              <p>Global Health & Vaccination Services</p>
            </div>
          </div>

          {/* Search bar */}
          <div className="w-full md:w-1/3 order-first md:order-none">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border rounded-md"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b">
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap">
            {[
              "Home",
              "About Us",
              "Point of Entries",
              "Yellow Fever",
              "FAQ",
              "Resources",
              "Patient Charter",
              "Gallery",
              "eServices",
            ].map((item) => (
              <li key={item} className={`relative ${item === activePage ? "border-b-2 border-blue-500" : ""}`}>
                <Link
                  href="#"
                  className="block px-4 py-4 text-sm hover:bg-gray-100 flex items-center"
                  onClick={() => handleNavClick(item)}
                >
                  {item}
                  {["About Us", "Point of Entries", "Yellow Fever", "FAQ", "Resources", "Patient Charter"].includes(
                    item,
                  ) && <ChevronDown size={16} className="ml-1" />}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold">{activePage}</h1>
            <div className="text-sm">
              <Link href="#" className="text-blue-500 hover:underline" onClick={() => handleNavClick("Home")}>
                Home
              </Link>
              <span className="mx-2">/</span>
              <span>{activePage}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="container mx-auto px-4 py-6 flex-grow">
        {/* Yellow Fever Page */}
        {activePage === "Yellow Fever" && (
          <div className="my-8 border rounded-lg overflow-hidden shadow-md">
            <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-6">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold">Yellow Fever Vaccine Information</h2>
                  <p className="text-sm mt-2 opacity-90">
                    Expert guidance from the Hope International Medical Institute
                  </p>
                </div>
                <div className="mt-4 md:mt-0">
                  <Link href="/yellow-fever-fact-sheet.pdf" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="bg-white text-blue-600 hover:bg-blue-50">
                      <Download size={16} className="mr-2" /> Download Fact Sheet
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-3/4">
                  <div className="space-y-8">
                    <section>
                      <div className="flex items-center mb-3">
                        <div className="bg-blue-100 p-2 rounded-full mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-blue-600"
                          >
                            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-blue-700">About Yellow Fever Vaccine</h3>
                      </div>
                      <div className="ml-12">
                        <p className="mb-3 text-gray-700">
                          The yellow fever vaccine is a live attenuated vaccine that provides effective immunity against
                          yellow fever virus, a disease transmitted by infected mosquitoes. A single dose provides
                          lifelong protection for most people.
                        </p>
                        <p className="text-gray-700">
                          The vaccine has been in use for more than 80 years and is considered one of the safest and
                          most effective vaccines available. It is estimated that over 600 million doses have been
                          administered worldwide with an excellent safety profile.
                        </p>
                      </div>
                    </section>

                    <section>
                      <div className="flex items-center mb-3">
                        <div className="bg-blue-100 p-2 rounded-full mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-blue-600"
                          >
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-blue-700">Who Should Receive the Vaccine</h3>
                      </div>
                      <div className="ml-12">
                        <p className="mb-3 text-gray-700">The yellow fever vaccine is recommended for:</p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                          <li>Travelers to countries where yellow fever is endemic</li>
                          <li>Laboratory personnel who might be exposed to yellow fever virus</li>
                          <li>Persons living in or traveling to areas experiencing an outbreak</li>
                          <li>Individuals who require proof of vaccination for entry into certain countries</li>
                        </ul>
                      </div>
                    </section>
                  </div>
                </div>

                <div className="md:w-1/4">
                  <div className="bg-gradient-to-b from-blue-50 to-white p-5 rounded-lg border border-blue-100 shadow-sm">
                    <div className="flex items-center justify-center mb-4">
                      <Image
                        src="/placeholder.svg?key=6wxd6"
                        alt="Hope Hospital Logo"
                        width={120}
                        height={40}
                        className="border-2 border-blue-200 p-2 bg-white rounded-lg"
                      />
                    </div>
                    <h4 className="font-semibold text-blue-700 text-center mb-4">
                      Hope International Medical Institute
                    </h4>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-gray-600">
                          Global Headquarters: 123 Medical Plaza, Geneva, Switzerland
                        </p>
                      </div>
                      <div className="flex items-start">
                        <Phone className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-gray-600">International Helpline: +41 22 123 4567</p>
                      </div>
                      <div className="flex items-start">
                        <Mail className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-gray-600">Email: info@hopeinternational.org</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* FAQ Page */}
        {activePage === "FAQ" && (
          <div className="my-8">
            <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>

            {/* General Questions */}
            <div className="mb-4 bg-blue-100 rounded-md overflow-hidden">
              <button
                onClick={() => toggleFAQSection("general")}
                className="w-full text-left p-4 font-medium flex items-center justify-between bg-blue-200 hover:bg-blue-300 transition-colors"
              >
                <span>General Questions About Yellow Fever</span>
                <span>{openFAQSections.general ? "-" : "+"}</span>
              </button>
              {openFAQSections.general && (
                <div className="p-4 border-t border-blue-200 animate-in fade-in duration-200">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium text-blue-800">What is yellow fever?</h3>
                      <p className="mt-1">
                        Yellow fever is a viral disease transmitted by infected mosquitoes. The "yellow" in the name
                        refers to the jaundice that affects some patients. Symptoms include fever, headache, jaundice,
                        muscle pain, nausea, vomiting, and fatigue.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium text-blue-800">How is yellow fever transmitted?</h3>
                      <p className="mt-1">
                        Yellow fever virus is transmitted through the bite of infected mosquitoes belonging to the Aedes
                        and Haemagogus species. It cannot be transmitted directly from person to person through casual
                        contact.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* About Us Page */}
        {activePage === "About Us" && (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
            <div className="bg-gradient-to-r from-blue-700 to-blue-600 text-white p-8">
              <h2 className="text-3xl font-bold mb-2">About Hope International Medical Institute</h2>
              <p className="text-lg opacity-90">
                Advancing global health through research, education, and service since 1978
              </p>
            </div>

            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-2/3">
                  <section className="mb-10">
                    <h3 className="text-2xl font-semibold text-blue-700 mb-4">Our Mission</h3>
                    <p className="text-gray-700 mb-4">
                      Hope International Medical Institute (HIMI) is dedicated to improving global health outcomes
                      through innovative research, comprehensive education, and compassionate service. We strive to
                      reduce the burden of tropical and infectious diseases worldwide, with a particular focus on
                      underserved populations and regions.
                    </p>
                  </section>
                </div>

                <div className="md:w-1/3">
                  <div className="sticky top-4">
                    <div className="bg-blue-600 text-white rounded-lg p-5">
                      <h4 className="font-semibold mb-3">Partner With Us</h4>
                      <p className="text-sm opacity-90 mb-4">
                        HIMI welcomes partnerships with governments, NGOs, academic institutions, and private sector
                        organizations committed to improving global health.
                      </p>
                      <div className="space-y-3">
                        <Button className="w-full bg-white text-blue-600 hover:bg-blue-50">
                          Contact Our Partnership Office
                        </Button>
                        <Button
                          className="w-full bg-transparent border border-white text-white hover:bg-blue-700"
                          onClick={() => document.getElementById("partnership-faq-modal").showModal()}
                        >
                          Partnership FAQs
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Home Page - Simplified */}
        {activePage === "Home" && (
          <div className="space-y-8">
            <div className="relative rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?key=wugjb"
                alt="Global Health Initiative"
                width={1200}
                height={400}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent flex items-center">
                <div className="p-8 max-w-xl">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Protecting Global Health Through Prevention
                  </h2>
                  <p className="text-white text-lg mb-6">
                    Hope International Medical Institute is dedicated to disease prevention, research, and healthcare
                    services worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other pages would be here but are omitted for brevity */}
      </main>

      {/* Partnership FAQ Modal */}
      <dialog
        id="partnership-faq-modal"
        className="modal modal-bottom sm:modal-middle rounded-lg p-0 w-full max-w-3xl mx-auto"
      >
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">Partnership FAQs</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-blue-600 mb-2">What types of partnerships does HIMI engage in?</h4>
              <p className="text-gray-700">
                HIMI engages in various types of partnerships including research collaborations, educational
                initiatives, clinical service delivery, public health campaigns, technology development, and funding
                partnerships. We work with governments, NGOs, academic institutions, private sector organizations, and
                community groups.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-600 mb-2">What are the benefits of partnering with HIMI?</h4>
              <p className="text-gray-700">
                Partners benefit from our global network, technical expertise, research capabilities, and established
                infrastructure. We offer access to specialized knowledge in tropical diseases, vaccination programs, and
                global health systems. Partners also gain visibility through association with our respected brand and
                can leverage our connections with international health organizations.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-600 mb-2">How does the partnership process work?</h4>
              <p className="text-gray-700">
                The partnership process typically begins with an initial inquiry, followed by exploratory discussions to
                identify mutual interests and potential collaboration areas. We then develop a formal partnership
                proposal, conduct due diligence, and establish a partnership agreement that outlines goals,
                responsibilities, timelines, and resource commitments.
              </p>
            </div>
            <div className="flex justify-end space-x-3 pt-4 mt-4 border-t border-gray-200">
              <Button className="bg-blue-600 hover:bg-blue-700">Contact Partnership Office</Button>
              <Button variant="outline" onClick={() => document.getElementById("partnership-faq-modal").close()}>
                Close
              </Button>
            </div>
          </div>
        </div>
      </dialog>

      {/* Get Directions Modal */}
      <dialog
        id="get-directions-modal"
        className="modal modal-bottom sm:modal-middle rounded-lg p-0 w-full max-w-2xl mx-auto"
      >
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">Get Directions</h3>
          <div className="mb-4">
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <h4 className="font-medium text-blue-700 mb-2">Hope Hospital, Nagpur</h4>
              <p className="text-gray-700">2, Teka Naka, Kamptee Road, Nagpur, Maharashtra, 440012</p>
            </div>
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Map would be displayed here</p>
            </div>
          </div>
          <div className="flex justify-end space-x-3">
            <Button variant="outline" onClick={() => document.getElementById("get-directions-modal").close()}>
              Close
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">Open in Maps</Button>
          </div>
        </div>
      </dialog>
    </div>
  )
}
