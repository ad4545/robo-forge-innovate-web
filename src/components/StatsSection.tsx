
import { Progress } from "@/components/ui/progress";

// Custom line chart component using div elements
const LineChart = ({ data, height = 40 }: { data: number[], height?: number }) => {
  const max = Math.max(...data);
  
  return (
    <div className="flex items-end h-[40px] gap-1">
      {data.map((value, index) => (
        <div 
          key={index}
          className="w-1 bg-theme-blue rounded-t"
          style={{ 
            height: `${(value / max) * height}px`,
            opacity: 0.5 + (value / max) * 0.5
          }}
        ></div>
      ))}
    </div>
  );
};

const StatsSection = () => {
  // Sample data for charts
  const productionData = [15, 25, 40, 30, 45, 75, 65, 85, 70, 90, 80];
  const efficiencyData = [70, 65, 80, 75, 90, 85, 95, 90, 98, 92, 99];
  const costData = [65, 60, 55, 70, 50, 45, 30, 35, 25, 20, 15];
  
  return (
    <section id="stats" className="py-20 relative">
      <div className="absolute inset-0 grid-bg opacity-10 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-theme-blue">Performance</span> Metrics
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our robotics systems deliver measurable improvements across key performance indicators,
            helping our clients achieve concrete business outcomes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="stat-card">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-lg font-medium">Production Output</h3>
                <p className="text-3xl font-bold text-theme-blue">+143%</p>
              </div>
              <div className="px-2 py-1 bg-theme-blue/20 rounded text-xs text-theme-blue">
                Year-over-Year
              </div>
            </div>
            
            <LineChart data={productionData} />
          </div>
          
          <div className="stat-card">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-lg font-medium">Operational Efficiency</h3>
                <p className="text-3xl font-bold text-theme-blue">98.7%</p>
              </div>
              <div className="px-2 py-1 bg-theme-blue/20 rounded text-xs text-theme-blue">
                Industry Average: 76%
              </div>
            </div>
            
            <LineChart data={efficiencyData} />
          </div>
          
          <div className="stat-card">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-lg font-medium">Cost Reduction</h3>
                <p className="text-3xl font-bold text-theme-blue">-32%</p>
              </div>
              <div className="px-2 py-1 bg-theme-blue/20 rounded text-xs text-theme-blue">
                Within 12 Months
              </div>
            </div>
            
            <LineChart data={costData} />
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card-gradient rounded-xl p-8">
            <h3 className="text-xl font-bold mb-4">Global Deployment</h3>
            <div className="flex justify-between mb-6">
              <div>
                <p className="text-4xl font-bold text-theme-blue">1,200+</p>
                <p className="text-gray-400">Units Deployed</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-theme-blue">42</p>
                <p className="text-gray-400">Countries</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-theme-blue">350+</p>
                <p className="text-gray-400">Clients</p>
              </div>
            </div>
            
            <div className="h-40 rounded-lg bg-black/50 border border-gray-800/10 flex items-center justify-center">
              {/* World map visualization placeholder */}
              <div className="relative w-full h-full">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-theme-blue rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-theme-blue rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-theme-blue rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-theme-blue rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
              </div>
            </div>
          </div>
          
          <div className="card-gradient rounded-xl p-8">
            <h3 className="text-xl font-bold mb-4">Implementation Success</h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-300">On-time Deployment</span>
                  <span className="text-theme-blue">97%</span>
                </div>
                <Progress value={97} className="h-2 bg-black">
                  <div className="h-full bg-theme-blue rounded-full"></div>
                </Progress>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-300">Within Budget</span>
                  <span className="text-theme-blue">94%</span>
                </div>
                <Progress value={94} className="h-2 bg-black">
                  <div className="h-full bg-theme-blue rounded-full"></div>
                </Progress>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-300">Client Satisfaction</span>
                  <span className="text-theme-blue">99%</span>
                </div>
                <Progress value={99} className="h-2 bg-black">
                  <div className="h-full bg-theme-blue rounded-full"></div>
                </Progress>
              </div>
              
              <div className="pt-2">
                <div className="p-3 rounded bg-theme-blue/10 border border-theme-blue/20">
                  <p className="text-sm text-gray-300">
                    <span className="text-theme-blue font-medium">ROI Achievement:</span> 92% of clients reported 
                    achieving projected ROI within the estimated timeframe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
