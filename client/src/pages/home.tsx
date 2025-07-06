import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Play, ArrowRight, Users, Zap, Star, CheckCircle, TrendingUp, DollarSign, FileText, Clock, Shield, Brain, Sparkles, Heart, Calendar } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Clean Modern Hero Section */}
      <section className="relative pt-20 pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2 mb-8 shadow-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-green-700">Live Platform • 500+ Healthcare Providers</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              Healthcare Revenue
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Made Simple</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              The only RCM platform that automates claims, reduces denials by 95%, 
              and gets you paid faster. Built specifically for modern healthcare providers.
            </p>

            {/* Working Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link to="/dashboard">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                  <Play className="mr-2 h-5 w-5" />
                  Try Live Dashboard
                </Button>
              </Link>
              <Link to="/ai-features">
                <Button variant="outline" size="lg" className="border-2 border-indigo-300 text-indigo-700 hover:bg-indigo-50 px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                  <Brain className="mr-2 h-5 w-5" />
                  Explore AI Features
                </Button>
              </Link>
            </div>

            {/* Live Metrics Dashboard */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-20">
              <Card className="bg-white/80 backdrop-blur-sm border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <TrendingUp className="h-8 w-8 text-green-600" />
                    <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full font-medium">+12%</span>
                  </div>
                  <div className="text-2xl font-bold text-slate-800 mb-1">99.2%</div>
                  <div className="text-sm text-slate-600">Claim Accuracy</div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/80 backdrop-blur-sm border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <DollarSign className="h-8 w-8 text-blue-600" />
                    <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full font-medium">+18%</span>
                  </div>
                  <div className="text-2xl font-bold text-slate-800 mb-1">$2.8M</div>
                  <div className="text-sm text-slate-600">Monthly Revenue</div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/80 backdrop-blur-sm border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <FileText className="h-8 w-8 text-indigo-600" />
                    <span className="text-xs text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full font-medium">+25%</span>
                  </div>
                  <div className="text-2xl font-bold text-slate-800 mb-1">15.8K</div>
                  <div className="text-sm text-slate-600">Claims/Month</div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/80 backdrop-blur-sm border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Clock className="h-8 w-8 text-amber-600" />
                    <span className="text-xs text-amber-600 bg-amber-50 px-2 py-1 rounded-full font-medium">-22%</span>
                  </div>
                  <div className="text-2xl font-bold text-slate-800 mb-1">18.5</div>
                  <div className="text-sm text-slate-600">Collection Days</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Everything You Need in One Platform
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From AI-powered claim validation to predictive analytics, 
              we've built every tool healthcare providers need to maximize revenue.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Brain className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">AI-Powered Automation</h3>
                <p className="text-slate-600 mb-6">
                  Smart claim validation, automated denial management, and predictive revenue insights 
                  powered by advanced AI algorithms.
                </p>
                <Link to="/ai-features">
                  <Button variant="outline" className="group border-blue-300 text-blue-700 hover:bg-blue-50">
                    Explore AI Features
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Real-Time Analytics</h3>
                <p className="text-slate-600 mb-6">
                  Comprehensive dashboards with live KPIs, denial tracking, payer performance, 
                  and revenue optimization insights.
                </p>
                <Link to="/analytics">
                  <Button variant="outline" className="group border-green-300 text-green-700 hover:bg-green-50">
                    View Analytics
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Complete RCM Suite</h3>
                <p className="text-slate-600 mb-6">
                  From patient registration to final payment collection, manage your entire 
                  revenue cycle in one integrated platform.
                </p>
                <Link to="/modules">
                  <Button variant="outline" className="group border-indigo-300 text-indigo-700 hover:bg-indigo-50">
                    View All Modules
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Healthcare Leaders
            </h2>
            <p className="text-lg text-gray-600">
              Join hundreds of healthcare providers who have transformed their revenue cycle
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border border-gray-200 shadow-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "StellarOne reduced our denial rate from 12% to under 2% in just 3 months. 
                  The AI insights are incredible."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    AH
                  </div>
                  <div className="ml-3">
                    <div className="font-semibold text-gray-900">Dr. Arun Hegde</div>
                    <div className="text-sm text-gray-600">Apollo Hospitals</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "The automation saves us 40+ hours per week. Our collections improved by 
                  60% within the first quarter."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
                    SM
                  </div>
                  <div className="ml-3">
                    <div className="font-semibold text-gray-900">Sarah Miller</div>
                    <div className="text-sm text-gray-600">Regional Medical Center</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "Best RCM platform we've used. The AI assistant feels like having a 
                  revenue cycle expert available 24/7."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    RK
                  </div>
                  <div className="ml-3">
                    <div className="font-semibold text-gray-900">Dr. Rajesh Kumar</div>
                    <div className="text-sm text-gray-600">Max Healthcare</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Revenue Cycle?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Join hundreds of healthcare providers who have increased their revenue by 60% with StellarOne.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/dashboard">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-50 px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                <Zap className="mr-2 h-5 w-5" />
                Start Free Trial
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}