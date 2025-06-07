
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
              <Button size="sm" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Redesigned */}
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
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-xl text-lg px-10 py-4 font-semibold">
              <Chrome className="w-5 h-5 mr-2" />
              Get Early Access
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
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

      {/* Product Showcase - Redesigned Dashboard */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-slate-100 text-slate-700 hover:bg-slate-200 border-0">Product Preview</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Your Professional Command Center</h2>
            <p className="text-xl text-slate-600">A glimpse into the powerful dashboard that will revolutionize your job search strategy</p>
          </div>

          <Card className="shadow-2xl border-0 overflow-hidden bg-white">
            <CardHeader className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-8">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center text-2xl mb-2">
                    <Settings className="w-6 h-6 mr-3" />
                    LinkedInBoost Dashboard
                  </CardTitle>
                  <CardDescription className="text-slate-300 text-lg">Intelligent job search automation at your fingertips</CardDescription>
                </div>
                <Badge className="bg-green-500 text-white px-3 py-1">
                  <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                  Coming Soon
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <Tabs defaultValue="filters" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8 bg-slate-100 p-1 rounded-xl">
                  <TabsTrigger value="filters" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm font-medium">Smart Filters</TabsTrigger>
                  <TabsTrigger value="analytics" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm font-medium">Analytics Preview</TabsTrigger>
                </TabsList>
                
                <TabsContent value="filters" className="space-y-8">
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-semibold text-slate-900">Create Smart Filter</h3>
                        <Badge variant="outline" className="border-blue-200 text-blue-700 bg-blue-50">
                          <Sparkles className="w-3 h-3 mr-1" />
                          AI Powered
                        </Badge>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="filter-name" className="text-sm font-medium text-slate-700">Filter Name</Label>
                          <Input 
                            id="filter-name"
                            placeholder="e.g., Senior React Developer - Remote"
                            value={filterName}
                            onChange={(e) => setFilterName(e.target.value)}
                            className="mt-2 border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <Label htmlFor="keywords" className="text-sm font-medium text-slate-700">Smart Keywords</Label>
                          <Input 
                            id="keywords"
                            placeholder="AI will suggest: react, typescript, remote, startup"
                            value={keywords}
                            onChange={(e) => setKeywords(e.target.value)}
                            className="mt-2 border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <Label htmlFor="time-filter" className="text-sm font-medium text-slate-700">Time Precision</Label>
                          <Input 
                            id="time-filter"
                            placeholder="Get notified within minutes of posting"
                            value={timeFilter}
                            onChange={(e) => setTimeFilter(e.target.value)}
                            className="mt-2 border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>
                        <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg">
                          <BookmarkPlus className="w-4 h-4 mr-2" />
                          Create Smart Filter
                        </Button>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <h3 className="text-2xl font-semibold text-slate-900">Preview: Your Filters</h3>
                      <div className="space-y-4">
                        {savedFilters.map((filter, index) => (
                          <Card key={index} className="p-6 hover:shadow-lg transition-all duration-200 border-slate-200 hover:border-blue-200 bg-gradient-to-r from-white to-slate-50 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-bl-full"></div>
                            <div className="flex justify-between items-start relative">
                              <div className="flex-1">
                                <div className="flex items-center mb-2">
                                  <h4 className="font-semibold text-slate-900 text-lg">{filter.name}</h4>
                                  <Badge className="ml-2 bg-green-100 text-green-700 border-green-200">Active</Badge>
                                </div>
                                <p className="text-slate-600 mb-3">{filter.keywords}</p>
                                <div className="flex items-center space-x-2">
                                  <Badge variant="outline" className="border-blue-200 text-blue-700 bg-blue-50">
                                    <Clock className="w-3 h-3 mr-1" />
                                    Real-time
                                  </Badge>
                                  <Badge variant="outline" className="border-slate-200 text-slate-600">
                                    {filter.experience}
                                  </Badge>
                                </div>
                              </div>
                              <Button size="sm" className="ml-4 bg-blue-600 text-white hover:bg-blue-700">
                                <ChevronRight className="w-4 h-4" />
                              </Button>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="analytics" className="space-y-8">
                  <div className="grid lg:grid-cols-3 gap-6">
                    <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                          <BarChart3 className="w-6 h-6 text-white" />
                        </div>
                        <Badge className="bg-blue-100 text-blue-700">Live Data</Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="text-3xl font-bold text-slate-900">Real-time</div>
                        <div className="text-slate-600">Job Matching</div>
                        <div className="text-sm text-slate-500">AI-powered relevance scoring</div>
                      </div>
                    </Card>

                    <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-green-100">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                          <Target className="w-6 h-6 text-white" />
                        </div>
                        <Badge className="bg-green-100 text-green-700">Smart</Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="text-3xl font-bold text-slate-900">Precision</div>
                        <div className="text-slate-600">Targeting</div>
                        <div className="text-sm text-slate-500">Only relevant opportunities</div>
                      </div>
                    </Card>

                    <Card className="p-6 bg-gradient-to-br from-purple-50 to-violet-50 border-purple-100">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                          <Zap className="w-6 h-6 text-white" />
                        </div>
                        <Badge className="bg-purple-100 text-purple-700">Instant</Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="text-3xl font-bold text-slate-900">Lightning</div>
                        <div className="text-slate-600">Fast Alerts</div>
                        <div className="text-sm text-slate-500">Never miss an opportunity</div>
                      </div>
                    </Card>
                  </div>

                  <Card className="p-8 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
                    <div className="text-center">
                      <Rocket className="w-16 h-16 mx-auto mb-4 text-blue-400" />
                      <h3 className="text-2xl font-bold mb-2">Coming Soon: Advanced Analytics</h3>
                      <p className="text-slate-300 mb-6">Track your job search performance, analyze market trends, and optimize your strategy with AI-powered insights.</p>
                      <Button className="bg-white text-slate-900 hover:bg-slate-100">
                        Join Waitlist for Updates
                      </Button>
                    </div>
                  </Card>
                </TabsContent>
              </Tabs>
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
            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 shadow-xl text-lg px-10 py-4 font-semibold">
              <Chrome className="w-5 h-5 mr-2" />
              Get Early Access
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
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
