import { useState, useEffect } from "react";
import { Sparkles, RefreshCw, ShoppingBag, Lightbulb } from "lucide-react";

// --- GEMINI API UTILITY ---
const callGemini = async (prompt) => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  if (!apiKey) {
    console.error(
      "Gemini API key not found. Please add VITE_GEMINI_API_KEY to your .env file"
    );
    return "{}";
  }

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;

  const payload = {
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: {
      response_mime_type: "application/json",
    },
  };

  const delays = [1000, 2000, 4000];

  for (let i = 0; i < delays.length; i++) {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
      return text || "{}";
    } catch (error) {
      if (i === delays.length - 1) return "{}";
      await new Promise((resolve) => setTimeout(resolve, delays[i]));
    }
  }
};

// --- GEMINI AI COMPONENT (Mobile Optimized) ---
const GeminiInsights = ({ from, to, amount, convertedAmount }) => {
  const [insight, setInsight] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setInsight(null);
  }, [from, to]);

  const fetchInsight = async () => {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

    if (!apiKey || apiKey === "your_gemini_api_key_here") {
      setInsight({
        headline: "API Key Required 🔑",
        buy: "Add your Gemini API key to .env file to use AI insights",
        tip: "Check README.md for setup instructions",
      });
      return;
    }

    setLoading(true);
    const prompt = `
      Act as a savvy local travel guide. I have converted ${amount} ${from} to ${convertedAmount} ${to}.
      Return a JSON object with exactly these 3 keys (keep values short and punchy):
      1. "headline": A 3-5 word fun summary of this amount's value (e.g. "Tasty Snack Break 🍛").
      2. "buy": A realistic example of what this buys at average local street prices (e.g. "3 Chais + Bun Maska").
      3. "tip": A very short cultural money tip (max 10 words).
    `;

    const jsonString = await callGemini(prompt);
    try {
      const parsedData = JSON.parse(jsonString);
      setInsight(parsedData);
    } catch (e) {
      setInsight({
        headline: "Currency Insight",
        buy: "Analysis unavailable right now.",
        tip: "Keep small change handy!",
      });
    }
    setLoading(false);
  };

  return (
    <div className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 backdrop-blur-md border border-indigo-500/30 rounded-2xl p-5 md:p-6 shadow-xl relative overflow-hidden group">
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl group-hover:bg-indigo-500/30 transition-all"></div>

      <div className="flex items-center gap-2 mb-4 relative z-10">
        <Sparkles className="w-5 h-5 text-yellow-300 animate-pulse" />
        <h3 className="text-white font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-amber-400">
          Travel AI
        </h3>
      </div>

      {!insight && !loading && (
        <div className="text-center py-4">
          <p className="text-indigo-200/80 text-sm mb-4">
            Is this enough for dinner? Find out.
          </p>
          <button
            onClick={fetchInsight}
            className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold py-3 px-4 rounded-xl transition-all shadow-lg hover:shadow-indigo-500/25 active:scale-95 touch-manipulation"
          >
            <Sparkles className="w-4 h-4" />
            Scan Value
          </button>
        </div>
      )}

      {loading && (
        <div className="flex flex-col items-center justify-center py-8 space-y-3">
          <div className="w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-indigo-300 text-xs animate-pulse">
            Scanning local prices...
          </p>
        </div>
      )}

      {insight && (
        <div className="relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-500 grid gap-3">
          {/* 1. Headline Card */}
          <div className="bg-indigo-500/20 border border-indigo-400/20 rounded-lg p-3 text-center">
            <h4 className="text-xl font-bold text-white tracking-tight">
              {insight.headline}
            </h4>
          </div>

          {/* Mobile: Stack vertical. Desktop: Side-by-side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* 2. Buy Power Card */}
            <div className="bg-slate-900/60 rounded-lg p-3 border border-slate-700/50 flex flex-col items-center text-center gap-2">
              <div className="bg-green-500/20 p-2 rounded-full">
                <ShoppingBag className="w-4 h-4 text-green-400" />
              </div>
              <div>
                <span className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">
                  Buys You
                </span>
                <p className="text-sm font-medium text-slate-200 leading-tight mt-1">
                  {insight.buy}
                </p>
              </div>
            </div>

            {/* 3. Tip Card */}
            <div className="bg-slate-900/60 rounded-lg p-3 border border-slate-700/50 flex flex-col items-center text-center gap-2">
              <div className="bg-amber-500/20 p-2 rounded-full">
                <Lightbulb className="w-4 h-4 text-amber-400" />
              </div>
              <div>
                <span className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">
                  Pro Tip
                </span>
                <p className="text-sm font-medium text-slate-200 leading-tight mt-1">
                  {insight.tip}
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={fetchInsight}
            className="mt-2 w-full text-xs text-indigo-400 hover:text-white flex items-center justify-center gap-1 transition-colors py-3 hover:bg-white/5 rounded-lg touch-manipulation"
          >
            <RefreshCw className="w-3 h-3" /> Refresh Scan
          </button>
        </div>
      )}
    </div>
  );
};

export default GeminiInsights;
