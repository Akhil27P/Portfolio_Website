import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./components/ui/card";
import { Switch } from "./components/ui/switch";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import { Copy } from "lucide-react";

export default function Portfolio() {
  const [url, setUrl] = useState("https://akhil27p.github.io/Portfolio_Website/");
  const [slug, setSlug] = useState("xyz123");
  const [custom, setCustom] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  const handleShorten = () => {
    const generatedSlug = Math.random().toString(36).substring(2, 7);
    setSlug(custom ? slug : generatedSlug);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(`${window.location.origin}/${slug}`);
    setCopied(true);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-10 p-6 bg-gradient-to-br from-gray-900 to-black text-white">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-4 w-full max-w-md"
      >
        <Input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Paste your long URL"
          className="rounded-xl text-black"
        />

        <div className="flex items-center justify-between">
          <Switch checked={custom} onCheckedChange={setCustom} />
          <span className="text-sm text-gray-400">Custom slug</span>
        </div>

        {custom && (
          <Input
            type="text"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            placeholder="Enter custom slug"
            className="rounded-xl text-black"
          />
        )}

        <Button
          onClick={handleShorten}
          className="w-full bg-white text-black hover:bg-gray-300 transition-all rounded-xl"
        >
          Shorten
        </Button>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: slug ? 1 : 0 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex items-center gap-2 p-4 bg-gray-800 rounded-xl justify-between"
        >
          <span className="truncate">{`${window.location.origin}/${slug}`}</span>
          <Button size="icon" variant="ghost" onClick={handleCopy} className="hover:text-green-400">
            <Copy className="w-5 h-5" />
          </Button>
        </motion.div>

        {copied && <span className="text-green-400 text-sm text-center">Copied!</span>}
      </motion.div>
    </main>
  );
}
