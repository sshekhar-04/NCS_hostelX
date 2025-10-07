import React, { useEffect, useState } from "react";
const API_BASE = "http://localhost:4000";

const HOSTEL_OPTIONS = [
  "Boys Hostel",
  "Girls Hostel",
  "International Student Hostel"
];

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(false);

  // form state
  const [hostel, setHostel] = useState(HOSTEL_OPTIONS[0]);
  const [rating, setRating] = useState(5);
  const [text, setText] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    fetchReviews();
  }, []);

  useEffect(() => {
    if (!imageFile) {
      setPreview(null);
      return;
    }
    const url = URL.createObjectURL(imageFile);
    setPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [imageFile]);

  async function fetchReviews() {
    setLoading(true);
    try {
      const url = filter === "All"
        ? `${API_BASE}/api/reviews`
        : `${API_BASE}/api/reviews?hostel=${encodeURIComponent(filter)}`;
      const res = await fetch(url);
      const data = await res.json();
      setReviews(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!hostel || !rating) return alert("Please choose hostel and rating.");

    const formData = new FormData();
    formData.append("hostel", hostel);
    formData.append("rating", rating);
    formData.append("text", text);
    if (imageFile) formData.append("image", imageFile);

    try {
      const res = await fetch(`${API_BASE}/api/reviews`, {
        method: "POST",
        body: formData
      });
      if (!res.ok) {
        const err = await res.json();
        alert(err.error || "Failed to add review");
        return;
      }
      const created = await res.json();
      // add to top of list
      setReviews(prev => [created, ...prev]);
      // reset form
      setHostel(HOSTEL_OPTIONS[0]);
      setRating(5);
      setText("");
      setImageFile(null);
      setPreview(null);
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    }
  }

  function onFilterChange(e) {
    const val = e.target.value;
    setFilter(val);
    // fetch according to filter
    setTimeout(fetchReviews, 0);
  }

  return (
    <div className="min-h-screen p-6 bg-white/80 rounded-2xl">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">Student Reviews</h1>

      {/* Add Review Form */}
      <div className="bg-white shadow rounded-lg p-6 mb-6 max-w-3xl">
        <h2 className="text-xl font-semibold mb-3">Add Review</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium">Hostel</label>
              <select
                value={hostel}
                onChange={e => setHostel(e.target.value)}
                className="w-full mt-1 rounded-md border px-3 py-2"
              >
                {HOSTEL_OPTIONS.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div style={{width: 160}}>
              <label className="block text-sm font-medium">Rating</label>
              <select
                value={rating}
                onChange={e => setRating(Number(e.target.value))}
                className="w-full mt-1 rounded-md border px-3 py-2"
              >
                {[5,4,3,2,1].map(r => <option key={r} value={r}>{r} ★</option>)}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">Review</label>
            <textarea
              value={text}
              onChange={e => setText(e.target.value)}
              rows="4"
              className="w-full mt-1 rounded-md border px-3 py-2"
              placeholder="Write your review..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Image (optional)</label>
            <input
              type="file"
              accept="image/*"
              onChange={e => setImageFile(e.target.files?.[0] ?? null)}
            />
            {preview && (
              <img src={preview} alt="preview" className="mt-3 w-40 h-40 object-cover rounded" />
            )}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Add Review
            </button>
            <button
              type="button"
              onClick={() => { setHostel(HOSTEL_OPTIONS[0]); setRating(5); setText(""); setImageFile(null); setPreview(null); }}
              className="px-3 py-2 border rounded"
            >
              Reset
            </button>
          </div>
        </form>
      </div>

      {/* Filter */}
      <div className="flex items-center justify-between max-w-3xl mb-4">
        <div>
          <label className="text-sm font-medium mr-2">Filter:</label>
          <select value={filter} onChange={onFilterChange} className="rounded border px-3 py-2">
            <option value="All">All</option>
            {HOSTEL_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
          </select>
        </div>
        <div className="text-sm text-gray-600">{loading ? "Loading..." : `${reviews.length} review(s)`}</div>
      </div>

      {/* Reviews List */}
      <div className="space-y-4 max-w-3xl">
        {reviews.length === 0 && <div className="text-gray-600">No reviews yet.</div>}
        {reviews.map(r => (
          <div key={r.id} className="bg-white rounded-lg shadow p-4 flex gap-4">
            <div style={{width: 84}}>
              {r.imageUrl ? (
                <img
                  src={`${API_BASE}${r.imageUrl}`}
                  alt="uploaded"
                  className="w-20 h-20 object-cover rounded"
                />
              ) : (
                <div className="w-20 h-20 bg-gray-100 rounded flex items-center justify-center text-gray-400">No Image</div>
              )}
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">{r.hostel}</div>
                  <div className="text-sm text-yellow-600">{'★'.repeat(r.rating)}{'☆'.repeat(5-r.rating)}</div>
                </div>
                <div className="text-xs text-gray-500">{new Date(r.createdAt).toLocaleString()}</div>
              </div>
              <p className="mt-2 text-gray-700">{r.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
