"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ChevronDown,
  Facebook,
  Search,
  Twitter,
  Upload,
  Download,
  Calendar,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  FileText,
  Book,
  Users,
  Globe,
  AlertCircle,
  FileQuestion,
  Shield,
  ClockIcon,
  AppleIcon,
  SmartphoneIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function YellowFeverVaccinationSite() {
const [searchQuery, setSearchQuery] = useState("")

const [openSections, setOpenSections] = useState({
  introduction: true,
  vaccineInfo: false,
  procedure: false,
  specifications: false,
  endemicCountries: false,
  vaccineBooster: false,
  noticeCircular: false,
})

const toggleSection = (section) => {
  setOpenSections((prev) => ({
    ...prev,
    [section]: !prev[section],
  }))
}

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

// State to track which page is currently active
const [activePage, setActivePage] = useState("Yellow Fever")

// Handle navigation click
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
        <div className="flex items-center space-x-1">
          <Button variant="outline" size="sm" className="h-6 w-6 bg-white text-black font-bold p-0">
            A-
          </Button>
          <Button variant="outline" size="sm" className="h-6 w-6 bg-white text-black font-bold p-0">
            A
          </Button>
          <Button variant="outline" size="sm" className="h-6 w-6 bg-white text-black font-bold p-0">
            A+
          </Button>
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
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hope%20hospital%20youtube%20logo-PiORnz9bxpvolYsNVD1Vgtz7yDDirJ.png"
            alt="Hope Hospital Logo"
            width={200}
            height={60}
            className="mr-4"
          />
          <div className="text-sm max-w-xs">
            <p className="font-semibold">Hope International Medical Institute</p>
            <p>Center for Tropical Disease Prevention</p>
            <p>Global Health & Vaccination Services</p>
          </div>
        </div>

        {/* Search bar positioned at the top */}
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

        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hope%20hospital%20youtube%20logo-PiORnz9bxpvolYsNVD1Vgtz7yDDirJ.png"
          alt="Hope Hospital Logo"
          width={80}
          height={30}
          className="bg-white p-1 rounded-md"
        />
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
      {/* Home Page */}
      {activePage === "Home" && (
        <div className="space-y-8">
          <div className="relative rounded-xl overflow-hidden">
            <Image
              src="/placeholder.svg?key=hero-image&text=Global%20Health%20Initiative"
              alt="Global Health Initiative"
              width={1200}
              height={400}
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent flex items-center">
              <div className="p-8 max-w-xl">
                <div className="bg-white/90 p-3 rounded-lg inline-block mb-6">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hope%20hospital%20youtube%20logo-PiORnz9bxpvolYsNVD1Vgtz7yDDirJ.png"
                    alt="Hope Hospital Logo"
                    width={200}
                    height={70}
                  />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Protecting Global Health Through Prevention
                </h2>
                <p className="text-white text-lg mb-6">
                  Hope International Medical Institute is dedicated to disease prevention, research, and healthcare
                  services worldwide.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => document.getElementById('services-modal').showModal()}>Learn About Our Services</Button>
                  <Button variant="outline" className="bg-white text-blue-600 hover:bg-blue-50" onClick={() => document.getElementById('find-center-modal').showModal()}>
                    Find a Vaccination Center
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Vaccination Services</h3>
              <p className="text-gray-600 mb-4">
                Access international vaccination services including Yellow Fever, Typhoid, Hepatitis, and more at our
                certified centers.
              </p>
              <Link
                href="#"
                className="text-blue-600 font-medium flex items-center hover:underline"
                onClick={() => handleNavClick("Yellow Fever")}
              >
                Learn more <ChevronDown className="h-4 w-4 ml-1 rotate-[-90deg]" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                <Globe className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Travel Health</h3>
              <p className="text-gray-600 mb-4">
                Get expert advice on travel health requirements, vaccination certificates, and preventive measures for
                your destination.
              </p>
              <Link
                href="#"
                className="text-blue-600 font-medium flex items-center hover:underline"
                onClick={() => handleNavClick("Resources")}
              >
                Learn more <ChevronDown className="h-4 w-4 ml-1 rotate-[-90deg]" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                <Book className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Research & Education</h3>
              <p className="text-gray-600 mb-4">
                Explore our latest research findings, educational resources, and training programs in tropical
                medicine.
              </p>
              <Link
                href="#"
                className="text-blue-600 font-medium flex items-center hover:underline"
                onClick={() => handleNavClick("Resources")}
              >
                Learn more <ChevronDown className="h-4 w-4 ml-1 rotate-[-90deg]" />
              </Link>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0 md:mr-6">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">Need Vaccination Certificates?</h3>
                <p className="text-gray-600">
                  Schedule an appointment at one of our authorized vaccination centers for international travel
                  requirements.
                </p>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 whitespace-nowrap" onClick={() => document.getElementById('book-appointment-modal').showModal()}>Book an Appointment</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <AlertCircle className="h-5 w-5 text-blue-600 mr-2" />
                Latest Health Alerts
              </h3>
              <div className="space-y-4">
                {[
                  {
                    date: "May 1, 2025",
                    title: "Yellow Fever Outbreak in Central Region",
                    desc: "Health authorities report new cases of Yellow Fever in the Central Region. Travelers advised to ensure vaccination.",
                  },
                  {
                    date: "April 28, 2025",
                    title: "Updated Travel Requirements for South America",
                    desc: "Several South American countries have updated their vaccination requirements for international travelers.",
                  },
                  {
                    date: "April 15, 2025",
                    title: "New Vaccination Center Opening",
                    desc: "HIMI announces the opening of a new vaccination center in the Eastern District, expanding service availability.",
                  },
                ].map((alert, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                    <p className="text-sm text-gray-500">{alert.date}</p>
                    <h4 className="font-medium text-blue-700">{alert.title}</h4>
                    <p className="text-sm text-gray-600">{alert.desc}</p>
                  </div>
                ))}
              </div>
              <Link
                href="#"
                className="text-blue-600 font-medium flex items-center mt-4 hover:underline"
                onClick={() => handleNavClick("Resources")}
              >
                View all alerts <ChevronDown className="h-4 w-4 ml-1 rotate-[-90deg]" />
              </Link>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                Upcoming Events
              </h3>
              <div className="space-y-4">
                {[
                  {
                    date: "May 15, 2025",
                    title: "World Vaccination Awareness Day",
                    desc: "Join our webinar on the importance of vaccination for global health security.",
                  },
                  {
                    date: "June 2-4, 2025",
                    title: "International Tropical Medicine Conference",
                    desc: "Annual conference featuring the latest research in tropical medicine and infectious diseases.",
                  },
                  {
                    date: "June 20, 2025",
                    title: "Community Health Workshop",
                    desc: "Free workshop on preventive health measures for community health workers.",
                  },
                ].map((event, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                    <p className="text-sm text-gray-500">{event.date}</p>
                    <h4 className="font-medium text-blue-700">{event.title}</h4>
                    <p className="text-sm text-gray-600">{event.desc}</p>
                  </div>
                ))}
              </div>
              <Link
                href="#"
                className="text-blue-600 font-medium flex items-center mt-4 hover:underline"
                onClick={() => handleNavClick("Resources")}
              >
                View all events <ChevronDown className="h-4 w-4 ml-1 rotate-[-90deg]" />
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 mt-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold text-blue-700 mb-4">Yellow Fever Vaccination in Nagpur</h2>
                <p className="text-gray-700 mb-4">
                  Hope Hospital in Nagpur is a recognized center for yellow fever vaccination. We provide valid
                  international vaccination certificates, which are essential for travelers to certain African and
                  South American countries.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-700 mb-2">Why Choose Hope Hospital?</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <div className="text-blue-500 mr-2">•</div>
                        <span>Internationally recognized vaccination certificates</span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-blue-500 mr-2">•</div>
                        <span>Experienced medical professionals</span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-blue-500 mr-2">•</div>
                        <span>Convenient appointment scheduling</span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-blue-500 mr-2">•</div>
                        <span>Central location in Nagpur</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-700 mb-2">Important Information</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <div className="text-blue-500 mr-2">•</div>
                        <span>Get vaccinated at least 10 days before travel</span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-blue-500 mr-2">•</div>
                        <span>Bring identification and travel documents</span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-blue-500 mr-2">•</div>
                        <span>Certificate valid for life per WHO guidelines</span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-blue-500 mr-2">•</div>
                        <span>Contact us to confirm vaccine availability</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-yellow-700">
                        <strong>Note:</strong> For a more affordable option, the Daga Memorial Government Women
                        Hospital in Nagpur is also listed as a yellow fever vaccination center. However, its
                        operational status may vary. It's recommended to contact them directly to verify current
                        services.
                      </p>
                    </div>
                  </div>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => document.getElementById('schedule-nagpur-modal').showModal()}>Schedule Your Vaccination</Button>
              </div>
              <div className="md:w-1/3">
                <div className="bg-gradient-to-b from-blue-50 to-white p-5 rounded-lg border border-blue-100 shadow-sm">
                  <div className="flex items-center justify-center mb-4">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hope%20hospital%20youtube%20logo-PiORnz9bxpvolYsNVD1Vgtz7yDDirJ.png"
                      alt="Hope Hospital Logo"
                      width={120}
                      height={40}
                      className="border-2 border-blue-200 p-2 bg-white rounded-lg"
                    />
                  </div>
                  <h4 className="font-semibold text-blue-700 text-center mb-4">Contact Details</h4>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-600">2, Teka Naka, Kamptee Road, Nagpur, Maharashtra, 440012</p>
                    </div>
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-600">Toll Free: 18002330000</p>
                        <p className="text-sm text-gray-600">Mobile: +91 99235 55053</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-600">Email: info@hopehospital.com</p>
                    </div>
                    <div className="flex items-start">
                      <Globe className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-600">Website: hopehospital.com</p>
                    </div>
                    <div className="flex items-start">
                      <ClockIcon className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-600">Hours: 9:00 AM - 6:00 PM (Daily)</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-blue-100">
                    <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50" onClick={() => document.getElementById('get-directions-modal').showModal()}>
                      Get Directions
                    </Button>
                  </div>
                </div>
              </div>
            </div>
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
                  <p className="text-gray-700">
                    Founded in 1978 by Dr. Eleanor Blackwell and Dr. James Thornton, HIMI has grown from a small
                    research facility in Geneva to a global network of 28 centers across 17 countries, employing over
                    3,500 healthcare professionals, researchers, and support staff.
                  </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
                    <div className="text-blue-600 text-4xl font-bold mb-2">47</div>
                    <p className="text-gray-700">Years of service to global health</p>
                  </div>
                  <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
                    <div className="text-blue-600 text-4xl font-bold mb-2">17M+</div>
                    <p className="text-gray-700">Vaccines administered worldwide</p>
                  </div>
                  <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
                    <div className="text-blue-600 text-4xl font-bold mb-2">124</div>
                    <p className="text-gray-700">Research publications annually</p>
                  </div>
                </div>

                <section className="mb-10">
                  <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                    Center for Tropical Disease Prevention
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Established in 1992, our Center for Tropical Disease Prevention (CTDP) leads global efforts in
                    preventing and controlling tropical diseases through cutting-edge research, surveillance programs,
                    and intervention strategies. The CTDP operates specialized laboratories equipped with BSL-3 and
                    BSL-4 facilities for studying high-risk pathogens.
                  </p>
                  <p className="text-gray-700 mb-4">Key achievements of the CTDP include:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>
                      Development of rapid diagnostic tests for dengue fever, reducing diagnosis time from days to
                      minutes
                    </li>
                    <li>
                      Implementation of community-based vector control programs that reduced malaria incidence by 68%
                      in pilot regions
                    </li>
                    <li>
                      Creation of the Global Tropical Disease Surveillance Network, connecting 230 field stations
                      across 42 countries
                    </li>
                    <li>Pioneering research on climate change impacts on vector-borne disease distribution</li>
                  </ul>
                  <p className="text-gray-700">
                    Under the leadership of Dr. Sophia Chen, the CTDP collaborates with the World Health Organization,
                    national health ministries, and academic institutions to develop evidence-based prevention
                    strategies and policy recommendations.
                  </p>
                </section>

                <section className="mb-10">
                  <h3 className="text-2xl font-semibold text-blue-700 mb-4">Global Health & Vaccination Services</h3>
                  <p className="text-gray-700 mb-4">
                    Our Global Health & Vaccination Services (GHVS) division translates research into practical
                    healthcare solutions. Founded in 1998, GHVS operates vaccination centers in 42 countries and
                    provides consultation services for travelers, expatriates, and local populations.
                  </p>
                  <p className="text-gray-700 mb-4">The GHVS is recognized for:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Administering over 17 million vaccines, including 3.2 million yellow fever vaccinations</li>
                    <li>
                      Training more than 12,000 healthcare professionals in vaccine administration and cold chain
                      management
                    </li>
                    <li>
                      Developing the award-winning "VaxTrack" digital vaccination record system, now used in 28
                      countries
                    </li>
                    <li>
                      Leading emergency vaccination campaigns during disease outbreaks, including the 2021 response in
                      East Africa
                    </li>
                  </ul>
                  <p className="text-gray-700">
                    GHVS also maintains the International Travel Health Database, providing real-time information on
                    disease outbreaks, vaccination requirements, and health advisories for 196 countries and
                    territories.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl font-semibold text-blue-700 mb-4">Research and Innovation</h3>
                  <p className="text-gray-700 mb-4">
                    Research excellence is at the core of HIMI's mission. Our research programs span basic science,
                    clinical trials, epidemiology, and implementation science. The Institute's research budget of €87
                    million annually supports work across multiple disciplines.
                  </p>
                  <p className="text-gray-700 mb-4">Notable research achievements include:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>
                      Development of a thermostable yellow fever vaccine that doesn't require cold chain storage
                    </li>
                    <li>Identification of novel biomarkers for early detection of dengue hemorrhagic fever</li>
                    <li>
                      Creation of AI-powered disease prediction models that forecast outbreaks with 83% accuracy
                    </li>
                    <li>
                      Pioneering work on community engagement strategies that improve vaccination acceptance rates
                    </li>
                  </ul>
                  <p className="text-gray-700">
                    HIMI researchers publish over 120 peer-reviewed articles annually and have been awarded 18
                    international patents for diagnostic and preventive technologies.
                  </p>
                </section>
              </div>

              <div className="md:w-1/3">
                <div className="sticky top-4">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                    <div className="p-4 flex justify-center border-b">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hope%20hospital%20youtube%20logo-PiORnz9bxpvolYsNVD1Vgtz7yDDirJ.png"
                        alt="Hope Hospital Logo"
                        width={180}
                        height={60}
                        className="my-2"
                      />
                    </div>
                    <Image
                      src="/placeholder.svg?key=himi-headquarters&text=HIMI%20Headquarters"
                      alt="HIMI Headquarters in Geneva"
                      width={400}
                      height={250}
                      className="w-full h-auto"
                    />
                    <div className="p-4">
                      <p className="text-sm text-gray-600">HIMI Headquarters in Geneva, Switzerland</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg border border-blue-100 p-5 mb-6">
                    <h4 className="font-semibold text-blue-700 mb-3">Leadership</h4>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="mr-3">
                          <Image
                            src="/placeholder.svg?key=director-general&text=Director"
                            alt="Dr. Amara Okafor"
                            width={60}
                            height={60}
                            className="rounded-full"
                          />
                        </div>
                        <div>
                          <h5 className="font-medium">Dr. Amara Okafor</h5>
                          <p className="text-sm text-gray-600">Director-General</p>
                          <p className="text-xs text-gray-500 mt-1">
                            Former WHO Regional Director, leading HIMI since 2019
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="mr-3">
                          <Image
                            src="/placeholder.svg?key=research-director&text=Research"
                            alt="Dr. Miguel Sanchez"
                            width={60}
                            height={60}
                            className="rounded-full"
                          />
                        </div>
                        <div>
                          <h5 className="font-medium">Dr. Miguel Sanchez</h5>
                          <p className="text-sm text-gray-600">Director of Research</p>
                          <p className="text-xs text-gray-500 mt-1">
                            Virologist with 25+ years experience in tropical diseases
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="mr-3">
                          <Image
                            src="/placeholder.svg?key=operations-director&text=Operations"
                            alt="Dr. Sophia Chen"
                            width={60}
                            height={60}
                            className="rounded-full"
                          />
                        </div>
                        <div>
                          <h5 className="font-medium">Dr. Sophia Chen</h5>
                          <p className="text-sm text-gray-600">Director of CTDP</p>
                          <p className="text-xs text-gray-500 mt-1">
                            Epidemiologist specializing in vector-borne diseases
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="mr-3">
                          <Image
                            src="/placeholder.svg?key=clinician-director&text=Clinician"
                            alt="Dr. Murali BK"
                            width={60}
                            height={60}
                            className="rounded-full"
                          />
                        </div>
                        <div>
                          <h5 className="font-medium">Dr. Murali BK</h5>
                          <p className="text-sm text-gray-600">Chief Clinician & Orthopaedic Surgeon</p>
                          <p className="text-xs text-gray-500 mt-1">
                            25+ years experience in tropical diseases, Hope Hospital, Nagpur
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-md p-5 mb-6">
                    <h4 className="font-semibold text-blue-700 mb-3">Global Presence</h4>
                    <Image
                      src="/placeholder.svg?key=global-map&text=Global%20Presence%20Map"
                      alt="HIMI Global Presence Map"
                      width={400}
                      height={250}
                      className="w-full h-auto rounded-md mb-3"
                    />
                    <div className="p-4">
                      <p className="text-sm text-gray-600">HIMI Headquarters in Geneva, Switzerland</p>
                    </div>
                  </div>

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
                        onClick={() => document.getElementById('partnership-faq-modal').showModal()}
                      >
                        Partnership FAQs
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-gray-200">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">Our Values</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-blue-700 mb-2">Excellence</h4>
                  <p className="text-sm text-gray-700">
                    We pursue the highest standards in research, education, and healthcare delivery.
                  </p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-blue-700 mb-2">Integrity</h4>
                  <p className="text-sm text-gray-700">
                    We conduct our work with honesty, transparency, and ethical responsibility.
                  </p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-blue-700 mb-2">Collaboration</h4>
                  <p className="text-sm text-gray-700">
                    We believe in the power of partnerships to achieve greater impact.
                  </p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-blue-700 mb-2">Innovation</h4>
                  <p className="text-sm text-gray-700">
                    We embrace creative solutions and cutting-edge approaches to global health challenges.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 text-center">
              <p className="text-gray-600">© 2025 Hope International Medical Institute. All rights reserved.</p>
            </div>
          </div>
        </div>
      )}

      {/* Point of Entries Page */}
      {activePage === "Point of Entries" && (
        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-6 text-white">
              <h2 className="text-2xl font-bold mb-2">Authorized Point of Entries</h2>
              <p>
                Official entry points with vaccination and health screening facilities for international travelers
              </p>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-6">
                Hope International Medical Institute maintains authorized Point of Entries with vaccination and health
                screening facilities. These locations serve as official entry and exit points for international
                travelers requiring health documentation and services.
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-blue-700 mb-4">What are Points of Entry?</h3>
                <p className="text-gray-700 mb-4">
                  Points of Entry (PoE) are designated international airports, seaports, and ground crossings where
                  travelers can receive required health services, including vaccinations and health screenings. These
                  facilities are equipped to issue International Certificates of Vaccination or Prophylaxis (ICVP) and
                  provide health clearance for international travel.
                </p>
                <p className="text-gray-700">
                  Our authorized PoE facilities are staffed with trained healthcare professionals who can administer
                  vaccines, conduct health assessments, and provide travel health advice according to international
                  health regulations.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
                  <h4 className="font-semibold text-blue-700 mb-3">Services Available at Points of Entry</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <div className="text-blue-500 mr-2">•</div>
                      <span>Yellow Fever vaccination and certification</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-blue-500 mr-2">•</div>
                      <span>Health screening for infectious diseases</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-blue-500 mr-2">•</div>
                      <span>Issuance of International Certificates of Vaccination</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-blue-500 mr-2">•</div>
                      <span>Travel health consultation and advice</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-blue-500 mr-2">•</div>
                      <span>Medical exemption certificates (when applicable)</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
                  <h4 className="font-semibold text-blue-700 mb-3">Requirements for Travelers</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <div className="text-blue-500 mr-2">•</div>
                      <span>Valid passport or travel document</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-blue-500 mr-2">•</div>
                      <span>Travel itinerary details</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-blue-500 mr-2">•</div>
                      <span>Previous vaccination records (if available)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-blue-500 mr-2">•</div>
                      <span>Medical history information</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-blue-500 mr-2">•</div>
                      <span>Payment for services (varies by location)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-blue-700 mb-4">Authorized Point of Entry Locations</h3>

              <div className="overflow-x-auto mb-6">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead>
                    <tr className="bg-blue-100">
                      <th className="py-3 px-4 text-left border-b">Location</th>
                      <th className="py-3 px-4 text-left border-b">Type</th>
                      <th className="py-3 px-4 text-left border-b">Operating Hours</th>
                      <th className="py-3 px-4 text-left border-b">Contact Information</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4">International Airport Terminal 1</td>
                      <td className="py-3 px-4">Airport</td>
                      <td className="py-3 px-4">8:00 AM - 8:00 PM (Daily)</td>
                      <td className="py-3 px-4">+41 22 123 4567</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4">Central Port Health Office</td>
                      <td className="py-3 px-4">Seaport</td>
                      <td className="py-3 px-4">9:00 AM - 5:00 PM (Mon-Fri)</td>
                      <td className="py-3 px-4">+41 22 123 4568</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4">Eastern Border Crossing Health Unit</td>
                      <td className="py-3 px-4">Land Crossing</td>
                      <td className="py-3 px-4">8:00 AM - 6:00 PM (Daily)</td>
                      <td className="py-3 px-4">+41 22 123 4569</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4">Western District Health Center</td>
                      <td className="py-3 px-4">Urban Center</td>
                      <td className="py-3 px-4">9:00 AM - 4:00 PM (Mon-Sat)</td>
                      <td className="py-3 px-4">+41 22 123 4570</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-4">Southern Regional Hospital</td>
                      <td className="py-3 px-4">Hospital</td>
                      <td className="py-3 px-4">24 Hours (By Appointment)</td>
                      <td className="py-3 px-4">+41 22 123 4571</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-yellow-700">
                      <strong>Important Notice:</strong> Appointments are strongly recommended for all vaccination
                      services. Walk-in services may be limited based on capacity and vaccine availability.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2">
                  <h3 className="text-xl font-semibold text-blue-700 mb-4">Find a Point of Entry</h3>
                  <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                    <div className="mb-4">
                      <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                        Select Region
                      </label>
                      <select id="location" className="w-full p-2 border border-gray-300 rounded-md">
                        <option value="">All Regions</option>
                        <option value="north">Northern Region</option>
                        <option value="south">Southern Region</option>
                        <option value="east">Eastern Region</option>
                        <option value="west">Western Region</option>
                        <option value="central">Central Region</option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="facility-type" className="block text-sm font-medium text-gray-700 mb-1">
                        Facility Type
                      </label>
                      <select id="facility-type" className="w-full p-2 border border-gray-300 rounded-md">
                        <option value="">All Types</option>
                        <option value="airport">Airport</option>
                        <option value="seaport">Seaport</option>
                        <option value="land">Land Crossing</option>
                        <option value="hospital">Hospital</option>
                        <option value="center">Health Center</option>
                      </select>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Search Facilities</Button>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-xl font-semibold text-blue-700 mb-4">Book an Appointment</h3>
                  <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
                    <p className="text-gray-700 mb-4">
                      Schedule your vaccination appointment at one of our authorized Point of Entry facilities. Online
                      booking allows you to select your preferred date, time, and location.
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center">
                        <svg
                          className="h-5 w-5 text-blue-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-600">Convenient online scheduling</span>
                      </div>
                      <div className="flex items-center">
                        <svg
                          className="h-5 w-5 text-blue-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-600">Email confirmation and reminders</span>
                      </div>
                      <div className="flex items-center">
                        <svg
                          className="h-5 w-5 text-blue-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-600">Flexible rescheduling options</span>
                      </div>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Book Now</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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
                          <path d="M19 15V3h4"></path>
                          <path d="M19 11h4"></path>
                          <path d="M13 3h6"></path>
                          <path d="M5 3v4"></path>
                          <path d="M1 7h8"></path>
                          <path d="M5 11v4"></path>
                          <path d="M1 15h8"></path>
                          <path d="M5 19v2"></path>
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-blue-700">Dosage and Administration</h3>
                    </div>
                    <div className="ml-12">
                      <p className="mb-3 text-gray-700">
                        The yellow fever vaccine is administered as a single subcutaneous injection (0.5 ml).
                        According to the World Health Organization, a single dose of yellow fever vaccine provides
                        lifelong protection for most people and no booster is needed.
                      </p>
                      <p className="text-gray-700">
                        <strong>Important:</strong> The vaccine should be administered at least 10 days before travel
                        to an endemic area to allow for the development of protective immunity.
                      </p>
                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                              <path
                                fillRule="evenodd"
                                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div className="ml-3">
                            <p className="text-sm text-yellow-700">
                              Some countries may require a certificate issued within the past 10 years despite WHO
                              recommendations for lifelong validity.
                            </p>
                          </div>
                        </div>
                      </div>
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
                          <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                          <line x1="12" y1="9" x2="12" y2="13"></line>
                          <line x1="12" y1="17" x2="12.01" y2="17"></line>
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-blue-700">Potential Side Effects</h3>
                    </div>
                    <div className="ml-12">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-medium text-blue-700 mb-2">
                            Common Side Effects (5-10% of recipients)
                          </h4>
                          <ul className="list-disc pl-5 space-y-1 text-gray-700">
                            <li>Low-grade fever</li>
                            <li>Mild headache</li>
                            <li>Muscle pain</li>
                            <li>Soreness at the injection site</li>
                            <li>Fatigue</li>
                          </ul>
                          <p className="mt-2 text-sm text-gray-600">
                            These symptoms typically begin 3-7 days after vaccination and resolve within 5-10 days.
                          </p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-medium text-blue-700 mb-2">
                            Rare Side Effects (fewer than 1 per 250,000 doses)
                          </h4>
                          <ul className="list-disc pl-5 space-y-1 text-gray-700">
                            <li>Severe allergic reactions (anaphylaxis)</li>
                            <li>Neurologic disease</li>
                            <li>Organ system failure</li>
                            <li>Yellow fever vaccine-associated viscerotropic disease</li>
                          </ul>
                          <p className="mt-2 text-sm text-gray-600">
                            Seek immediate medical attention if severe symptoms develop after vaccination.
                          </p>
                        </div>
                      </div>
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
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-blue-700">Contraindications</h3>
                    </div>
                    <div className="ml-12">
                      <p className="mb-3 text-gray-700">The yellow fever vaccine should not be administered to:</p>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>Infants younger than 6 months of age</li>
                        <li>Persons with severe allergies to egg proteins or other vaccine components</li>
                        <li>Persons with thymus disorders or who have had their thymus removed</li>
                        <li>Persons with primary immunodeficiencies or immunosuppression</li>
                        <li>
                          Pregnant women, except during yellow fever outbreaks when the risk of infection is high
                        </li>
                        <li>
                          Individuals with a history of severe reaction to a previous dose of yellow fever vaccine
                        </li>
                      </ul>
                      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-4">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                              <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div className="ml-3">
                            <p className="text-sm text-blue-700">
                              Medical exemption certificates may be issued for individuals who cannot receive the
                              vaccine due to medical contraindications. Consult with a healthcare provider for more
                              information.
                            </p>
                          </div>
                        </div>
                      </div>
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
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                          <line x1="16" y1="2" x2="16" y2="6"></line>
                          <line x1="8" y1="2" x2="8" y2="6"></line>
                          <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-blue-700">Availability</h3>
                    </div>
                    <div className="ml-12">
                      <p className="mb-3 text-gray-700">
                        The yellow fever vaccine is available at designated vaccination centers authorized by national
                        health authorities. After vaccination, you will receive an International Certificate of
                        Vaccination or Prophylaxis (ICVP), which is valid from 10 days after vaccination.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="border rounded-lg p-4">
                          <div className="flex items-center mb-2">
                            <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                            <h4 className="font-medium">Appointment Information</h4>
                          </div>
                          <p className="text-sm text-gray-600">
                            Appointments can be scheduled online or by phone. Please bring identification and any
                            previous vaccination records to your appointment.
                          </p>
                        </div>
                        <div className="border rounded-lg p-4">
                          <div className="flex items-center mb-2">
                            <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                            <h4 className="font-medium">Find a Vaccination Center</h4>
                          </div>
                          <p className="text-sm text-gray-600">
                            Use our online locator tool to find authorized yellow fever vaccination centers near you.
                          </p>
                          <Link href="#" className="text-blue-600 text-sm flex items-center mt-2 hover:underline">
                            Locate centers <ExternalLink className="h-3 w-3 ml-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>

              <div className="md:w-1/4">
                <div className="bg-gradient-to-b from-blue-50 to-white p-5 rounded-lg border border-blue-100 shadow-sm">
                  <div className="flex items-center justify-center mb-4">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hope%20hospital%20youtube%20logo-PiORnz9bxpvolYsNVD1Vgtz7yDDirJ.png"
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

                  <div className="mt-6 p-4 bg-white rounded-lg border border-blue-100">
                    <h5 className="font-medium text-blue-700 mb-3">Expert Consultation</h5>
                    <p className="text-sm text-gray-600 mb-3">
                      For specific questions about your suitability for the yellow fever vaccine, please consult with
                      our travel medicine specialists.
                    </p>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Schedule Consultation</Button>
                  </div>

                  <div className="mt-6 p-4 bg-blue-600 text-white rounded-lg">
                    <h5 className="font-medium mb-2">Travel Advisory</h5>
                    <p className="text-sm opacity-90">
                      Check the latest travel advisories and vaccination requirements for your destination before
                      planning your trip.
                    </p>
                    <Link href="#" className="text-white text-sm flex items-center mt-2 hover:underline">
                      View advisories <ExternalLink className="h-3 w-3 ml-1" />
                    </Link>
                  </div>
                </div>
                <div className="mt-6 bg-gradient-to-b from-blue-50 to-white p-5 rounded-lg border border-blue-100 shadow-sm">
                  <div className="flex items-center justify-center mb-4">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hope%20hospital%20youtube%20logo-PiORnz9bxpvolYsNVD1Vgtz7yDDirJ.png"
                      alt="Hope Hospital Logo"
                      width={120}
                      height={40}
                      className="border-2 border-blue-200 p-2 bg-white rounded-lg"
                    />
                  </div>
                  <h4 className="font-semibold text-blue-700 text-center mb-4">Hope Hospital</h4>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-600">2, Teka Naka, Kamptee road, Nagpur</p>
                    </div>
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-600">International Helpline: 18002330000</p>
                    </div>
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-600">Email: info@hopehospital.com</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-gray-50 p-4 rounded-lg border">
                  <h5 className="font-medium text-blue-700 mb-3">Related Resources</h5>
                  <ul className="space-y-3">
                    <li>
                      <Link href="#" className="text-sm text-blue-600 hover:underline flex items-center">
                        <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                        Yellow Fever Prevention Guide
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-sm text-blue-600 hover:underline flex items-center">
                        <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                        Traveler's Health Checklist
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-sm text-blue-600 hover:underline flex items-center">
                        <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        Frequently Asked Questions
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center">
                <div className="mr-4">
                  <svg className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <div className="text-sm text-gray-600">
                  <p className="font-medium">Citation:</p>
                  <p>
                    Hope International Medical Institute. (2025). Yellow Fever Vaccine Information Guide. Geneva,
                    Switzerland: Global Health Publications.
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Last updated: May 2025 | Content reviewed by the International Advisory Committee on Travel
                    Medicine
                  </p>
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
                  <div>
                    <h3 className="font-medium text-blue-800">Where is yellow fever commonly found?</h3>
                    <p className="mt-1">
                      Yellow fever is endemic in tropical areas of Africa and Central and South America. It is not
                      found in Asia, Australia, or most parts of North America.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Before Vaccination */}
          <div className="mb-4 bg-blue-100 rounded-md overflow-hidden">
            <button
              onClick={() => toggleFAQSection("beforeVaccination")}
              className="w-full text-left p-4 font-medium flex items-center justify-between bg-blue-200 hover:bg-blue-300 transition-colors"
            >
              <span>Before Getting Vaccinated</span>
              <span>{openFAQSections.beforeVaccination ? "-" : "+"}</span>
            </button>
            {openFAQSections.beforeVaccination && (
              <div className="p-4 border-t border-blue-200 animate-in fade-in duration-200">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-blue-800">Who should get the yellow fever vaccine?</h3>
                    <p className="mt-1">
                      The vaccine is recommended for people aged 9 months or older who are traveling to or living in
                      areas at risk for yellow fever transmission. It's also required for entry into certain
                      countries.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-blue-800">How long before travel should I get vaccinated?</h3>
                    <p className="mt-1">
                      You should get the yellow fever vaccine at least 10 days before your trip. This allows enough
                      time for your body to develop immunity and for the certificate to become valid for entry
                      purposes.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-blue-800">Can I get the yellow fever vaccine if I'm pregnant?</h3>
                    <p className="mt-1">
                      Generally, pregnant women should avoid getting the yellow fever vaccine due to theoretical risks
                      to the fetus. However, if travel to a high-risk area cannot be avoided, discuss with your
                      healthcare provider as the risk of yellow fever may outweigh vaccine risks.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* After Vaccination */}
          <div className="mb-4 bg-blue-100 rounded-md overflow-hidden">
            <button
              onClick={() => toggleFAQSection("afterVaccination")}
              className="w-full text-left p-4 font-medium flex items-center justify-between bg-blue-200 hover:bg-blue-300 transition-colors"
            >
              <span>After Getting Vaccinated</span>
              <span>{openFAQSections.afterVaccination ? "-" : "+"}</span>
            </button>
            {openFAQSections.afterVaccination && (
              <div className="p-4 border-t border-blue-200 animate-in fade-in duration-200">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-blue-800">What side effects might I experience?</h3>
                    <p className="mt-1">
                      Common side effects include mild headaches, muscle aches, low-grade fever, and soreness at the
                      injection site. These typically begin 3-7 days after vaccination and resolve within a few days.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-blue-800">When does my vaccination certificate become valid?</h3>
                    <p className="mt-1">
                      Your International Certificate of Vaccination or Prophylaxis (ICVP) becomes valid 10 days after
                      vaccination and, according to WHO recommendations, provides lifelong protection.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-blue-800">
                      What should I do if I lose my vaccination certificate?
                    </h3>
                    <p className="mt-1">
                      Contact the vaccination center where you received your vaccine. Most centers keep records and
                      can issue a replacement certificate. There may be a fee for this service.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Travel Requirements */}
          <div className="mb-4 bg-blue-100 rounded-md overflow-hidden">
            <button
              onClick={() => toggleFAQSection("travelRequirements")}
              className="w-full text-left p-4 font-medium flex items-center justify-between bg-blue-200 hover:bg-blue-300 transition-colors"
            >
              <span>Travel Requirements</span>
              <span>{openFAQSections.travelRequirements ? "-" : "+"}</span>
            </button>
            {openFAQSections.travelRequirements && (
              <div className="p-4 border-t border-blue-200 animate-in fade-in duration-200">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-blue-800">Do all countries require yellow fever vaccination?</h3>
                    <p className="mt-1">
                      No, only countries with risk of yellow fever transmission or countries that require proof of
                      vaccination if you're arriving from a country with risk of yellow fever transmission require the
                      vaccine.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-blue-800">How long is my yellow fever certificate valid?</h3>
                    <p className="mt-1">
                      According to the World Health Organization (WHO), a single dose of yellow fever vaccine provides
                      lifelong protection. However, some countries may still require a certificate issued within the
                      past 10 years.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-blue-800">
                      What happens if I arrive in a country without a required yellow fever certificate?
                    </h3>
                    <p className="mt-1">
                      You may be denied entry, quarantined for up to 6 days, or vaccinated on arrival (if available).
                      It's always best to check requirements and get vaccinated before travel.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Side Effects and Risks */}
          <div className="mb-4 bg-blue-100 rounded-md overflow-hidden">
            <button
              onClick={() => toggleFAQSection("sideEffects")}
              className="w-full text-left p-4 font-medium flex items-center justify-between bg-blue-200 hover:bg-blue-300 transition-colors"
            >
              <span>Side Effects and Risks</span>
              <span>{openFAQSections.sideEffects ? "-" : "+"}</span>
            </button>
            {openFAQSections.sideEffects && (
              <div className="p-4 border-t border-blue-200 animate-in fade-in duration-200">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-blue-800">
                      Are there any serious side effects from the yellow fever vaccine?
                    </h3>
                    <p className="mt-1">
                      Serious adverse reactions are rare but can include severe allergic reactions (anaphylaxis),
                      yellow fever vaccine-associated neurologic disease (YEL-AND), and yellow fever
                      vaccine-associated viscerotropic disease (YEL-AVD). These occur in fewer than 1 per 250,000
                      doses.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-blue-800">Who is at higher risk for severe adverse reactions?</h3>
                    <p className="mt-1">
                      People aged 60 and older, those with thymus disorders or who have had their thymus removed, and
                      individuals with weakened immune systems are at higher risk for serious adverse reactions.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-blue-800">
                      When should I seek medical attention after vaccination?
                    </h3>
                    <p className="mt-1">
                      Seek immediate medical attention if you develop high fever, severe headache, confusion,
                      seizures, extreme fatigue, yellowing of the skin or eyes, or severe pain within 30 days after
                      vaccination.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Special Cases */}
          <div className="mb-4 bg-blue-100 rounded-md overflow-hidden">
            <button
              onClick={() => toggleFAQSection("specialCases")}
              className="w-full text-left p-4 font-medium flex items-center justify-between bg-blue-200 hover:bg-blue-300 transition-colors"
            >
              <span>Special Cases and Exemptions</span>
              <span>{openFAQSections.specialCases ? "-" : "+"}</span>
            </button>
            {openFAQSections.specialCases && (
              <div className="p-4 border-t border-blue-200 animate-in fade-in duration-200">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-blue-800">Can children get the yellow fever vaccine?</h3>
                    <p className="mt-1">
                      The yellow fever vaccine is not recommended for infants younger than 6 months. For children 6-8
                      months, the vaccine is generally only given during yellow fever outbreaks when the risk of
                      infection is high.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-blue-800">
                      Can I get a medical exemption if I can't receive the vaccine?
                    </h3>
                    <p className="mt-1">
                      Yes, if you have a medical condition that prevents you from receiving the yellow fever vaccine,
                      your doctor can provide a medical waiver letter (medical exemption certificate). However, some
                      countries may not accept these waivers and could deny entry or require quarantine.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-blue-800">
                      Can I get the yellow fever vaccine if I'm immunocompromised?
                    </h3>
                    <p className="mt-1">
                      Generally, the yellow fever vaccine is not recommended for people with compromised immune
                      systems. This includes people with HIV/AIDS, those receiving immunosuppressive therapies, and
                      those with primary immunodeficiencies. Consult with a travel medicine specialist for
                      personalized advice.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Resources Page */}
      {activePage === "Resources" && (
        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-6 text-white">
              <h2 className="text-2xl font-bold mb-2">Resources</h2>
              <p>Educational materials, publications, and tools for travelers and healthcare professionals</p>
            </div>

            <div className="p-6">
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-blue-700 mb-4">Our Commitment to You</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 flex flex-col h-full">
                    <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                      <FileText className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Publications</h3>
                    <p className="text-gray-600 mb-4 flex-grow">
                      Access our research papers, guidelines, and educational materials on tropical diseases and travel
                      health.
                    </p>
                    <Button className="mt-auto bg-blue-600 hover:bg-blue-700">Browse Publications</Button>
                  </div>

                  <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 flex flex-col h-full">
                    <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                      <Globe className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Travel Tools</h3>
                    <p className="text-gray-600 mb-4 flex-grow">
                      Interactive tools to help you prepare for safe travel, including vaccination requirements by
                      country.
                    </p>
                    <Button className="mt-auto bg-blue-600 hover:bg-blue-700">Explore Tools</Button>
                  </div>

                  <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 flex flex-col h-full">
                    <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                      <Book className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Educational Resources</h3>
                    <p className="text-gray-600 mb-4 flex-grow">
                      Training materials, courses, and educational content for healthcare professionals and the public.
                    </p>
                    <Button className="mt-auto bg-blue-600 hover:bg-blue-700">View Resources</Button>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-blue-700 mb-4">Featured Publications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Yellow Fever: A Comprehensive Guide for Travelers",
                      author: "Dr. Amara Okafor, Dr. Miguel Sanchez",
                      date: "March 2025",
                      desc: "This comprehensive guide provides essential information about yellow fever, prevention strategies, and vaccination requirements for international travelers.",
                      type: "Guide",
                    },
                    {
                      title: "Efficacy of Thermostable Yellow Fever Vaccine in Field Conditions",
                      author: "Research Team, Center for Tropical Disease Prevention",
                      date: "January 2025",
                      desc: "A research paper detailing the results of field trials for the new thermostable yellow fever vaccine developed by HIMI researchers.",
                      type: "Research Paper",
                    },
                    {
                      title: "Global Distribution of Yellow Fever: Trends and Projections",
                      author: "Dr. Sophia Chen, Epidemiology Department",
                      date: "December 2024",
                      desc: "An analysis of current yellow fever distribution patterns and projections for future spread based on climate change models and population movements.",
                      type: "Report",
                    },
                    {
                      title: "Yellow Fever Vaccination: Best Practices for Healthcare Providers",
                      author: "Global Health & Vaccination Services",
                      date: "November 2024",
                      desc: "A practical guide for healthcare providers on yellow fever vaccination procedures, documentation, and patient education.",
                      type: "Clinical Guide",
                    },
                  ].map((pub, index) => (
                    <div key={index} className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-blue-700">{pub.title}</h4>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">{pub.type}</span>
                      </div>
                      <p className="text-sm text-gray-500 mb-2">
                        {pub.author} | {pub.date}
                      </p>
                      <p className="text-sm text-gray-600 mb-3">{pub.desc}</p>
                      <Link href="#" className="text-blue-600 text-sm flex items-center hover:underline">
                        Read publication <ExternalLink className="h-3 w-3 ml-1" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-blue-700 mb-4">Interactive Tools</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                    <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                      <Globe className="h-6 w-6 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-blue-700 mb-2">Vaccination Requirements Map</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Interactive map showing yellow fever vaccination requirements and recommendations by country.
                    </p>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Open Map</Button>
                  </div>

                  <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                    <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                      <Calendar className="h-6 w-6 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-blue-700 mb-2">Travel Health Planner</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Plan your vaccination schedule based on your travel dates and destinations.
                    </p>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Start Planning</Button>
                  </div>

                  <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                    <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-blue-700 mb-2">Vaccination Center Locator</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Find authorized yellow fever vaccination centers near your location.
                    </p>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Find Centers</Button>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-blue-700 mb-4">Educational Materials</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                    <h4 className="font-semibold text-blue-700 mb-2">For Healthcare Professionals</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <FileText className="h-4 w-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium">Yellow Fever Vaccination Training Module</p>
                          <p className="text-xs text-gray-500">
                            Comprehensive training on vaccine administration and documentation
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <FileText className="h-4 w-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium">Clinical Management of Yellow Fever</p>
                          <p className="text-xs text-gray-500">
                            Guidelines for diagnosis and treatment of yellow fever cases
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <FileText className="h-4 w-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium">Adverse Events Following Immunization</p>
                          <p className="text-xs text-gray-500">Protocol for monitoring and managing vaccine</p>
                        </div>
                      </li>
                    </ul>
                    <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                      Access Professional Resources
                    </Button>
                  </div>

                  <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                    <h4 className="font-semibold text-blue-700 mb-2">For Travelers and the Public</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <FileText className="h-4 w-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium">Yellow Fever: What You Need to Know</p>
                          <p className="text-xs text-gray-500">
                            Essential information for travelers about yellow fever risks and prevention
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <FileText className="h-4 w-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium">Traveler's Vaccination Guide</p>
                          <p className="text-xs text-gray-500">
                            Comprehensive guide to travel vaccinations including yellow fever
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <FileText className="h-4 w-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium">Mosquito Prevention Strategies</p>
                          <p className="text-xs text-gray-500">
                            Practical tips for avoiding mosquito bites while traveling
                          </p>
                        </div>
                      </li>
                    </ul>
                    <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">Access Public Resources</Button>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="text-xl font-semibold text-blue-700 mb-3">Subscribe to Our Resources</h3>
                <p className="text-gray-600 mb-4">
                  Stay updated with the latest research, travel advisories, and educational materials by subscribing
                  to our newsletter.
                </p>
                <div className="flex flex-col md:flex-row gap-3">
                  <Input type="email" placeholder="Enter your email address" className="flex-grow" />
                  <Button className="bg-blue-600 hover:bg-blue-700 whitespace-nowrap">Subscribe</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Patient Charter Page */}
      {activePage === "Patient Charter" && (
        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-6 text-white">
              <h2 className="text-2xl font-bold mb-2">Patient Charter</h2>
              <p>Our commitment to patient rights, responsibilities, and quality care</p>
            </div>

            <div className="p-6">
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-blue-700 mb-4">Our Commitment to You</h3>
                <p className="text-gray-700 mb-4">
                  The Hope International Medical Institute is committed to providing the highest standard of care to
                  all patients. Our Patient Charter outlines the rights and responsibilities of patients and the
                  standards of service you can expect from our healthcare facilities worldwide.
                </p>
                <p className="text-gray-700">
                  This charter applies to all services provided by HIMI, including vaccination centers, research
                  facilities, and clinical services. We believe in transparent, respectful, and patient-centered care
                  that prioritizes your health, safety, and dignity.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-blue-700 mb-4">Patient Rights</h3>
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                      <h4 className="font-medium text-blue-700 mb-2">Right to Respectful Care</h4>
                      <p className="text-sm text-gray-600">
                        You have the right to receive considerate, respectful care that honors your cultural,
                        psychosocial, and spiritual values. Our staff will treat you with dignity regardless of your
                        age, gender, race, national origin, religion, sexual orientation, or disability.
                      </p>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                      <h4 className="font-medium text-blue-700 mb-2">Right to Information</h4>
                      <p className="text-sm text-gray-600">
                        You have the right to receive complete, accurate information about your health status,
                        diagnosis, treatment options, and expected outcomes in terms you can understand. This includes
                        information about vaccine benefits, risks, and alternatives.
                      </p>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                      <h4 className="font-medium text-blue-700 mb-2">Right to Informed Consent</h4>
                      <p className="text-sm text-gray-600">
                        You have the right to be involved in decisions about your care and to give informed consent
                        before any procedure or treatment. You may refuse treatment to the extent permitted by law and
                        be informed of the medical consequences of your decision.
                      </p>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                      <h4 className="font-medium text-blue-700 mb-2">Right to Privacy and Confidentiality</h4>
                      <p className="text-sm text-gray-600">
                        You have the right to privacy during consultations, examinations, and treatments. Your
                        personal and medical information will be kept confidential in accordance with applicable laws
                        and regulations.
                      </p>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                      <h4 className="font-medium text-blue-700 mb-2">Right to Access Your Records</h4>
                      <p className="text-sm text-gray-600">
                        You have the right to access your medical records and receive copies of your vaccination
                        certificates and other documentation in a timely manner.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-700 mb-4">Patient Responsibilities</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h4 className="font-medium text-blue-700 mb-2">Provide Accurate Information</h4>
                      <p className="text-sm text-gray-600">
                        You are responsible for providing accurate and complete information about your medical
                        history, current medications, allergies, and any other factors that may affect your care.
                      </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h4 className="font-medium text-blue-700 mb-2">Follow Treatment Plans</h4>
                      <p className="text-sm text-gray-600">
                        You are responsible for following the treatment plan recommended by your healthcare provider,
                        including post-vaccination care instructions and reporting any adverse reactions.
                      </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h4 className="font-medium text-blue-700 mb-2">Respect Others</h4>
                      <p className="text-sm text-gray-600">
                        You are responsible for treating staff and other patients with respect and consideration.
                        Abusive or threatening behavior will not be tolerated.
                      </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h4 className="font-medium text-blue-700 mb-2">Financial Obligations</h4>
                      <p className="text-sm text-gray-600">
                        You are responsible for providing accurate information for billing purposes and for meeting
                        any financial obligations related to your care, as applicable.
                      </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h4 className="font-medium text-blue-700 mb-2">Keep Appointments</h4>
                      <p className="text-sm text-gray-600">
                        You are responsible for keeping scheduled appointments or notifying the facility in advance if
                        you cannot attend, allowing others to access care.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-blue-700 mb-4">Our Service Standards</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                    <div className="bg-blue-100 p-2 rounded-full w-fit mb-3">
                      <Users className="h-5 w-5 text-blue-600" />
                    </div>
                    <h4 className="font-medium text-blue-700 mb-2">Professional Staff</h4>
                    <p className="text-sm text-gray-600">
                      All our healthcare providers are qualified, certified, and regularly trained in the latest
                      protocols and procedures.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                    <div className="bg-blue-100 p-2 rounded-full w-fit mb-3">
                      <ClockIcon className="h-5 w-5 text-blue-600" />
                    </div>
                    <h4 className="font-medium text-blue-700 mb-2">Timely Service</h4>
                    <p className="text-sm text-gray-600">
                      We strive to minimize waiting times and provide efficient service while ensuring thorough care.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                    <div className="bg-blue-100 p-2 rounded-full w-fit mb-3">
                      <Shield className="h-5 w-5 text-blue-600" />
                    </div>
                    <h4 className="font-medium text-blue-700 mb-2">Safety First</h4>
                    <p className="text-sm text-gray-600">
                      We maintain the highest standards of safety in all our procedures, including vaccine storage,
                      handling, and administration.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-blue-700 mb-4">Feedback and Complaints</h3>
                <p className="text-gray-700 mb-4">
                  We value your feedback and are committed to continuously improving our services. If you have
                  concerns about the care you received or suggestions for improvement, we encourage you to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Speak directly with the staff member or their supervisor</li>
                  <li>Complete a feedback form available at all our facilities</li>
                  <li>Contact our Patient Relations Office</li>
                  <li>Submit feedback through our website</li>
                </ul>
                <p className="text-gray-700">
                  All complaints will be investigated thoroughly and confidentially. We aim to respond to all
                  complaints within 10 working days.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="mb-4 md:mb-0 md:mr-6">
                    <h3 className="text-xl font-semibold text-blue-700 mb-2">Contact Patient Relations</h3>
                    <p className="text-gray-600">
                      If you have questions about your rights or wish to provide feedback, our Patient Relations team
                      is here to help.
                    </p>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700 whitespace-nowrap">
                    Contact Patient Relations
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Gallery Page */}
      {activePage === "Gallery" && (
        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-6 text-white">
              <h2 className="text-2xl font-bold mb-2">Gallery</h2>
              <p>Images from our facilities, events, and global health initiatives</p>
            </div>

            <div className="p-6">
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-blue-700 mb-4">Our Facilities</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <Image
                      src="/placeholder.svg?key=facility-1&text=Headquarters"
                      alt="HIMI Headquarters"
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-3 bg-white">
                      <p className="text-sm font-medium">HIMI Global Headquarters</p>
                      <p className="text-xs text-gray-500">Geneva, Switzerland</p>
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-lg shadow-md">
                    <Image
                      src="/placeholder.svg?key=facility-2&text=Research%20Center"
                      alt="Research Center"
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-3 bg-white">
                      <p className="text-sm font-medium">Center for Tropical Disease Research</p>
                      <p className="text-xs text-gray-500">Nairobi, Kenya</p>
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-lg shadow-md">
                    <Image
                      src="/placeholder.svg?key=facility-3&text=Vaccination%20Center"
                      alt="Vaccination Center"
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-3 bg-white">
                      <p className="text-sm font-medium">International Vaccination Center</p>
                      <p className="text-xs text-gray-500">Singapore</p>
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-lg shadow-md">
                    <Image
                      src="/placeholder.svg?key=facility-4&text=Laboratory"
                      alt="Laboratory"
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-3 bg-white">
                      <p className="text-sm font-medium">Advanced Research Laboratory</p>
                      <p className="text-xs text-gray-500">Rio de Janeiro, Brazil</p>
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-lg shadow-md">
                    <Image
                      src="/placeholder.svg?key=facility-5&text=Training%20Center"
                      alt="Training Center"
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-3 bg-white">
                      <p className="text-sm font-medium">Healthcare Professional Training Center</p>
                      <p className="text-xs text-gray-500">Atlanta, USA</p>
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-lg shadow-md">
                    <Image
                      src="/placeholder.svg?key=facility-6&text=Vaccination%20Unit"
                      alt="Vaccination Unit"
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-3 bg-white">
                      <p className="text-sm font-medium">Vaccination Unit</p>
                      <p className="text-xs text-gray-500">Nagpur, India</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-blue-700 mb-4">Our Work in Action</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <Image
                      src="/placeholder.svg?key=work-1&text=Vaccination%20Campaign"
                      alt="Vaccination Campaign"
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-3 bg-white">
                      <p className="text-sm font-medium">Yellow Fever Vaccination Campaign</p>
                      <p className="text-xs text-gray-500">East Africa, 2024</p>
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-lg shadow-md">
                    <Image
                      src="/placeholder.svg?key=work-2&text=Research%20Team"
                      alt="Research Team"
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-3 bg-white">
                      <p className="text-sm font-medium">Research Team in the Field</p>
                      <p className="text-xs text-gray-500">Vector Surveillance Program</p>
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-lg shadow-md">
                    <Image
                      src="/placeholder.svg?key=work-3&text=Community%20Education"
                      alt="Community Education"
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-3 bg-white">
                      <p className="text-sm font-medium">Community Health Education</p>
                      <p className="text-xs text-gray-500">Disease Prevention Workshop</p>
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-lg shadow-md">
                    <Image
                      src="/placeholder.svg?key=work-4&text=Healthcare%20Training"
                      alt="Healthcare Training"
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-3 bg-white">
                      <p className="text-sm font-medium">Healthcare Provider Training</p>
                      <p className="text-xs text-gray-500">Vaccination Certification Program</p>
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-lg shadow-md">
                    <Image
                      src="/placeholder.svg?key=work-5&text=International%20Conference"
                      alt="International Conference"
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-3 bg-white">
                      <p className="text-sm font-medium">International Tropical Medicine Conference</p>
                      <p className="text-xs text-gray-500">Geneva, 2024</p>
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-lg shadow-md">
                    <Image
                      src="/placeholder.svg?key=work-6&text=Laboratory%20Research"
                      alt="Laboratory Research"
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-3 bg-white">
                      <p className="text-sm font-medium">Vaccine Research Laboratory</p>
                      <p className="text-xs text-gray-500">Thermostable Vaccine Development</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-blue-700 mb-4">Global Health Initiatives</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm flex">
                    <div className="mr-4 flex-shrink-0">
                      <Image
                        src="/placeholder.svg?key=initiative-1&text=Vector%20Control"
                        alt="Vector Control Initiative"
                        width={120}
                        height={120}
                        className="rounded-md"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-700 mb-1">Vector Control Initiative</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Community-based mosquito control programs in endemic regions, reducing disease transmission by
                        targeting vector populations.
                      </p>
                      <Link href="#" className="text-blue-600 text-sm flex items-center hover:underline">
                        Learn more <ChevronDown className="h-4 w-4 ml-1 rotate-[-90deg]" />
                      </Link>
                    </div>
                  </div>

                  <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm flex">
                    <div className="mr-4 flex-shrink-0">
                      <Image
                        src="/placeholder.svg?key=initiative-2&text=Vaccine%20Access"
                        alt="Vaccine Access Program"
                        width={120}
                        height={120}
                        className="rounded-md"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-700 mb-1">Vaccine Access Program</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Initiative to improve access to essential vaccines in underserved communities through mobile
                        clinics and subsidized vaccination programs.
                      </p>
                      <Link href="#" className="text-blue-600 text-sm flex items-center hover:underline">
                        Learn more <ChevronDown className="h-4 w-4 ml-1 rotate-[-90deg]" />
                      </Link>
                    </div>
                  </div>

                  <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm flex">
                    <div className="mr-4 flex-shrink-0">
                      <Image
                        src="/placeholder.svg?key=initiative-3&text=Health%20Education"
                        alt="Health Education Campaign"
                        width={120}
                        height={120}
                        className="rounded-md"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-700 mb-1">Health Education Campaign</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Multilingual educational materials and community workshops to increase awareness about disease
                        prevention and vaccination benefits.
                      </p>
                      <Link href="#" className="text-blue-600 text-sm flex items-center hover:underline">
                        Learn more <ChevronDown className="h-4 w-4 ml-1 rotate-[-90deg]" />
                      </Link>
                    </div>
                  </div>

                  <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm flex">
                    <div className="mr-4 flex-shrink-0">
                      <Image
                        src="/placeholder.svg?key=initiative-4&text=Healthcare%20Capacity"
                        alt="Healthcare Capacity Building"
                        width={120}
                        height={120}
                        className="rounded-md"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-700 mb-1">Healthcare Capacity Building</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Training programs for local healthcare workers to build sustainable capacity for vaccination
                        and disease management in endemic regions.
                      </p>
                      <Link href="#" className="text-blue-600 text-sm flex items-center hover:underline">
                        Learn more <ChevronDown className="h-4 w-4 ml-1 rotate-[-90deg]" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="text-xl font-semibold text-blue-700 mb-3">Submit Your Photos</h3>
                <p className="text-gray-600 mb-4">
                  Are you a healthcare professional working with HIMI or a partner organization? Share your photos
                  from the field to be featured in our gallery.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700">Submit Photos</Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* eServices Page */}
      {activePage === "eServices" && (
        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-6 text-white">
              <h2 className="text-2xl font-bold mb-2">eServices</h2>
              <p>Online services and digital tools for patients and healthcare professionals</p>
            </div>

            <div className="p-6">
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-blue-700 mb-4">Online Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                    <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                      <Calendar className="h-6 w-6 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-blue-700 mb-2">Appointment Booking</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Schedule vaccination appointments at any of our authorized centers worldwide.
                    </p>
                    <Button
                      onClick={() => document.getElementById("appointment-form-modal").showModal()}
                      className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                      Book Appointment
                    </Button>

                    <dialog
                      id="appointment-form-modal"
                      className="modal modal-bottom sm:modal-middle rounded-lg p-0 w-full max-w-md mx-auto"
                    >
                      <div className="bg-white p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-blue-700 mb-4">Book Vaccination Appointment</h3>
                        <form className="space-y-4">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                              Full Name
                            </label>
                            <Input id="name" type="text" placeholder="Enter your full name" required />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                              Email Address
                            </label>
                            <Input id="email" type="email" placeholder="Enter your email address" required />
                          </div>
                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                              Phone Number
                            </label>
                            <Input id="phone" type="tel" placeholder="Enter your phone number" required />
                          </div>
                          <div>
                            <label htmlFor="center" className="block text-sm font-medium text-gray-700 mb-1">
                              Vaccination Center
                            </label>
                            <select id="center" className="w-full p-2 border border-gray-300 rounded-md" required>
                              <option value="">Select a center</option>
                              <option value="nagpur">Hope Hospital, Nagpur</option>
                              <option value="geneva">HIMI Headquarters, Geneva</option>
                              <option value="nairobi">Center for Tropical Disease Research, Nairobi</option>
                              <option value="singapore">International Vaccination Center, Singapore</option>
                            </select>
                          </div>
                          <div>
                            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                              Preferred Date
                            </label>
                            <Input id="date" type="date" min={new Date().toISOString().split("T")[0]} required />
                          </div>
                          <div>
                            <label htmlFor="vaccine" className="block text-sm font-medium text-gray-700 mb-1">
                              Vaccine Type
                            </label>
                            <select id="vaccine" className="w-full p-2 border border-gray-300 rounded-md" required>
                              <option value="">Select vaccine type</option>
                              <option value="yellow-fever">Yellow Fever</option>
                              <option value="typhoid">Typhoid</option>
                              <option value="hepatitis">Hepatitis A & B</option>
                              <option value="meningitis">Meningitis</option>
                            </select>
                          </div>
                          <div className="flex justify-end space-x-3 pt-4">
                            <Button
                              type="button"
                              variant="outline"
                              onClick={() => document.getElementById("appointment-form-modal").close()}
                            >
                              Cancel
                            </Button>
                            <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                              Submit Request
                            </Button>
                          </div>
                        </form>
                      </div>
                    </dialog>
                  </div>

                  <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                    <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                      <FileText className="h-6 w-6 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-blue-700 mb-2">Certificate Verification</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Verify the authenticity of vaccination certificates issued by our centers.
                    </p>
                    <Button
                      onClick={() => document.getElementById("certificate-form-modal").showModal()}
                      className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                      Verify Certificate
                    </Button>

                    <dialog
                      id="certificate-form-modal"
                      className="modal modal-bottom sm:modal-middle rounded-lg p-0 w-full max-w-md mx-auto"
                    >
                      <div className="bg-white p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-blue-700 mb-4">Verify Vaccination Certificate</h3>
                        <form className="space-y-4">
                          <div>
                            <label
                              htmlFor="certificate-number"
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Certificate Number
                            </label>
                            <Input
                              id="certificate-number"
                              type="text"
                              placeholder="Enter certificate number"
                              required
                            />
                          </div>
                          <div>
                            <label htmlFor="issue-date" className="block text-sm font-medium text-gray-700 mb-1">
                              Issue Date
                            </label>
                            <Input id="issue-date" type="date" required />
                          </div>
                          <div>
                            <label htmlFor="patient-name" className="block text-sm font-medium text-gray-700 mb-1">
                              Patient Name
                            </label>
                            <Input
                              id="patient-name"
                              type="text"
                              placeholder="Enter patient name as on certificate"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Upload Certificate (Optional)
                            </label>
                            <Input type="file" accept=".pdf,.jpg,.jpeg,.png" />
                            <p className="text-xs text-gray-500 mt-1">
                              Upload a scanned copy or photo of the certificate
                            </p>
                          </div>
                          <div className="flex justify-end space-x-3 pt-4">
                            <Button
                              type="button"
                              variant="outline"
                              onClick={() => document.getElementById("certificate-form-modal").close()}
                            >
                              Cancel
                            </Button>
                            <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                              Verify
                            </Button>
                          </div>
                        </form>
                      </div>
                    </dialog>
                  </div>

                  <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                    <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-blue-700 mb-2">Patient Portal</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Access your vaccination records, upcoming appointments, and health information.
                    </p>
                    <Button
                      onClick={() => document.getElementById("login-form-modal").showModal()}
                      className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                      Login to Portal
                    </Button>

                    <dialog
                      id="login-form-modal"
                      className="modal modal-bottom sm:modal-middle rounded-lg p-0 w-full max-w-md mx-auto"
                    >
                      <div className="bg-white p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-blue-700 mb-4">Patient Portal Login</h3>
                        <form className="space-y-4">
                          <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                              Username or Email
                            </label>
                            <Input id="username" type="text" placeholder="Enter your username or email" required />
                          </div>
                          <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                              Password
                            </label>
                            <Input id="password" type="password" placeholder="Enter your password" required />
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                              />
                              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                                Remember me
                              </label>
                            </div>
                            <div className="text-sm">
                              <a href="#" className="text-blue-600 hover:underline">
                                Forgot password?
                              </a>
                            </div>
                          </div>
                          <div className="flex justify-end space-x-3 pt-4">
                            <Button
                              type="button"
                              variant="outline"
                              onClick={() => document.getElementById("login-form-modal").close()}
                            >
                              Cancel
                            </Button>
                            <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                              Login
                            </Button>
                          </div>
                          <div className="text-center pt-2">
                            <p className="text-sm text-gray-600">
                              Don't have an account?{" "}
                              <a href="#" className="text-blue-600 hover:underline">
                                Register here
                              </a>
                            </p>
                          </div>
                        </form>
                      </div>
                    </dialog>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-blue-700 mb-4">Digital Tools</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm flex">
                    <div className="mr-4 flex-shrink-0">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <Globe className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-700 mb-1">Travel Health Advisor</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Interactive tool that provides personalized vaccination recommendations based on your travel
                        destinations, duration, and health status.
                      </p>
                      <Button className="bg-blue-600 hover:bg-blue-700">Use Tool</Button>
                    </div>
                  </div>

                  <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm flex">
                    <div className="mr-4 flex-shrink-0">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-700 mb-1">Vaccination Center Locator</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Find the nearest authorized vaccination centers with real-time availability information and
                        directions.
                      </p>
                      <Button className="bg-blue-600 hover:bg-blue-700">Find Centers</Button>
                    </div>
                  </div>

                  <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm flex">
                    <div className="mr-4 flex-shrink-0">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <Calendar className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-700 mb-1">Vaccination Reminder</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Set up personalized reminders for your vaccination schedule, including booster shots and
                        follow-up appointments.
                      </p>
                      <Button className="bg-blue-600 hover:bg-blue-700">Set Reminders</Button>
                    </div>
                  </div>

                  <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm flex">
                    <div className="mr-4 flex-shrink-0">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <FileQuestion className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-700 mb-1">Health Risk Assessment</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Complete a personalized health risk assessment to determine your vaccination needs based on
                        age, health status, and travel plans.
                      </p>
                      <Button className="bg-blue-600 hover:bg-blue-700">Start Assessment</Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-blue-700 mb-4">For Healthcare Professionals</h3>
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className="md:w-2/3">
                      <h4 className="font-semibold text-blue-700 mb-3">Professional Portal</h4>
                      <p className="text-gray-600 mb-4">
                        Our dedicated portal for healthcare professionals provides access to:
                      </p>
                      <ul className="space-y-2 text-gray-600 mb-4">
                        <li className="flex items-start">
                          <div className="text-blue-500 mr-2">•</div>
                          <span>Vaccination certificate issuance system</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-blue-500 mr-2">•</div>
                          <span>Clinical guidelines and protocols</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-blue-500 mr-2">•</div>
                          <span>Adverse event reporting tools</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-blue-500 mr-2">•</div>
                          <span>Continuing education resources</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-blue-500 mr-2">•</div>
                          <span>Vaccine inventory management</span>
                        </li>
                      </ul>

                      <Button
                        onClick={() => document.getElementById("professional-login-modal").showModal()}
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        Healthcare Professional Login
                      </Button>

                      <dialog
                        id="professional-login-modal"
                        className="modal modal-bottom sm:modal-middle rounded-lg p-0 w-full max-w-md mx-auto"
                      >
                        <div className="bg-white p-6 rounded-lg">
                          <h3 className="text-xl font-semibold text-blue-700 mb-4">Healthcare Professional Login</h3>
                          <form className="space-y-4">
                            <div>
                              <label htmlFor="pro-username" className="block text-sm font-medium text-gray-700 mb-1">
                                Professional ID
                              </label>
                              <Input
                                id="pro-username"
                                type="text"
                                placeholder="Enter your professional ID"
                                required
                              />
                            </div>
                            <div>
                              <label htmlFor="pro-password" className="block text-sm font-medium text-gray-700 mb-1">
                                Password
                              </label>
                              <Input id="pro-password" type="password" placeholder="Enter your password" required />
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <input
                                  id="pro-remember-me"
                                  name="remember-me"
                                  type="checkbox"
                                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                />
                                <label htmlFor="pro-remember-me" className="ml-2 block text-sm text-gray-700">
                                  Remember me
                                </label>
                              </div>
                              <div className="text-sm">
                                <a href="#" className="text-blue-600 hover:underline">
                                  Forgot password?
                                </a>
                              </div>
                            </div>
                            <div className="flex justify-end space-x-3 pt-4">
                              <Button
                                type="button"
                                variant="outline"
                                onClick={() => document.getElementById("professional-login-modal").close()}
                              >
                                Cancel
                              </Button>
                              <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                                Login
                              </Button>
                            </div>
                          </form>
                        </div>
                      </dialog>
                    </div>
                    <div className="md:w-1/3">
                      <div className="bg-white p-4 rounded-lg border border-gray-200 flex flex-col items-center">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hope%20hospital%20youtube%20logo-PiORnz9bxpvolYsNVD1Vgtz7yDDirJ.png"
                          alt="Hope Hospital Logo"
                          width={180}
                          height={60}
                          className="mb-4"
                        />
                        <div className="bg-blue-50 w-full h-32 rounded-lg flex items-center justify-center">
                          <p className="text-blue-600 font-medium">Professional Portal Dashboard</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-blue-700 mb-4">Mobile Applications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-100 p-3 rounded-full mr-3">
                        <SmartphoneIcon className="h-6 w-6 text-blue-600" />
                      </div>
                      <h4 className="font-semibold text-blue-700">HIMI Travel Health App</h4>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      Our comprehensive travel health app provides on-the-go access to your vaccination records,
                      appointment scheduling, and travel health advisories.
                    </p>
                    <div className="flex space-x-3">
                      <Button variant="outline" className="flex-1 border-blue-600 text-blue-600">
                        <AppleIcon className="h-4 w-4 mr-2" /> App Store
                      </Button>
                      <Button variant="outline" className="flex-1 border-blue-600 text-blue-600">
                        <SmartphoneIcon className="h-4 w-4 mr-2" /> Google Play
                      </Button>
                    </div>
                  </div>

                  <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-100 p-3 rounded-full mr-3">
                        <SmartphoneIcon className="h-6 w-6 text-blue-600" />
                      </div>
                      <h4 className="font-semibold text-blue-700">VaxTrack Professional App</h4>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      Designed for healthcare professionals, this app allows for mobile certificate issuance, patient
                      record access, and inventory management.
                    </p>
                    <div className="flex space-x-3">
                      <Button variant="outline" className="flex-1 border-blue-600 text-blue-600">
                        <AppleIcon className="h-4 w-4 mr-2" /> App Store
                      </Button>
                      <Button variant="outline" className="flex-1 border-blue-600 text-blue-600">
                        <SmartphoneIcon className="h-4 w-4 mr-2" /> Google Play
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-6 rounded-lg text-white">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="mb-4 md:mb-0 md:mr-6">
                    <h3 className="text-xl font-bold mb-2">Digital Vaccination Certificate</h3>
                    <p className="opacity-90">
                      Our secure digital vaccination certificates are internationally recognized and easily
                      verifiable. Register now to convert your paper certificate to a digital format.
                    </p>

                    <Button
                      onClick={() => document.getElementById("digital-certificate-modal").showModal()}
                      className="bg-white text-blue-600 hover:bg-blue-50 whitespace-nowrap"
                    >
                      Register Now
                    </Button>

                    <dialog
                      id="digital-certificate-modal"
                      className="modal modal-bottom sm:modal-middle rounded-lg p-0 w-full max-w-md mx-auto"
                    >
                      <div className="bg-white p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-blue-700 mb-4">Digital Certificate Registration</h3>
                        <form className="space-y-4">
                          <div>
                            <label
                              htmlFor="paper-cert-number"
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Paper Certificate Number
                            </label>
                            <Input
                              id="paper-cert-number"
                              type="text"
                              placeholder="Enter your certificate number"
                              required
                            />
                          </div>
                          <div>
                            <label htmlFor="cert-issue-date" className="block text-sm font-medium text-gray-700 mb-1">
                              Certificate Issue Date
                            </label>
                            <Input id="cert-issue-date" type="date" required />
                          </div>
                          <div>
                            <label htmlFor="cert-full-name" className="block text-sm font-medium text-gray-700 mb-1">
                              Full Name (as on certificate)
                            </label>
                            <Input id="cert-full-name" type="text" placeholder="Enter your full name" required />
                          </div>
                          <div>
                            <label htmlFor="cert-email" className="block text-sm font-medium text-gray-700 mb-1">
                              Email Address
                            </label>
                            <Input id="cert-email" type="email" placeholder="Enter your email address" required />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Upload Certificate</label>
                            <Input type="file" accept=".pdf,.jpg,.jpeg,.png" required />
                            <p className="text-xs text-gray-500 mt-1">
                              Upload a scanned copy or photo of your paper certificate
                            </p>
                          </div>
                          <div className="flex justify-end space-x-3 pt-4">
                            <Button
                              type="button"
                              variant="outline"
                              onClick={() => document.getElementById("digital-certificate-modal").close()}
                            >
                              Cancel
                            </Button>
                            <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                              Register
                            </Button>
                          </div>
                        </form>
                      </div>
                    </dialog>
                  </div>
                  <Button className="bg-white text-blue-600 hover:bg-blue-50 whitespace-nowrap">Register Now</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
    {/* Modal for "Learn About Our Services" */}
    <dialog id="services-modal" className="modal modal-bottom sm:modal-middle rounded-lg p-0 w-full max-w-3xl mx-auto">
      <div className="bg-white p-6 rounded-lg">
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">Our Services</h3>

        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-blue-600 mb-2">Yellow Fever Vaccination</h4>
            <p className="text-gray-700 mb-2">Our internationally recognized yellow fever vaccination service includes:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Pre-vaccination health screening</li>
              <li>Administration of WHO-approved vaccine</li>
              <li>Issuance of International Certificate of Vaccination or Prophylaxis (ICVP)</li>
              <li>Post-vaccination care instructions</li>
              <li>24/7 support for post-vaccination concerns</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-blue-600 mb-2">Travel Health Consultation</h4>
            <p className="text-gray-700 mb-2">Comprehensive travel health services tailored to your destination:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Personalized risk assessment based on destination and health status</li>
              <li>Recommendations for required and recommended vaccinations</li>
              <li>Preventive medication prescriptions (malaria, altitude sickness, etc.)</li>
              <li>Travel health kit guidance</li>
              <li>Documentation review for international travel</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-blue-600 mb-2">Other Vaccinations</h4>
            <p className="text-gray-700 mb-2">We offer a wide range of travel and routine vaccines including:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 grid grid-cols-1 md:grid-cols-2">
              <li>Typhoid</li>
              <li>Hepatitis A & B</li>
              <li>Rabies</li>
              <li>Japanese Encephalitis</li>
              <li>Meningitis</li>
              <li>Tetanus/Diphtheria/Pertussis</li>
              <li>Influenza</li>
              <li>COVID-19</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-blue-600 mb-2">Research and Education</h4>
            <p className="text-gray-700">Our institute conducts cutting-edge research on tropical diseases and offers educational programs for healthcare professionals and the public. Visit our Resources section to learn more about our publications, training opportunities, and community outreach programs.</p>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <Button onClick={() => document.getElementById('services-modal').close()}>Close</Button>
        </div>
      </div>
    </dialog>

    {/* Modal for "Find a Vaccination Center" */}
    <dialog id="find-center-modal" className="modal modal-bottom sm:modal-middle rounded-lg p-0 w-full max-w-2xl mx-auto">
      <div className="bg-white p-6 rounded-lg">
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">Find a Vaccination Center</h3>

        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country</label>
              <select id="country" className="w-full p-2 border border-gray-300 rounded-md">
                <option value="">Select a country</option>
                <option value="india">India</option>
                <option value="switzerland">Switzerland</option>
                <option value="kenya">Kenya</option>
                <option value="brazil">Brazil</option>
                <option value="singapore">Singapore</option>
                <option value="usa">United States</option>
              </select>
            </div>

            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
              <Input id="city" type="text" placeholder="Enter city name" />
            </div>
          </div>

          <div>
            <label htmlFor="vaccine-type" className="block text-sm font-medium text-gray-700 mb-1">Vaccine Type (Optional)</label>
            <select id="vaccine-type" className="w-full p-2 border border-gray-300 rounded-md">
              <option value="">All Vaccines</option>
              <option value="yellow-fever">Yellow Fever</option>
              <option value="typhoid">Typhoid</option>
              <option value="hepatitis">Hepatitis A & B</option>
              <option value="rabies">Rabies</option>
              <option value="meningitis">Meningitis</option>
            </select>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-blue-700 mb-3">Nearby Centers</h4>
            <div className="space-y-3">
              <div className="p-3 border rounded-md bg-white hover:bg-blue-50">
                <div className="flex justify-between">
                  <h5 className="font-medium">Hope Hospital</h5>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Open Now</span>
                </div>
                <p className="text-sm text-gray-600">2, Teka Naka, Kamptee Road, Nagpur, Maharashtra, 440012</p>
                <div className="flex justify-between mt-2">
                  <span className="text-xs text-gray-500">2.3 km away</span>
                  <Button variant="link" className="p-0 h-auto text-sm text-blue-600">Get Directions</Button>
                </div>
              </div>

              <div className="p-3 border rounded-md bg-white hover:bg-blue-50">
                <div className="flex justify-between">
                  <h5 className="font-medium">Daga Memorial Government Women Hospital</h5>
                  <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">By Appointment</span>
                </div>
                <p className="text-sm text-gray-600">Near Maskasath, Civil Lines, Nagpur, Maharashtra, 440001</p>
                <div className="flex justify-between mt-2">
                  <span className="text-xs text-gray-500">4.7 km away</span>
                  <Button variant="link" className="p-0 h-auto text-sm text-blue-600">Get Directions</Button>
                </div>
              </div>

              <div className="p-3 border rounded-md bg-white hover:bg-blue-50">
                <div className="flex justify-between">
                  <h5 className="font-medium">HIMI Regional Office</h5>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Open Now</span>
                </div>
                <p className="text-sm text-gray-600">Medical Square, Nagpur, Maharashtra, 440003</p>
                <div className="flex justify-between mt-2">
                  <span className="text-xs text-gray-500">5.1 km away</span>
                  <Button variant="link" className="p-0 h-auto text-sm text-blue-600">Get Directions</Button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <Button variant="outline" onClick={() => document.getElementById('find-center-modal').close()}>Cancel</Button>
            <Button type="submit">Search More Centers</Button>
          </div>
        </form>
      </div>
    </dialog>

    {/* Modal for "Book an Appointment" */}
    <dialog id="book-appointment-modal" className="modal modal-bottom sm:modal-middle rounded-lg p-0 w-full max-w-md mx-auto">
      <div className="bg-white p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-blue-700 mb-4">Book an Appointment</h3>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <Input id="name" type="text" placeholder="Enter your full name" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <Input id="email" type="email" placeholder="Enter your email address" required />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <Input id="phone" type="tel" placeholder="Enter your phone number" required />
          </div>
          <div>
            <label htmlFor="center" className="block text-sm font-medium text-gray-700 mb-1">
              Vaccination Center
            </label>
            <select id="center" className="w-full p-2 border border-gray-300 rounded-md" required>
              <option value="">Select a center</option>
              <option value="nagpur">Hope Hospital, Nagpur</option>
              <option value="geneva">HIMI Headquarters, Geneva</option>
              <option value="nairobi">Center for Tropical Disease Research, Nairobi</option>
              <option value="singapore">International Vaccination Center, Singapore</option>
            </select>
          </div>
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
              Preferred Date
            </label>
            <Input id="date" type="date" min={new Date().toISOString().split("T")[0]} required />
          </div>
          <div>
            <label htmlFor="vaccine" className="block text-sm font-medium text-gray-700 mb-1">
              Vaccine Type
            </label>
            <select id="vaccine" className="w-full p-2 border border-gray-300 rounded-md" required>
              <option value="">Select vaccine type</option>
              <option value="yellow-fever">Yellow Fever</option>
              <option value="typhoid">Typhoid</option>
              <option value="hepatitis">Hepatitis A & B</option>
              <option value="meningitis">Meningitis</option>
            </select>
          </div>
          <div className="flex justify-end space-x-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => document.getElementById("book-appointment-modal").close()}
            >
              Cancel
            </Button>
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
              Submit Request
            </Button>
          </div>
        </form>
      </div>
    </dialog>

    {/* Modal for "Schedule Your Vaccination" in Nagpur section */}
    <dialog id="schedule-nagpur-modal" className="modal modal-bottom sm:modal-middle rounded-lg p-0 w-full max-w-md mx-auto">
      <div className="bg-white p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-blue-700 mb-4">Schedule Yellow Fever Vaccination in Nagpur</h3>
        <form className="space-y-4">
          <div>
            <label htmlFor="nagpur-name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <Input id="nagpur-name" type="text" placeholder="Enter your full name" required />
          </div>
          <div>
            <label htmlFor="nagpur-email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <Input id="nagpur-email" type="email" placeholder="Enter your email address" required />
          </div>
          <div>
            <label htmlFor="nagpur-phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <Input id="nagpur-phone" type="tel" placeholder="Enter your phone number" required />
          </div>
          <div>
            <label htmlFor="nagpur-center" className="block text-sm font-medium text-gray-700 mb-1">
              Vaccination Center
            </label>
            <select id="nagpur-center" className="w-full p-2 border border-gray-300 rounded-md" required>
              <option value="hope-hospital">Hope Hospital, Nagpur</option>
              <option value="daga-memorial">Daga Memorial Government Women Hospital, Nagpur</option>
            </select>
          </div>
          <div>
            <label htmlFor="nagpur-date" className="block text-sm font-medium text-gray-700 mb-1">
              Preferred Date
            </label>
            <Input id="nagpur-date" type="date" min={new Date().toISOString().split("T")[0]} required />
          </div>
          <div>
            <label htmlFor="nagpur-time" className="block text-sm font-medium text-gray-700 mb-1">
              Preferred Time
            </label>
            <select id="nag\
