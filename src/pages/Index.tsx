
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
  TrendingUp
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

  const stats = [
    { number: "50K+", label: "Active Users" },
    { number: "2M+", label: "Jobs Found" },
    { number: "85%", label: "Success Rate" },
    { number: "4.9★", label: "User Rating" }
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
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5 rounded-3xl mx-6"></div>
        <div className="container mx-auto text-center max-w-5xl relative">
          <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 hover:from-blue-200 hover:to-indigo-200 border-0 px-4 py-2">
            <Sparkles className="w-4 h-4 mr-2" />
            Trusted by 50,000+ Job Seekers
          </Badge>
          <h1 className="text-6xl md:text-7xl font-bold text-slate-900 mb-8 leading-tight">
            Find Jobs Faster with
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Smart Filters</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto">
            Custom time filters, saved searches, and professional message templates to streamline your LinkedIn job hunting experience and land your dream job faster.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-slate-900">{stat.number}</div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-xl text-lg px-8 py-4">
              <Chrome className="w-5 h-5 mr-2" />
              Get Extension - Free
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-slate-300 hover:border-blue-300 text-lg px-8 py-4">
              <Target className="w-5 h-5 mr-2" />
              View Demo
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-6 text-sm text-slate-500">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
              Free Forever
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
              No Sign-up Required
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
              Works on All Browsers
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-slate-100 text-slate-700 hover:bg-slate-200 border-0">Features</Badge>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Everything You Need to Land Your Dream Job</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Powerful tools designed to give you an unfair advantage in today's competitive job market</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1 bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900">Precise Time Filters</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">Filter jobs by exact posting time - from minutes to hours. Get the freshest opportunities before everyone else.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1 bg-gradient-to-br from-green-50 to-emerald-50">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <BookmarkPlus className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900">Saved Search Profiles</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">Create and save multiple search configurations for different roles and instantly switch between them.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1 bg-gradient-to-br from-purple-50 to-violet-50">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900">Message Templates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">Pre-built snippets for referrals, follow-ups, and cold outreach with smart placeholder filling.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1 bg-gradient-to-br from-orange-50 to-amber-50">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">One-click access to your most-used filters and templates directly from LinkedIn.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-slate-100 text-slate-700 hover:bg-slate-200 border-0">Dashboard</Badge>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Your Personal Job Search Command Center</h2>
            <p className="text-xl text-slate-600">Manage your filters, templates, and search strategy all in one intuitive interface</p>
          </div>

          <Card className="shadow-2xl border-0 overflow-hidden bg-white">
            <CardHeader className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-8">
              <CardTitle className="flex items-center text-2xl">
                <Settings className="w-6 h-6 mr-3" />
                Dashboard
              </CardTitle>
              <CardDescription className="text-slate-300 text-lg">Manage your LinkedIn job search tools</CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <Tabs defaultValue="filters" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8 bg-slate-100 p-1 rounded-xl">
                  <TabsTrigger value="filters" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">Search Filters</TabsTrigger>
                  <TabsTrigger value="snippets" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">Message Snippets</TabsTrigger>
                </TabsList>
                
                <TabsContent value="filters" className="space-y-8">
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <h3 className="text-2xl font-semibold text-slate-900 mb-6">Create New Filter</h3>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="filter-name" className="text-sm font-medium text-slate-700">Filter Name</Label>
                          <Input 
                            id="filter-name"
                            placeholder="e.g., React Jobs - 1 Hour"
                            value={filterName}
                            onChange={(e) => setFilterName(e.target.value)}
                            className="mt-2 border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <Label htmlFor="keywords" className="text-sm font-medium text-slate-700">Keywords</Label>
                          <Input 
                            id="keywords"
                            placeholder="e.g., react, frontend, javascript"
                            value={keywords}
                            onChange={(e) => setKeywords(e.target.value)}
                            className="mt-2 border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <Label htmlFor="time-filter" className="text-sm font-medium text-slate-700">Time Filter (seconds)</Label>
                          <Input 
                            id="time-filter"
                            placeholder="e.g., 3600 (1 hour)"
                            value={timeFilter}
                            onChange={(e) => setTimeFilter(e.target.value)}
                            className="mt-2 border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>
                        <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg">
                          <BookmarkPlus className="w-4 h-4 mr-2" />
                          Save Filter
                        </Button>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <h3 className="text-2xl font-semibold text-slate-900 mb-6">Saved Filters</h3>
                      <div className="space-y-4">
                        {savedFilters.map((filter, index) => (
                          <Card key={index} className="p-6 hover:shadow-lg transition-all duration-200 border-slate-200 hover:border-blue-200 bg-gradient-to-r from-white to-slate-50">
                            <div className="flex justify-between items-start">
                              <div className="flex-1">
                                <h4 className="font-semibold text-slate-900 text-lg">{filter.name}</h4>
                                <p className="text-slate-600 mt-1">{filter.keywords}</p>
                                <div className="flex items-center space-x-2 mt-3">
                                  <Badge variant="outline" className="border-blue-200 text-blue-700 bg-blue-50">
                                    <Clock className="w-3 h-3 mr-1" />
                                    {Math.floor(parseInt(filter.timeFilter) / 3600)}h filter
                                  </Badge>
                                  <Badge variant="outline" className="border-slate-200 text-slate-600">
                                    {filter.experience}
                                  </Badge>
                                </div>
                              </div>
                              <Button size="sm" variant="outline" className="ml-4 border-blue-200 text-blue-600 hover:bg-blue-50">
                                Use
                              </Button>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="snippets" className="space-y-8">
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <h3 className="text-2xl font-semibold text-slate-900 mb-6">Create New Snippet</h3>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="snippet-title" className="text-sm font-medium text-slate-700">Snippet Title</Label>
                          <Input 
                            id="snippet-title"
                            placeholder="e.g., Referral Request"
                            value={snippetTitle}
                            onChange={(e) => setSnippetTitle(e.target.value)}
                            className="mt-2 border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <Label htmlFor="snippet-content" className="text-sm font-medium text-slate-700">Message Template</Label>
                          <Textarea 
                            id="snippet-content"
                            placeholder="Use [Name], [Company], [Position] as placeholders"
                            rows={6}
                            value={snippetContent}
                            onChange={(e) => setSnippetContent(e.target.value)}
                            className="mt-2 border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>
                        <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg">
                          <MessageSquare className="w-4 h-4 mr-2" />
                          Save Snippet
                        </Button>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <h3 className="text-2xl font-semibold text-slate-900 mb-6">Your Snippets</h3>
                      <div className="space-y-4">
                        {snippets.map((snippet, index) => (
                          <Card key={index} className="p-6 hover:shadow-lg transition-all duration-200 border-slate-200 hover:border-blue-200 bg-gradient-to-r from-white to-slate-50">
                            <div className="flex justify-between items-start">
                              <div className="flex-1">
                                <h4 className="font-semibold text-slate-900 text-lg">{snippet.title}</h4>
                                <p className="text-slate-600 text-sm line-clamp-2 mt-2 leading-relaxed">
                                  {snippet.content.substring(0, 100)}...
                                </p>
                              </div>
                              <Button size="sm" variant="outline" className="ml-4 border-blue-200 text-blue-600 hover:bg-blue-50">
                                Use
                              </Button>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </div>
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
                  <p className="text-slate-700 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
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
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        <div className="container mx-auto text-center max-w-4xl relative">
          <div className="mb-8">
            <TrendingUp className="w-16 h-16 mx-auto mb-6 text-blue-300" />
            <h2 className="text-5xl font-bold mb-6">Ready to Accelerate Your Job Search?</h2>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              Join thousands of successful professionals who found their dream jobs faster with LinkedInBoost. 
              Stop missing out on opportunities and start getting ahead of the competition.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 shadow-xl text-lg px-10 py-4 font-semibold">
              <Chrome className="w-5 h-5 mr-2" />
              Install Extension Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-10 py-4 backdrop-blur-sm">
              <Shield className="w-5 h-5 mr-2" />
              View Privacy Policy
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-blue-100">
            <div className="flex items-center justify-center">
              <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
              Free Forever
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
              5-Minute Setup
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
              Enterprise Security
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
