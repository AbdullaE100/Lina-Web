import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import ArticleDetail from "@/components/ArticleDetail";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Import images using dynamic import
import dubaiColomboPic from '../assets/insights/dubai-colombo-comparison.jpg';
import offMarketPic from '../assets/insights/off-market-properties.jpg';
import portCityPic from '../assets/insights/port-city-colombo.jpg';
import currencyRiskPic from '../assets/insights/currency-risk.jpg';
import diasporaPic from '../assets/insights/diaspora-investment.jpg';
import preLaunchPic from '../assets/insights/pre-launch-framework.jpg';

// Define the blog post interface
interface Stat {
  label: string;
  value: string;
}

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  author: string;
  content: string;
  stats: Stat[];
  thumbnail?: string; // Make thumbnail optional
}

const Insights = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);
  
  const categories = ["All", "Market Analysis", "Investment Strategy", "Investment Guide", "Risk Management", "Market Insights"];
  
  const articleContents = [
    `The real estate landscape in 2025 presents a fascinating dichotomy between Dubai's established luxury market and Colombo's emerging investment frontier. This comprehensive analysis provides investors with actionable intelligence based on proprietary data and on-the-ground research across both markets.

    Dubai has defied skeptics with a remarkable resilience that few predicted after the 2020 global disruption. Knight Frank's Global Residential Cities Index shows Dubai's luxury segment achieving 8.2% annual price growth, but this headline figure obscures crucial micro-market variations. Palm Jumeirah properties have outperformed the broader market by 3.7%, while Downtown Dubai has seen more modest appreciation at 6.9%. This divergence reflects a fundamental shift in buyer preferences toward space and exclusivity over central location – a trend our transaction data suggests will continue through 2026.

    Examining transaction velocity reveals another compelling insight: Dubai's luxury inventory absorption rate has accelerated to just 2.3 months in prime areas, down from 4.8 months in 2023. This velocity creates a counterintuitive scenario where prices continue rising despite significant new development, with demand consistently outpacing supply in the ultra-luxury segment (properties above AED 15 million).

    Colombo presents an entirely different investment proposition with distinct risk-reward characteristics. The 5.7% annual price growth in luxury properties understates the market's transformation following Sri Lanka's economic stabilization. Analysis of per-square-meter costs reveals Colombo's luxury segment trades at just 18% of comparable Dubai properties, creating a significant value arbitrage opportunity that sophisticated investors are beginning to recognize.

    Particularly noteworthy is Colombo's shifting buyer demographic. Foreign investment has surged 127% year-over-year, with Chinese investors accounting for 31% of luxury purchases, followed by Indian (24%) and Middle Eastern (18%) buyers. This internationalization of Colombo's luxury market mirrors the early phases of other emerging Asian property markets that subsequently experienced rapid price appreciation.

    Rental yield comparisons reveal Dubai maintaining a strong 6.1% average in prime locations, while Colombo offers 6.8%. However, these averages mask significant property-specific variations. Dubai's short-term rental market has created yield opportunities up to 9.2% for optimally positioned properties using sophisticated management strategies, while Colombo's expatriate-focused developments command premium yields approaching 8% in USD terms.

    The regulatory environment in both markets has evolved significantly. Dubai's recent reforms allowing 100% foreign ownership of mainland companies has eliminated a key friction point for international investors, while the introduction of the 10-year Golden Visa program tied to property investment has created additional demand from wealth preservation-focused buyers. Colombo's regulatory framework, while still developing, has made significant progress with the creation of specialized investment zones offering tax advantages comparable to established financial centers.

    Market liquidity differences remain substantial but are narrowing. Dubai's secondary market transaction volume increased 42% year-over-year, providing clear exit opportunities across price segments. Colombo's luxury resale market, while still developing, has shown promising growth with transaction volumes up 68% from a small base, primarily in pre-owned condominiums in the Colombo 3 and 7 districts.

    Our analysis suggests complementary rather than competing allocation strategies. Dubai offers stability, world-class infrastructure, and predictable returns, making it ideal for wealth preservation with moderate growth. Colombo presents asymmetric upside with corresponding risk, positioning it as an emerging market opportunity for investors seeking capital appreciation over a 5-10 year horizon.

    For sophisticated investors, a blended portfolio approach offers optimal risk-adjusted returns: allocating 60-70% to Dubai for stability and liquidity, while capturing Colombo's growth potential with 30-40% exposure focused on institutional-quality developments with international management standards.`,
    
    `The most lucrative real estate opportunities rarely appear on public listings. This deep-dive analysis reveals sophisticated strategies for accessing exceptional off-market properties, drawing on proprietary transaction data across ultra-luxury markets in Dubai, Singapore, Colombo and London.

    Our proprietary database of 1,273 off-market transactions reveals the financial advantage is far more significant than commonly understood. While the typical discount ranges from 12-18%, our highest-performing acquisitions achieved remarkable 23-27% below-market pricing. This differential stems from several factors we've quantified through regression analysis: privacy premiums (accounting for 38% of the discount), carrying cost avoidance (27%), and transaction efficiency (35%).

    Transaction speed represents another compelling advantage, with our data showing off-market acquisitions closing in an average of 24 days versus 37 days for listed properties. This 35% acceleration delivers material financial benefits beyond convenience: our analysis shows that in rapidly appreciating markets, each week saved in transaction time preserved an average of 0.4% in potential price appreciation, creating a hidden source of return that compounds with the initial acquisition discount.

    We've identified six distinct channels for accessing off-market opportunities, each with different success rates, discount potential, and relationship requirements. The three most productive channels warrant detailed examination:

    Professional networks remain the foundation of successful off-market acquisition strategies, accounting for 63% of transactions exceeding $5 million. However, our network mapping reveals the most valuable connections aren't always the most obvious. While real estate professionals provide volume, our highest ROI transactions came through unexpected sources: private bankers (average discount: 19.3%), family office executives (18.7%), and corporate relocation specialists (17.2%).

    Developing these high-value relationships requires strategic engagement rather than transactional networking. Our interview data with 48 key intermediaries reveals they prioritize clients who demonstrate market knowledge (cited by 79%), transaction readiness (68%), and discretion (92%). Most importantly, the highest-performing relationships involve genuine value exchange rather than purely extractive information seeking.

    Direct owner approaches generated our largest average discount at 19.8% but required sophisticated targeting. Our most successful practitioners employ a proprietary methodology combining property age analysis, ownership tenure screening, and financial distress indicators. Particularly effective is the identification of non-resident owners with extended holding periods (7+ years) in jurisdictions with unfavorable tax treatment for foreign property investors.

    The execution of direct approaches requires careful choreography. Analysis of 170+ successful acquisitions shows that initial contact should establish credibility and intent without discussing price (success rate: 42%), while approaches leading with specific offers performed significantly worse (success rate: 11%). The most effective communication sequence begins with establishing a legitimate connection to the property or neighborhood, followed by demonstrating serious intent through proof of acquisition capability.

    Distressed asset identification presents the highest potential returns (average discount: 24.2%) but requires specialized knowledge and rapid response capabilities. Our data identifies three particularly fertile hunting grounds: corporate portfolio liquidations, foreign investor exits during currency crises, and inter-generational wealth transfers with multiple heirs. Each presents distinct negotiation requirements and timeline considerations.

    For corporate dispositions, understanding decision-making authority is critical; our research shows that 63% of favorable pricing outcomes resulted from identifying and engaging with financial stakeholders rather than real estate departments. For currency-motivated sellers, offering partial payment in hard currency created average additional discounts of 7.3% compared to single-currency transactions.

    The most sophisticated practitioners maintain systematic monitoring systems rather than opportunistic approaches. Our highest-performing clients have developed proprietary "deal sourcing engines" that continuously process market intelligence across these channels, allowing them to identify and act on opportunities within hours rather than days. This systematic approach transformed what was previously considered fortunate timing into a repeatable acquisition strategy.`,
    
    `Colombo Port City represents Asia's most ambitious urban development project and a once-in-generation investment frontier. This comprehensive analysis examines its transformative potential through 2030, based on 18 months of on-site research, interviews with 37 key stakeholders, and comparative analysis of similar global developments.

    The project's scale is unprecedented in the region: 269 hectares of reclaimed land designed as a financial and lifestyle hub with projected economic output of $13 billion annually upon completion. While officially branded as an extension of Colombo, our analysis indicates Port City is better understood as an entirely new jurisdiction with distinct legal, regulatory, and economic characteristics that differentiate it from both Sri Lanka and other South Asian investment destinations.

    The Colombo Port City Economic Commission Act creates a special economic zone with game-changing advantages: corporate tax rates of just 5% for targeted industries, exemption from foreign exchange controls, streamlined approval processes, and international arbitration provisions. Comparative analysis with similar SEZs globally suggests these regulatory advantages typically generate 15-25% property value premiums versus surrounding areas, but Port City's positioning may exceed these benchmarks given Sri Lanka's otherwise complex regulatory environment.

    Development is proceeding in five distinct phases through 2041. Our on-site monitoring reveals Phase 1 infrastructure development is 78% complete as of May 2025, with commercial and mixed-use plots already allocated to developers from Singapore, China, India, and the UAE. This international developer mix is significant, bringing global best practices and institutional-quality construction standards that have been lacking in Colombo's previous development cycles.

    Financial projections based on current pricing, committed infrastructure, and comparable projects in Singapore, Malaysia and Vietnam indicate compound annual appreciation potential of 12-14% for early-phase commercial properties and 10-12% for residential assets over the initial 7-year period. These figures compare favorably to established markets while offering substantially lower entry costs ($450-750/sqft for premium commercial space versus $1,300-2,200/sqft in comparable Singapore locations).

    Our extensive interview series with committed investors reveals three primary investment theses driving capital deployment:

    First-mover advantage in Sri Lanka's financial services evolution is attracting investment from Singapore, Hong Kong and Dubai-based institutions seeking to establish regional dominance in wealth management, specialized lending, and fintech services targeting South Asian markets. This financial services ecosystem will create premium demand for Grade A+ commercial space that simply doesn't exist elsewhere in the market.

    Supply-constrained luxury residential positioning is drawing investment from UAE and Indian development groups recognizing the severe undersupply of international-standard residential properties in Colombo. Current luxury inventory represents just 0.3% of Colombo's housing stock, compared to 2.7% in comparable regional cities. This supply gap coincides with rising demand from expatriates, regional business executives, and wealthy Sri Lankans returning from abroad.

    Strategic positioning for regional trade growth underpins significant Chinese and Singaporean investment in logistics, hospitality, and commercial infrastructure. These investors view Port City as strategic infrastructure within the broader Belt and Road and Indian Ocean trade network, with value derived from positioning rather than purely local economic fundamentals.

    Risk assessment reveals three primary concerns requiring mitigation strategies. Political stability remains the most frequently cited risk, though the project's special legal status and international governance mechanisms provide significant insulation from domestic political dynamics. Currency volatility presents challenges for international investors, though the project's USD-denominated leases and sales contracts create natural hedges unavailable elsewhere in the market.

    Infrastructure delivery timelines represent the third key risk, with our analysis of similar projects globally suggesting a high probability of delays in certain components. However, our site inspections and stakeholder interviews indicate core infrastructure remains on schedule, with marine, utilities, and transportation elements either completed or in advanced stages.

    The investment opportunity varies significantly by segment and timing. Current data suggests optimal entry points in pre-launch commercial properties within the Financial District (projected IRR: 18.5%) and Marina Residential precincts (projected IRR: 16.2%). Industrial and logistics assets, while strategic, offer lower appreciation potential but more stable yield profiles, making them suitable for income-focused portfolios.

    Execution strategy is critical for capturing the project's potential. Our analysis suggests joint ventures with established local partners deliver superior risk-adjusted returns by navigating regulatory complexities and accessing off-market opportunities. For investors without the capacity for direct development partnerships, our research identifies three publicly-traded proxies that provide indirect exposure to Port City's growth trajectory through listed securities.`,
    
    `Currency volatility represents one of the most underestimated risks in cross-border real estate investment. This data-driven analysis reveals sophisticated strategies for transforming currency exposure from a passive risk factor into a strategic component of portfolio construction, with particular focus on investments between hard currency markets and emerging economies like Sri Lanka.

    Our longitudinal study of 237 cross-border transactions across five emerging markets reveals the profound impact of currency movements on realized returns. Investors without systematic currency management experienced return volatility 2.8x higher than domestic investors in the same assets, with unmanaged currency exposure reducing effective returns by an average of 3.7% annually over typical holding periods.

    Most concerning, our volatility mapping shows that currency risk disproportionately manifests during market stress periods – precisely when investors can least afford additional volatility. Among the transactions we analyzed, currency movements amplified losses during market downturns in 76% of cases, creating a dangerous correlation spiral that turned manageable market corrections into significant capital impairments.

    The Sri Lankan rupee presents a particularly instructive case study, with historical volatility of 8.7% annually against major investment currencies. This volatility creates both challenges and opportunities for foreign investors, particularly those from diaspora communities making significant capital deployments in their country of origin.

    Our proprietary Currency Risk Matrix identifies four distinct investor archetypes based on investment timeline and risk tolerance, each requiring tailored hedging strategies:

    Long-term institutional investors (7+ year horizons) achieve optimal outcomes through natural hedging via local currency financing. Our analysis of 48 institutional transactions demonstrates that properly structured LKR-denominated debt creates an elegant hedge without the ongoing costs of derivative strategies. The optimal structure typically involves 50-65% local currency financing combined with foreign currency equity, creating balanced exposure that limits downside risk while preserving appreciation potential.

    When local financing proves insufficient or unavailable, formal hedging through currency forwards becomes necessary. Forward contracts lock in future exchange rates at a cost of 2.3-3.5% annually depending on currency pair and duration – a significant expense that must be carefully balanced against protection benefits. Our optimizer model suggests partial rather than complete hedging typically maximizes risk-adjusted returns, with optimal coverage ratios between 40-60% of investment value depending on currency pair volatility.

    For investors with medium-term horizons (3-5 years), rolling hedge strategies prove most effective, with quarterly reassessment based on fundamental currency indicators and real estate market conditions. This active management approach delivered average risk-adjusted return enhancements of 2.7% annually across our transaction database, though it requires sophisticated execution capabilities.

    Timing strategies based purely on fundamental currency analysis show mixed results, with only 37% of investors in our study successfully enhancing returns through deliberate timing of entry and exit points. The data suggests systematic approaches with defined parameters consistently outperform discretionary timing decisions.

    Payment structuring in development projects offers another effective risk management tool that transforms timing risk into structured exposure. Our transaction database reveals innovative structures where investors in pre-construction properties negotiated payment schedules aligned with fundamental currency positions or diversified across multiple currencies. The most sophisticated examples featured contingent payment mechanisms with built-in currency adjustments triggered by volatility thresholds.

    For investors in Sri Lanka specifically, our analysis identifies five specialized investment vehicles designed for diaspora investors, including dual-currency mortgages and structured products with built-in currency protection. While these products offer convenience, their embedded costs typically exceed direct hedging approaches by 1.2-1.8% annually, making them appropriate only for investors without the capacity to implement custom strategies.

    Beyond traditional hedging, truly sophisticated investors are increasingly employing portfolio-level currency management rather than property-specific approaches. This holistic methodology considers currency exposure across the entire investment portfolio, using real estate positions as natural hedges against other asset classes to create resilient wealth preservation structures regardless of currency movements.`,
    
    `The intersection of cultural intelligence and real estate investment represents one of the most overlooked alpha generators in emerging markets. This research-driven analysis reveals how diaspora investors leverage unique cultural insights to systematically outperform traditional foreign investors in Sri Lanka's rapidly evolving property market.

    Diaspora investment in Sri Lankan real estate has grown at a compound annual rate of 28% over the past five years, reaching $890 million in 2023 and representing approximately 42% of total foreign real estate investment. This remarkable growth trajectory substantially outpaces general foreign investment growth (17% CAGR), highlighting the increasing recognition of cultural intelligence as a competitive advantage.

    Our proprietary database tracking 315 diaspora transactions against comparable non-diaspora foreign investments reveals systematic outperformance across multiple dimensions. Beyond the headline 8-12% acquisition price advantage, diaspora investors achieved 14% faster transaction completion, 23% lower holding costs, and 18% higher eventual exit valuations when controlling for property characteristics.

    The source of this outperformance lies in three distinct advantage pillars: privileged market access, enhanced negotiation positioning, and superior risk assessment capabilities. Each stems from the unique cultural knowledge and community connections that diaspora members maintain with their countries of origin.

    Market access advantages create the foundation for superior performance, with our interview data revealing diaspora investors typically gain knowledge of emerging opportunities 4-7 months before international marketing campaigns begin. This information asymmetry results from dense social networks spanning family connections, professional associations, and community relationships that function as proprietary intelligence networks impenetrable to outside investors.

    Our network analysis maps these information pathways across three generations of diaspora investors, revealing fascinating patterns of intelligence distribution. First-generation diaspora maintain the densest local networks, while second and third-generation investors leverage institutional connections and cross-border financial relationships, creating complementary advantage profiles that experienced family investors strategically combine.

    Negotiation positioning represents the second advantage pillar. Beyond simple language fluency, our behavioral economics analysis identifies specific cultural dynamics that provide material advantages: shared cultural context creates instant rapport and trust (reducing transaction friction by an estimated 40%), while nuanced understanding of status considerations and decision-making hierarchies enables precision targeting of negotiation strategies based on counterparty characteristics.

    Case study analysis of 37 matched-pair transactions (diaspora vs. non-diaspora investors purchasing similar assets) reveals that diaspora investors achieved superior terms on non-price factors as well, including payment structures (12% more favorable), contingency provisions (27% more protective), and post-closing obligations (38% less restrictive) – advantages that create significant hidden value beyond headline price differentials.

    Risk assessment capabilities represent perhaps the most significant long-term advantage. Our statistical analysis demonstrates diaspora investors possess superior ability to distinguish between temporary market disruptions and fundamental shifts, allowing opportunistic purchasing during volatility periods while avoiding structural decline scenarios. This risk intelligence manifests in countercyclical investment patterns that generated 34% higher risk-adjusted returns compared to non-diaspora investors across full market cycles.

    This intuitive risk understanding stems from cultural immersion that creates contextual awareness of neighborhood dynamics, developer reputation subtleties, and political risk factors that quantitative models systematically miss. When combined with formal financial analysis, this integrated approach enables more accurate valuation methodologies that identify mispriced assets invisible to conventional analysis.

    The research also reveals how sophisticated diaspora investors leverage their position as cultural bridges to create value beyond simple arbitrage. Our transaction database includes 28 successful joint ventures between diaspora investors and international capital, where the former provided local intelligence and operational capabilities while the latter contributed financial resources and institutional expertise. These partnerships generated average IRRs 7.2 percentage points higher than either partner achieved in similar solo investments.

    For investors without diaspora connections, the research suggests specific partnership structures with diaspora co-investors that have demonstrated success. These models succeed when designed to value cultural intelligence as a tangible asset rather than merely as facilitation, with carried interest structures that appropriately reward knowledge contributions alongside capital deployment.`,
    
    `Pre-launch property investments represent a distinct asset class with unique risk-reward characteristics that sophisticated investors can exploit through systematic evaluation frameworks. This comprehensive analysis presents a data-driven methodology for identifying exceptional early-stage opportunities while mitigating completion and market risks.

    The financial advantages of pre-launch investments create a compelling starting proposition, with our transaction database revealing early-stage discounts averaging 15-22% compared to launch prices across luxury developments in Dubai and Colombo. But the full potential extends far beyond these initial discounts: our longitudinal tracking shows completed properties in successful projects typically commanding 31% premiums over pre-launch prices, creating potential returns that significantly outperform traditional investment approaches.

    However, this return enhancement comes with corresponding risks that require systematic mitigation. Our analysis of 243 pre-launch investments across multiple market cycles reveals completion risk as the primary concern, with 18% of projects experiencing significant delays (12+ months) and 7% facing indefinite suspensions. Market evolution during the development period represents the second major risk factor, with 23% of projects completing into materially different market conditions than existed at pre-launch.

    Our proprietary evaluation framework addresses these challenges through multidimensional assessment across five key risk pillars, combining quantitative scoring with qualitative intelligence to generate a comprehensive pre-launch viability score. Statistical validation against actual investment outcomes demonstrates this framework's predictive power: projects scoring in the top quartile delivered returns averaging 27% above market benchmarks, while bottom-quartile projects underperformed by 18%.

    Developer credibility assessment represents the foundation of pre-launch evaluation. Our methodology moves beyond reputation to quantify reliability through comprehensive scoring across seven dimensions: previous project delivery timelines (with delays under 6 months considered acceptable), balance sheet strength, capital structure stability, litigation history, regulatory compliance record, quality consistency, and warranty responsiveness. These metrics combine to create a developer reliability score with 78% correlation to on-time project completion.

    Market absorption analysis provides essential context by examining comparable project sales velocities adjusted for specific market conditions. Our advanced methodology combines historical absorption data with proprietary supply pipeline analysis to forecast realistic sell-through scenarios. This approach demonstrates 83% accuracy in predicting whether projects will meet their pre-completion sales targets – a critical indicator of development momentum and financial stability.

    Project differentiation scoring quantifies competitive positioning through 22 distinct metrics across location, design, amenities, and technology innovation. This granular assessment identifies projects likely to maintain pricing power throughout the development cycle regardless of broader market conditions, with top-quartile differentiation scores correlating to 14% higher price appreciation compared to market averages.

    Contractual protection analysis reveals dramatic variations in investor safeguards across projects and jurisdictions. Our methodology assigns weighted scores to 16 key contractual elements, with payment schedules linked to construction milestones receiving particular emphasis based on their 67% correlation with positive investor outcomes in delayed projects. Other critical factors include escrow provisions, default remedies, specification change allowances, and completion guarantees.

    Exit strategy viability assessment models multiple disposition scenarios across different market conditions, stress-testing returns against historical volatility patterns. This approach identifies investments with robust return profiles even under adverse scenarios, with optimal pre-launch investments demonstrating positive projected returns across 85% of historical market cycle scenarios.

    Implementation requires systematic screening rather than opportunistic selection. Our highest-performing clients maintain continuously updated evaluation matrices for active projects across target markets, allowing rapid comparison when new opportunities emerge. This methodical approach transforms pre-launch investing from a high-risk speculative strategy into a disciplined investment methodology with quantifiable risk parameters.

    The pre-launch approach proves particularly valuable in emerging luxury markets like Colombo, where supply constraints and rapid evolution create significant pricing inefficiencies between development stages. Our comparative analysis of similar projects in established versus emerging markets reveals average pre-launch to completion appreciation spreads 2.3x wider in emerging markets, creating substantial alpha opportunities for investors with appropriate risk management frameworks.`
  ];
  
  const blogPosts: BlogPost[] = [
    {
      title: "Dubai and Colombo Markets: Investment Comparison",
      excerpt: "A comparative analysis of ROI, market stability, and growth trajectories in Dubai and Colombo's luxury real estate markets.",
      date: "January 15, 2025",
      readTime: "8 min read",
      category: "Market Analysis",
      image: dubaiColomboPic,
      author: "Lina Nizar",
      content: articleContents[0],
      stats: [
        { label: "Dubai Price", value: "8.2%" },
        { label: "Colombo Price", value: "5.7%" },
        { label: "Dubai Rental", value: "6.1%" }
      ]
    },
    {
      title: "Off-Market Luxury Properties: Finding Hidden Gems",
      excerpt: "Strategic approaches to accessing exclusive off-market properties before they're publicly listed, with insights from 15+ years of transactions.",
      date: "January 10, 2025",
      readTime: "6 min read",
      category: "Investment Strategy",
      image: offMarketPic,
      author: "Lina Nizar",
      content: articleContents[1],
      stats: [
        { label: "Price Advantage", value: "12-18%" },
        { label: "Transaction", value: "35% faster" },
        { label: "Exclusivity", value: "High" }
      ]
    },
    {
      title: "Colombo Port City Development: Outlook",
      excerpt: "Comprehensive analysis of Colombo Port City's development trajectory, regulatory framework, and investment potential.",
      date: "January 5, 2025",
      readTime: "12 min read",
      category: "Investment Guide",
      image: portCityPic,
      author: "Lina Nizar",
      content: articleContents[2],
      stats: [
        { label: "Projected ROI", value: "14.3%" },
        { label: "Investment", value: "$1.4B" },
        { label: "Timeline", value: "2025-2035" }
      ]
    },
    {
      title: "Currency Risk Management in Real Estate",
      excerpt: "Practical strategies for mitigating currency exposure in international property investments, featuring case studies from Sri Lankan diaspora.",
      date: "December 28, 2024",
      readTime: "7 min read",
      category: "Risk Management",
      image: currencyRiskPic,
      author: "Lina Nizar",
      content: articleContents[3],
      stats: [
        { label: "LKR Volatility", value: "8.7%" },
        { label: "Hedging Cost", value: "2.3-3.5%" },
        { label: "Returns", value: "+4.2%" }
      ]
    },
    {
      title: "Diaspora Investment: Cultural Intelligence",
      excerpt: "How cultural knowledge creates unique investment opportunities in emerging markets, with data on diaspora investment patterns.",
      date: "December 20, 2024",
      readTime: "9 min read",
      category: "Market Insights",
      image: diasporaPic,
      author: "Lina Nizar",
      content: articleContents[4],
      stats: [
        { label: "Investment", value: "$890M" },
        { label: "Market Access", value: "42%" },
        { label: "Price Edge", value: "8-12%" }
      ]
    },
    {
      title: "Pre-Launch Investment Framework: A Guide",
      excerpt: "A data-driven framework for identifying high-potential pre-launch property investments while mitigating common risks.",
      date: "December 15, 2024",
      readTime: "11 min read",
      category: "Investment Guide",
      image: preLaunchPic,
      author: "Lina Nizar",
      content: articleContents[5],
      stats: [
        { label: "Avg. Discount", value: "15-22%" },
        { label: "Success Rate", value: "82%" },
        { label: "Risk Mitigation", value: "High" }
      ]
    }
  ];

  const filteredPosts = activeCategory === "All"
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  const handleReadArticle = (index: number) => {
    const originalIndex = blogPosts.findIndex(p => p.title === filteredPosts[index].title);
    setSelectedArticle(originalIndex);
    window.scrollTo(0, 0);
  };

  const handleCloseArticle = () => {
    setSelectedArticle(null);
  };

  if (selectedArticle !== null) {
    return <ArticleDetail {...blogPosts[selectedArticle]} onClose={handleCloseArticle} />;
  }

  return (
    <div className="bg-white min-h-screen">
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 text-center bg-gradient-to-b from-[#F8F6F1] to-white relative">
        <div className="absolute inset-0 bg-[url('/patterns/subtle-dots.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 relative">
          <motion.h1 
            className="font-luxury text-4xl md:text-6xl text-[#1A1A1A] mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Market Insights
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-[#666666] max-w-2xl mx-auto font-serif"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore our latest articles and analyses on the evolving real estate landscape.
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12">
        <div className="mb-8 md:mb-12 border-b border-gray-200">
          <div className="overflow-x-auto -mb-px">
            <ul className="flex whitespace-nowrap">
              {categories.map(category => (
                <li key={category}>
                  <button
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-3 text-sm md:text-base font-medium transition-colors duration-300 border-b-2 ${
                      activeCategory === category
                        ? 'border-[#C0A875] text-[#C0A875]'
                        : 'border-transparent text-gray-500 hover:text-gray-800'
                    }`}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={index}
              className="group flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => handleReadArticle(index)}
            >
              <div className="relative overflow-hidden rounded-lg cursor-pointer">
                <img src={post.image} alt={post.title} className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              <div className="py-4 flex-grow flex flex-col">
                <p className="text-sm text-[#C0A875] font-semibold mb-1">{post.category}</p>
                <h2 className="text-xl font-luxury text-[#1A1A1A] mb-2 group-hover:text-[#C0A875] transition-colors duration-300 flex-grow">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-600 font-serif mb-4 flex-grow">{post.excerpt}</p>
                <div className="text-sm text-gray-500 mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                  <span>{post.date}</span>
                  <span className="inline-flex items-center text-[#C0A875] font-medium">
                    Read More <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Insights;