import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, TrendingUp, AlertTriangle, CheckCircle, Lightbulb } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";

interface RevenueInsights {
  summary: string;
  trends: string[];
  recommendations: string[];
  forecast: string;
}

export default function AiInsights() {
  const [insights, setInsights] = useState<RevenueInsights | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const generateInsights = async () => {
    setIsLoading(true);
    try {
      // Sample metrics data for AI analysis
      const sampleMetrics = [
        { month: "Jan", revenue: 720000, claimsProcessed: 1200, denialRate: 3.75 },
        { month: "Feb", revenue: 760000, claimsProcessed: 1300, denialRate: 2.92 },
        { month: "Mar", revenue: 800000, claimsProcessed: 1400, denialRate: 3.00 },
        { month: "Apr", revenue: 825000, claimsProcessed: 1450, denialRate: 2.41 },
        { month: "May", revenue: 870000, claimsProcessed: 1500, denialRate: 2.13 },
        { month: "Jun", revenue: 892000, claimsProcessed: 1550, denialRate: 1.81 }
      ];

      const response = await fetch('/api/ai/revenue-insights', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ metrics: sampleMetrics })
      });
      
      const data = await response.json();
      setInsights(data);
    } catch (error) {
      console.error('Failed to generate insights:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader className="bg-gradient-to-r from-purple-900 to-blue-900 text-white">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5" />
            AI Revenue Insights
            <Badge variant="secondary" className="bg-white/20 text-white">
              AI-Powered
            </Badge>
          </CardTitle>
          <Button 
            onClick={generateInsights}
            disabled={isLoading}
            variant="secondary"
            className="bg-white/20 hover:bg-white/30 text-white border-white/30"
          >
            {isLoading ? 'Analyzing...' : 'Generate Insights'}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        {!insights && !isLoading && (
          <div className="text-center py-8">
            <Brain className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 mb-4">
              Generate AI-powered insights from your revenue cycle data
            </p>
            <Button onClick={generateInsights} className="bg-purple-600 hover:bg-purple-700">
              Analyze Revenue Data
            </Button>
          </div>
        )}

        {isLoading && (
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
            <p className="ml-4 text-gray-600">AI is analyzing your revenue data...</p>
          </div>
        )}

        {insights && (
          <div className="space-y-6">
            {/* Summary */}
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Executive Summary
              </h3>
              <p className="text-blue-800">{insights.summary}</p>
            </div>

            {/* Key Trends */}
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Key Trends Identified
              </h3>
              <ul className="space-y-2">
                {insights.trends.map((trend, index) => (
                  <li key={index} className="flex items-start gap-2 text-green-800">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    {trend}
                  </li>
                ))}
              </ul>
            </div>

            {/* Recommendations */}
            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
              <h3 className="font-semibold text-orange-900 mb-3 flex items-center gap-2">
                <Lightbulb className="h-4 w-4" />
                AI Recommendations
              </h3>
              <ul className="space-y-2">
                {insights.recommendations.map((recommendation, index) => (
                  <li key={index} className="flex items-start gap-2 text-orange-800">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                    {recommendation}
                  </li>
                ))}
              </ul>
            </div>

            {/* Forecast */}
            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
              <h3 className="font-semibold text-purple-900 mb-2 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4" />
                Revenue Forecast
              </h3>
              <p className="text-purple-800">{insights.forecast}</p>
            </div>

            {/* Action Items */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <Button 
                onClick={generateInsights}
                className="mr-3 bg-purple-600 hover:bg-purple-700"
              >
                Refresh Analysis
              </Button>
              <Button variant="outline">
                Export Insights
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}