import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CustomLineChart, CustomBarChart } from "@/components/ui/charts";
import { 
  revenueData, 
  denialReasonsData, 
  payerPerformanceData, 
  topServices 
} from "@/lib/mock-data";
import { TrendingUp, TrendingDown, DollarSign, FileText, Clock } from "lucide-react";

export default function Analytics() {
  const [selectedTab, setSelectedTab] = useState("revenue");

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
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="revenue">Revenue Analysis</TabsTrigger>
                <TabsTrigger value="claims">Claims Performance</TabsTrigger>
                <TabsTrigger value="denials">Denial Analysis</TabsTrigger>
                <TabsTrigger value="payers">Payer Performance</TabsTrigger>
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
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
