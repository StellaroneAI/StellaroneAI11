import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CustomLineChart, CustomPieChart } from "@/components/ui/charts";
import { revenueData, claimStatusData, recentActivity } from "@/lib/mock-data";
import { DollarSign, FileText, TrendingUp, Clock, Download, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import AiChat from "@/components/ai/ai-chat";
import AiInsights from "@/components/ai/ai-insights";

export default function Dashboard() {
  const [timePeriod, setTimePeriod] = useState("30");
  
  // Fetch real data from APIs with time period filter
  const { data: metricsData, isLoading: metricsLoading } = useQuery({
    queryKey: ["/api/metrics", timePeriod],
    queryFn: async () => {
      const res = await fetch(`/api/metrics?period=${timePeriod}`, { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch metrics");
      return res.json();
    },
  });

  const { data: claimsData, isLoading: claimsLoading } = useQuery({
    queryKey: ["/api/claims"],
    queryFn: async () => {
      const res = await fetch("/api/claims", { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch claims");
      return res.json();
    },
  });

  const { data: patientsData, isLoading: patientsLoading } = useQuery({
    queryKey: ["/api/patients"],
    queryFn: async () => {
      const res = await fetch("/api/patients", { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch patients");
      return res.json();
    },
  });

  const isLoading = metricsLoading || claimsLoading || patientsLoading;
  
  // Dynamic KPI data based on selected time period
  const getKPIData = () => {
    const baseRevenue = timePeriod === "30" ? 2847392 : timePeriod === "90" ? 8456782 : 28745632;
    const baseClaims = timePeriod === "30" ? 15847 : timePeriod === "90" ? 47234 : 186943;
    const denialRate = timePeriod === "30" ? 2.3 : timePeriod === "90" ? 2.1 : 1.8;
    const collectionDays = timePeriod === "30" ? 18.5 : timePeriod === "90" ? 19.2 : 20.1;
    
    return [
      {
        title: "Total Revenue",
        value: `$${baseRevenue.toLocaleString()}`,
        change: "+12.5%",
        icon: DollarSign,
        color: "from-blue-500 to-blue-600",
      },
      {
        title: "Claims Processed",
        value: baseClaims.toLocaleString(),
        change: "+8.2%",
        icon: FileText,
        color: "from-green-500 to-green-600",
      },
      {
        title: "Denial Rate",
        value: `${denialRate}%`,
        change: "-45%",
        icon: TrendingUp,
        color: "from-orange-500 to-orange-600",
      },
      {
        title: "Avg Collection Time",
        value: `${collectionDays} days`,
        change: "-22%",
        icon: Clock,
        color: "from-purple-500 to-purple-600",
      },
    ];
  };

  const kpiData = getKPIData();

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

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <Loader2 className="h-6 w-6 animate-spin text-blue-600" />
          <span className="text-lg text-gray-600">Loading dashboard data...</span>
        </div>
      </div>
    );
  }

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
              <select 
                value={timePeriod}
                onChange={(e) => setTimePeriod(e.target.value)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                <option value="30">Last 30 Days</option>
                <option value="90">Last 90 Days</option>
                <option value="365">Last Year</option>
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
