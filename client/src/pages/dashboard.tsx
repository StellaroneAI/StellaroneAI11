import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CustomLineChart, CustomPieChart } from "@/components/ui/charts";
import { revenueData, claimStatusData, recentActivity } from "@/lib/mock-data";
import { DollarSign, FileText, TrendingUp, Clock, Download } from "lucide-react";
import AiChat from "@/components/ai/ai-chat";
import AiInsights from "@/components/ai/ai-insights";

export default function Dashboard() {
  const kpiData = [
    {
      title: "Total Revenue",
      value: "$2,847,392",
      change: "+12.5%",
      icon: DollarSign,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Claims Processed",
      value: "15,847",
      change: "+8.2%",
      icon: FileText,
      color: "from-green-500 to-green-600",
    },
    {
      title: "Denial Rate",
      value: "2.3%",
      change: "-45%",
      icon: TrendingUp,
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "Avg Collection Time",
      value: "18.5 days",
      change: "-22%",
      icon: Clock,
      color: "from-purple-500 to-purple-600",
    },
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <div className="w-2 h-2 bg-green-500 rounded-full"></div>;
      case 'warning':
        return <div className="w-2 h-2 bg-orange-500 rounded-full"></div>;
      case 'info':
        return <div className="w-2 h-2 bg-blue-500 rounded-full"></div>;
      default:
        return <div className="w-2 h-2 bg-gray-500 rounded-full"></div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">RCM Overview Dashboard</h1>
              <p className="text-blue-200 mt-2">Real-time revenue cycle monitoring</p>
            </div>
            <div className="flex items-center space-x-4">
              <select className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                <option>Last 30 Days</option>
                <option>Last 90 Days</option>
                <option>Last Year</option>
              </select>
              <Button className="bg-green-600 hover:bg-green-700">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpiData.map((kpi, index) => (
            <Card key={index} className={`bg-gradient-to-r ${kpi.color} text-white`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-90">{kpi.title}</p>
                    <p className="text-2xl font-bold">{kpi.value}</p>
                    <p className="text-sm opacity-75">{kpi.change} vs last month</p>
                  </div>
                  <kpi.icon className="h-8 w-8 opacity-75" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-blue-900">Revenue Trend</CardTitle>
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
              <CardTitle className="text-blue-900">Claim Status Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <CustomPieChart
                data={claimStatusData}
                colors={['#00A86B', '#FF6B35', '#E74C3C', '#0066CC']}
                height={300}
              />
            </CardContent>
          </Card>
        </div>

        {/* AI-Powered Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <AiChat />
          <Card>
            <CardHeader>
              <CardTitle className="text-blue-900">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      {getActivityIcon(activity.type)}
                      <div>
                        <p className="font-medium">{activity.message}</p>
                        <p className="text-sm text-gray-500">{activity.details}</p>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">{activity.timestamp}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* AI Insights */}
        <AiInsights />
      </div>
    </div>
  );
}
