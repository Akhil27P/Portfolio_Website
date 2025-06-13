import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Switch } from "./components/ui/switch";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import { Copy } from "lucide-react";

export default function Portfolio() {
  const [url, setUrl] = useState(
    "https://akhil27p.github.io/Portfolio_Website/"
  );
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
    if (!url.trim()) return; // ignore empty URL

    const generatedSlug = Math.random().toString(36).substring(2, 7);
    const finalSlug = custom ? slug.trim() || generatedSlug : generatedSlug;

    // Load existing mappings
    const mappings = JSON.parse(localStorage.getItem("urlMappings") || "{}");

    // Check if custom slug is taken
    if (custom && mappings[finalSlug]) {
      alert("This custom slug is already in use. Please choose another one.");
      return;
    }

    // If auto-generated slug conflicts, regenerate
    if (!custom && mappings[finalSlug]) {
      let newSlug;
      do {
        newSlug = Math.random().toString(36).substring(2, 7);
      } while (mappings[newSlug]);
      setSlug(newSlug);
      mappings[newSlug] = url.trim();
      localStorage.setItem("urlMappings", JSON.stringify(mappings));
      setCopied(false);
      return;
    }

    // Save mapping
    mappings[finalSlug] = url.trim();
    localStorage.setItem("urlMappings", JSON.stringify(mappings));
    setSlug(finalSlug);
    setCopied(false);
  };

  const handleCopy = () => {
    const shortUrl = `${window.location.origin}${
      process.env.PUBLIC_URL || ""
    }/${slug}`;
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-12 p-8 bg-gradient-to-br from-gray-900 to-black text-white">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-5 w-full max-w-lg"
      >
        <h1 className="text-3xl font-semibold text-center mb-4">
          URL Shortener
        </h1>

        <Input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Paste your long URL"
          className="rounded-xl text-black"
          spellCheck={false}
          autoComplete="off"
        />

        <div className="flex items-center justify-between">
          <Switch checked={custom} onCheckedChange={setCustom} />
          <label className="text-sm text-gray-400 select-none cursor-pointer">
            Custom slug
          </label>
        </div>

        {custom && (
          <Input
            type="text"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            placeholder="Enter custom slug"
            className="rounded-xl text-black"
            spellCheck={false}
            autoComplete="off"
          />
        )}

        <Button
          onClick={handleShorten}
          className="w-full bg-white text-black hover:bg-gray-300 transition rounded-xl font-medium py-3"
          aria-label="Shorten URL"
        >
          Shorten
        </Button>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: slug ? 1 : 0 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex items-center gap-3 p-4 bg-gray-800 rounded-xl justify-between select-text"
        >
          <span className="truncate">{`${window.location.origin}${
            process.env.PUBLIC_URL || ""
          }/${slug}`}</span>
          <Button
            size="icon"
            variant="ghost"
            onClick={handleCopy}
            className="hover:text-green-400"
            aria-label="Copy shortened URL"
          >
            <Copy className="w-5 h-5" />
          </Button>
        </motion.div>

        {copied && (
          <span className="text-green-400 text-sm text-center font-semibold">
            Copied!
          </span>
        )}
      </motion.div>
    </main>
  );
}
