import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AiChat from "@/components/ai/ai-chat";
import AiInsights from "@/components/ai/ai-insights";
import AiPatientCommunication from "@/components/ai/ai-patient-communication";
import { 
  Bot, 
  Brain, 
  FileText, 
  AlertTriangle, 
  TrendingUp, 
  Users,
  MessageSquare,
  Zap,
  Shield,
  CheckCircle
} from "lucide-react";

export default function AiFeatures() {
  const [selectedTab, setSelectedTab] = useState("overview");

  const aiFeatures = [
    {
      icon: <Bot className="h-8 w-8" />,
      title: "Stellar.AI Assistant",
      description: "Conversational AI for real-time RCM support",
      capabilities: [
        "Claim status inquiries",
        "Denial management guidance", 
        "Revenue optimization advice",
        "Compliance information"
      ],
      status: "Active"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI Revenue Insights", 
      description: "Predictive analytics and intelligent forecasting",
      capabilities: [
        "Revenue trend analysis",
        "Performance predictions",
        "Actionable recommendations",
        "Market benchmarking"
      ],
      status: "Active"
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Intelligent Claim Validation",
      description: "AI-powered claim accuracy verification",
      capabilities: [
        "CPT/ICD code validation",
        "Compliance checking",
        "Error detection",
        "Submission optimization"
      ],
      status: "Active"
    },
    {
      icon: <AlertTriangle className="h-8 w-8" />,
      title: "Smart Denial Management",
      description: "Automated denial analysis and appeal generation",
      capabilities: [
        "Denial reason categorization",
        "Appeal probability scoring",
        "Auto-generated appeal letters",
        "Root cause analysis"
      ],
      status: "Active"
    }
  ];

  const performanceMetrics = [
    { label: "AI Accuracy Rate", value: "99.2%", color: "text-green-600" },
    { label: "Processing Speed", value: "< 2 sec", color: "text-blue-600" },
    { label: "Cost Reduction", value: "67%", color: "text-purple-600" },
    { label: "Efficiency Gain", value: "87%", color: "text-orange-600" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-purple-900 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Bot className="h-16 w-16 mr-4" />
              <div>
                <h1 className="text-4xl font-bold mb-2">Stellar.AI Platform</h1>
                <p className="text-xl text-purple-100">
                  Next-Generation AI Intelligence for Healthcare RCM
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {performanceMetrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">{metric.value}</div>
                  <div className="text-purple-200 text-sm">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">AI Overview</TabsTrigger>
            <TabsTrigger value="assistant">AI Assistant</TabsTrigger>
            <TabsTrigger value="insights">Revenue Insights</TabsTrigger>
            <TabsTrigger value="validation">Claim Validation</TabsTrigger>
            <TabsTrigger value="communication">Patient AI</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {aiFeatures.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-purple-100 text-purple-600 rounded-lg">
                          {feature.icon}
                        </div>
                        <div>
                          <CardTitle className="text-lg">{feature.title}</CardTitle>
                          <p className="text-gray-600 text-sm mt-1">{feature.description}</p>
                        </div>
                      </div>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        {feature.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {feature.capabilities.map((capability, capIndex) => (
                        <div key={capIndex} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-gray-700">{capability}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
              <CardContent className="p-8">
                <div className="text-center">
                  <Zap className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    AI-Powered Revenue Optimization
                  </h3>
                  <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
                    Our AI platform processes over 10,000 claims daily, identifying patterns and 
                    optimizing revenue cycles with industry-leading accuracy and speed.
                  </p>
                  <div className="flex justify-center gap-4">
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Try AI Assistant
                    </Button>
                    <Button variant="outline">
                      <Shield className="mr-2 h-4 w-4" />
                      View Security Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="assistant" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <AiChat />
              </div>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      Quick Actions
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      Check claim status for CLM-2024-001848
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      Analyze recent denial trends
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      Generate revenue forecast
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      Review payer performance
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>AI Capabilities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Real-time claim analysis</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Revenue optimization tips</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span>Compliance guidance</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span>Performance insights</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="insights" className="mt-8">
            <AiInsights />
          </TabsContent>

          <TabsContent value="validation" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  AI Claim Validation Demo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-blue-900 mb-4">Sample Claim Analysis</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong>Claim Number:</strong> CLM-2024-001847
                      </div>
                      <div>
                        <strong>Patient:</strong> John Smith
                      </div>
                      <div>
                        <strong>Amount:</strong> $2,456.78
                      </div>
                      <div>
                        <strong>Payer:</strong> Blue Cross Blue Shield
                      </div>
                      <div>
                        <strong>CPT Codes:</strong> 99213, 90834
                      </div>
                      <div>
                        <strong>ICD Codes:</strong> F32.9, Z00.00
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="bg-green-50 border-green-200">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <span className="font-semibold text-green-900">Validation Score</span>
                        </div>
                        <div className="text-2xl font-bold text-green-600">98.5%</div>
                        <p className="text-sm text-green-700">High confidence approval</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-blue-50 border-blue-200">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <TrendingUp className="h-5 w-5 text-blue-600" />
                          <span className="font-semibold text-blue-900">Processing Time</span>
                        </div>
                        <div className="text-2xl font-bold text-blue-600">1.2s</div>
                        <p className="text-sm text-blue-700">Lightning fast analysis</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-purple-50 border-purple-200">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Shield className="h-5 w-5 text-purple-600" />
                          <span className="font-semibold text-purple-900">Compliance</span>
                        </div>
                        <div className="text-2xl font-bold text-purple-600">100%</div>
                        <p className="text-sm text-purple-700">Fully compliant</p>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="bg-gray-50">
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-3">AI Validation Results</h4>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                          <div>
                            <p className="font-medium">Code Validation Passed</p>
                            <p className="text-sm text-gray-600">CPT and ICD codes are properly matched and compliant</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                          <div>
                            <p className="font-medium">Payer Rules Verified</p>
                            <p className="text-sm text-gray-600">Claim meets Blue Cross Blue Shield requirements</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                          <div>
                            <p className="font-medium">Documentation Complete</p>
                            <p className="text-sm text-gray-600">All required fields and supporting documentation present</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="text-center">
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      Validate New Claim
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="communication" className="mt-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-2">AI-Powered Patient Communication</h3>
              <p className="text-gray-600">Automate personalized patient messaging with intelligent AI that understands context and tone.</p>
            </div>
            <AiPatientCommunication />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}