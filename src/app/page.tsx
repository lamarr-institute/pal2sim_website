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
    </div>
  );
}

// Datasets Tab Component
function DatasetsTab() {
  const datasets = [
    {
      name: "SPARL1",
      link: "https://zenodo.org/records/11280959",
      linkText: "Zenodo",
      date: "May 2024",
      content: "The SPARL1 dataset is the smallest dataset specifically developed for the first analysis of the IMU data. The dataset was especially created to compare the influences of different test subjects and sensors and depicts a simple picking process.",
      examples: "Coming soon",
      available: true
    },
    {
      name: "SPARL2",
      link: "https://zenodo.org/records/13318882",
      linkText: "Zenodo",
      date: "August 2024",
      content: "SPARL2 represents the first comprehensive data set and includes three scenarios from logistics with various sub-steps. The scenarios 'storage and retrieval in the warehouse', 'picking of various goods', and the process chain of 'goods dispatch' were recorded under reproducible laboratory conditions with various sensors and test subjects.",
      examples: "Coming soon",
      available: true
    },
    {
      name: "SPARL3",
      link: null,
      linkText: "Coming Soon",
      date: "TBA",
      content: "SPARL3 is the first dataset to contain both real data and synthetic data. In an industrial warehouse, the regular process of goods receipt, storage, retrieval, load securing, and goods dispatch was accompanied in fast motion and carried out with various test subjects.",
      examples: "Coming soon",
      available: false
    }
  ];

  const papers = [
    {
      title: "Data-driven, sensor-based taxonomy for environmental life cycle assessment of pallets",
      link: "https://www.researchgate.net/publication/385517860_Data-driven_sensor-based_taxonomy_for_environmental_life_cycle_assessment_of_pallets",
      linkText: "ResearchGate",
      date: "October 2024",
      content: "This contribution is the first to propose a taxonomy for sensor-based activity recognition of pallets. Different types of acceleration sensors are deployed in three logistical scenarios for creating a benchmark dataset. A random forest classifier is deployed for supervised learning. The results demonstrate that automated, sensor-based life cycle assessment based on the proposed taxonomy is feasible."
    },
    {
      title: "Smart Pallets: Towards Event Detection Using IMUs",
      link: "https://ieeexplore.ieee.org/document/10710674",
      linkText: "IEEE Xplore",
      date: "September 2024",
      content: "This article presents a toolchain for event detection of pallets using IMUs and a novel data set called SPARL. Based on a logistical use case, two sensors are benchmarked in well-defined logistics scenarios. The data set contains the videos of two representative recordings from different perspectives and the raw data of the three used sensors. A random forest time series classification model is deployed for activity recognition."
    }
  ];

  return (
    <div className="space-y-16">
      <section>
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
          Published Datasets
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
          All SPARL datasets include Video data, annotated sensor data, and the used classifiers. For follow-up work, please refer to the specified DOI and paper.
        </p>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
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
              {datasets.map((dataset, index) => (
                <tr key={dataset.name} className={`${index < datasets.length - 1 ? 'border-b border-gray-200 dark:border-gray-700' : ''} hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors`}>
                  <td className="p-4 font-medium text-gray-900 dark:text-white">{dataset.name}</td>
                  <td className="p-4">
                    {dataset.available ? (
                      <a
                        href={dataset.link || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
                      >
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        {dataset.linkText}
                      </a>
                    ) : (
                      <span className="inline-flex items-center text-gray-400 dark:text-gray-500 font-medium">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        {dataset.linkText}
                      </span>
                    )}
                  </td>
                  <td className="p-4 text-gray-700 dark:text-gray-300">{dataset.date}</td>
                  <td className="p-4 text-gray-700 dark:text-gray-300 text-sm">{dataset.content}</td>
                  <td className="p-4 text-gray-500 dark:text-gray-400 text-sm italic">{dataset.examples}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {datasets.map((dataset) => (
            <div key={dataset.name} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 border border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{dataset.name}</h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">{dataset.date}</span>
              </div>

              <p className="text-gray-700 dark:text-gray-300 text-sm mb-3 leading-relaxed">
                {dataset.content}
              </p>

              <div className="flex flex-col gap-2 text-sm">
                <div className="flex items-center">
                  <span className="font-semibold text-gray-900 dark:text-white mr-2">Link:</span>
                  {dataset.available ? (
                    <a
                      href={dataset.link || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                    >
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      {dataset.linkText}
                    </a>
                  ) : (
                    <span className="inline-flex items-center text-gray-400 dark:text-gray-500">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      {dataset.linkText}
                    </span>
                  )}
                </div>
                <div className="flex items-center">
                  <span className="font-semibold text-gray-900 dark:text-white mr-2">Examples:</span>
                  <span className="text-gray-500 dark:text-gray-400 italic">{dataset.examples}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
          Published Papers
        </h2>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
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
              {papers.map((paper, index) => (
                <tr key={paper.title} className={`${index < papers.length - 1 ? 'border-b border-gray-200 dark:border-gray-700' : ''} hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors`}>
                  <td className="p-4 font-medium text-gray-900 dark:text-white">
                    {paper.title}
                  </td>
                  <td className="p-4">
                    <a
                      href={paper.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
                    >
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                      </svg>
                      {paper.linkText}
                    </a>
                  </td>
                  <td className="p-4 text-gray-700 dark:text-gray-300">{paper.date}</td>
                  <td className="p-4 text-gray-700 dark:text-gray-300 text-sm">
                    {paper.content}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {papers.map((paper) => (
            <div key={paper.title} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{paper.title}</h3>

              <div className="flex items-center gap-2 mb-3 text-sm">
                <span className="text-gray-500 dark:text-gray-400">{paper.date}</span>
                <span className="text-gray-400">•</span>
                <a
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                >
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                  {paper.linkText}
                </a>
              </div>

              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                {paper.content}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// Competition Tab Component
function CompetitionTab() {
  return (
    <div className="space-y-12">
      {/* Header Image */}
      <div className="text-center">
        <img
          src="/cps_iot_week.png"
          alt="CPS IoT Week 2026"
          className="w-3/4 md:w-1/2 lg:w-1/3 mx-auto rounded-lg"
        />
      </div>

      {/* Introduction */}
      <section>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
          Are you working in the field of data science? Are you looking for real-world data to work with? Interested in applicable AI? Then you might be interested in our competition. From January until mid-May 2026, we are hosting a competition as part of the <strong>CPS-IoT Week 2026</strong>.
        </p>
      </section>

      {/* Main Content Grid - Desktop 2 columns, Mobile stacked */}
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Left Column */}
        <div className="space-y-8">
          {/* Background */}
          <section>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Background
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              The competition is based on the Pal2Sim research project, which investigates how sensor-equipped pallets can improve the monitoring of material flow in warehouses. We developed a custom sensor board that integrates multiple IMU and barometer sensors to record motion data during real warehouse operations. Additional information can be found in the &quot;About&quot; section.
            </p>
            <img
              src="/sensor.jpg"
              alt="Our sensorbox in action, mounted to a pallet"
              className="w-full rounded-lg"
            />
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-3">
              Our sensorbox in action, mounted to a pallet
            </p>
          </section>

          {/* What you work with */}
          <section>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              What you work with
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
              Participants in the challenge will receive access to the following data:
            </p>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2 leading-relaxed">
              <li>Synchronized accelerometer, gyroscope, and barometer signals recorded during real warehouse processes. These processes include, for example, forklift driving, lowering, lifting, or wrapping a pallet.</li>
              <li>Detailed activity annotations based on a defined taxonomy.</li>
              <li>Anonymized video recordings used to create the annotations.</li>
              <li>A &quot;get-started&quot; Python environment with prepared code for data loading and pre-processing, allowing you to focus directly on classification.</li>
              <li>Access to the accompanying SenSys 2026 paper, which describes details of the sensors as well as our single-labeling approach.</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              To give you an idea of how the annotated dataset looks like, you can download an example <a href="/pal2sim_example_data.csv" download className="text-blue-600 dark:text-blue-400 hover:underline font-medium">here</a>.
            </p>
          </section>

          {/* How the competition will run */}
          <section>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              How the competition will run
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              The challenge runs for two months (see timetable) and offers sufficient time for data analysis, model development, and fine-tuning. After registering, you will receive all mentioned materials and additional guidance on March 2.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              You will work within the provided Python environment and develop your model there. The organizers will be available throughout the entire period to support you. Answers to questions will be shared with all participants whenever they are relevant to the competition.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Your results must be submitted in the specified format by the deadline on April 30. During CPS-IoT Week, we will meet to discuss your approaches and lessons learned. The event also serves as a platform for exchange among data science enthusiasts. The final winners of the competition will be announced during this session.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              The full rulebook for the competition can be found <a href="/rulebook.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">here</a>.
            </p>
          </section>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* The Challenge */}
          <section>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              The Challenge
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Your goal is to develop a multi-label supervised learning model that classifies pallet activities more precisely and robustly than our current single-label model.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Any methodological approach is allowed—classical machine learning, deep learning, or hybrid solutions—as long as the provided training data serves as the basis for model development. In addition, we provide the code you need to evaluate your solution.
            </p>
          </section>

          {/* Timetable */}
          <section>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Timetable
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
                    <td className="py-3 pr-4 font-medium">Registration Phase</td>
                    <td className="py-3">January 31 – February 28, 2026</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-3 pr-4 font-medium">Data Release</td>
                    <td className="py-3">March 2, 2026</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-3 pr-4 font-medium">Submission Deadline</td>
                    <td className="py-3">April 30, 2026</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">Presentation & Results</td>
                    <td className="py-3">
                      May 11 – 14, 2026<br />
                      <span className="text-xs">(CPS-IoT Week)</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* What's in it for you */}
          <section>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              What&apos;s in it for you
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
              Beyond the joy of research, the opportunity to broaden your network, and the prestige of achieving top results, we are excited to offer a total prize pool of €1,000 for the three highest-ranked participants.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              The prizes are as follows:
            </p>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1 mt-2">
              <li>1st place: €600</li>
              <li>2nd place: €300</li>
              <li>3rd place: €100</li>
            </ul>
          </section>

          {/* Participate Now */}
          <section>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Participate now!
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              You can either register individually or as a team. Simply send us an email at <a href="mailto:pal2sim-competition@iml.fraunhofer.de" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">pal2sim-competition@iml.fraunhofer.de</a> including your name / team name, team size, email address, university/institute/company.
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
