
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
  Plus,
  Edit,
  Trash2,
  Copy,
  Bell,
  TrendingUp,
  Users,
  Target,
  BarChart3,
  Calendar,
  FileText,
  Download,
  Upload,
  Play,
  Pause,
  MoreVertical,
  Eye,
  Heart,
  Share2
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [filterName, setFilterName] = useState("");
  const [timeFilter, setTimeFilter] = useState("");
  const [keywords, setKeywords] = useState("");
  const [snippetTitle, setSnippetTitle] = useState("");
  const [snippetContent, setSnippetContent] = useState("");

  const savedFilters = [
    { 
      id: 1,
      name: "Senior React Developer", 
      keywords: "react typescript senior", 
      timeFilter: "Last 2 hours", 
      experience: "Senior Level",
      status: "active",
      matches: 23,
      created: "2 days ago"
    },
    { 
      id: 2,
      name: "Remote Frontend Jobs", 
      keywords: "frontend remote javascript", 
      timeFilter: "Last 6 hours", 
      experience: "Mid Level",
      status: "paused",
      matches: 47,
      created: "1 week ago"
    },
    { 
      id: 3,
      name: "Startup Full Stack", 
      keywords: "full stack startup nextjs", 
      timeFilter: "Last 1 hour", 
      experience: "Entry Level",
      status: "active",
      matches: 12,
      created: "3 days ago"
    },
  ];

  const snippets = [
    { 
      id: 1,
      title: "Referral Request", 
      content: "Hi [Name], I noticed you work at [Company]. I'm very interested in the [Position] role and would love to learn more about the company culture...",
      category: "Referral",
      lastUsed: "2 hours ago",
      usageCount: 15
    },
    { 
      id: 2,
      title: "Follow-up Message", 
      content: "Thank you for connecting! I wanted to follow up on our previous conversation about opportunities at [Company]...",
      category: "Follow-up",
      lastUsed: "1 day ago",
      usageCount: 8
    },
    { 
      id: 3,
      title: "Cold Outreach", 
      content: "Hi [Name], I hope this message finds you well. I'm reaching out because I'm passionate about [Industry] and admire the work [Company] is doing...",
      category: "Outreach",
      lastUsed: "3 days ago",
      usageCount: 22
    },
  ];

  const recentActivity = [
    { type: "filter_match", message: "New matches found for 'Senior React Developer'", count: 5, time: "10 min ago" },
    { type: "message_sent", message: "Referral message sent to John Doe", time: "1 hour ago" },
    { type: "filter_created", message: "Created new filter 'Frontend Remote'", time: "2 hours ago" },
    { type: "profile_view", message: "Your profile was viewed 3 times", count: 3, time: "4 hours ago" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/90 backdrop-blur-lg sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <Link to="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Search className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-slate-900">LinkedInBoost</h1>
                  <p className="text-xs text-slate-500">Dashboard</p>
                </div>
              </Link>
              
              <nav className="hidden md:flex items-center space-x-6">
                <Link to="/dashboard" className="text-blue-600 font-medium">Dashboard</Link>
                <Link to="#" className="text-slate-600 hover:text-blue-600">Analytics</Link>
                <Link to="#" className="text-slate-600 hover:text-blue-600">Templates</Link>
                <Link to="#" className="text-slate-600 hover:text-blue-600">Settings</Link>
              </nav>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="hidden sm:flex">
                <Bell className="w-4 h-4 mr-2" />
                Notifications
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-blue-600 to-indigo-600">
                <Plus className="w-4 h-4 mr-2" />
                New Filter
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-600 text-sm font-medium">Active Filters</p>
                  <p className="text-2xl font-bold text-blue-900">12</p>
                </div>
                <Filter className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-600 text-sm font-medium">New Matches</p>
                  <p className="text-2xl font-bold text-green-900">47</p>
                </div>
                <Target className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-600 text-sm font-medium">Messages Sent</p>
                  <p className="text-2xl font-bold text-purple-900">128</p>
                </div>
                <MessageSquare className="w-8 h-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-600 text-sm font-medium">Profile Views</p>
                  <p className="text-2xl font-bold text-orange-900">256</p>
                </div>
                <Eye className="w-8 h-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Content */}
        <Tabs defaultValue="filters" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 bg-white border shadow-sm">
            <TabsTrigger value="filters" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700">Smart Filters</TabsTrigger>
            <TabsTrigger value="templates" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700">Message Templates</TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700">Analytics</TabsTrigger>
            <TabsTrigger value="activity" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700">Recent Activity</TabsTrigger>
          </TabsList>

          {/* Smart Filters Tab */}
          <TabsContent value="filters" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Create New Filter */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Plus className="w-5 h-5 mr-2 text-blue-600" />
                    Create Smart Filter
                  </CardTitle>
                  <CardDescription>Set up intelligent job alerts with precise targeting</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="filter-name">Filter Name</Label>
                    <Input 
                      id="filter-name"
                      placeholder="e.g., Senior React Developer - Remote"
                      value={filterName}
                      onChange={(e) => setFilterName(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="keywords">Keywords</Label>
                    <Input 
                      id="keywords"
                      placeholder="react, typescript, remote, startup"
                      value={keywords}
                      onChange={(e) => setKeywords(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="time-filter">Time Filter</Label>
                    <Input 
                      id="time-filter"
                      placeholder="Last 2 hours"
                      value={timeFilter}
                      onChange={(e) => setTimeFilter(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600">
                    <BookmarkPlus className="w-4 h-4 mr-2" />
                    Create Filter
                  </Button>
                </CardContent>
              </Card>

              {/* Saved Filters */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">Your Filters</h3>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Export
                  </Button>
                </div>
                
                {savedFilters.map((filter) => (
                  <Card key={filter.id} className="hover:shadow-lg transition-all duration-200">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <h4 className="font-semibold text-lg">{filter.name}</h4>
                            <Badge className={`ml-2 ${filter.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                              {filter.status === 'active' ? <Play className="w-3 h-3 mr-1" /> : <Pause className="w-3 h-3 mr-1" />}
                              {filter.status}
                            </Badge>
                          </div>
                          <p className="text-slate-600 mb-3">{filter.keywords}</p>
                          <div className="flex items-center space-x-4 text-sm text-slate-500">
                            <span className="flex items-center">
                              <Clock className="w-3 h-3 mr-1" />
                              {filter.timeFilter}
                            </span>
                            <span className="flex items-center">
                              <Target className="w-3 h-3 mr-1" />
                              {filter.matches} matches
                            </span>
                            <span className="flex items-center">
                              <Calendar className="w-3 h-3 mr-1" />
                              {filter.created}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Copy className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Message Templates Tab */}
          <TabsContent value="templates" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Create New Template */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageSquare className="w-5 h-5 mr-2 text-purple-600" />
                    Create Message Template
                  </CardTitle>
                  <CardDescription>Build reusable professional messages</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="snippet-title">Template Title</Label>
                    <Input 
                      id="snippet-title"
                      placeholder="e.g., Referral Request"
                      value={snippetTitle}
                      onChange={(e) => setSnippetTitle(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="snippet-content">Message Content</Label>
                    <Textarea 
                      id="snippet-content"
                      placeholder="Hi [Name], I noticed you work at [Company]..."
                      value={snippetContent}
                      onChange={(e) => setSnippetContent(e.target.value)}
                      className="mt-1 min-h-[120px]"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-violet-600">
                    <Plus className="w-4 h-4 mr-2" />
                    Save Template
                  </Button>
                </CardContent>
              </Card>

              {/* Saved Templates */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">Your Templates</h3>
                  <Button variant="outline" size="sm">
                    <Upload className="w-4 h-4 mr-2" />
                    Import
                  </Button>
                </div>
                
                {snippets.map((snippet) => (
                  <Card key={snippet.id} className="hover:shadow-lg transition-all duration-200">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <h4 className="font-semibold text-lg">{snippet.title}</h4>
                            <Badge variant="outline" className="ml-2">{snippet.category}</Badge>
                          </div>
                          <p className="text-slate-600 mb-3 line-clamp-2">{snippet.content}</p>
                          <div className="flex items-center space-x-4 text-sm text-slate-500">
                            <span className="flex items-center">
                              <Heart className="w-3 h-3 mr-1" />
                              Used {snippet.usageCount} times
                            </span>
                            <span className="flex items-center">
                              <Clock className="w-3 h-3 mr-1" />
                              {snippet.lastUsed}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline">
                            <Copy className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Share2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
                    Performance Overview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 rounded-lg">
                    <div className="text-center">
                      <BarChart3 className="w-16 h-16 mx-auto mb-4 text-slate-400" />
                      <p className="text-slate-600">Analytics charts will be displayed here</p>
                      <p className="text-sm text-slate-500 mt-2">Track your job search performance over time</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg">Quick Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Response Rate</span>
                      <span className="font-semibold text-green-600">24%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Avg. Response Time</span>
                      <span className="font-semibold">2.3 days</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Interview Rate</span>
                      <span className="font-semibold text-blue-600">8%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Success Score</span>
                      <span className="font-semibold text-purple-600">A+</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg">Top Performing Keywords</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">React</span>
                      <Badge>32 matches</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">TypeScript</span>
                      <Badge>28 matches</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Remote</span>
                      <Badge>24 matches</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Senior</span>
                      <Badge>19 matches</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Recent Activity Tab */}
          <TabsContent value="activity" className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bell className="w-5 h-5 mr-2 text-orange-600" />
                  Recent Activity
                </CardTitle>
                <CardDescription>Stay updated with your latest job search activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                      <div className={`w-2 h-2 rounded-full ${
                        activity.type === 'filter_match' ? 'bg-green-500' :
                        activity.type === 'message_sent' ? 'bg-blue-500' :
                        activity.type === 'filter_created' ? 'bg-purple-500' :
                        'bg-orange-500'
                      }`}></div>
                      <div className="flex-1">
                        <p className="text-slate-900">{activity.message}</p>
                        <p className="text-sm text-slate-500">{activity.time}</p>
                      </div>
                      {activity.count && (
                        <Badge variant="outline">{activity.count}</Badge>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
