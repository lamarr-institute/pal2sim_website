'use client';

import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>('about');

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6 md:px-12 py-8">
        {/* Header */}
        <header className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 md:gap-6 mb-6">
            <img
              src="/pal2sim_logo.svg"
              alt="Pal2Rec Logo"
              className="h-12 md:h-16 w-auto"
            />
            <img
              src="/lamarr_logo.png"
              alt="Lamarr Institute Logo"
              className="h-12 md:h-16 w-auto"
            />
          </div>
          <p className="text-base md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
            Sensor-based activity recognition for load carriers in logistics supply chains using machine learning and artificial intelligence
          </p>
        </header>

        {/* Tab Navigation */}
        <div className="mb-12 flex justify-center px-2">
          <nav className="flex flex-wrap justify-center gap-2 md:gap-3" aria-label="Tabs">
            {[
              { id: 'about', label: 'About Pal2Sim' },
              { id: 'datasets', label: 'Published Datasets & Papers' },
              { id: 'competition', label: '🏆 CPS IoT Competition 26\'' },
              { id: 'contact', label: 'Contact' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={activeTab === tab.id ? { backgroundColor: '#009EE3' } : {}}
                className={`
                  px-3 py-2 md:px-6 md:py-3 rounded-full font-semibold text-xs md:text-sm transition-all duration-200
                  ${activeTab === tab.id
                    ? 'text-white shadow-lg scale-105'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 hover:shadow-md border border-gray-200 dark:border-gray-600'}
                `}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="pb-8">
          {activeTab === 'about' && <AboutTab />}
          {activeTab === 'datasets' && <DatasetsTab />}
          {activeTab === 'competition' && <CompetitionTab />}
          {activeTab === 'contact' && <ContactTab />}
        </div>
      </div>
    </div>
  );
}

// About Tab Component
function AboutTab() {
  return (
    <div className="space-y-16">
      <section>
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
          Project Background
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              There are more than 650 million Euro pallets in circulation in Europe, and around 100 million are produced each year. Despite their industrial significance, data on the location and condition of pallets and the goods they carry is usually only collected sporadically using sensors. Continuously tracking logistical activities such as &apos;Driving&apos;, &apos;Lifting&apos; or &apos;Handling&apos; along their life cycle is hardly possible, even though the technical requirements can already be met by smart load carriers. Due to the lack of analysis regarding the process steps, optimization potential by the gain in transparency remains unexploited.
            </p>
          </div>
          <div>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full rounded-lg"
            >
              <source src="/pal2sim_webm.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-3">
              Example of operative warehouse activities and its prediction by sensors
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
          Approach for Activity Recognition
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
          The Pal2Rec research project conducted a feasibility study which showed that logistical activities can be recognized through the use of sensor technology and AI. The first data sets were recorded under laboratory conditions and published as the Sensor-based Pallet Activity Recognition in Logistics (SPARL) data set. In addition, an initial taxonomy of activities was developed.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
          While Pal2Rec provided a taxonomy and a first dataset to prove feasibility, the subsequent Lamarr Project Pal2Sim addresses the key challenge of model robustness. The high variability of logistical influences — such as vehicle types, loading scenarios, and process flows — result in a need to have a very large and diverse set of training data. To deal with this and the needed effort of collecting the data, Pal2Sim pursues the approach of generating synthetic sensor data using physical simulation.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          The aim is to examine the extent to which this artificially generated data can close the gap in real data sets and thus enable the comprehensive detection of logistics activities. Real data was recorded in an industrial partner&apos;s warehouse and identical process steps were mapped in the simulation. The data sets created expand the series of SPARL data sets. Pal2Sim&apos;s outcomes aim to enable new approaches to data-driven logistics and process optimization in supply chains.
        </p>

        <div className="space-y-6 mt-8">
          <div className="text-center mb-4">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              From Real Data to Synthetic Simulation
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Bridging the gap between real sensor measurements and simulated environments
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
              <div className="relative">
                <img
                  src="/image_reality.png"
                  alt="Real pallet sensor data"
                  className="w-full h-48 object-cover rounded-lg mb-3"
                />
                <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                  Real Data
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                Actual sensor measurements from pallets in logistics environments
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
              <div className="relative">
                <img
                  src="/image_simulation.png"
                  alt="Simulated pallet environment"
                  className="w-full h-48 object-cover rounded-lg mb-3"
                />
                <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  Synthetic Data
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                Computer-generated simulation environments for model training
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
              <div className="relative">
                <img
                  src="/TimeSeries.png"
                  alt="Example of time series and corresponding activity recognition"
                  className="w-full h-48 object-cover rounded-lg mb-3"
                />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                Example of a time series and corresponding activity recognition
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
              <div className="relative">
                <img
                  src="/DSCF1167.JPG"
                  alt="Developed sensor box for data acquisition"
                  className="w-full h-48 object-cover rounded-lg mb-3"
                />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                Developed sensor box for data acquisition
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
          Our developed Sensorbox
        </h2>
      </section>
    </div>
  );
}

// Datasets Tab Component
function DatasetsTab() {
  return (
    <div className="space-y-16">
      <section>
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
          Published Datasets
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
          All SPARL datasets include Video data, annotated sensor data, and the used classifiers. For follow-up work, please refer to the specified DOI and paper.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="text-left p-4 font-semibold text-gray-900 dark:text-white border-b-2 border-gray-300 dark:border-gray-600">
                  Name
                </th>
                <th className="text-left p-4 font-semibold text-gray-900 dark:text-white border-b-2 border-gray-300 dark:border-gray-600">
                  Link
                </th>
                <th className="text-left p-4 font-semibold text-gray-900 dark:text-white border-b-2 border-gray-300 dark:border-gray-600">
                  Release Date
                </th>
                <th className="text-left p-4 font-semibold text-gray-900 dark:text-white border-b-2 border-gray-300 dark:border-gray-600">
                  Content
                </th>
                <th className="text-left p-4 font-semibold text-gray-900 dark:text-white border-b-2 border-gray-300 dark:border-gray-600">
                  Examples
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <td className="p-4 font-medium text-gray-900 dark:text-white">SPARL1</td>
                <td className="p-4">
                  <a
                    href="https://zenodo.org/records/11280959"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
                  >
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Zenodo
                  </a>
                </td>
                <td className="p-4 text-gray-700 dark:text-gray-300">May 2024</td>
                <td className="p-4 text-gray-700 dark:text-gray-300 text-sm">
                  The SPARL1 dataset is the smallest dataset specifically developed for the first analysis of the IMU data. The dataset was especially created to compare the influences of different test subjects and sensors and depicts a simple picking process.
                </td>
                <td className="p-4 text-gray-500 dark:text-gray-400 text-sm italic">Coming soon</td>
              </tr>

              <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <td className="p-4 font-medium text-gray-900 dark:text-white">SPARL2</td>
                <td className="p-4">
                  <a
                    href="https://zenodo.org/records/13318882"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
                  >
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Zenodo
                  </a>
                </td>
                <td className="p-4 text-gray-700 dark:text-gray-300">August 2024</td>
                <td className="p-4 text-gray-700 dark:text-gray-300 text-sm">
                  SPARL2 represents the first comprehensive data set and includes three scenarios from logistics with various sub-steps. The scenarios &apos;storage and retrieval in the warehouse&apos;, &apos;picking of various goods&apos;, and the process chain of &apos;goods dispatch&apos; were recorded under reproducible laboratory conditions with various sensors and test subjects.
                </td>
                <td className="p-4 text-gray-500 dark:text-gray-400 text-sm italic">Coming soon</td>
              </tr>

              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <td className="p-4 font-medium text-gray-900 dark:text-white">SPARL3</td>
                <td className="p-4">
                  <span className="inline-flex items-center text-gray-400 dark:text-gray-500 font-medium">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    Coming Soon
                  </span>
                </td>
                <td className="p-4 text-gray-700 dark:text-gray-300">TBA</td>
                <td className="p-4 text-gray-700 dark:text-gray-300 text-sm">
                  SPARL3 is the first dataset to contain both real data and synthetic data. In an industrial warehouse, the regular process of goods receipt, storage, retrieval, load securing, and goods dispatch was accompanied in fast motion and carried out with various test subjects.
                </td>
                <td className="p-4 text-gray-500 dark:text-gray-400 text-sm italic">Coming soon</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
          Published Papers
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="text-left p-4 font-semibold text-gray-900 dark:text-white border-b-2 border-gray-300 dark:border-gray-600">
                  Title
                </th>
                <th className="text-left p-4 font-semibold text-gray-900 dark:text-white border-b-2 border-gray-300 dark:border-gray-600">
                  Link
                </th>
                <th className="text-left p-4 font-semibold text-gray-900 dark:text-white border-b-2 border-gray-300 dark:border-gray-600">
                  Release Date
                </th>
                <th className="text-left p-4 font-semibold text-gray-900 dark:text-white border-b-2 border-gray-300 dark:border-gray-600">
                  Content
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <td className="p-4 font-medium text-gray-900 dark:text-white">
                  Data-driven, sensor-based taxonomy for environmental life cycle assessment of pallets
                </td>
                <td className="p-4">
                  <a
                    href="https://www.researchgate.net/publication/385517860_Data-driven_sensor-based_taxonomy_for_environmental_life_cycle_assessment_of_pallets"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
                  >
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                    ResearchGate
                  </a>
                </td>
                <td className="p-4 text-gray-700 dark:text-gray-300">October 2024</td>
                <td className="p-4 text-gray-700 dark:text-gray-300 text-sm">
                  This contribution is the first to propose a taxonomy for sensor-based activity recognition of pallets. Different types of acceleration sensors are deployed in three logistical scenarios for creating a benchmark dataset. A random forest classifier is deployed for supervised learning. The results demonstrate that automated, sensor-based life cycle assessment based on the proposed taxonomy is feasible.
                </td>
              </tr>

              <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <td className="p-4 font-medium text-gray-900 dark:text-white">
                  Smart Pallets: Towards Event Detection Using IMUs
                </td>
                <td className="p-4">
                  <a
                    href="https://ieeexplore.ieee.org/document/10710674"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
                  >
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                    IEEE Xplore
                  </a>
                </td>
                <td className="p-4 text-gray-700 dark:text-gray-300">September 2024</td>
                <td className="p-4 text-gray-700 dark:text-gray-300 text-sm">
                  This article presents a toolchain for event detection of pallets using IMUs and a novel data set called SPARL. Based on a logistical use case, two sensors are benchmarked in well-defined logistics scenarios. The data set contains the videos of two representative recordings from different perspectives and the raw data of the three used sensors. A random forest time series classification model is deployed for activity recognition.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

// Competition Tab Component
function CompetitionTab() {
  return (
    <div>
      <div className="mb-12">
        <img
          src="/cps_iot_week.png"
          alt="CPS IoT Week 2026"
          className="w-3/4 md:w-1/2 lg:w-1/3 mx-auto rounded-lg"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
        {/* Main Content - Left Side */}
        <div className="lg:col-span-6 space-y-12">
          <section>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Are you working in the field of data science? Are you looking for real-world data to work with? Interested in applicable AI? Then you might be interested in our competition. From January until mid-May 2026, we are hosting a competition as part of the <strong>CPS-IoT Week 2026</strong>.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              The Challenge & Resources Provided
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              The competition is based on the Pal2Sim research project, which investigates how sensor-equipped pallets can improve the monitoring of material flow in warehouses. We developed a custom sensor board that integrates multiple IMU and barometer sensors to record motion data during real warehouse operations.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              By participating in the challenge, you will gain access to annotated datasets generated during our data collection process at a major logistics service provider. These datasets include acitivites such as driving, lowering, lifting a pallet or wrapping. You can view a sample extract of the data <a href="/exampel_data.xlsx" download className="text-blue-600 dark:text-blue-400 hover:underline font-medium">here</a>.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              With these data your task is to develop a classifier that outperforms our baseline deep learning model. The approach you choose is completely up to you.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong>The competition features a total prize pool of €1,000!</strong> The first-place winner will receive €600, second place €300, and third place €100.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Rules & Evaluation
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              The full rulebook can be seen <a href="/rulebook.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">here</a>.
            </p>
          </section>
        </div>

        {/* Sidebar - Right Side */}
        <div className="lg:col-span-4 space-y-8">
          <section>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Schedule & Deadlines
            </h3>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-300 dark:border-gray-600">
                    <th className="text-left py-2 font-semibold text-gray-900 dark:text-white">
                      Event
                    </th>
                    <th className="text-left py-2 font-semibold text-gray-900 dark:text-white">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 dark:text-gray-300">
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-3 pr-4 font-medium">Registration Period</td>
                    <td className="py-3">January 31 – February 28, 2026</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-3 pr-4 font-medium">Data Provision</td>
                    <td className="py-3">March 2, 2026</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-3 pr-4 font-medium">Submission Deadline</td>
                    <td className="py-3">April 30, 2026 (EOD)</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">Presentation & Results</td>
                    <td className="py-3">
                      May 11 – 14, 2026<br />
                      <span className="text-xs">(During CPS-IoT Week)</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Participate Now
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              If you would like to register, simply send us an email to <a href="mailto:marc.julian.brandt@iml.fraunhofer.de" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">marc.julian.brandt@iml.fraunhofer.de</a> with your information.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

// Contact Tab Component
function ContactTab() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
          Contact
        </h2>
      </section>
    </div>
  );
}
