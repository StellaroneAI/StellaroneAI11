import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CustomLineChart, CustomBarChart } from "@/components/ui/charts";
import { useQuery } from "@tanstack/react-query";
import { 
  revenueData, 
  denialReasonsData, 
  payerPerformanceData, 
  topServices 
} from "@/lib/mock-data";
import { TrendingUp, TrendingDown, DollarSign, FileText, Clock, Bot, Brain, Zap, BarChart3, Loader2 } from "lucide-react";

export default function Analytics() {
  const [selectedTab, setSelectedTab] = useState("revenue");
  
  // Fetch analytics data from API
  const { data: analyticsData, isLoading } = useQuery({
    queryKey: ["/api/analytics", selectedTab],
    queryFn: async () => {
      const res = await fetch(`/api/analytics?tab=${selectedTab}`, { 
        credentials: "include" 
      });
      if (!res.ok) {
        // Fallback to mock data if API fails
        return {
          revenue: revenueData,
          denials: denialReasonsData,
          payers: payerPerformanceData,
          services: topServices
        };
      }
      return res.json();
    },
  });

  const analyticsKPIs = [
    {
      title: "Monthly Revenue",
      value: "$892,456",
      change: "+15.8%",
      icon: DollarSign,
      color: "from-blue-500 to-blue-600",
      trend: "up",
    },
    {
      title: "Clean Claim Rate",
      value: "97.8%",
      change: "+3.2%",
      icon: FileText,
      color: "from-green-500 to-green-600",
      trend: "up",
    },
    {
      title: "Days in AR",
      value: "22.4",
      change: "-18.3%",
      icon: Clock,
      color: "from-orange-500 to-orange-600",
      trend: "down",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Advanced Analytics & Reporting</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive insights into your revenue cycle performance with actionable intelligence
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="mb-8">
          <CardHeader className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
            <CardTitle className="text-2xl">Revenue Cycle Analytics Center</CardTitle>
            <p className="text-blue-100">Real-time insights powered by Stellar.AI</p>
          </CardHeader>
          <CardContent className="p-8">
            {/* Performance Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {analyticsKPIs.map((kpi, index) => (
                <Card key={index} className={`bg-gradient-to-br ${kpi.color} text-white`}>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-2">{kpi.title}</h4>
                    <p className="text-3xl font-bold mb-2">{kpi.value}</p>
                    <div className="flex items-center text-sm opacity-90">
                      {kpi.trend === "up" ? (
                        <TrendingUp className="mr-2 h-4 w-4" />
                      ) : (
                        <TrendingDown className="mr-2 h-4 w-4" />
                      )}
                      <span>{kpi.change} from last month</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Detailed Analytics Tabs */}
            <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="revenue">Revenue Analysis</TabsTrigger>
                <TabsTrigger value="claims">Claims Performance</TabsTrigger>
                <TabsTrigger value="denials">Denial Analysis</TabsTrigger>
                <TabsTrigger value="payers">Payer Performance</TabsTrigger>
                <TabsTrigger value="ai-insights">AI Insights</TabsTrigger>
              </TabsList>

              <TabsContent value="revenue" className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-blue-900">Revenue Trend (Last 6 Months)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CustomLineChart
                        data={revenueData}
                        xKey="name"
                        yKey="revenue"
                        color="#0066CC"
                        height={300}
                      />
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-blue-900">Top Performing Services</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {topServices.map((service, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <span className="font-medium">{service.name}</span>
                            <span className="text-green-600 font-bold">
                              ${service.revenue.toLocaleString()}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="claims" className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-blue-900">Claims Processing Timeline</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <span>Submitted</span>
                          <span className="text-blue-600 font-bold">1,247 claims</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <span>In Process</span>
                          <span className="text-orange-600 font-bold">342 claims</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <span>Paid</span>
                          <span className="text-green-600 font-bold">1,198 claims</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-blue-900">Claims Volume Trend</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CustomBarChart
                        data={revenueData}
                        xKey="name"
                        yKey="claims"
                        color="#00A86B"
                        height={300}
                      />
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="denials" className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-blue-900">Top Denial Reasons</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {denialReasonsData.map((reason, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <span>{reason.name}</span>
                            <span className="text-red-600 font-bold">{reason.value}%</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-blue-900">Denial Trend Analysis</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CustomLineChart
                        data={revenueData}
                        xKey="name"
                        yKey="denials"
                        color="#E74C3C"
                        height={300}
                      />
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="payers" className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-blue-900">Payer Performance</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {payerPerformanceData.map((payer, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <span>{payer.name}</span>
                            <span className="text-green-600 font-bold">{payer.performance}%</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-blue-900">Average Payment Time</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CustomBarChart
                        data={payerPerformanceData}
                        xKey="name"
                        yKey="paymentTime"
                        color="#FF6B35"
                        height={300}
                      />
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="ai-insights" className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200">
                    <CardHeader>
                      <CardTitle className="flex items-center text-purple-900">
                        <Brain className="mr-2 h-5 w-5" />
                        AI Revenue Predictions
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="bg-white p-4 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium">Next Month Forecast</span>
                            <span className="text-green-600 font-bold">$965,000</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-green-600 h-2 rounded-full" style={{ width: "82%" }}></div>
                          </div>
                          <p className="text-xs text-gray-600 mt-1">82% confidence based on historical patterns</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium">Q4 Revenue Target</span>
                            <span className="text-blue-600 font-bold">$2.8M</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: "76%" }}></div>
                          </div>
                          <p className="text-xs text-gray-600 mt-1">On track to exceed target by 12%</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-orange-200">
                    <CardHeader>
                      <CardTitle className="flex items-center text-orange-900">
                        <Zap className="mr-2 h-5 w-5" />
                        Smart Recommendations
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="bg-white p-3 rounded-lg border-l-4 border-blue-500">
                          <p className="text-sm font-medium text-blue-900">Focus on Blue Cross Blue Shield</p>
                          <p className="text-xs text-gray-600">17% faster payment processing detected</p>
                        </div>
                        <div className="bg-white p-3 rounded-lg border-l-4 border-green-500">
                          <p className="text-sm font-medium text-green-900">Optimize CPT 99213 Claims</p>
                          <p className="text-xs text-gray-600">98.5% approval rate opportunity identified</p>
                        </div>
                        <div className="bg-white p-3 rounded-lg border-l-4 border-purple-500">
                          <p className="text-sm font-medium text-purple-900">Automate Prior Auth Process</p>
                          <p className="text-xs text-gray-600">Could reduce processing time by 3.2 days</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-blue-900">
                        <BarChart3 className="mr-2 h-5 w-5" />
                        AI Accuracy Metrics
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Claim Validation</span>
                          <span className="font-bold text-green-600">99.2%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Denial Prediction</span>
                          <span className="font-bold text-blue-600">96.8%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Revenue Forecasting</span>
                          <span className="font-bold text-purple-600">94.5%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Pattern Recognition</span>
                          <span className="font-bold text-orange-600">97.1%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-green-900">
                        <TrendingUp className="mr-2 h-5 w-5" />
                        Performance Improvements
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm">Processing Speed</span>
                            <span className="text-green-600 font-bold">+340%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-green-600 h-2 rounded-full" style={{ width: "85%" }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm">Error Reduction</span>
                            <span className="text-blue-600 font-bold">-89%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: "89%" }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm">Cost Savings</span>
                            <span className="text-purple-600 font-bold">$2.3M</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-purple-600 h-2 rounded-full" style={{ width: "92%" }}></div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
                    <CardHeader>
                      <CardTitle className="flex items-center text-blue-900">
                        <Bot className="mr-2 h-5 w-5" />
                        AI Assistant Usage
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600 mb-1">1,247</div>
                          <div className="text-sm text-gray-600">Queries This Month</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600 mb-1">98.3%</div>
                          <div className="text-sm text-gray-600">User Satisfaction</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-600 mb-1">4.7s</div>
                          <div className="text-sm text-gray-600">Avg Response Time</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
