export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Pal2Sim
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Transforming color palettes into realistic simulation environments through advanced computational methods
          </p>
        </header>

        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
                Project Overview
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Pal2Sim is a cutting-edge research project that bridges the gap between color theory and environmental simulation. 
                Our innovative approach analyzes color palettes and automatically generates corresponding 3D simulation environments 
                that maintain the aesthetic and atmospheric qualities of the original palette.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                This research has applications in virtual reality, game development, architectural visualization, 
                and psychological studies on color perception in digital environments.
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
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-8 text-center">
              <div className="text-gray-500 dark:text-gray-400 text-sm mb-2">Project Visualization</div>
              <div className="w-full h-64 bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 rounded-lg mb-4"></div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Example: Color palette transformed into simulation environment
              </p>
            </div>
          </div>
        </section>

        <section id="datasets" className="mb-20">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
              Research Datasets
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-center mb-8">
              Access our comprehensive datasets used in the Pal2Sim research project
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Color Palette Dataset
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  A curated collection of 10,000+ color palettes with metadata including mood, style, and usage context.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Size: 150MB</span>
                  <a 
                    href="#" 
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
                  >
                    Download
                  </a>
                </div>
              </div>
              
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Simulation Environments
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Generated 3D environments corresponding to color palettes, including lighting and material parameters.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Size: 2.3GB</span>
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
              Follow these steps to start using Pal2Sim in your research or projects
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
                Set up your Python environment with required packages for color analysis and 3D rendering.
              </p>
              <code className="bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded text-sm">
                pip install pal2sim
              </code>
            </div>

            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600 dark:text-green-400">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Load Your Palette
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Import your color palette or use one from our curated dataset collection.
              </p>
              <code className="bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded text-sm">
                palette = load_palette()
              </code>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 dark:bg-purple-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Generate Environment
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Transform your palette into a 3D simulation environment with realistic lighting and materials.
              </p>
              <code className="bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded text-sm">
                env = generate_sim(palette)
              </code>
            </div>
          </div>
        </section>

        <footer className="text-center pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-400">
            © 2024 Pal2Sim Research Project. Built for scientific research and educational purposes.
          </p>
        </footer>
      </div>
    </div>
  );
}
