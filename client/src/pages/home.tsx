import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Play, Calendar, DollarSign, FileText, TrendingUp, Clock } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative gradient-professional text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-purple-900/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <div className="mb-6">
              <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">
                🚀 Trusted by 500+ Healthcare Providers
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Next-Gen AI-Powered
              <br />
              <span className="text-gradient">
                Revenue Cycle Management
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Building the most intelligent, transparent, and efficient RCM platform for India & US healthcare providers. 
              <strong className="text-white">No money left on the table.</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button className="bg-white text-blue-900 hover:bg-gray-100 px-10 py-4 text-lg font-semibold professional-shadow-lg">
                <Play className="mr-3 h-5 w-5" />
                Watch Live Demo
              </Button>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-10 py-4 text-lg font-semibold">
                <Calendar className="mr-3 h-5 w-5" />
                Schedule Consultation
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white/80">
              <div>
                <div className="text-3xl font-bold text-white mb-1">98%</div>
                <div className="text-sm">First Pass Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">$2.8M+</div>
                <div className="text-sm">Revenue Processed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">60%</div>
                <div className="text-sm">Denial Reduction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">24/7</div>
                <div className="text-sm">AI Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">First Pass Claim Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">60%</div>
              <div className="text-gray-600">Denial Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
              <div className="text-gray-600">Collection Efficiency</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">80%</div>
              <div className="text-gray-600">Task Automation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Comprehensive RCM Dashboard</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Monitor your entire revenue cycle from a single, intelligent dashboard powered by AI insights
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
            <div className="bg-blue-900 text-white p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold">RCM Overview Dashboard</h3>
                  <p className="text-blue-200">Real-time revenue cycle monitoring</p>
                </div>
                <div className="flex items-center space-x-4">
                  <select className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                    <option>Last 30 Days</option>
                    <option>Last 90 Days</option>
                    <option>Last Year</option>
                  </select>
                  <Button className="bg-green-600 hover:bg-green-700">
                    Export
                  </Button>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-blue-100 text-sm">Total Revenue</p>
                        <p className="text-2xl font-bold">$2,847,392</p>
                        <p className="text-blue-200 text-sm">+12.5% vs last month</p>
                      </div>
                      <DollarSign className="h-8 w-8 text-blue-200" />
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-green-100 text-sm">Claims Processed</p>
                        <p className="text-2xl font-bold">15,847</p>
                        <p className="text-green-200 text-sm">+8.2% vs last month</p>
                      </div>
                      <FileText className="h-8 w-8 text-green-200" />
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-orange-100 text-sm">Denial Rate</p>
                        <p className="text-2xl font-bold">2.3%</p>
                        <p className="text-orange-200 text-sm">-45% vs last month</p>
                      </div>
                      <TrendingUp className="h-8 w-8 text-orange-200" />
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-purple-100 text-sm">Avg Collection Time</p>
                        <p className="text-2xl font-bold">18.5 days</p>
                        <p className="text-purple-200 text-sm">-22% vs last month</p>
                      </div>
                      <Clock className="h-8 w-8 text-purple-200" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center">
                <Link href="/dashboard">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                    View Full Dashboard
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Revenue Cycle?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join leading healthcare providers who trust StellarOne for their revenue cycle management
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Demo
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
