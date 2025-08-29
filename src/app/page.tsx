export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <div className="flex items-center justify-center gap-6 mb-6">
            <img 
              src="./pal2sim_logo.svg" 
              alt="Pal2Rec Logo" 
              className="h-16 w-auto"
            />
            <img 
              src="./lamarr_logo.png" 
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
                      src="./image_reality.png" 
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
                      src="./image_simulation.png" 
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
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Sensor Activity Dataset
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Acceleration sensor data from pallets across three logistical scenarios including Driving, Lifting, and Standing activities.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Size: 250MB</span>
                  <a 
                    href="https://zenodo.org/records/11280959" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
                  >
                    Download
                  </a>
                </div>
              </div>
              
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Taxonomy & Models
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Complete taxonomy for pallet activity recognition and trained Random Forest classifier models with performance metrics.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Size: 45MB</span>
                  <a 
                    href="#" 
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="getting-started" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
              Getting Started
            </h2>
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Follow these steps to start using Pal2Rec for sensor-based pallet activity recognition
            </p>
          </div>

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
