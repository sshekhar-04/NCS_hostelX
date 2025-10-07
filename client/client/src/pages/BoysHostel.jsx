import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DEMO = {
  "1st Year": {
    ac: { total: 40, available: 10 },
    nonAc: { total: 60, available: 20 },
    status: "available",
    roomNumber: null,
  },
  "2nd Year": {
    ac: { total: 40, available: 8 },
    nonAc: { total: 60, available: 5 },
    status: "available",
    roomNumber: null,
  },
  "3rd Year": {
    ac: { total: 40, available: 0 },
    nonAc: { total: 60, available: 0 },
    status: "Waiting 10",
    roomNumber: null,
  },
  "4th Year": {
    ac: { total: 40, available: 0 },
    nonAc: { total: 60, available: 0 },
    status: "Full",
    roomNumber: null,
  },
};

const YEARS = ["1st Year", "2nd Year", "3rd Year", "4th Year"];

const ProgressBar = ({ total, available, label }) => {
  const used = Math.max(0, total - available);
  const usedPercent = total === 0 ? 0 : Math.round((used / total) * 100);
  const availPercent = total === 0 ? 0 : 100 - usedPercent;

  return (
    <div className="mb-3">
      <div className="flex justify-between text-sm mb-1">
        <div className="font-medium">{label}</div>
        <div className="text-gray-600">
          {available} / {total} available
        </div>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
        <div
          className="h-4 bg-blue-600"
          style={{ width: `${availPercent}%`, transition: "width 300ms" }}
        />
      </div>
      <div className="text-xs text-gray-500 mt-1">
        {usedPercent}% occupied • {availPercent}% available
      </div>
    </div>
  );
};

const BoysHostel = () => {
  const [selectedYear, setSelectedYear] = useState(null);
  const navigate = useNavigate();

  const data = selectedYear ? DEMO[selectedYear] : null;

  function toggleYear(year) {
    setSelectedYear(prev => (prev === year ? null : year));
  }

  function goToForm() {
    navigate("/apply-hostel");
  }

  return (
    <div className="min-h-screen p-6 bg-white/80 rounded-2xl">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">Boys Hostel — Details</h1>

      {/* Year checkboxes */}
      <div className="mb-4">
        <div className="text-sm font-semibold mb-2">Select Year</div>
        <div className="flex gap-4">
          {YEARS.map(y => (
            <label key={y} className="inline-flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedYear === y}
                onChange={() => toggleYear(y)}
                className="w-4 h-4"
              />
              <span className="select-none">{y}</span>
            </label>
          ))}
        </div>
      </div>

      {/* ✅ Apply button (now separate) */}
      <div className="mb-8">
        <button
          onClick={goToForm}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Apply for Hostel
        </button>
      </div>

      {/* Allotment process */}
      <div className="mb-6 bg-white shadow rounded-lg p-4">
        <h2 className="font-semibold mb-2">Hostel Allotment Process</h2>
        <p className="text-gray-700 text-sm">
          Students must submit the hostel application through the college portal. Allotment is made
          based on merit and availability. After allotment, students who have been allocated a room
          must collect the allotment letter from the college office and complete the necessary
          payment formalities within the stipulated timeframe.
        </p>
      </div>

      {/* Room Details and Allotment Status */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="font-semibold mb-3">Room Summary</h3>
          {data ? (
            <>
              <ProgressBar
                label="AC Rooms"
                total={data.ac.total}
                available={data.ac.available}
              />
              <ProgressBar
                label="Non-AC Rooms"
                total={data.nonAc.total}
                available={data.nonAc.available}
              />
            </>
          ) : (
            <div className="text-gray-600">Select a year to view room details.</div>
          )}
        </div>

        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="font-semibold mb-3">Allotment Status</h3>
          {data ? (
            <>
              <div className="mb-2">
                <span className="font-medium">Status: </span>
                <span
                  className={
                    data.status === "Booked"
                      ? "text-green-700 font-semibold"
                      : data.status === "Full"
                      ? "text-red-600 font-semibold"
                      : "text-yellow-600 font-semibold"
                  }
                >
                  {data.status}
                </span>
              </div>

              {data.status === "Booked" && (
                <div className="mb-2">
                  <div className="font-medium">Room Number:</div>
                  <div className="text-sm text-gray-800">{data.roomNumber}</div>
                  <div className="mt-2 text-sm text-gray-600">
                    Please collect your hostel allotment letter from the college office.
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="text-gray-600">Select a year to view status.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BoysHostel;
