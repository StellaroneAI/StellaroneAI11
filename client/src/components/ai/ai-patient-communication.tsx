import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  MessageSquare, 
  Send, 
  Bot, 
  User, 
  Zap, 
  Clock,
  CheckCircle,
  AlertCircle
} from "lucide-react";

interface PatientMessage {
  id: string;
  patientName: string;
  type: 'billing_reminder' | 'payment_plan' | 'insurance_update';
  content: string;
  status: 'draft' | 'sent' | 'delivered' | 'read';
  timestamp: Date;
}

export default function AiPatientCommunication() {
  const [selectedPatient, setSelectedPatient] = useState("");
  const [messageType, setMessageType] = useState<'billing_reminder' | 'payment_plan' | 'insurance_update'>('billing_reminder');
  const [customInstructions, setCustomInstructions] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedMessage, setGeneratedMessage] = useState("");
  
  const [recentMessages] = useState<PatientMessage[]>([
    {
      id: "1",
      patientName: "Sarah Johnson",
      type: "billing_reminder",
      content: "Hi Sarah, this is a friendly reminder about your outstanding balance of $245.67 for your recent visit. We offer convenient payment options including our patient portal. Please call us at (555) 123-4567 if you have any questions.",
      status: "delivered",
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000)
    },
    {
      id: "2", 
      patientName: "Michael Chen",
      type: "payment_plan",
      content: "Hello Michael, we understand that medical bills can be overwhelming. We're pleased to offer you a personalized payment plan for your $892.34 balance. You can spread this over 6 monthly payments of $148.72. Reply YES to accept this plan.",
      status: "read",
      timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000)
    },
    {
      id: "3",
      patientName: "Emma Rodriguez",
      type: "insurance_update",
      content: "Dear Emma, we notice your insurance information may need updating. To ensure smooth processing of your claims and avoid delays, please verify your current insurance details through our patient portal or call us at (555) 123-4567.",
      status: "sent",
      timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000)
    }
  ]);

  const patientOptions = [
    "Sarah Johnson - Outstanding: $245.67",
    "Michael Chen - Outstanding: $892.34", 
    "Emma Rodriguez - Outstanding: $156.23",
    "David Williams - Outstanding: $2,345.89",
    "Lisa Thompson - Outstanding: $78.45"
  ];

  const generateMessage = async () => {
    if (!selectedPatient || !messageType) return;
    
    setIsGenerating(true);
    
    // Simulate AI message generation
    setTimeout(() => {
      const templates = {
        billing_reminder: `Hi ${selectedPatient.split(' -')[0]}, this is a friendly reminder about your outstanding balance. We understand that life gets busy, and we're here to help make payment as convenient as possible. You can pay online through our secure patient portal, call us at (555) 123-4567, or set up a payment plan. ${customInstructions ? `Additional note: ${customInstructions}` : ''} Thank you for choosing our practice.`,
        payment_plan: `Hello ${selectedPatient.split(' -')[0]}, we understand that medical expenses can be challenging. We're pleased to offer you a personalized payment plan that fits your budget. This allows you to spread your balance over manageable monthly payments with no interest. ${customInstructions ? `Special consideration: ${customInstructions}` : ''} Please contact us at (555) 123-4567 to discuss options that work for you.`,
        insurance_update: `Dear ${selectedPatient.split(' -')[0]}, we want to ensure your medical claims are processed smoothly. Our records indicate your insurance information may need updating. Please verify your current coverage details to avoid any delays or unexpected charges. ${customInstructions ? `Note: ${customInstructions}` : ''} You can update this information through our patient portal or by calling (555) 123-4567.`
      };
      
      setGeneratedMessage(templates[messageType]);
      setIsGenerating(false);
    }, 2000);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'sent':
        return <Send className="h-4 w-4 text-blue-500" />;
      case 'delivered':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'read':
        return <CheckCircle className="h-4 w-4 text-purple-500" />;
      default:
        return <AlertCircle className="h-4 w-4 text-gray-500" />;
    }
  };

  const getMessageTypeColor = (type: string) => {
    switch (type) {
      case 'billing_reminder':
        return 'bg-blue-100 text-blue-800';
      case 'payment_plan':
        return 'bg-green-100 text-green-800';
      case 'insurance_update':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* AI Message Generator */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-purple-600" />
            AI-Powered Patient Messaging
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <label className="text-sm font-medium mb-2 block">Select Patient</label>
            <Select value={selectedPatient} onValueChange={setSelectedPatient}>
              <SelectTrigger>
                <SelectValue placeholder="Choose a patient..." />
              </SelectTrigger>
              <SelectContent>
                {patientOptions.map((patient, index) => (
                  <SelectItem key={index} value={patient}>
                    {patient}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Message Type</label>
            <Select value={messageType} onValueChange={(value: any) => setMessageType(value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="billing_reminder">Billing Reminder</SelectItem>
                <SelectItem value="payment_plan">Payment Plan Offer</SelectItem>
                <SelectItem value="insurance_update">Insurance Update Request</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Custom Instructions (Optional)</label>
            <Textarea 
              placeholder="Add any specific instructions or context for the AI to include..."
              value={customInstructions}
              onChange={(e) => setCustomInstructions(e.target.value)}
              rows={3}
            />
          </div>

          <Button 
            onClick={generateMessage} 
            disabled={!selectedPatient || isGenerating}
            className="w-full bg-purple-600 hover:bg-purple-700"
          >
            {isGenerating ? (
              <>
                <Zap className="mr-2 h-4 w-4 animate-spin" />
                Generating AI Message...
              </>
            ) : (
              <>
                <Bot className="mr-2 h-4 w-4" />
                Generate Smart Message
              </>
            )}
          </Button>

          {generatedMessage && (
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">AI-Generated Message:</h4>
                <p className="text-sm text-gray-700">{generatedMessage}</p>
              </div>
              
              <div className="flex gap-2">
                <Button className="flex-1 bg-green-600 hover:bg-green-700">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
                <Button variant="outline" className="flex-1">
                  Edit & Customize
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Recent Messages */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-blue-600" />
            Recent AI Messages
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentMessages.map((message) => (
              <div key={message.id} className="bg-white border rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-gray-500" />
                    <span className="font-medium text-sm">{message.patientName}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {getStatusIcon(message.status)}
                    <span className="text-xs text-gray-500">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
                
                <Badge className={`text-xs mb-2 ${getMessageTypeColor(message.type)}`}>
                  {message.type.replace('_', ' ').toUpperCase()}
                </Badge>
                
                <p className="text-sm text-gray-700 leading-relaxed">
                  {message.content}
                </p>
                
                <div className="flex items-center justify-between mt-3 pt-3 border-t">
                  <span className={`text-xs font-medium ${
                    message.status === 'read' ? 'text-purple-600' :
                    message.status === 'delivered' ? 'text-green-600' :
                    message.status === 'sent' ? 'text-blue-600' : 'text-gray-600'
                  }`}>
                    {message.status.toUpperCase()}
                  </span>
                  <Button variant="ghost" size="sm" className="text-xs">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-900">AI Performance Today</span>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-lg font-bold text-blue-600">47</div>
                <div className="text-xs text-blue-700">Messages Sent</div>
              </div>
              <div>
                <div className="text-lg font-bold text-green-600">94%</div>
                <div className="text-xs text-green-700">Response Rate</div>
              </div>
              <div>
                <div className="text-lg font-bold text-purple-600">$8,234</div>
                <div className="text-xs text-purple-700">Collections</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}