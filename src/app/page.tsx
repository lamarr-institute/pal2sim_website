export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <div className="flex items-center justify-center gap-6 mb-6">
            <img 
              src="/pal2sim_website/pal2sim_logo.svg" 
              alt="Pal2Rec Logo" 
              className="h-16 w-auto"
            />
            <img 
              src="/pal2sim_website/lamarr_logo.png" 
              alt="Lamarr Institute Logo" 
              className="h-16 w-auto"
            />
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Sensor-based activity recognition for pallets in international supply chains using advanced machine learning techniques
          </p>
        </header>

        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
                Project Overview
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Pal2Rec is a pioneering research project focused on sensor-based activity recognition for pallets in international supply chains. 
                Pallets are one of the most important load carriers globally, yet continuously tracking activities such as Driving, Lifting, 
                or Standing along their life cycle has been nearly impossible until now.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                This project proposes the first taxonomy for sensor-based activity recognition of pallets, using different types of 
                acceleration sensors deployed in three logistical scenarios to create a comprehensive benchmark dataset. 
                A random forest classifier is employed for supervised learning, demonstrating that automated, sensor-based life cycle assessment is feasible.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                The Lamarr project Pal2Sim builds directly on Pal2Rec&apos;s findings. While Pal2Rec proved that logistics activities can be reliably 
                detected using sensor data, the high variability of logistical influences—such as vehicle types, loading scenarios, 
                and process flows—poses significant challenges for creating robust models.
              </p>
              <div className="flex gap-4">
                <a 
                  href="#datasets" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  View Datasets
                </a>
                <a 
                  href="#getting-started" 
                  className="border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Getting Started
                </a>
              </div>
            </div>
            <div className="space-y-6">
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
                      src="/pal2sim_website/image_reality.png" 
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
                      src="/pal2sim_website/image_simulation.png" 
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
            </div>
          </div>
        </section>

        <section id="datasets" className="mb-20">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
              Research Datasets
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-center mb-8">
              Access our comprehensive benchmark datasets used in the Pal2Rec research project
            </p>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                <div className="text-center mb-6">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    SPARL Dataset
                  </h3>
                  <p className="text-lg text-green-600 dark:text-green-400 font-medium">
                    Sensor-based Pallet Activity Recognition in Logistics
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      SPARL is a freely accessible data set for sensor-based activity recognition of pallets in logistics. 
                      The data set consists of <strong>16 recordings</strong> using three different sensors simultaneously:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-1">
                      <li>MBIENTLAB MetaMotionS</li>
                      <li>MSR Electronics MSR 145</li>
                      <li>Kistler KiDaQ Module 5512A</li>
                    </ul>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      The recordings include camera footage with frame-by-frame annotations, captured at different execution speeds 
                      to represent various logistics scenarios.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                      Dataset Size: 250MB
                    </div>
                    <a 
                      href="https://zenodo.org/records/11280959" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors shadow-lg hover:shadow-xl"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      Download on Zenodo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="newsletter" className="mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-700 rounded-xl p-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-full mb-4">
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Stay Updated
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                  Get notified when new datasets are released or when updates to the SPARL dataset become available.
                </p>
                <a 
                  href="https://forms.office.com/e/wWwcRApDz3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5M10 7H5l5-5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Subscribe to Updates
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="getting-started" className="mb-20">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
              Getting Started
            </h2>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-8 max-w-2xl mx-auto">
              <p className="text-lg text-yellow-800 dark:text-yellow-200 font-medium">
                📋 To be done
              </p>
              <p className="text-yellow-700 dark:text-yellow-300 mt-2">
                We are currently working on detailed implementation guides and tutorials for using the SPARL dataset.
              </p>
            </div>
          </div>
          
          {/* 
          TODO: Add getting started guide
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Install Dependencies
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Set up your Python environment with required packages for sensor data analysis and machine learning.
              </p>
              <code className="bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded text-sm">
                pip install pal2rec
              </code>
            </div>

            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600 dark:text-green-400">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Load Sensor Data
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Import acceleration sensor data from pallets or use our benchmark dataset for training.
              </p>
              <code className="bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded text-sm">
                data = load_sensor_data()
              </code>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 dark:bg-purple-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Classify Activities
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Use our Random Forest classifier to recognize pallet activities like Driving, Lifting, or Standing.
              </p>
              <code className="bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded text-sm">
                activity = classify_activity(data)
              </code>
            </div>
          </div>
          */}
        </section>

        <footer className="text-center pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-400">
            © 2024 Pal2Rec Research Project. Built for scientific research and educational purposes.
          </p>
        </footer>
      </div>
    </div>
  );
}
