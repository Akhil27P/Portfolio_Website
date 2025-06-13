import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";

const sneakers = [
  {
    id: 1,
    name: "Classic Dunk Low",
    imageUrl: "https://images.unsplash.com/photo-1600185363769-d5978f03e10e?auto=format&fit=crop&w=400&q=80",
    releaseDate: "2024-01-15",
    link: "https://dunks1980.com/classic-low",
  },
  {
    id: 2,
    name: "Retro Dunk High",
    imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80",
    releaseDate: "2023-11-10",
    link: "https://dunks1980.com/retro-high",
  },
  {
    id: 3,
    name: "Vintage Dunk SB",
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80",
    releaseDate: "2022-09-22",
    link: "https://dunks1980.com/vintage-sb",
  },
  // Add more sneaker items here
];

export default function Portfolio() {
  const [selectedId, setSelectedId] = useState(null);
  const selectedSneaker = sneakers.find((s) => s.id === selectedId);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-12 select-none">Sneaker Gallery</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {sneakers.map(({ id, name, imageUrl }) => (
          <motion.div
            key={id}
            layoutId={`card-${id}`}
            className="relative cursor-pointer rounded-2xl overflow-hidden shadow-lg"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedId(id)}
            tabIndex={0}
            role="button"
            aria-label={`View details of ${name}`}
            onKeyDown={(e) => { if (e.key === "Enter") setSelectedId(id); }}
          >
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"
            >
              <span className="text-lg font-semibold">{name}</span>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Modal for Selected Sneaker */}
      <AnimatePresence>
        {selectedSneaker && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedId(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-modal="true"
            role="dialog"
            tabIndex={-1}
          >
            <motion.div
              className="bg-gray-900 rounded-3xl shadow-2xl max-w-xl w-full max-h-[90vh] overflow-auto select-none"
              layoutId={`card-${selectedSneaker.id}`}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedSneaker.imageUrl}
                alt={selectedSneaker.name}
                className="w-full rounded-t-3xl object-contain max-h-96"
              />
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-2">{selectedSneaker.name}</h2>
                <p className="mb-4 text-gray-400">Release Date: {selectedSneaker.releaseDate}</p>
                <Button
                  onClick={() => window.open(selectedSneaker.link, "_blank")}
                  className="w-full bg-white text-black hover:bg-gray-300 rounded-xl py-3 font-semibold"
                  aria-label={`View more details about ${selectedSneaker.name}`}
                >
                  View More
                </Button>
                <Button
                  variant="ghost"
                  className="mt-3 w-full"
                  onClick={() => setSelectedId(null)}
                  aria-label="Close modal"
                >
                  Close
                </Button>
              </CardContent>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
