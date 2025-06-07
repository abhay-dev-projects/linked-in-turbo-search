import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Search, 
  Filter, 
  Clock, 
  BookmarkPlus, 
  MessageSquare, 
  Settings, 
  Chrome,
  Zap,
  Users,
  Target,
  Sparkles,
  CheckCircle,
  ArrowRight,
  Star,
  Shield,
  TrendingUp,
  Rocket,
  Globe,
  BarChart3,
  Award,
  Play,
  ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [filterName, setFilterName] = useState("");
  const [timeFilter, setTimeFilter] = useState("");
  const [keywords, setKeywords] = useState("");
  const [snippetTitle, setSnippetTitle] = useState("");
  const [snippetContent, setSnippetContent] = useState("");

  const savedFilters = [
    { name: "React Jobs", keywords: "react", timeFilter: "3600", experience: "Entry Level" },
    { name: "Software Engineer", keywords: "software engineer", timeFilter: "18000", experience: "Mid Level" },
    { name: "Frontend Dev", keywords: "frontend developer", timeFilter: "7200", experience: "Entry Level" },
  ];

  const snippets = [
    { title: "Referral Request", content: "Hi [Name], I noticed you work at [Company]. I'm very interested in the [Position] role and would love to learn more about the company culture..." },
    { title: "Follow-up Message", content: "Thank you for connecting! I wanted to follow up on our previous conversation about opportunities at [Company]..." },
    { title: "Cold Outreach", content: "Hi [Name], I hope this message finds you well. I'm reaching out because I'm passionate about [Industry] and admire the work [Company] is doing..." },
  ];

  const testimonials = [
    { name: "Sarah Chen", role: "Software Engineer", company: "Google", quote: "LinkedInBoost helped me find my dream job 3x faster. The time filters are a game-changer!" },
    { name: "Michael Rodriguez", role: "Product Manager", company: "Microsoft", quote: "The message templates saved me hours of writing. Professional and effective." },
    { name: "Emily Johnson", role: "Frontend Developer", company: "Netflix", quote: "Finally, a tool that gives me an edge in the competitive job market. Highly recommended!" }
  ];

  const features = [
    {
      icon: Clock,
      title: "Precise Time Filters",
      description: "Filter jobs by exact posting time - from minutes to hours. Get the freshest opportunities before everyone else.",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: BookmarkPlus,
      title: "Smart Search Profiles",
      description: "Create and save multiple search configurations for different roles and instantly switch between them.",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: MessageSquare,
      title: "Professional Templates",
      description: "Pre-built message templates for referrals, follow-ups, and cold outreach with smart placeholder filling.",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "One-click access to your most-used filters and templates directly from LinkedIn with instant results.",
      gradient: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/90 backdrop-blur-lg sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <Search className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">LinkedInBoost</h1>
                <p className="text-xs text-slate-500">Professional Job Search</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="hidden sm:flex border-slate-200 hover:border-blue-300">
                <Chrome className="w-4 h-4 mr-2" />
                Install Extension
              </Button>
              <Link to="/dashboard">
                <Button size="sm" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5"></div>
        <div className="container mx-auto text-center max-w-6xl relative">
          <Badge className="mb-8 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 hover:from-blue-200 hover:to-indigo-200 border-0 px-6 py-3 text-sm font-medium">
            <Rocket className="w-4 h-4 mr-2" />
            Launching Soon - Join the Waitlist
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-tight">
            The Future of
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> LinkedIn Job Search</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed max-w-4xl mx-auto">
            Advanced filtering, intelligent automation, and professional networking tools that give ambitious professionals an unfair advantage in today's competitive job market.
          </p>

          {/* Value Props */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 p-4 bg-white/50 rounded-xl border border-slate-100">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-slate-900">10x Faster</div>
                <div className="text-sm text-slate-600">Job Discovery</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 p-4 bg-white/50 rounded-xl border border-slate-100">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-slate-900">Smart Targeting</div>
                <div className="text-sm text-slate-600">Perfect Matches</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 p-4 bg-white/50 rounded-xl border border-slate-100">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-violet-500 rounded-lg flex items-center justify-center">
                <Award className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-slate-900">Professional Edge</div>
                <div className="text-sm text-slate-600">Stand Out</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/dashboard">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-xl text-lg px-10 py-4 font-semibold">
                <Chrome className="w-5 h-5 mr-2" />
                Get Early Access
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-slate-300 hover:border-blue-300 text-lg px-10 py-4 font-semibold">
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2 text-green-500" />
              Enterprise Security
            </div>
            <div className="flex items-center">
              <Globe className="w-4 h-4 mr-2 text-blue-500" />
              Works Globally
            </div>
            <div className="flex items-center">
              <Zap className="w-4 h-4 mr-2 text-yellow-500" />
              Instant Setup
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-slate-100 text-slate-700 hover:bg-slate-200 border-0">Core Features</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Built for Success</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Powerful tools designed to transform how ambitious professionals navigate their career journey</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1 bg-gradient-to-br from-white to-slate-50 group">
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-slate-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-slate-100 text-slate-700 hover:bg-slate-200 border-0">Coming Soon</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Your Professional Command Center</h2>
            <p className="text-xl text-slate-600">Experience the power of intelligent job search automation</p>
          </div>

          <Card className="shadow-2xl border-0 overflow-hidden bg-white">
            <CardContent className="p-12 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Settings className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Professional Dashboard</h3>
              <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                Manage your job search with intelligent filters, professional message templates, and real-time analytics.
              </p>
              <Link to="/dashboard">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Explore Dashboard
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-slate-100 text-slate-700 hover:bg-slate-200 border-0">Testimonials</Badge>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Loved by Job Seekers Worldwide</h2>
            <p className="text-xl text-slate-600">See what our users say about their success stories</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-slate-50">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-700 mb-6 leading-relaxed italic">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">{testimonial.name}</div>
                      <div className="text-sm text-slate-600">{testimonial.role} at {testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-repeat" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        <div className="container mx-auto text-center max-w-4xl relative">
          <div className="mb-8">
            <TrendingUp className="w-16 h-16 mx-auto mb-6 text-blue-300" />
            <h2 className="text-5xl font-bold mb-6">Ready to Transform Your Career?</h2>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              Be among the first to experience the next generation of professional job search tools. 
              Join our exclusive early access program and get ahead of the competition.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link to="/dashboard">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 shadow-xl text-lg px-10 py-4 font-semibold">
                <Chrome className="w-5 h-5 mr-2" />
                Get Early Access
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-10 py-4 backdrop-blur-sm">
              <Shield className="w-5 h-5 mr-2" />
              Learn More
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-blue-100">
            <div className="flex items-center justify-center">
              <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
              Early Access Benefits
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
              Lifetime Updates
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
              Priority Support
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                  <Search className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="font-bold text-xl">LinkedInBoost</span>
                  <p className="text-xs text-slate-400">Professional Job Search</p>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed max-w-md">
                Supercharge your LinkedIn job search with intelligent filters, saved searches, and professional message templates. 
                Built by job seekers, for job seekers.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-lg">Product</h4>
              <ul className="space-y-3 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Chrome Extension</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-lg">Support</h4>
              <ul className="space-y-3 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400">&copy; 2024 LinkedInBoost. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
