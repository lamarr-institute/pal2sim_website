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
            Sensor-based activity recognition for load carriers in logistics supply chains using machine learning and artificial intelligence
          </p>
        </header>

        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
                Project Overview
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                There are more than 650 million Euro pallets in circulation in Europe, and around 100 million are produced each year. Despite their industrial significance, data on the location and condition of pallets and the goods they carry is usually only collected sporadically using sensors. Continuously tracking logistical activities such as 'Driving', 'Lifting' or 'Handling' along their life cycle is hardly possible, even though the technical requirements can already be met by smart load carriers. Due to the lack of analysis regarding the process steps, optimization potential by the gain in transparency remains unexploited.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                The Pal2Rec research project conducted a feasibility study which showed that logistical activities can be recognized through the use of sensor technology and AI. The first data sets were recorded under laboratory conditions and published as the Sensor-based Pallet Activity Recognition in Logistics (SPARL) data set. In addition, an initial taxonomy of activities was developed.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                While Pal2Rec provided a taxonomy and a first dataset to prove feasibility, the subsequent Lamarr Project Pal2Sim addresses the key challenge of model robustness. The high variability of logistical influences — such as vehicle types, loading scenarios, and process flows — result in a need to have a very large and diverse set of training data. To deal with this and the needed effort of collecting the data, Pal2Sim pursues the approach of generating synthetic sensor data using physical simulation.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                The aim is to examine the extent to which this artificially generated data can close the gap in real data sets and thus enable the comprehensive detection of logistics activities. Real data was recorded in an industrial partner&apos;s warehouse and identical process steps were mapped in the simulation. The data sets created expand the series of SPARL data sets. Pal2Sim&apos;s outcomes aim to enable new approaches to data-driven logistics and process optimization in supply chains.
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

        <section id="challenges" className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
              Research Challenges
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
              Interested in our project? Join the challenge with our dataset!
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Challenge 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-l-4" style={{borderLeftColor: '#009fe3'}}>
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-3" style={{color: '#009fe3'}}>
                  Challenge 1: Can you outperform our classifier?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Currently a random forest has been used so far to classify the data sets. It is expected that better results can be achieved by adjusting the model or, for example, by using deep learning approaches.
                </p>
              </div>
            </div>

            {/* Challenge 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-l-4" style={{borderLeftColor: '#973081'}}>
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-3" style={{color: '#973081'}}>
                  Challenge 2: Can you bridge the Sim2Real gap?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  A comparison of the oscillations of the activity classes of the real and synthetic data in the frequency domain and using various metrics has shown a clear distinction. The objective is to approximate the two data sets.
                </p>
              </div>
            </div>

            {/* Challenge 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-l-4" style={{borderLeftColor: '#e82e82'}}>
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-3" style={{color: '#e82e82'}}>
                  Challenge 3: Can you develop an automatic annotation tool with computer vision?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Even though synthetic data may bring a major simplification in the future, real data is still important as ground truth. A computer vision annotation tool is an enabler for using real data as training data more quickly.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="datasets" className="mb-20">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
              Research Datasets
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-center mb-12">
              All SPARL datasets include Video data, annotated sensor data, and the used classifiers. For follow-up work, please refer to the specified DOI and paper.
            </p>
            
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* SPARL1 Dataset */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col h-full">
                  <div className="text-center mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      SPARL1 Dataset
                    </h3>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-sm flex-grow">
                    The SPARL1 dataset is the smallest dataset specifically developed for the first analysis of the IMU data. The dataset was especially created to compare the influences of different test subjects and sensors and depicts a simple picking process.
                  </p>
                  
                  <div className="text-center mt-auto">
                    <a 
                      href="https://zenodo.org/records/11280959" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg w-full justify-center"
                    >
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      Download on Zenodo
                    </a>
                  </div>
                </div>

                {/* SPARL2 Dataset */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col h-full">
                  <div className="text-center mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      SPARL2 Dataset
                    </h3>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-sm flex-grow">
                    SPARL2 represents the first comprehensive data set and includes three scenarios from logistics with various sub-steps. The scenarios 'storage and retrieval in the warehouse', 'picking of various goods', and the process chain of 'goods dispatch' were recorded under reproducible laboratory conditions with various sensors and test subjects.
                  </p>
                  
                  <div className="text-center mt-auto">
                    <a 
                      href="https://zenodo.org/records/13318882" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg w-full justify-center"
                    >
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      Download on Zenodo
                    </a>
                  </div>
                </div>

                {/* SPARL3 Dataset */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col h-full">
                  <div className="text-center mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      SPARL3 Dataset
                    </h3>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-sm flex-grow">
                    SPARL3 is the first dataset to contain both real data and synthetic data. In an industrial warehouse, the regular process of goods receipt, storage, retrieval, load securing, and goods dispatch was accompanied in fast motion and carried out with various test subjects.
                  </p>
                  
                  <div className="text-center mt-auto">
                    <div className="inline-flex items-center bg-gray-400 text-white px-6 py-3 rounded-lg font-medium shadow-md cursor-not-allowed w-full justify-center">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      Coming Soon
                    </div>
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
                Coming soon
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
